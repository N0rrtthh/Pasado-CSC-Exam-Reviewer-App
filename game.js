/* Math Basics: explain-like-I'm-5 lessons and a game for the arithmetic behind the CSE-PPT.
   Each level: a few story slides with animated visuals, then 8 rounds with hearts, XP, and stars.
   The host app calls PasadoGame.init(ctx) and renders through the returned functions. */
(function (root) {
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
  const fr = (n, d) => { const g = gcd(n, d) || 1; n /= g; d /= g; return d === 1 ? String(n) : `${n}/${d}`; };
  const n$ = v => v.toLocaleString('en-US', { minimumFractionDigits: Number.isInteger(v) ? 0 : 2, maximumFractionDigits: 2 });
  const uniq = (ans, wrongs, fill) => { const out = [String(ans)]; for (const w of wrongs) { const s = String(w); if (out.length < 4 && !out.includes(s)) out.push(s); } let g = 0; while (out.length < 4 && g++ < 60) { const s = String(fill()); if (!out.includes(s)) out.push(s); } return out; };
  const near = (v, s = 3) => () => v + pick([-1, 1]) * R(1, s);

  /* ---------- visuals ---------- */
  const V = {
    pizza(n, k, o = {}) {
      const c = 60, r = 54, size = o.size || 150; let s = '';
      if (n === 1) s = `<circle class="sl ${k ? 'on' : ''}" cx="60" cy="60" r="${r}" style="--d:0ms"/>`;
      else for (let i = 0; i < n; i++) {
        const a0 = (-90 + i * 360 / n) * Math.PI / 180, a1 = (-90 + (i + 1) * 360 / n) * Math.PI / 180;
        const p = `M${c},${c} L${(c + r * Math.cos(a0)).toFixed(2)},${(c + r * Math.sin(a0)).toFixed(2)} A${r},${r} 0 ${360 / n > 180 ? 1 : 0} 1 ${(c + r * Math.cos(a1)).toFixed(2)},${(c + r * Math.sin(a1)).toFixed(2)} Z`;
        s += `<path class="sl ${i < k ? 'on' : ''}" d="${p}" data-s="${i}" style="--d:${i * 70}ms"/>`;
      }
      return `<svg class="pz${o.tap ? ' tap' : ''}" viewBox="0 0 120 120" width="${size}" height="${size}" role="img" aria-label="Pizza cut into ${n} equal slices, ${k} shaded">${s}</svg>`;
    },
    bars(rows) {
      return `<div class="fbars">${rows.map(([n, k], ri) => `<div class="fbar"><div class="segs">${Array.from({ length: n }, (_, i) => `<span class="${i < k ? 'on' : ''}" style="--d:${ri * 220 + i * 50}ms"></span>`).join('')}</div><b>${k}/${n}</b></div>`).join('')}</div>`;
    },
    grid(k) {
      return `<div class="g100" role="img" aria-label="${k} of 100 squares shaded">${Array.from({ length: 100 }, (_, i) => `<span class="${i < k ? 'on' : ''}" style="--d:${i * 9}ms"></span>`).join('')}</div>`;
    },
    line(start, hops) {
      const end = hops.reduce((a, h) => a + h, start), lo = Math.min(start, end, 0), hi = Math.max(start, end) + 1, W = 300, step = (W - 20) / (hi - lo);
      const X = v => 10 + (v - lo) * step; let p = start, arcs = '';
      hops.forEach((h, i) => { const a = X(p), b = X(p + h), mid = (a + b) / 2, up = 26 + Math.min(18, Math.abs(h) * 3); arcs += `<path class="hop" d="M${a},40 Q${mid},${40 - up} ${b},40" style="--d:${i * 450}ms" pathLength="1"/><text class="hopl" x="${mid}" y="${34 - up}" style="--d:${i * 450 + 200}ms">${h > 0 ? '+' : '−'}${Math.abs(h)}</text>`; p += h; });
      const ticks = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i).filter(v => (hi - lo) <= 20 || v % 5 === 0).map(v => `<line x1="${X(v)}" x2="${X(v)}" y1="36" y2="44"/><text x="${X(v)}" y="58">${v}</text>`).join('');
      return `<svg class="nline" viewBox="0 0 ${W} 66" role="img" aria-label="Number line from ${start} to ${end}"><line class="axis" x1="6" x2="${W - 6}" y1="40" y2="40"/>${ticks}${arcs}<circle class="dotS" cx="${X(start)}" cy="40" r="5"/><circle class="dotE" cx="${X(end)}" cy="40" r="5" style="--d:${hops.length * 450}ms"/></svg>`;
    },
    column(a, b, op) {
      const A = String(a).split('').map(Number), B = String(b).split('').map(Number), L = Math.max(A.length, B.length) + (op === '+' ? 1 : 0);
      const pad = arr => Array(L - arr.length).fill(null).concat(arr), pa = pad(A), pb = pad(B);
      const res = String(op === '+' ? a + b : a - b).split('').map(Number), pr = pad(res);
      const marks = Array(L).fill(''), top = pa.slice();
      if (op === '+') { let carry = 0; for (let i = L - 1; i >= 0; i--) { const s = (pa[i] || 0) + (pb[i] || 0) + carry; carry = s >= 10 ? 1 : 0; if (carry && i > 0) marks[i - 1] = '1'; } }
      else { const t = pa.map(v => v || 0); for (let i = L - 1; i >= 0; i--) { if (t[i] < (pb[i] || 0)) { t[i] += 10; t[i - 1] -= 1; marks[i] = String(t[i]); marks[i - 1] = marks[i - 1] || String(t[i - 1]); top[i - 1] = { x: pa[i - 1] }; top[i] = { x: pa[i] }; } } }
      const order = i => (L - 1 - i) * 700;
      const cell = (v, cls = '', d) => `<span class="cc ${cls}"${d != null ? ` style="--d:${d}ms"` : ''}>${v == null ? '' : v}</span>`;
      return `<div class="colm" style="--cols:${L + 1}">
        ${cell('')}${marks.map((m, i) => cell(m, m ? 'mark pop' : '', order(i + (op === '+' ? 1 : 0)) + 300)).join('')}
        ${cell('')}${top.map(v => v && typeof v === 'object' ? cell(v.x, 'strike') : cell(v)).join('')}
        ${cell(op, 'op')}${pb.map(v => cell(v)).join('')}
        <span class="rule" style="grid-column:1/-1"></span>
        ${cell('')}${pr.map((v, i) => cell(i === 0 && v === 0 && L > 1 ? null : v, 'ans pop', order(i))).join('')}
      </div>`;
    },
    groups(a, b) { return `<div class="grps">${Array.from({ length: a }, (_, g) => `<div class="grp">${Array.from({ length: b }, (_, i) => `<i style="--d:${(g * b + i) * 60}ms"></i>`).join('')}</div>`).join('')}</div>`; },
    share(total, g) { const per = total / g; return `<div class="grps share">${Array.from({ length: g }, (_, gi) => `<div class="grp"><small>Friend ${gi + 1}</small>${Array.from({ length: per }, (_, i) => `<i style="--d:${(i * g + gi) * 90}ms"></i>`).join('')}</div>`).join('')}</div>`; },
    rect(l, w) {
      const c = 22, W = l * c, H = w * c;
      let s = '';
      for (let y = 0; y < w; y++) for (let x = 0; x < l; x++) s += `<rect class="rc" x="${x * c + 1}" y="${y * c + 1}" width="${c - 2}" height="${c - 2}" rx="3" style="--d:${(y * l + x) * 25}ms"/>`;
      return `<svg class="rgrid" viewBox="-22 -22 ${W + 30} ${H + 30}" width="${Math.min(300, W + 30)}" role="img" aria-label="Rectangle ${l} by ${w}"><rect class="rout" x="0" y="0" width="${W}" height="${H}" rx="4"/>${s}<text x="${W / 2}" y="-8" text-anchor="middle">${l}</text><text x="-10" y="${H / 2 + 4}" text-anchor="middle">${w}</text></svg>`;
    },
    scale(left, right) {
      return `<svg class="scale" viewBox="0 0 260 130" width="260" role="img" aria-label="Balance scale: ${left} balances ${right}"><path class="sc-post" d="M130 40 V118 M100 118 H160"/><g class="sc-beam"><path d="M30 40 H230"/><path d="M45 40 L30 78 H90 L75 40 M185 40 L170 78 H230 L215 40"/><rect x="18" y="78" width="84" height="30" rx="8"/><rect x="158" y="78" width="84" height="30" rx="8"/><text x="60" y="98" text-anchor="middle">${left}</text><text x="200" y="98" text-anchor="middle">${right}</text></g><circle class="sc-pin" cx="130" cy="40" r="6"/></svg>`;
    },
    coins(amount) {
      const pes = Math.floor(amount), cen = Math.round((amount - pes) * 100), parts = [];
      let p = pes; [[100, 'bill'], [50, 'bill'], [20, 'bill'], [10, 'coin'], [5, 'coin'], [1, 'coin']].forEach(([v, t]) => { while (p >= v) { parts.push({ l: '₱' + v, t }); p -= v; } });
      let c = cen; [25, 10, 5, 1].forEach(v => { while (c >= v) { parts.push({ l: v + '¢', t: 'cent' }); c -= v; } });
      return `<div class="coins">${parts.map((x, i) => `<span class="${x.t}" style="--d:${i * 80}ms">${x.l}</span>`).join('')}</div>`;
    }
  };

  /* ---------- typed column arithmetic: you enter each digit, right to left ---------- */
  const PLACE = ['ones', 'tens', 'hundreds', 'thousands', 'ten-thousands'];
  const digitsOf = n => String(n).split('').reverse().map(Number); // ones first
  function colAdd(a, b) {
    const A = digitsOf(a), B = digitsOf(b), n = Math.max(A.length, B.length), steps = [];
    let carry = 0;
    for (let i = 0; i < n; i++) {
      const s = (A[i] || 0) + (B[i] || 0) + carry;
      steps.push({ r: 'res', c: i, v: s % 10, say: `${PLACE[i]}: ${A[i] || 0} + ${B[i] || 0}${carry ? ' + the carried 1' : ''}. Type the digit that goes below.`, hint: `Add the digits in the ${PLACE[i]} column${carry ? ', plus the 1 you carried' : ''}. If the total is 10 or more, write only its last digit.` });
      carry = s >= 10 ? 1 : 0;
      if (carry && i < n - 1) steps.push({ r: 'carry', c: i + 1, v: 1, say: `That column made ${s}. What do you carry to the top of the ${PLACE[i + 1]} column?`, hint: `${s} is 1 ten and ${s % 10} ones. The ten moves up to the next column.` });
      else if (carry) steps.push({ r: 'res', c: n, v: 1, say: 'There’s a carry left and no column above it. What do you write in front?', hint: 'A leftover carry becomes the first digit of the answer.' });
    }
    return { kind: 'add', a, b, op: '+', n: n + 1, A, B, steps };
  }
  function colSub(a, b) {
    const A = digitsOf(a), B = digitsOf(b), n = A.length, tops = A.slice(), steps = [];
    for (let i = 0; i < n; i++) {
      let top = tops[i]; const bd = B[i] || 0;
      if (top < bd) {
        steps.push({ r: 'mark', c: i + 1, v: tops[i + 1] - 1, say: `${top} is smaller than ${bd}, so borrow from the ${PLACE[i + 1]} column. What does its ${tops[i + 1]} become?`, hint: 'Borrowing takes 1 away from the digit on the left and gives this column 10 more.' });
        tops[i + 1] -= 1; top += 10;
        steps.push({ r: 'res', c: i, v: top - bd, say: `${PLACE[i]}: ${top} − ${bd}. Type the digit.`, hint: `With the borrowed ten the top is ${top}. Take away ${bd}.` });
      } else {
        const v = top - bd;
        if (i === n - 1 && v === 0 && n > 1) continue;
        steps.push({ r: 'res', c: i, v, say: `${PLACE[i]}: ${top} − ${bd}. Type the digit.`, hint: 'Take the bottom digit away from the top digit.' });
      }
    }
    return { kind: 'sub', a, b, op: '−', n, A, B, steps };
  }
  function colMul(a, m) {
    const A = digitsOf(a), n = A.length, steps = [];
    let carry = 0;
    for (let i = 0; i < n; i++) {
      const p = A[i] * m + carry, nc = Math.floor(p / 10);
      steps.push({ r: 'res', c: i, v: p % 10, say: `${PLACE[i]}: ${A[i]} × ${m}${carry ? ` + the carried ${carry}` : ''}. Type the last digit.`, hint: `Multiply ${A[i]} by ${m}${carry ? `, then add the ${carry} you carried` : ''}. Write only the last digit of the result.` });
      if (nc && i < n - 1) steps.push({ r: 'carry', c: i + 1, v: nc, say: `That made ${p}. What do you carry to the top of the ${PLACE[i + 1]} column?`, hint: `${p} has ${nc} ten${nc > 1 ? 's' : ''}. The tens move up as the carry.` });
      else if (nc) steps.push({ r: 'res', c: n, v: nc, say: 'No columns are left. What do you write in front?', hint: 'The leftover carry goes at the front of the answer.' });
      carry = nc;
    }
    return { kind: 'mul', a, b: m, op: '×', n: n + 1, A, B: [m], steps };
  }
  function colDiv(a, d) {
    const D = String(a).split('').map(Number), steps = []; let r = 0, skipped = false;
    D.forEach((dg, j) => {
      const cur = r * 10 + dg, q = Math.floor(cur / d);
      if (j === 0 && q === 0 && D.length > 1) { r = cur; skipped = true; return; }
      steps.push({ r: 'quo', c: j, v: q, say: `${skipped && j === 1 ? `${D[0]} is smaller than ${d}, so use ${cur}. ` : ''}How many times does ${d} go into ${cur}?`, hint: `Think: ${d} times what is ${cur}, or just under it?` });
      r = cur - q * d;
      if (j < D.length - 1 && r > 0) steps.push({ r: 'rem', c: j + 1, v: r, say: `${d} × ${q} = ${q * d}. What is left over from ${cur}? It goes in front of the next digit.`, hint: `Take ${q * d} away from ${cur}.` });
    });
    return { kind: 'div', a, b: d, D, steps };
  }
  // Draw the column problem with what's been entered so far; `pos` is the step being asked.
  function renderCol(col, pos, wrong) {
    const done = col.steps.slice(0, pos), cur = col.steps[pos];
    const val = (r, c) => { const s = done.find(x => x.r === r && x.c === c); return s ? s.v : null; };
    const isCur = (r, c) => cur && cur.r === r && cur.c === c;
    const cell = (r, c, cls = '') => { const v = val(r, c), act = isCur(r, c); return `<span class="ci ${cls} ${act ? 'act' + (wrong ? ' no' : '') : ''} ${v != null ? 'got' : ''}">${v != null ? v : act ? '?' : ''}</span>`; };
    if (col.kind === 'div') {
      return `<div class="cin div" style="--cols:${col.D.length + 2}">
        <span class="ci"></span><span class="ci"></span>${col.D.map((_, j) => cell('quo', j, 'q')).join('')}
        <span class="ci dv">${col.b}</span><span class="ci br">)</span>${col.D.map((dg, j) => `<span class="ci dd">${val('rem', j) != null || isCur('rem', j) ? `<sup class="${isCur('rem', j) ? 'act' + (wrong ? ' no' : '') : ''}">${val('rem', j) != null ? val('rem', j) : '?'}</sup>` : ''}${dg}</span>`).join('')}
      </div>`;
    }
    const L = col.n, idx = Array.from({ length: L }, (_, k) => L - 1 - k);
    const borrowed = c => done.some(x => x.r === 'mark' && x.c === c);
    const gotTen = c => done.some(x => x.r === 'mark' && x.c === c + 1);
    return `<div class="cin" style="--cols:${L + 1}">
      <span class="ci"></span>${idx.map(c => cell(col.kind === 'sub' ? 'mark' : 'carry', c, 'sm')).join('')}
      <span class="ci"></span>${idx.map(c => { const d = col.A[c]; if (d == null) return '<span class="ci"></span>'; return `<span class="ci ${borrowed(c) ? 'strike' : ''}">${gotTen(c) ? '<sup class="ten">1</sup>' : ''}${d}</span>`; }).join('')}
      <span class="ci op">${col.op}</span>${idx.map(c => `<span class="ci">${col.B[c] != null ? col.B[c] : ''}</span>`).join('')}
      <span class="rule" style="grid-column:1/-1"></span>
      <span class="ci"></span>${idx.map(c => cell('res', c, 'res')).join('')}
    </div>`;
  }
  const colItem = (q, col, steps) => ({ q, col, c: [], vis: '', steps });

  /* ---------- levels: story slides + question generator ---------- */
  const LEVELS = [
    { id: 'add', world: 0, sym: '+', title: 'Adding & carrying', blurb: 'Put groups together, and carry when a column passes 9.',
      slides: [
        { t: 'Adding is putting groups together. 3 mangoes plus 2 mangoes is 5 mangoes.', v: () => V.groups(1, 3) + '<span class="vplus">+</span>' + V.groups(1, 2) },
        { t: 'For bigger numbers, stack them: ones under ones, tens under tens. Always start on the right, with the ones.', v: () => V.column(27, 15, '+') },
        { t: '7 + 5 = 12. That’s too big for one box, so write the 2 and carry the 1 to the tens. It’s like trading ten ₱1 coins for one ₱10 coin. Then 1 + 2 + 1 = 4. Answer: 42.', v: () => V.column(27, 15, '+') }
      ],
      gen() { let a, b; do { a = R(14, 79); b = R(12, 89 - a + 10); } while ((a % 10) + (b % 10) < 10 && Math.random() < .7); const s = a + b, noCarry = Math.floor(a / 10 + b / 10) * 10 + ((a + b) % 10);
        const o = a % 10 + b % 10;
        return { q: `${a} + ${b} = ?`, vis: V.column(a, b, '+'), c: uniq(s, [noCarry, s + 10, s - 1], near(s, 6)), steps: [`Ones first: ${a % 10} + ${b % 10} = ${o}.`, o >= 10 ? `${o} is 10 or more: write ${o % 10}, carry 1 ten.` : `${o} fits in the ones box.`, `Tens: ${Math.floor(a / 10)} + ${Math.floor(b / 10)}${o >= 10 ? ' + 1 carried' : ''} = ${Math.floor(s / 10)}.`, `Answer: ${s}.`] }; } },
    { id: 'sub', world: 0, sym: '−', title: 'Subtracting & borrowing', blurb: 'Take away, and borrow a ten when the top digit is too small.',
      slides: [
        { t: 'Subtracting is taking away. Start at 8 and hop back 3. You land on 5.', v: () => V.line(8, [-3]) },
        { t: '52 − 17: you can’t take 7 from 2. So borrow one ten from the 5. The 5 becomes 4, and the 2 becomes 12.', v: () => V.column(52, 17, '-') },
        { t: '12 − 7 = 5, then 4 − 1 = 3. Answer: 35. Check by adding back: 35 + 17 = 52.', v: () => V.column(52, 17, '-') }
      ],
      gen() { let a, b; do { a = R(31, 98); b = R(12, a - 6); } while (a % 10 >= b % 10 && Math.random() < .7); const d = a - b, wrong = Math.abs(Math.floor(a / 10) - Math.floor(b / 10)) * 10 + Math.abs(a % 10 - b % 10);
        const borrow = a % 10 < b % 10;
        return { q: `${a} − ${b} = ?`, vis: V.column(a, b, '-'), c: uniq(d, [wrong, d + 10, d + 1], near(d, 6)), steps: borrow ? [`Ones: ${a % 10} is smaller than ${b % 10}, so borrow 1 ten.`, `${a % 10} becomes ${a % 10 + 10}, and the tens digit ${Math.floor(a / 10)} becomes ${Math.floor(a / 10) - 1}.`, `${a % 10 + 10} − ${b % 10} = ${(a % 10 + 10) - b % 10}. Tens: ${Math.floor(a / 10) - 1} − ${Math.floor(b / 10)} = ${Math.floor(d / 10)}.`, `Answer: ${d}. Check: ${d} + ${b} = ${a}.`] : [`Ones: ${a % 10} − ${b % 10} = ${a % 10 - b % 10}.`, `Tens: ${Math.floor(a / 10)} − ${Math.floor(b / 10)} = ${Math.floor(d / 10)}.`, `Answer: ${d}.`] }; } },
    { id: 'mul', world: 0, sym: '×', title: 'Multiplying is fast adding', blurb: 'Groups of the same size, counted quickly.',
      slides: [
        { t: '4 × 3 means 4 groups of 3. Count them: 3, 6, 9, 12.', v: () => V.groups(4, 3) },
        { t: 'Order doesn’t matter: 4 × 3 is the same as 3 × 4. Pick whichever is easier to count.', v: () => V.groups(3, 4) },
        { t: 'Bigger numbers? Split one of them. 6 × 14 = 6 × 10 + 6 × 4 = 60 + 24 = 84.', v: () => '' }
      ],
      gen() { if (Math.random() < .55) { const a = R(3, 9), b = R(3, 9), p = a * b; return { q: `${a} × ${b} = ?`, vis: a * b <= 36 ? V.groups(a, b) : '', c: uniq(p, [p + a, p - b, a + b], near(p, 5)), steps: [`${a} × ${b} means ${a} groups of ${b}.`, `Count by ${b}s: ${Array.from({ length: a }, (_, i) => (i + 1) * b).join(', ')}.`, `Answer: ${p}.`] }; }
        const a = R(3, 9), b = R(12, 29), t = Math.floor(b / 10) * 10, o = b % 10, p = a * b;
        return { q: `${a} × ${b} = ?`, vis: '', c: uniq(p, [a * t + o, p + a, p - 10], near(p, 8)), steps: [`Split ${b} into ${t} + ${o}.`, `${a} × ${t} = ${a * t}.`, `${a} × ${o} = ${a * o}.`, `Add them: ${a * t} + ${a * o} = ${p}.`] }; } },
    { id: 'div', world: 0, sym: '÷', title: 'Dividing is fair sharing', blurb: 'Share equally, and use times tables backwards.',
      slides: [
        { t: '12 ÷ 3 means: share 12 candies fairly among 3 friends. Each friend gets 4.', v: () => V.share(12, 3) },
        { t: 'Division undoes multiplication. Since 3 × 4 = 12, we know 12 ÷ 3 = 4. Use your times tables backwards.', v: () => V.groups(3, 4) },
        { t: 'For bigger numbers, share the tens first, then the ones. 84 ÷ 4: 8 tens ÷ 4 = 2 tens, and 4 ones ÷ 4 = 1. Answer: 21.', v: () => '' }
      ],
      gen() { const d = R(2, 9), q = Math.random() < .6 ? R(2, 9) : R(11, 25), n = d * q;
        return { q: `${n} ÷ ${d} = ?`, vis: n <= 24 ? V.share(n, d) : '', c: uniq(q, [q + 1, q - 1, n - d], near(q, 3)), steps: [`Ask: ${d} times what makes ${n}?`, `${d} × ${q} = ${n}.`, `So ${n} ÷ ${d} = ${q}.`] }; } },
    { id: 'order', world: 0, sym: '( )', title: 'What comes first?', blurb: 'The order of operations, like getting dressed in order.',
      slides: [
        { t: 'Math has a fixed order, like getting dressed: socks before shoes. Do Grouping ( ) first, then Exponents, then × and ÷, then + and −.', v: () => '<div class="order"><span>( )</span><span>x²</span><span>× ÷</span><span>+ −</span></div>' },
        { t: '2 + 3 × 4: do the × first. 3 × 4 = 12, then 2 + 12 = 14. Not 20!', v: () => '' },
        { t: '× and ÷ are teammates: do them left to right. + and − are teammates too.', v: () => '' }
      ],
      gen() { const t = pick(['a+bc', 'ab-c', '(a+b)c', 'a-b/c']); let a = R(2, 9), b = R(2, 9), c = R(2, 6), q, ans, wrong, steps;
        if (t === 'a+bc') { q = `${a} + ${b} × ${c}`; ans = a + b * c; wrong = (a + b) * c; steps = [`× before +: ${b} × ${c} = ${b * c}.`, `Then ${a} + ${b * c} = ${ans}.`]; }
        else if (t === 'ab-c') { a = R(3, 9); q = `${a} × ${b} − ${c}`; ans = a * b - c; wrong = a * (b - c); steps = [`× before −: ${a} × ${b} = ${a * b}.`, `Then ${a * b} − ${c} = ${ans}.`]; }
        else if (t === '(a+b)c') { q = `(${a} + ${b}) × ${c}`; ans = (a + b) * c; wrong = a + b * c; steps = [`Grouping first: ${a} + ${b} = ${a + b}.`, `Then ${a + b} × ${c} = ${ans}.`]; }
        else { b = c * R(2, 6); a = R(b / c + 1, 20); q = `${a} − ${b} ÷ ${c}`; ans = a - b / c; wrong = (a - b) / c; steps = [`÷ before −: ${b} ÷ ${c} = ${b / c}.`, `Then ${a} − ${b / c} = ${ans}.`]; }
        return { q: `${q} = ?`, vis: '', c: uniq(ans, [Number.isInteger(wrong) ? wrong : ans + 2, ans + 1, ans - 2], near(ans, 4)), steps }; } },

    { id: 'frac', world: 1, sym: '½', title: 'What is a fraction?', blurb: 'A piece of a whole, like slices of pizza.',
      slides: [
        { t: 'A fraction is a piece of a whole. Cut a pizza into 4 equal slices and eat 1. You ate 1/4.', v: () => V.pizza(4, 1) },
        { t: 'The bottom number says how many equal slices the whole is cut into. The top number says how many slices you have. This pizza shows 3/8.', v: () => V.pizza(8, 3) },
        { t: 'Your turn: tap the slices to shade 3/5 of this pizza.', v: () => V.pizza(5, 0, { tap: true }), tap: { n: 5, k: 3 } }
      ],
      gen() { if (Math.random() < .25) { const n = pick([3, 4, 5, 6, 8]), k = R(1, n - 1); return { q: `Tap the slices to shade ${k}/${n} of the pizza.`, tap: { n, k }, vis: V.pizza(n, 0, { tap: true }), c: [], steps: [`The bottom number, ${n}, is how many slices the pizza has.`, `The top number, ${k}, is how many to shade.`, `So shade ${k} slices.`] }; }
        if (Math.random() < .7) { const n = pick([3, 4, 5, 6, 8, 10]), k = R(1, n - 1); return { q: 'What fraction of the pizza is shaded?', vis: V.pizza(n, k), c: uniq(`${k}/${n}`, [`${n - k}/${n}`, `${n}/${k}`, `${k}/${n + 1}`], () => `${R(1, 9)}/${R(2, 12)}`), steps: [`Count all the slices: ${n}. That’s the bottom number.`, `Count the shaded slices: ${k}. That’s the top number.`, `Answer: ${k}/${n}.`] }; }
        const [x, y] = shuffle([2, 3, 4, 5, 6, 8]).slice(0, 2), big = Math.min(x, y);
        return { q: `Which is bigger: 1/${x} or 1/${y}?`, vis: `<div class="row" style="gap:14px;justify-content:center">${V.pizza(x, 1, { size: 110 })}${V.pizza(y, 1, { size: 110 })}</div>`, c: [`1/${big}`, `1/${Math.max(x, y)}`, 'They are equal'], steps: [`Cutting a pizza into more slices makes each slice smaller.`, `1/${big} comes from fewer slices, so each piece is bigger.`] }; } },
    { id: 'equiv', world: 1, sym: '=', title: 'Same amount, smaller slices', blurb: 'Equivalent fractions and simplifying.',
      slides: [
        { t: '1/2 of a pizza is the same amount as 2/4 or 4/8. The slices are smaller, but you have more of them.', v: () => V.bars([[2, 1], [4, 2], [8, 4]]) },
        { t: 'To simplify, divide the top and bottom by the same number. 6/8: both divide by 2, so 6/8 = 3/4.', v: () => V.bars([[8, 6], [4, 3]]) },
        { t: 'To compare two fractions, give them the same bottom number first. 2/3 vs 3/4 → 8/12 vs 9/12, so 3/4 is bigger.', v: () => V.bars([[12, 8], [12, 9]]) }
      ],
      gen() { const t = Math.random(); if (t < .5) { const d = pick([2, 3, 4, 5]), m = pick([2, 3, 4]); let k; do { k = R(1, d - 1); } while (gcd(k, d) !== 1); return { q: `Simplify ${k * m}/${d * m}.`, vis: V.bars([[d * m, k * m]]), c: uniq(`${k}/${d}`, [`${k * m}/${d}`, `${k}/${d * m}`, `${k + 1}/${d + 1}`], () => `${R(1, 5)}/${R(2, 9)}`), steps: [`Find a number that divides both ${k * m} and ${d * m}: ${m}.`, `${k * m} ÷ ${m} = ${k}, and ${d * m} ÷ ${m} = ${d}.`, `Answer: ${k}/${d}.`] }; }
        const base = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5]]), m = pick([2, 3, 4]), right = `${base[0] * m}/${base[1] * m}`;
        return { q: `Which fraction equals ${base[0]}/${base[1]}?`, vis: V.bars([[base[1], base[0]]]), c: uniq(right, [`${base[0] + m}/${base[1] + m}`, `${base[0] * m}/${base[1]}`, `${base[0]}/${base[1] * m}`], () => `${R(1, 9)}/${R(2, 12)}`), steps: [`Multiply the top and bottom by the same number, ${m}.`, `${base[0]} × ${m} = ${base[0] * m}, ${base[1]} × ${m} = ${base[1] * m}.`, `So ${base[0]}/${base[1]} = ${right}.`] }; } },
    { id: 'fadd', world: 1, sym: '+½', title: 'Adding pieces', blurb: 'Add and subtract fractions by matching slice sizes.',
      slides: [
        { t: 'Same-size slices? Just add the tops. 1/5 + 2/5 = 3/5. The bottom stays 5, because the slices didn’t change size.', v: () => V.bars([[5, 1], [5, 2], [5, 3]]) },
        { t: 'Different sizes? Cut them so they match first. 1/2 + 1/4 → 2/4 + 1/4 = 3/4.', v: () => V.bars([[4, 2], [4, 1], [4, 3]]) },
        { t: 'Never add the bottoms. 1/2 + 1/2 is a whole pizza (2/2 = 1), not 2/4.', v: () => V.bars([[2, 1], [2, 1], [2, 2]]) }
      ],
      gen() { if (Math.random() < .5) { const d = pick([5, 6, 7, 8, 9, 10]), a = R(1, d - 2), b = R(1, d - a - 1), sub = Math.random() < .35 && a > b, r = sub ? a - b : a + b;
          return { q: `${a}/${d} ${sub ? '−' : '+'} ${b}/${d} = ?`, vis: V.bars([[d, a], [d, b]]), c: uniq(fr(r, d), [`${r}/${d * 2}`, `${sub ? a + b : r}/${d + d}`, fr(r + 1, d)], () => `${R(1, 9)}/${d}`), steps: [`The slices are the same size (bottom ${d}), so ${sub ? 'subtract' : 'add'} the tops: ${a} ${sub ? '−' : '+'} ${b} = ${r}.`, `Keep the bottom: ${r}/${d}${fr(r, d) !== `${r}/${d}` ? ` = ${fr(r, d)}` : ''}.`] }; }
        const [x, y] = pick([[2, 4], [2, 6], [3, 6], [4, 8], [2, 8], [3, 9], [2, 3], [3, 4]]), L = x * y / gcd(x, y), num = L / x + L / y;
        return { q: `1/${x} + 1/${y} = ?`, vis: V.bars([[L, L / x], [L, L / y]]), c: uniq(fr(num, L), [`2/${x + y}`, `1/${x + y}`, fr(num + 1, L)], () => `${R(1, 7)}/${L}`), steps: [`Make the slices the same size: both can be cut into ${L}ths.`, `1/${x} = ${L / x}/${L} and 1/${y} = ${L / y}/${L}.`, `Add the tops: ${L / x} + ${L / y} = ${num}, so the answer is ${fr(num, L)}.`] }; } },
    { id: 'fmul', world: 1, sym: '×½', title: 'A fraction of a fraction', blurb: '“Of” means multiply. To divide, flip and multiply.',
      slides: [
        { t: '“Of” means multiply. Half of a third of a pizza: 1/2 × 1/3 = 1/6.', v: () => V.pizza(6, 1) },
        { t: 'Multiply straight across, top × top and bottom × bottom. 2/3 × 3/4 = 6/12 = 1/2.', v: () => '' },
        { t: 'To divide, flip the second fraction and multiply. 1/2 ÷ 1/4 = 1/2 × 4/1 = 2. (How many quarters fit in a half? Two!)', v: () => V.bars([[2, 1], [4, 2]]) }
      ],
      gen() { const t = Math.random(); if (t < .4) { const d = pick([2, 3, 4, 5, 10]), n = d * R(2, 12); return { q: `What is 1/${d} of ${n}?`, vis: '', c: uniq(n / d, [n * d, n - d, n / d + 1], near(n / d, 3)), steps: [`1/${d} of something means split it into ${d} equal parts and take one.`, `${n} ÷ ${d} = ${n / d}.`] }; }
        if (t < .75) { const a = R(1, 3), b = R(a + 1, 5), c = R(1, 3), d = R(c + 1, 6); return { q: `${a}/${b} × ${c}/${d} = ?`, vis: '', c: uniq(fr(a * c, b * d), [`${a + c}/${b + d}`, fr(a * d, b * c), `${a * c}/${b + d}`], () => `${R(1, 6)}/${R(2, 30)}`), steps: [`Top × top: ${a} × ${c} = ${a * c}.`, `Bottom × bottom: ${b} × ${d} = ${b * d}.`, `${a * c}/${b * d}${fr(a * c, b * d) !== `${a * c}/${b * d}` ? ` simplifies to ${fr(a * c, b * d)}` : ''}.`] }; }
        const [x, y] = pick([[2, 4], [2, 6], [3, 6], [4, 8], [2, 8], [3, 9]]);
        return { q: `1/${x} ÷ 1/${y} = ?`, vis: '', c: uniq(y / x, [fr(1, x * y), x / y < 1 ? `${x}/${y}` : x / y, y], () => R(2, 9)), steps: [`Flip the second fraction: 1/${y} becomes ${y}/1.`, `Multiply: 1/${x} × ${y}/1 = ${y}/${x} = ${y / x}.`, `Check: ${y / x} pieces of size 1/${y} make 1/${x}.`] }; } },

    { id: 'dec', world: 2, sym: '₱', title: 'Decimals are money', blurb: 'Pesos and centavos make decimals easy.',
      slides: [
        { t: 'Decimals work like pesos and centavos. ₱12.50 is 12 pesos and 50 centavos.', v: () => V.coins(12.5) },
        { t: 'When adding, line up the decimal points, like pesos under pesos and centavos under centavos. ₱12.50 + ₱7.75 = ₱20.25.', v: () => '<pre class="calc">  12.50\n+  7.75\n-------\n  20.25</pre>' },
        { t: '0.5 is 50 centavos, half a peso. 0.25 is 25 centavos, a quarter. 0.1 is 10 centavos.', v: () => V.coins(0.75) }
      ],
      gen() { const t = Math.random(); if (t < .5) { const a = R(2, 60) + pick([0, .25, .5, .75]), b = R(1, 40) + pick([.25, .5, .75, .1, .2]), s = Math.round((a + b) * 100) / 100, sub = Math.random() < .35 && a > b, r = sub ? Math.round((a - b) * 100) / 100 : s;
          return { q: `₱${n$(a)} ${sub ? '−' : '+'} ₱${n$(b)} = ?`, vis: '', c: uniq('₱' + n$(r), ['₱' + n$(r + 1), '₱' + n$(r + 0.1), '₱' + n$(Math.max(0.05, r - 0.5))], () => '₱' + n$(r + R(2, 9))), steps: [`Line up the decimal points.`, `${sub ? 'Subtract' : 'Add'} the centavos first, then the pesos.`, `Answer: ₱${n$(r)}.`] }; }
        const [d, f] = pick([['0.5', '1/2'], ['0.25', '1/4'], ['0.75', '3/4'], ['0.2', '1/5'], ['0.1', '1/10'], ['0.4', '2/5']]);
        return { q: `Which fraction is the same as ${d}?`, vis: V.coins(+d), c: uniq(f, ['1/3', '2/3', '3/5', '1/8', '5/8'].filter(x => x !== f).slice(0, 3), () => `1/${R(6, 9)}`), steps: [`Think in money: ${d} of a peso is ${Math.round(+d * 100)} centavos.`, `${Math.round(+d * 100)} out of 100 simplifies to ${f}.`] }; } },
    { id: 'pct', world: 2, sym: '%', title: 'Percent means out of 100', blurb: 'Shade squares, then use the 10% trick.',
      slides: [
        { t: 'Percent means “out of 100.” 25% means 25 out of every 100. Here are 25 of 100 squares.', v: () => V.grid(25) },
        { t: '50% is half. 25% is a quarter. 10% is one-tenth.', v: () => V.grid(50) },
        { t: 'Shortcut: 10% of a number means moving the decimal one place left. 10% of ₱250 is ₱25. Double it for 20%: ₱50.', v: () => V.grid(10) }
      ],
      gen() { const t = Math.random(); if (t < .35) { const k = pick([10, 20, 25, 30, 40, 50, 60, 75, 80, 15]); return { q: 'What percent of the grid is shaded?', vis: V.grid(k), c: uniq(k + '%', [(100 - k) + '%', (k / 10) + '%', (k + 5) + '%'], () => R(1, 99) + '%'), steps: [`There are 100 squares in all.`, `${k} are shaded, so it’s ${k} out of 100 = ${k}%.`] }; }
        const p = pick([10, 20, 50, 25, 5]), base = p === 25 ? 4 * R(5, 60) : 10 * R(3, 90), ans = base * p / 100;
        const how = { 10: `10%: move the decimal one place left → ${n$(ans)}.`, 20: `10% is ${n$(base / 10)}. Double it for 20%: ${n$(ans)}.`, 50: `50% is half: ${base} ÷ 2 = ${n$(ans)}.`, 25: `25% is a quarter: ${base} ÷ 4 = ${n$(ans)}.`, 5: `10% is ${n$(base / 10)}. Half of that is 5%: ${n$(ans)}.` }[p];
        return { q: `What is ${p}% of ₱${base}?`, vis: '', c: uniq('₱' + n$(ans), ['₱' + n$(ans * 10), '₱' + n$(base - ans), '₱' + n$(ans + p)], () => '₱' + n$(ans + R(1, 20))), steps: [how] }; } },
    { id: 'pct2', world: 2, sym: '↘%', title: 'Discounts & increases', blurb: 'Sale prices and percent change.',
      slides: [
        { t: 'A 20% discount on ₱500: find 20% first (₱100), then subtract it. You pay ₱400.', v: () => V.grid(20) },
        { t: 'Percent increase compares the change to the ORIGINAL price. ₱200 → ₱250 is ₱50 more, and 50 out of 200 is 25%.', v: () => V.grid(25) }
      ],
      gen() { if (Math.random() < .6) { const P = 100 * R(2, 20), p = pick([10, 20, 25, 50]), off = P * p / 100; return { q: `A ₱${P} bag is ${p}% off. What is the sale price?`, vis: '', c: uniq('₱' + (P - off), ['₱' + off, '₱' + (P - p), '₱' + (P - off / 2)], () => '₱' + (P - off + 50 * R(1, 4))), steps: [`Find ${p}% of ₱${P}: ₱${off}.`, `Subtract it: ₱${P} − ₱${off} = ₱${P - off}.`] }; }
        const old = 100 * R(1, 9), p = pick([10, 20, 25, 50]), nw = old + old * p / 100;
        return { q: `A price went from ₱${old} to ₱${nw}. By what percent did it go up?`, vis: '', c: uniq(p + '%', [Math.round((nw - old) / nw * 100) + '%', (nw - old) + '%', (p * 2) + '%'], () => R(5, 60) + '%'), steps: [`Change = ₱${nw} − ₱${old} = ₱${nw - old}.`, `Compare it to the original: ${nw - old} ÷ ${old} = ${p / 100}.`, `That’s ${p}%.`] }; } },

    { id: 'ratio', world: 3, sym: ':', title: 'Ratios & recipes', blurb: 'Scale a recipe, and share in parts.',
      slides: [
        { t: 'A ratio compares amounts. Adobo for 2 people uses 1 cup of vinegar. For 6 people (3 times as many), use 3 cups.', v: () => V.groups(3, 2) },
        { t: 'Sharing ₱60 between Ana and Ben in the ratio 1:2: that’s 3 parts of ₱20. Ana gets 1 part (₱20), Ben gets 2 parts (₱40).', v: () => V.groups(1, 1) + '<span class="vplus">:</span>' + V.groups(1, 2) }
      ],
      gen() { if (Math.random() < .5) { const ppl = pick([2, 3, 4]), cups = R(1, 3), m = R(2, 4); return { q: `A recipe for ${ppl} people uses ${cups} cup${cups > 1 ? 's' : ''} of rice. How many cups for ${ppl * m} people?`, vis: '', c: uniq(cups * m, [cups + m, cups * m + 1, ppl * m], near(cups * m, 2)), steps: [`${ppl * m} people is ${m} times as many as ${ppl}.`, `So use ${m} times the rice: ${cups} × ${m} = ${cups * m} cups.`] }; }
        const [a, b] = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 2]]), part = 10 * R(1, 10), T = part * (a + b);
        return { q: `Share ₱${T} between Ana and Ben in the ratio ${a}:${b}. How much does Ben get?`, vis: '', c: uniq('₱' + part * b, ['₱' + part * a, '₱' + T / 2, '₱' + part], () => '₱' + (part * b + 10 * R(1, 3))), steps: [`${a} + ${b} = ${a + b} parts in all.`, `One part = ₱${T} ÷ ${a + b} = ₱${part}.`, `Ben has ${b} part${b > 1 ? 's' : ''}: ${b} × ₱${part} = ₱${part * b}.`] }; } },
    { id: 'pattern', world: 3, sym: '…', title: 'Spot the pattern', blurb: 'Number series: add, multiply, or take turns.',
      slides: [
        { t: 'Number series hide a rule. First ask: what is added each time? 3, 6, 9, 12 goes up by 3, so next is 15.', v: () => V.line(3, [3, 3, 3]) },
        { t: 'If adding doesn’t work, try multiplying. 2, 4, 8, 16 doubles each time, so next is 32.', v: () => '' },
        { t: 'Still stuck? Look at every other number. Two patterns may be taking turns.', v: () => '' }
      ],
      gen() { const t = Math.random(); if (t < .5) { const a = R(1, 20), d = R(2, 9), s = [0, 1, 2, 3].map(i => a + i * d), n = a + 4 * d; return { q: `What comes next? ${s.join(', ')}, ___`, vis: V.line(a, [d, d, d]), c: uniq(n, [n + 1, n + d, n - 1], near(n, 3)), steps: [`Find the jump: ${s[1]} − ${s[0]} = ${d}.`, `It’s the same every time, so add ${d} again: ${s[3]} + ${d} = ${n}.`] }; }
        if (t < .8) { const a = R(1, 5), m = pick([2, 3]), s = [0, 1, 2, 3].map(i => a * m ** i), n = s[3] * m; return { q: `What comes next? ${s.join(', ')}, ___`, vis: '', c: uniq(n, [s[3] + (s[3] - s[2]), n + m, n - m], near(n, 4)), steps: [`The jumps keep getting bigger, so try multiplying.`, `Each number is ×${m}: ${s[3]} × ${m} = ${n}.`] }; }
        const a = R(1, 9), b = R(20, 40), d1 = R(1, 4), d2 = R(1, 4), s = [a, b, a + d1, b - d2, a + 2 * d1, b - 2 * d2], n = a + 3 * d1;
        return { q: `What comes next? ${s.join(', ')}, ___`, vis: '', c: uniq(n, [b - 3 * d2, n + 1, s[5] - 1], near(n, 3)), steps: [`Look at every other number: ${a}, ${a + d1}, ${a + 2 * d1} goes up by ${d1}.`, `The other set (${b}, ${b - d2}, ${b - 2 * d2}) goes down by ${d2}.`, `The next number belongs to the first set: ${a + 2 * d1} + ${d1} = ${n}.`] }; } },
    { id: 'logic', world: 3, sym: '?', title: 'If this, then that', blurb: 'What you can and can’t conclude from an if–then rule.',
      slides: [
        { t: '“If it rains, the ground gets wet.” You see rain, so the ground is wet. That one is safe.', v: () => '' },
        { t: 'The ground is wet. Did it rain? Not for sure. Maybe someone watered the plants!', v: () => '' },
        { t: 'The ground is NOT wet. Then it did NOT rain. That one is safe too.', v: () => '' }
      ],
      gen() { const [p, q, notQ, notP] = pick([
          ['it rains', 'the seminar moves indoors', 'the seminar did not move indoors', 'it did not rain'],
          ['an employee is late three times', 'she gets a warning memo', 'she did not get a warning memo', 'she was not late three times'],
          ['the report is approved', 'the funds are released', 'the funds were not released', 'the report was not approved'],
          ['Liza passes the exam', 'she gets an eligibility', 'she did not get an eligibility', 'Liza did not pass the exam']]);
        const k = R(0, 3), rule = `Rule: If ${p}, then ${q}.`;
        const cases = [
          { q: `${rule}\nWe know: ${p}. Does it follow that ${q}?`, a: 'Yes, for sure', st: [`The rule’s “if” part happened.`, `So the “then” part must happen too.`] },
          { q: `${rule}\nWe know: ${q}. Does it follow that ${p}?`, a: 'Can’t tell', st: [`The “then” part happened, but something else could have caused it.`, `So we can’t be sure.`] },
          { q: `${rule}\nWe know: ${notQ}. Does it follow that ${notP}?`, a: 'Yes, for sure', st: [`If the “if” part had happened, the “then” part would have too.`, `It didn’t, so the “if” part didn’t happen either.`] },
          { q: `${rule}\nWe know: ${notP}. Does it follow that ${notQ}?`, a: 'Can’t tell', st: [`The rule only says what happens when “${p}.”`, `It says nothing about the other case, so we can’t be sure.`] }][k];
        return { q: cases.q, vis: '', c: [cases.a, ...['Yes, for sure', 'No, never', 'Can’t tell'].filter(x => x !== cases.a)], steps: cases.st }; } }
  ];
  const UNIT_PAIRS = [['meter', 'centimeters', 100], ['kilometer', 'meters', 1000], ['kilogram', 'grams', 1000], ['hour', 'minutes', 60], ['minute', 'seconds', 60], ['day', 'hours', 24], ['liter', 'milliliters', 1000]];
  LEVELS.push(
    { id: 'perim', world: 4, sym: '▭', title: 'Perimeter & area', blurb: 'The distance around a shape, and the space inside it.',
      slides: [
        { t: 'Perimeter is the distance around a shape, like walking along a fence. For a rectangle, add all four sides: 2 × (length + width).', v: () => V.rect(5, 3) },
        { t: 'Area is the space inside, counted in squares. A 5 by 3 rectangle holds 5 × 3 = 15 squares.', v: () => V.rect(5, 3) },
        { t: 'Don’t mix them up: perimeter is in meters (m), area is in square meters (m²).', v: () => '' }
      ],
      gen() { const l = R(3, 9), w = R(2, Math.min(6, l)), per = Math.random() < .5;
        return per ? { q: `What is the perimeter of a ${l} m by ${w} m rectangle?`, vis: V.rect(l, w), c: uniq(`${2 * (l + w)} m`, [`${l * w} m`, `${l + w} m`, `${2 * l + w} m`], () => `${2 * (l + w) + R(1, 5)} m`), steps: [`Perimeter goes all the way around.`, `2 × (${l} + ${w}) = 2 × ${l + w} = ${2 * (l + w)} m.`] }
          : { q: `What is the area of a ${l} m by ${w} m rectangle?`, vis: V.rect(l, w), c: uniq(`${l * w} m²`, [`${2 * (l + w)} m²`, `${l + w} m²`, `${l * w + l} m²`], () => `${l * w + R(1, 6)} m²`), steps: [`Area counts the squares inside.`, `${w} rows of ${l} squares: ${w} × ${l} = ${l * w}, so ${l * w} m².`] }; } },
    { id: 'units', world: 4, sym: 'cm', title: 'Changing units', blurb: 'Big units to small, small units to big.',
      slides: [
        { t: '1 meter = 100 centimeters. Going from a big unit to a small one, you get MORE of them, so multiply. 3 m = 300 cm.', v: () => '<div class="order"><span>1 m</span><span>=</span><span>100 cm</span></div>' },
        { t: 'Going from small to big, you get FEWER of them, so divide. 2,000 g = 2 kg.', v: () => '<div class="order"><span>1,000 g</span><span>=</span><span>1 kg</span></div>' },
        { t: 'Time works the same way: 1 hour = 60 minutes, so 2 hours = 120 minutes.', v: () => '<div class="order"><span>1 hr</span><span>=</span><span>60 min</span></div>' }
      ],
      gen() { const [big, small, f] = pick(UNIT_PAIRS), v = R(2, 9);
        if (Math.random() < .5) return { q: `${v} ${big}s = how many ${small}?`, vis: '', c: uniq(`${(v * f).toLocaleString('en-US')} ${small}`, [`${v * f / 10} ${small}`, `${v + f} ${small}`, `${(v * f * 10).toLocaleString('en-US')} ${small}`], () => `${v * f + R(1, 9) * 10} ${small}`), steps: [`1 ${big} = ${f} ${small}.`, `Big to small means multiply: ${v} × ${f} = ${(v * f).toLocaleString('en-US')}.`] };
        return { q: `${(v * f).toLocaleString('en-US')} ${small} = how many ${big}s?`, vis: '', c: uniq(`${v} ${big}s`, [`${v * 10} ${big}s`, `${v * f * 10} ${big}s`, `${v + 1} ${big}s`], () => `${v + R(2, 6)} ${big}s`), steps: [`1 ${big} = ${f} ${small}.`, `Small to big means divide: ${(v * f).toLocaleString('en-US')} ÷ ${f} = ${v}.`] }; } },
    { id: 'balance', world: 5, sym: 'x', title: 'Balancing for x', blurb: 'An equation is a balance scale.',
      slides: [
        { t: 'An equation is a balance scale. x + 3 = 8 means a box plus 3 weights balances 8 weights.', v: () => V.scale('x + 3', '8') },
        { t: 'Whatever you do to one side, do to the other. Take 3 away from both sides, and you’re left with x = 5.', v: () => V.scale('x', '5') },
        { t: 'For 2x = 10, split both sides into 2 equal groups: x = 5.', v: () => V.scale('2x', '10') }
      ],
      gen() { const t = R(0, 3), x = R(2, 12), a = R(2, 9); let q, steps, wrong;
        if (t === 0) { const b = x + a; q = `x + ${a} = ${b}`; wrong = b + a; steps = [`Take ${a} away from both sides.`, `x = ${b} − ${a} = ${x}.`]; }
        else if (t === 1) { const b = x - a; q = `x − ${a} = ${b}`; wrong = b - a; steps = [`Add ${a} to both sides.`, `x = ${b} + ${a} = ${x}.`]; }
        else if (t === 2) { const b = a * x; q = `${a}x = ${b}`; wrong = b - a; steps = [`${a}x means ${a} groups of x.`, `Split both sides into ${a} groups: x = ${b} ÷ ${a} = ${x}.`]; }
        else { const c = R(1, 9), b = a * x + c; q = `${a}x + ${c} = ${b}`; wrong = (b + c) / a; steps = [`Take ${c} away from both sides: ${a}x = ${b - c}.`, `Divide both sides by ${a}: x = ${x}.`]; }
        return { q: `Solve: ${q}`, vis: V.scale(q.split(' = ')[0], q.split(' = ')[1]), c: uniq(x, [Number.isInteger(wrong) && wrong > 0 ? wrong : x + 2, x + 1, x - 1], near(x, 3)), steps }; } },
    { id: 'words', world: 5, sym: '✎', title: 'Words to equations', blurb: 'Turn a sentence into x, then solve.',
      slides: [
        { t: '“A number plus 7 is 15.” Write the number as x: x + 7 = 15. “Is” means equals.', v: () => V.scale('x + 7', '15') },
        { t: '“Twice a number” is 2x. “3 less than a number” is x − 3. Careful, the order flips!', v: () => '' },
        { t: 'Then solve it like a balance: x + 7 = 15, so x = 8.', v: () => V.scale('x', '8') }
      ],
      gen() { const x = R(2, 15), a = R(2, 9), t = R(0, 4); let s, eq, b;
        if (t === 0) { b = x + a; s = `A number plus ${a} is ${b}.`; eq = `x + ${a} = ${b}`; }
        else if (t === 1) { b = 2 * x; s = `Twice a number is ${b}.`; eq = `2x = ${b}`; }
        else if (t === 2) { b = x + a; s = `${a} less than a number is ${x}.`; eq = `x − ${a} = ${x}`; return { q: `${s} What is the number?`, vis: '', c: uniq(b, [x - a, x, b + 1], near(b, 3)), steps: [`“${a} less than a number” means x − ${a}.`, `x − ${a} = ${x}, so x = ${x} + ${a} = ${b}.`] }; }
        else if (t === 3) { b = 3 * x + a; s = `Three times a number, plus ${a}, is ${b}.`; eq = `3x + ${a} = ${b}`; }
        else { b = x - a > 0 ? x - a : x + a; s = x - a > 0 ? `A number minus ${a} is ${b}.` : `A number plus ${a} is ${b}.`; eq = x - a > 0 ? `x − ${a} = ${b}` : `x + ${a} = ${b}`; }
        return { q: `${s} What is the number?`, vis: '', c: uniq(x, [b, x + 1, Math.max(1, x - 2)], near(x, 3)), steps: [`Write it as an equation: ${eq}.`, `Solve it like a balance scale: x = ${x}.`] }; } }
  );
  // Whole-number levels are typed digit by digit, so the answer is never on screen.
  const byId = id => LEVELS.find(l => l.id === id);
  byId('add').gen = () => {
    let a, b; do { const big = Math.random() < .45; a = big ? R(120, 899) : R(14, 89); b = big ? R(105, 899) : R(12, 89); } while ((a % 10) + (b % 10) < 10 && Math.random() < .7);
    return colItem(`${a} + ${b} = ?`, colAdd(a, b), ['Start with the ones column, then go left.', 'When a column reaches 10 or more, write the last digit and carry the 1.']);
  };
  byId('sub').gen = () => {
    let a, b; do { if (Math.random() < .45) { a = R(1, 9) * 100 + R(1, 9) * 10 + R(0, 9); b = R(101, a - 10); } else { a = R(2, 9) * 10 + R(0, 9); b = R(11, a - 1); } } while (a % 10 >= b % 10 && Math.random() < .7);
    return colItem(`${a} − ${b} = ?`, colSub(a, b), ['Start with the ones column.', 'If the top digit is smaller, borrow 1 from the column on its left.']);
  };
  byId('mul').gen = () => {
    if (Math.random() < .4) { const x = R(3, 9), y = R(3, 9), p = x * y; return { q: `${x} × ${y} = ?`, vis: '', c: uniq(p, [p + x, p - y, x + y], near(p, 5)), steps: [`${x} × ${y} means ${x} groups of ${y}.`, `Count by ${y}s ${x} times.`] }; }
    const a = pick([R(12, 99), R(102, 499), R(2, 9) * 50, R(11, 49) * 10]), m = R(2, 9);
    return colItem(`${a} × ${m} = ?`, colMul(a, m), ['Multiply the ones digit first, then go left.', 'Add each carry after you multiply the next digit.']);
  };
  byId('div').gen = () => {
    if (Math.random() < .35) { const d = R(2, 9), q = R(2, 9), n = d * q; return { q: `${n} ÷ ${d} = ?`, vis: '', c: uniq(q, [q + 1, q - 1, n - d], near(q, 3)), steps: [`Ask: ${d} times what makes ${n}?`, `Use your times table backward.`] }; }
    const d = R(2, 9), q = R(12, 199);
    return colItem(`${d * q} ÷ ${d} = ?`, colDiv(d * q, d), ['Work left to right.', 'Write how many times it fits above, and carry the leftover to the next digit.']);
  };
  const WORLDS = [{ t: 'Whole numbers', m: 'Add, subtract, multiply, divide' }, { t: 'Fractions', m: 'Pizza slices and fraction bars' }, { t: 'Decimals & percent', m: 'Money and the 100-square grid' }, { t: 'Thinking tools', m: 'Ratios, patterns, and if–then logic' }, { t: 'Shapes & measures', m: 'Perimeter, area, and units' }, { t: 'Algebra basics', m: 'Balance scales and word equations' }];
  // A boss closes each world: 10 mixed rounds, 2 hearts.
  { const base = LEVELS.slice(); LEVELS.length = 0;
    WORLDS.forEach((w, wi) => { const ls = base.filter(l => l.world === wi); LEVELS.push(...ls, { id: 'boss' + wi, world: wi, sym: '★', title: `${w.t} boss`, blurb: 'Mixed questions from this world.', boss: true, rounds: 10, hearts: 2,
      slides: [{ t: `Boss round! 10 mixed questions from ${w.t}, and only 2 hearts. Beat it to earn this world’s stars.`, v: () => '<div class="bigstars" style="font-size:44px"><span class="on" style="--d:0ms">★</span></div>' }],
      gen() { return pick(ls).gen(); } }); }); }
  const ROUNDS = 8, HEARTS = 3;

  /* ---------- UI ---------- */
  function init(ctx) {
    const { $, esc, state, save, go, haptic, calm } = ctx;
    const G = () => state().game || (state().game = { xp: 0, levels: {} });
    const starsOf = l => (G().levels[l.id] || {}).stars || 0;
    const unlocked = i => {
      const L = LEVELS[i]; if (!L) return false;
      if (L.boss) return LEVELS.filter(l => l.world === L.world && !l.boss).every(l => starsOf(l) > 0);
      const prev = LEVELS.slice(0, i).reverse().find(l => !l.boss);
      return !prev || starsOf(prev) > 0;
    };
    const todayKey = () => { const d = new Date(); return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; };
    const dailyDone = () => G().daily === todayKey();
    const DAILY = { id: 'daily', world: 0, sym: '☀', title: 'Daily challenge', daily: true, rounds: 5, hearts: 3, xpMult: 2, slides: [], gen() { const open = LEVELS.filter((l, i) => !l.boss && unlocked(i)); return pick(open).gen(); } };
    let cur = null, slide = 0, run = null;

    function renderMap(el) {
      const g = G(), stars = Object.values(g.levels).reduce((a, l) => a + (l.stars || 0), 0);
      const nextI = LEVELS.findIndex((l, i) => unlocked(i) && !(g.levels[l.id] || {}).stars);
      const OFF = [0, 46, 70, 46, 0, -46, -70, -46];
      el.innerHTML = `
      <div class="stack" style="padding-top:18px">
        <div><h1>Math Basics</h1><p class="lede" style="margin-top:6px">The arithmetic behind the CSE-PPT, explained like you’re five, then played like a game.</p></div>
        ${dailyDone() ? '<div class="status" style="text-align:center">Daily challenge done. Come back tomorrow for double XP.</div>' : '<button class="btn primary big" data-act="g-daily">☀ Daily challenge · 5 questions · double XP</button>'}
        <div class="gstats sheet"><div><b class="num">${g.xp}</b><span>XP</span></div><div><b class="num">${stars}<small>/${LEVELS.length * 3}</small></b><span>stars</span></div><div><b class="num">${LEVELS.filter((l, i) => (g.levels[l.id] || {}).stars).length}<small>/${LEVELS.length}</small></b><span>levels done</span></div></div>
        ${WORLDS.map((w, wi) => `<section class="world">
          <div class="world-head"><span class="wn">World ${wi + 1}</span><h2>${w.t}</h2><p class="muted">${w.m}</p></div>
          <div class="path">${LEVELS.map((l, i) => ({ l, i })).filter(o => o.l.world === wi).map(({ l, i }, j) => { const st = (g.levels[l.id] || {}).stars || 0, open = unlocked(i), now = i === nextI;
            return `<div class="node-wrap" style="transform:translateX(${OFF[j % OFF.length]}px)">
              <button class="node ${st ? 'done' : ''} ${open ? '' : 'locked'} ${now ? 'now' : ''}" data-act="g-open" data-i="${i}" ${open ? '' : 'disabled'} aria-label="${esc(l.title)}${open ? '' : ', locked'}${st ? `, ${st} stars` : ''}">
                <span class="sym">${open ? esc(l.sym) : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'}</span>
              </button>
              <span class="node-l">${esc(l.title)}</span>
              <span class="node-s" aria-hidden="true">${[1, 2, 3].map(s => `<i class="${s <= st ? 'on' : ''}">★</i>`).join('')}</span>
            </div>`; }).join('')}</div>
        </section>`).join('')}
      </div>`;
    }

    function openLevel(i) { cur = LEVELS[i]; slide = 0; go('glearn'); }
    function renderLearn(el) {
      const L = cur, s = L.slides[slide], last = slide === L.slides.length - 1;
      el.innerHTML = `
      <div class="stack" style="padding-top:18px">
        <div><div class="eyebrow">${WORLDS[L.world].t} · Explain it like I’m 5</div><h1>${esc(L.title)}</h1></div>
        <div class="sheet eli5 view-enter" id="eliCard">
          <div class="eli-vis">${s.v()}</div>
          <p class="eli-t">${esc(s.t)}</p>
          ${s.tap ? `<p class="muted" id="tapMsg" style="font-size:14px">Shaded: <b id="tapN">0</b> of ${s.tap.n}</p>` : ''}
        </div>
        <div class="dots" aria-hidden="true">${L.slides.map((_, i) => `<i class="${i === slide ? 'on' : ''}"></i>`).join('')}</div>
        <div class="row" style="justify-content:space-between">
          <button class="btn quiet" data-act="g-prev" ${slide ? '' : 'disabled'}>Back</button>
          ${last ? '<button class="btn primary" data-act="g-play">Play the game</button>' : '<button class="btn primary" data-act="g-next">Next</button>'}
        </div>
        ${last ? '' : '<button class="linkbtn" data-act="g-play" style="align-self:center">Skip to the game</button>'}
      </div>`;
      wireTap(el, s.tap);
    }
    function wireTap(el, tap) {
      if (!tap) return;
      el.querySelectorAll('.pz.tap .sl').forEach(p => p.addEventListener('click', () => {
        p.classList.toggle('on'); haptic('light');
        const n = el.querySelectorAll('.pz.tap .sl.on').length, t = $('#tapN'); if (t) t.textContent = n;
        const msg = $('#tapMsg'); if (msg && n === tap.k) { msg.innerHTML = `<b style="color:var(--ok)">That’s ${tap.k}/${tap.n}. Nice!</b>`; haptic('success'); }
      }));
    }

    function startRun() { const rounds = cur.rounds || ROUNDS, hearts = cur.hearts || HEARTS; run = { i: LEVELS.indexOf(cur), rounds, maxHearts: hearts, round: 0, hearts, right: 0, wrong: 0, slips: 0, itemSlips: 0, colPos: 0, colWrong: false, fresh: true, combo: 0, xp: 0, item: cur.gen(), state: 'ask', picked: null, done: false, ord: null }; run.ord = shuffle(run.item.c.map((_, i) => i)); go('gplay'); }
    function nextItem() { run.round++; run.picked = null; run.state = 'ask'; run.colPos = 0; run.colWrong = false; run.itemSlips = 0; run.fresh = true; if (run.round >= run.rounds || run.hearts <= 0) return finishRun(); run.item = cur.gen(); run.ord = shuffle(run.item.c.map((_, i) => i)); renderPlay($('#v-gplay')); }
    function answer(ok) {
      run.state = ok ? 'right' : 'wrong';
      if (ok) { run.right++; if (run.item.col && run.itemSlips) run.combo = 0; else run.combo++; const base = run.item.col ? Math.max(4, 10 - 2 * run.itemSlips) : 10, gain = (base + (run.combo >= 3 ? 5 : 0)) * (cur.xpMult || 1); run.xp += gain; run.gain = gain; haptic('success'); }
      else { run.wrong++; run.combo = 0; run.hearts--; haptic('error'); }
      renderPlay($('#v-gplay'));
    }
    function finishRun() {
      run.done = true; const failed = run.hearts <= 0 && run.round < run.rounds;
      const miss = run.wrong + Math.ceil(run.slips / 2);
      run.stars = failed ? 0 : miss === 0 ? 3 : miss <= (cur.boss ? 1 : 2) ? 2 : 1;
      const g = G();
      if (cur.daily) { if (!failed) g.daily = todayKey(); }
      else { const rec = g.levels[cur.id] || (g.levels[cur.id] = { stars: 0, plays: 0 }); rec.plays++; rec.stars = Math.max(rec.stars, run.stars); }
      g.xp += run.xp; save();
      renderPlay($('#v-gplay'));
      if (run.stars && !calm()) confetti();
    }
    function renderPlay(el) {
      if (!run) return go('game');
      if (run.done) {
        const failed = run.stars === 0, nextOpen = !cur.daily && run.i + 1 < LEVELS.length && unlocked(run.i + 1);
        el.innerHTML = `<div class="gdone view-enter">
          <div class="bigstars">${[1, 2, 3].map(s => `<span class="${s <= run.stars ? 'on' : ''}" style="--d:${s * 180}ms">★</span>`).join('')}</div>
          <h1>${failed ? 'Out of hearts' : cur.daily ? 'Daily challenge done!' : cur.boss && run.stars ? 'Boss beaten!' : run.stars === 3 ? 'Perfect!' : 'Level complete'}</h1>
          <p class="lede">${failed ? 'No problem. Read the story again, then give it another go.' : `${run.right} of ${run.rounds} right · <b class="num">+${run.xp} XP</b>`}</p>
          <div class="stack" style="width:100%;max-width:360px;margin-top:10px">
            ${failed && !cur.daily ? '<button class="btn primary big" data-act="g-review">Review the lesson</button>' : nextOpen ? '<button class="btn primary big" data-act="g-nextlevel">Next level</button>' : ''}
            <button class="btn big" data-act="g-replay">Play again</button>
            <button class="btn quiet big" data-act="g-map">Back to map</button>
          </div></div>`;
        return;
      }
      const it = run.item, answered = run.state !== 'ask';
      const hearts = Array.from({ length: run.maxHearts }, (_, i) => `<span class="${i < run.hearts ? 'on' : ''}">♥</span>`).join('');
      el.innerHTML = `
      <div class="qbar">
        <button class="iconbtn" data-act="g-map" aria-label="Leave the game"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
        <div class="qprog"><span style="width:${(run.round / run.rounds * 100).toFixed(1)}%"></span></div>
        <span class="hearts" aria-label="${run.hearts} hearts left">${hearts}</span>
      </div>
      <div class="gplay ${run.fresh ? 'slide-next' : ''}">
        ${run.combo >= 3 ? `<div class="combo">${run.combo} in a row · +5 bonus</div>` : ''}
        <div class="gq">${esc(it.q)}</div>
        ${it.vis ? `<div class="gvis">${it.vis}</div>` : ''}
        ${it.col ? colBlock(it, answered) : it.tap ? `<button class="btn primary big" data-act="g-check" ${answered ? 'disabled' : ''}>Check</button>` : `<div class="gchoices ${it.c.length === 3 ? 'three' : ''}">${run.ord.map(oi => { let cls = ''; if (answered) { if (oi === 0) cls = 'ok'; else if (oi === run.picked) cls = 'bad'; } return `<button class="gch ${cls}" data-act="g-pick" data-o="${oi}" ${answered ? 'disabled' : ''}>${esc(it.c[oi])}</button>`; }).join('')}</div>`}
        ${answered ? '' : `<button class="linkbtn" data-act="g-hint" style="align-self:center">Explain it like I’m 5</button><div class="ghint" id="gHint" hidden>${it.col ? esc(it.col.steps[run.colPos].hint) : `<ol>${it.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>`}</div>`}
      </div>
      ${answered ? `<div class="gfeed ${run.state === 'right' ? 'ok' : 'bad'}">
          <b>${run.state === 'right' ? `${run.item.col && run.itemSlips ? 'Done!' : 'Nice!'} +${run.gain} XP` : it.tap ? `Not quite. Shade ${it.tap.k} of ${it.tap.n} slices.` : `Not quite. It’s ${esc(it.c[0])}.`}</b>
          ${run.state === 'wrong' ? `<ol>${it.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>` : ''}
          <button class="btn primary big" data-act="g-continue">Continue</button>
        </div>` : ''}`;
      if (it.tap && !answered) wireTapPlay(el);
      run.fresh = false;
    }
    function colBlock(it, answered) {
      const st = it.col.steps[run.colPos];
      return `<div class="colwrap">${renderCol(it.col, answered ? it.col.steps.length : run.colPos, run.colWrong)}
        <p class="cprompt" aria-live="polite">${answered ? 'All digits in. Nicely done.' : esc(st.say)}</p>
        ${run.colWrong ? '<p class="cno" role="alert">Not that digit. Try again.</p>' : ''}
        ${answered ? '' : `<div class="numpad" role="group" aria-label="Number pad">${[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(d => `<button class="nk" data-act="g-digit" data-d="${d}">${d}</button>`).join('')}</div>`}
      </div>`;
    }
    function typeDigit(d) {
      const it = run && run.item; if (!it || !it.col || run.state !== 'ask') return;
      const st = it.col.steps[run.colPos];
      if (d === st.v) { run.colPos++; run.colWrong = false; haptic('light'); if (run.colPos >= it.col.steps.length) answer(true); else renderPlay($('#v-gplay')); }
      else { run.slips++; run.itemSlips++; run.colWrong = true; haptic('error'); renderPlay($('#v-gplay')); }
    }
    document.addEventListener('keydown', e => {
      if (!run || run.done || !run.item || !run.item.col || run.state !== 'ask' || !document.querySelector('#v-gplay:not([hidden])')) return;
      if (/^[0-9]$/.test(e.key)) { e.preventDefault(); typeDigit(+e.key); }
    });
    function wireTapPlay(el) { el.querySelectorAll('.pz.tap .sl').forEach(p => p.addEventListener('click', () => { p.classList.toggle('on'); haptic('light'); })); }
    function confetti() {
      const c = document.createElement('canvas'); c.className = 'confetti'; document.body.appendChild(c);
      const d = window.devicePixelRatio || 1; c.width = innerWidth * d; c.height = innerHeight * d; const x = c.getContext('2d');
      const css = getComputedStyle(document.documentElement), cols = ['--accent', '--ok', '--drop', '--cheese'].map(v => css.getPropertyValue(v).trim() || '#2b4fa6');
      const P = Array.from({ length: 110 }, () => ({ x: c.width / 2, y: c.height * .35, vx: (Math.random() - .5) * 16 * d, vy: (-Math.random() * 14 - 4) * d, s: (4 + Math.random() * 5) * d, r: Math.random() * 6, vr: (Math.random() - .5) * .3, col: pick(cols) }));
      const t0 = performance.now();
      const f = t => { const e = t - t0; x.clearRect(0, 0, c.width, c.height); P.forEach(p => { p.vy += .45 * d; p.x += p.vx; p.y += p.vy; p.r += p.vr; x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.col; x.globalAlpha = Math.max(0, 1 - e / 1600); x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); x.restore(); }); if (e < 1600) requestAnimationFrame(f); else c.remove(); };
      requestAnimationFrame(f);
    }

    function handle(act, b) {
      switch (act) {
        case 'g-open': openLevel(+b.dataset.i); return true;
        case 'g-next': slide++; renderLearn($('#v-glearn')); return true;
        case 'g-prev': slide = Math.max(0, slide - 1); renderLearn($('#v-glearn')); return true;
        case 'g-play': startRun(); return true;
        case 'g-daily': cur = DAILY; startRun(); return true;
        case 'g-digit': typeDigit(+b.dataset.d); return true;
        case 'g-pick': { if (run.state !== 'ask') return true; run.picked = +b.dataset.o; answer(run.picked === 0); return true; }
        case 'g-check': { const n = document.querySelectorAll('#v-gplay .pz.tap .sl.on').length; answer(n === run.item.tap.k); return true; }
        case 'g-hint': { const h = $('#gHint'); if (h) { h.hidden = !h.hidden; haptic('light'); } return true; }
        case 'g-continue': nextItem(); return true;
        case 'g-map': run = null; go('game'); return true;
        case 'g-replay': startRun(); return true;
        case 'g-review': slide = 0; run = null; go('glearn'); return true;
        case 'g-nextlevel': openLevel(run.i + 1); return true;
      }
      return false;
    }
    return { renderMap, renderLearn, renderPlay, handle, title: () => cur ? cur.title : 'Math Basics', hasLevel: () => !!cur, hasRun: () => !!run, levels: LEVELS };
  }
  root.PasadoGame = { init, LEVELS };
})(window);
