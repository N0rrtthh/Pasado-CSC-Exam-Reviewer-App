/* Pasado lessons: no-calculator math and analytical reasoning for the CSE-PPT.
   Each lesson: short sections, worked examples revealed step by step, and a practice set
   (skills = generator keys in index.html; topics = [area, topic] pairs from the written bank). */
(function (root) {
  const LESSONS = [
    {
      id: 'mental', area: 'NA', title: 'Mental math without a calculator', mins: 12,
      intro: 'Calculators are not allowed in the CSE-PPT. Most numerical items are built so the numbers come out clean if you use the right shortcut, so a few tricks save minutes on every test.',
      sections: [
        { h: 'Add and subtract by rounding', html: '<p>Round one number to something easy, then fix the difference.</p><p><b>398 + 257</b> → 400 + 257 = 657, then take back the 2 you added: <b>655</b>.</p><p>For <b>1,000 − 387</b>, subtract from 999 first so there is no borrowing: 999 − 387 = 612, then add 1: <b>613</b>.</p>' },
        { h: 'Multiply by 5, 25, and 50', html: '<p>×5 is ×10 then ÷2: 64 × 5 = 640 ÷ 2 = <b>320</b>.</p><p>×25 is ×100 then ÷4: 48 × 25 = 4,800 ÷ 4 = <b>1,200</b>.</p><p>×50 is ×100 then ÷2: 36 × 50 = 3,600 ÷ 2 = <b>1,800</b>.</p>' },
        { h: 'Multiply by 9, 11, and 99', html: '<p>×9 is ×10 minus the number: 47 × 9 = 470 − 47 = <b>423</b>.</p><p>×11 for a two-digit number: add the digits and put the sum in the middle. 53 × 11 → 5 (5+3) 3 = <b>583</b>. If the sum is 10 or more, carry: 78 × 11 → 7 (15) 8 → <b>858</b>.</p><p>×99 is ×100 minus the number: 23 × 99 = 2,300 − 23 = <b>2,277</b>.</p>' },
        { h: 'Split one number (the distributive trick)', html: '<p>36 × 14 = 36 × 10 + 36 × 4 = 360 + 144 = <b>504</b>.</p><p>Double one number and halve the other when that makes it easier: 16 × 35 = 8 × 70 = <b>560</b>.</p>' },
        { h: 'Square numbers that end in 5', html: '<p>Multiply the tens digit by the next number up, then write 25 after it.</p><p>35²: 3 × 4 = 12 → <b>1,225</b>. 65²: 6 × 7 = 42 → <b>4,225</b>.</p>' }
      ],
      examples: [
        { q: 'Compute 48 × 25 without a calculator.', steps: ['×25 is the same as ×100 then ÷4.', '48 × 100 = 4,800.', '4,800 ÷ 4 = 1,200.'], a: '1,200' },
        { q: 'Compute 1,000 − 468.', steps: ['Subtract from 999 first so you never borrow: 999 − 468 = 531.', 'Add back the 1: 531 + 1 = 532.', 'Check: 468 + 532 = 1,000.'], a: '532' },
        { q: 'Compute 67 × 11.', steps: ['Add the digits: 6 + 7 = 13.', 'Write 3 in the middle and carry the 1 to the 6: 7 3 7.', 'So 67 × 11 = 737.'], a: '737' }
      ],
      practice: { skills: ['trick', 'mult2', 'pemdas'] }
    },
    {
      id: 'longhand', area: 'NA', title: 'Multiplying and dividing by hand', mins: 15,
      intro: 'When the numbers are not friendly, fall back on the paper methods from grade school. Done neatly, they are fast and hard to get wrong.',
      sections: [
        { h: 'Long multiplication with partial products', html: '<p>Multiply by each digit of the bottom number, shift one place left for the tens, then add.</p><pre class="calc">     47\n   × 36\n   ----\n    282   ← 47 × 6\n  1,410   ← 47 × 30\n  -----\n  1,692</pre>' },
        { h: 'Long division: divide, multiply, subtract, bring down', html: '<p>Repeat the four steps until no digits are left.</p><pre class="calc">1,872 ÷ 8\n18 ÷ 8 = 2, remainder 2\nbring down 7 → 27 ÷ 8 = 3, remainder 3\nbring down 2 → 32 ÷ 8 = 4, remainder 0\nanswer: 234</pre><p>Check by multiplying back: 234 × 8 = 1,872.</p>' },
        { h: 'Estimate first, then use the choices', html: '<p>Round before you compute: 47 × 36 ≈ 50 × 36 = 1,800. Any choice far from 1,800 is out. In multiple choice you can also multiply a choice back to see if it works.</p>' },
        { h: 'Divisibility rules', html: '<div class="tablewrap"><table class="mix"><tbody><tr><td class="r">2</td><td>Last digit is even</td></tr><tr><td class="r">3</td><td>Sum of digits divisible by 3</td></tr><tr><td class="r">4</td><td>Last two digits divisible by 4</td></tr><tr><td class="r">5</td><td>Ends in 0 or 5</td></tr><tr><td class="r">6</td><td>Divisible by both 2 and 3</td></tr><tr><td class="r">8</td><td>Last three digits divisible by 8</td></tr><tr><td class="r">9</td><td>Sum of digits divisible by 9</td></tr><tr><td class="r">10</td><td>Ends in 0</td></tr></tbody></table></div>' }
      ],
      examples: [
        { q: 'Compute 2,436 ÷ 12.', steps: ['24 ÷ 12 = 2. Write 2. 24 − 24 = 0.', 'Bring down 3. 3 ÷ 12 = 0. Write 0.', 'Bring down 6. 36 ÷ 12 = 3. Write 3.', 'Check: 203 × 12 = 2,436.'], a: '203' },
        { q: 'Compute 64 × 58.', steps: ['Split 58 into 50 + 8.', '64 × 50 = 3,200.', '64 × 8 = 512.', '3,200 + 512 = 3,712. Estimate check: 60 × 60 = 3,600, which is close.'], a: '3,712' },
        { q: 'Is 7,416 divisible by 9?', steps: ['Add the digits: 7 + 4 + 1 + 6 = 18.', '18 is divisible by 9, so 7,416 is too (7,416 ÷ 9 = 824).'], a: 'Yes' }
      ],
      practice: { skills: ['mult2', 'div', 'divis'] }
    },
    {
      id: 'pemdas', area: 'NA', title: 'Order of operations', mins: 8,
      intro: 'Order-of-operations items are easy points, but the choices are designed to catch anyone who simply works left to right.',
      sections: [
        { h: 'GEMDAS', html: '<p><b>G</b>rouping (parentheses, brackets, fraction bars) → <b>E</b>xponents and roots → <b>M</b>ultiplication and <b>D</b>ivision, left to right → <b>A</b>ddition and <b>S</b>ubtraction, left to right.</p>' },
        { h: 'The two common traps', html: '<p>Multiplication does not come before division; they share a level and go left to right. In 18 − 6 ÷ 3 × 2, do 6 ÷ 3 = 2 first, then 2 × 2 = 4, so the answer is 18 − 4 = <b>14</b>.</p><p>Watch negative signs and exponents: −3² = −9, but (−3)² = 9.</p>' }
      ],
      examples: [
        { q: 'Evaluate 5 + 3 × (8 − 2)² ÷ 9.', steps: ['Grouping: 8 − 2 = 6.', 'Exponent: 6² = 36.', 'Multiply and divide left to right: 3 × 36 = 108, then 108 ÷ 9 = 12.', 'Add: 5 + 12 = 17.'], a: '17' },
        { q: 'Evaluate 24 ÷ 4 × 3 − 2.', steps: ['÷ and × left to right: 24 ÷ 4 = 6.', '6 × 3 = 18.', '18 − 2 = 16.'], a: '16' }
      ],
      practice: { skills: ['pemdas', 'roots'] }
    },
    {
      id: 'fractions', area: 'NA', title: 'Fractions without fear', mins: 14,
      intro: 'Fractions show up in basic operations, word problems, and data items. Four rules cover almost everything.',
      sections: [
        { h: 'Simplify by the greatest common factor', html: '<p>18/24: the GCF of 18 and 24 is 6, so 18/24 = <b>3/4</b>.</p>' },
        { h: 'Add and subtract with a common denominator', html: '<p>2/3 + 3/4: the least common denominator is 12. 2/3 = 8/12 and 3/4 = 9/12, so the sum is 17/12 = <b>1 5/12</b>.</p>' },
        { h: 'Multiply straight across, cancel first', html: '<p>4/9 × 3/8: cancel 4 with 8 (leaves 1/2) and 3 with 9 (leaves 1/3). The answer is <b>1/6</b>. Cancelling first keeps the numbers small.</p>' },
        { h: 'Divide by flipping the second fraction', html: '<p>3/5 ÷ 9/10 = 3/5 × 10/9 = 30/45 = <b>2/3</b>.</p>' },
        { h: 'Compare by cross-multiplying', html: '<p>Which is bigger, 5/8 or 3/5? Cross-multiply: 5 × 5 = 25 and 8 × 3 = 24. Since 25 > 24, <b>5/8</b> is bigger.</p><p>Mixed numbers: change 2 3/4 to (2 × 4 + 3)/4 = 11/4 before computing.</p>' }
      ],
      examples: [
        { q: 'Compute 1 1/2 + 2/3.', steps: ['Change the mixed number: 1 1/2 = 3/2.', 'Common denominator 6: 3/2 = 9/6 and 2/3 = 4/6.', '9/6 + 4/6 = 13/6 = 2 1/6.'], a: '2 1/6' },
        { q: 'Compute 3/4 ÷ 3/8.', steps: ['Flip the second fraction and multiply: 3/4 × 8/3.', 'Cancel the 3s, and 8 ÷ 4 = 2.', 'The answer is 2.'], a: '2' },
        { q: 'What is 3/4 of 2/3 of 480?', steps: ['“Of” means multiply. Multiply the fractions first: 3/4 × 2/3 = 6/12 = 1/2.', '1/2 of 480 = 240.'], a: '240' }
      ],
      practice: { skills: ['frac', 'fracCompare'] }
    },
    {
      id: 'percent', area: 'NA', title: 'Percents, decimals, and fractions', mins: 15,
      intro: 'Percent problems are the most common numerical item. Memorize the benchmark values and you can do most of them in your head.',
      sections: [
        { h: 'Benchmarks to memorize', html: '<div class="tablewrap"><table class="mix"><thead><tr><th>Fraction</th><th class="r">Decimal</th><th class="r">Percent</th></tr></thead><tbody><tr><td>1/2</td><td class="r">0.5</td><td class="r">50%</td></tr><tr><td>1/3</td><td class="r">0.333…</td><td class="r">33⅓%</td></tr><tr><td>2/3</td><td class="r">0.666…</td><td class="r">66⅔%</td></tr><tr><td>1/4</td><td class="r">0.25</td><td class="r">25%</td></tr><tr><td>3/4</td><td class="r">0.75</td><td class="r">75%</td></tr><tr><td>1/5</td><td class="r">0.2</td><td class="r">20%</td></tr><tr><td>1/8</td><td class="r">0.125</td><td class="r">12.5%</td></tr><tr><td>3/8</td><td class="r">0.375</td><td class="r">37.5%</td></tr><tr><td>5/8</td><td class="r">0.625</td><td class="r">62.5%</td></tr><tr><td>1/10</td><td class="r">0.1</td><td class="r">10%</td></tr><tr><td>1/20</td><td class="r">0.05</td><td class="r">5%</td></tr></tbody></table></div>' },
        { h: 'Build any percent from 10%, 5%, and 1%', html: '<p>10% moves the decimal point one place left: 10% of 640 = 64. 5% is half of 10%: 32. 1% moves it two places: 6.4.</p><p>So 15% of 640 = 64 + 32 = 96, and 35% = 3 × 64 + 32 = 224.</p><p>Swap when it helps: 8% of 25 = 25% of 8 = <b>2</b>.</p>' },
        { h: 'Percent change and reverse percent', html: '<p>Percent change = (new − old) ÷ <b>old</b> × 100. Always divide by the original amount.</p><p>Reverse: if a number after a 20% increase is 90, the original is 90 ÷ 1.2 = <b>75</b>, not 90 − 18.</p>' },
        { h: 'Successive discounts multiply', html: '<p>25% off and then 10% off is not 35% off. Multiply what remains: 0.75 × 0.90 = 0.675, so the total discount is 32.5%.</p>' }
      ],
      examples: [
        { q: 'What is 15% of 640?', steps: ['10% of 640 = 64.', '5% is half of that: 32.', '15% = 64 + 32 = 96.'], a: '96' },
        { q: 'A price rose from ₱250 to ₱300. What is the percent increase?', steps: ['Change = 300 − 250 = 50.', 'Divide by the ORIGINAL price: 50 ÷ 250 = 1/5.', '1/5 = 20%.'], a: '20%' },
        { q: 'A ₱1,200 item is 20% off, then another 10% off. What is the final price?', steps: ['After 20% off, 80% remains: 1,200 × 0.8 = 960.', 'After another 10% off, 90% remains: 960 × 0.9 = 864.', 'Final price: ₱864 (not ₱840, which assumes 30% off).'], a: '₱864' }
      ],
      practice: { skills: ['pct', 'fracPct', 'pctChange', 'discount', 'double'] }
    },
    {
      id: 'ratio', area: 'NA', title: 'Ratio, proportion, and rates', mins: 12,
      intro: 'Sharing, scaling a recipe, and worker–day problems are all the same idea: keep a relationship fixed while the numbers change.',
      sections: [
        { h: 'The parts method for ratios', html: '<p>Share ₱1,200 in the ratio 3:5. There are 3 + 5 = 8 parts, so one part is 1,200 ÷ 8 = 150. The shares are 3 × 150 = <b>₱450</b> and 5 × 150 = <b>₱750</b>.</p>' },
        { h: 'Proportions by cross-multiplying', html: '<p>If 4 reams cost ₱300, how much do 10 reams cost? 4/300 = 10/x → 4x = 3,000 → x = <b>₱750</b>.</p>' },
        { h: 'Direct or inverse?', html: '<p><b>Direct:</b> more of one means more of the other (reams and cost). Scale up.</p><p><b>Inverse:</b> more of one means less of the other (workers and days). The product stays the same: workers × days = total work.</p>' }
      ],
      examples: [
        { q: 'If 15 workers finish a project in 12 days, how many days will 20 workers take?', steps: ['More workers, fewer days: this is inverse.', 'Total work = 15 × 12 = 180 worker-days.', '180 ÷ 20 = 9 days.'], a: '9 days' },
        { q: 'On a map, 1 cm stands for 5 km. How far apart are two towns that are 7.5 cm apart on the map?', steps: ['This is direct: more centimeters, more kilometers.', '7.5 × 5 = 37.5.'], a: '37.5 km' }
      ],
      practice: { skills: ['ratio', 'proportion', 'work'] }
    },
    {
      id: 'series', area: 'NA', title: 'Number series', mins: 12,
      intro: 'Every number series item hides one rule. Go down this checklist in order, and you will find it quickly.',
      sections: [
        { h: 'The checklist', html: '<ol class="steps"><li>Find the <b>differences</b> between terms. Constant? Add it again.</li><li>If the differences change, find the <b>differences of the differences</b>.</li><li>Check <b>ratios</b>: is each term ×2, ×3, or ÷2 of the last?</li><li>Look at <b>every other term</b>. Two series may alternate.</li><li>Look for <b>squares or cubes</b>, sometimes plus or minus a constant.</li><li>Try <b>combinations</b> such as ×2 + 1.</li><li>Try <b>Fibonacci</b>: each term is the sum of the two before it.</li></ol>' },
        { h: 'Squares and cubes to know by heart', html: '<div class="tablewrap"><table class="mix"><thead><tr><th>n</th><th class="r">1</th><th class="r">2</th><th class="r">3</th><th class="r">4</th><th class="r">5</th><th class="r">6</th><th class="r">7</th><th class="r">8</th><th class="r">9</th><th class="r">10</th><th class="r">11</th><th class="r">12</th><th class="r">13</th><th class="r">14</th><th class="r">15</th></tr></thead><tbody><tr><td>n²</td><td class="r">1</td><td class="r">4</td><td class="r">9</td><td class="r">16</td><td class="r">25</td><td class="r">36</td><td class="r">49</td><td class="r">64</td><td class="r">81</td><td class="r">100</td><td class="r">121</td><td class="r">144</td><td class="r">169</td><td class="r">196</td><td class="r">225</td></tr><tr><td>n³</td><td class="r">1</td><td class="r">8</td><td class="r">27</td><td class="r">64</td><td class="r">125</td><td class="r">216</td><td class="r">343</td><td class="r">512</td><td class="r">729</td><td class="r">1000</td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>' }
      ],
      examples: [
        { q: 'What comes next? 3, 5, 9, 15, 23, ___', steps: ['Differences: 2, 4, 6, 8.', 'The differences grow by 2, so the next is 10.', '23 + 10 = 33.'], a: '33' },
        { q: 'What comes next? 2, 6, 3, 9, 6, 18, ___', steps: ['Differences jump around, so try operations.', '2 × 3 = 6, 6 − 3 = 3, 3 × 3 = 9, 9 − 3 = 6, 6 × 3 = 18.', 'The pattern alternates ×3 and −3: 18 − 3 = 15.'], a: '15' },
        { q: 'What comes next? 1, 1, 2, 3, 5, 8, ___', steps: ['Each term is the sum of the two before it (Fibonacci).', '5 + 8 = 13.'], a: '13' }
      ],
      practice: { skills: ['arith', 'geo', 'incdiff', 'alt', 'squares', 'mulAdd'] }
    },
    {
      id: 'words', area: 'NA', title: 'Word problems: words to equations', mins: 18,
      intro: 'Word problems test translation more than arithmetic. Turn the sentence into an equation, solve it, and then answer exactly what was asked.',
      sections: [
        { h: 'Translation table', html: '<div class="tablewrap"><table class="mix"><tbody><tr><td>is, was, will be, equals</td><td>=</td></tr><tr><td>of (with fractions or %)</td><td>×</td></tr><tr><td>more than, increased by</td><td>+</td></tr><tr><td>5 less than x</td><td>x − 5 (order flips)</td></tr><tr><td>per, for each</td><td>÷</td></tr><tr><td>twice, double</td><td>2 ×</td></tr></tbody></table></div>' },
        { h: 'Four steps every time', html: '<ol class="steps"><li>Name the unknown (let x = the son’s age now).</li><li>Write one equation from the sentence.</li><li>Solve it.</li><li>Re-read the question: does it ask for x, or for the largest number, the total, or the other person’s age?</li></ol>' },
        { h: 'Formulas worth memorizing', html: '<ul><li><b>Working together:</b> 1/a + 1/b = 1/t, so t = (a × b) ÷ (a + b).</li><li><b>Distance:</b> distance = speed × time.</li><li><b>Simple interest:</b> I = P × r × t. Total to pay = P + I.</li><li><b>Average:</b> sum ÷ count. Score needed = target average × number of tests − current total.</li><li><b>Consecutive integers:</b> n, n + 1, n + 2. Even or odd: n, n + 2, n + 4.</li><li><b>Ages:</b> write everyone’s age now, then add the same number of years to each.</li></ul>' }
      ],
      examples: [
        { q: 'Ana is three times as old as her son. In 12 years she will be twice as old as her son. How old is Ana now?', steps: ['Let s = the son’s age now. Ana is 3s.', 'In 12 years: 3s + 12 = 2(s + 12).', '3s + 12 = 2s + 24, so s = 12.', 'The question asks for Ana: 3 × 12 = 36.'], a: '36' },
        { q: 'Clerk A can encode a batch in 3 hours; Clerk B takes 6 hours. How long working together?', steps: ['A does 1/3 of the job per hour, B does 1/6.', '1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 of the job per hour.', 'A whole job takes 2 hours. Shortcut: (3 × 6) ÷ (3 + 6) = 18 ÷ 9 = 2.'], a: '2 hours' },
        { q: '₱20,000 is deposited at 5% simple interest for 3 years. How much interest does it earn?', steps: ['I = P × r × t.', '20,000 × 0.05 = 1,000 per year.', '1,000 × 3 = 3,000.'], a: '₱3,000' }
      ],
      practice: { skills: ['work', 'speed', 'interest', 'average', 'age', 'consec'] }
    },
    {
      id: 'syllogism', area: 'AA', title: 'Syllogisms: all, some, and no', mins: 12,
      intro: 'Draw circles. Syllogism items are easy to rush and get wrong, but a quick sketch makes the answer obvious.',
      sections: [
        { h: 'Picture each statement', html: '<ul><li><b>All A are B:</b> circle A sits completely inside circle B.</li><li><b>Some A are B:</b> the circles overlap.</li><li><b>No A are B:</b> the circles do not touch.</li></ul>' },
        { h: 'Patterns that are valid', html: '<ul><li>All A are B + all B are C → <b>all A are C</b>.</li><li>Some A are B + all B are C → <b>some A are C</b>.</li><li>No A are B + all C are B → <b>no C are A</b>.</li></ul>' },
        { h: 'Traps', html: '<ul><li>“All A are B” does not mean “all B are A.” All clerks are employees, but not every employee is a clerk.</li><li>Two “some” statements never lead to a sure conclusion.</li><li>Ignore what you know about the real world. Judge only what the statements say.</li></ul>' }
      ],
      examples: [
        { q: 'All clerks are employees. Some employees are licensed. Must some clerks be licensed?', steps: ['Draw “clerks” inside “employees.”', 'Draw “licensed” overlapping “employees.” It can overlap the part outside “clerks.”', 'Since a drawing exists where no clerk is licensed, the conclusion does not have to be true.'], a: 'No, it does not follow' },
        { q: 'No fish are mammals. All whales are mammals. What follows?', steps: ['Whales sit inside mammals.', 'Mammals and fish do not touch, so whales and fish cannot touch either.'], a: 'No whales are fish' }
      ],
      practice: { skills: [], topics: [['AA', 'Logic']] }
    },
    {
      id: 'ifthen', area: 'AA', title: 'If–then reasoning', mins: 10,
      intro: 'Conditional statements follow four fixed rules. Two are valid and two are traps, and examiners love the traps.',
      sections: [
        { h: 'Given “If P, then Q”', html: '<div class="tablewrap"><table class="mix"><thead><tr><th>You learn</th><th>You may conclude</th><th>Verdict</th></tr></thead><tbody><tr><td>P is true</td><td>Q is true</td><td>Valid</td></tr><tr><td>Q is false</td><td>P is false</td><td>Valid (contrapositive)</td></tr><tr><td>Q is true</td><td>P is true?</td><td>Invalid (affirming the consequent)</td></tr><tr><td>P is false</td><td>Q is false?</td><td>Invalid (denying the antecedent)</td></tr></tbody></table></div>' },
        { h: 'Tricky wording', html: '<ul><li>“P only if Q” means if P, then Q.</li><li>“P unless Q” means if not Q, then P.</li><li>“All who completed received a certificate” is the same as if completed, then certificate.</li></ul>' }
      ],
      examples: [
        { q: 'If it rains, the seminar moves indoors. The seminar did not move indoors. What follows?', steps: ['P = it rains, Q = the seminar moves indoors.', 'We learn that Q is false.', 'By the contrapositive, P is false.'], a: 'It did not rain' },
        { q: 'If the report is late, the manager is upset. The manager is upset. Was the report late?', steps: ['We learn that Q is true.', 'Concluding P from Q is affirming the consequent, which is invalid. Something else may have upset the manager.'], a: 'Cannot be determined' }
      ],
      practice: { skills: [], topics: [['AA', 'Logic'], ['AA', 'Assumptions & Conclusions']] }
    },
    {
      id: 'analogy', area: 'AA', title: 'Word analogies', mins: 8,
      intro: 'An analogy is a relationship test. Put the first pair into a sentence, then find the choice that fits the same sentence.',
      sections: [
        { h: 'Make a bridge sentence', html: '<p>DOCTOR : HOSPITAL → “A doctor <b>works in</b> a hospital.” Then: “A teacher works in a ___.” → school.</p><p>Keep the order. If the first word is the worker, the third word must be the worker too.</p>' },
        { h: 'Common relationships', html: '<ul><li>Worker and workplace: pilot : cockpit</li><li>Tool and function: knife : cut</li><li>Worker and tool: painter : brush</li><li>Part and whole: page : book</li><li>Group and member: flock : sheep</li><li>Instrument and measurement: thermometer : temperature</li><li>Young and adult: kitten : cat</li><li>Lack of: drought : water</li><li>Opposites and synonyms</li></ul>' }
      ],
      examples: [
        { q: 'THERMOMETER : TEMPERATURE :: BAROMETER : ___', steps: ['Bridge: a thermometer measures temperature.', 'A barometer measures ___ → atmospheric pressure.', 'Rain gauge, anemometer, and hygrometer measure the other choices.'], a: 'Atmospheric pressure' }
      ],
      practice: { skills: [], topics: [['AA', 'Analogy']] }
    },
    {
      id: 'puzzles', area: 'AA', title: 'Arrangements, rankings, directions, calendars', mins: 14,
      intro: 'These puzzles reward a quick sketch. Never try to hold four clues in your head at once.',
      sections: [
        { h: 'Queues and rankings', html: '<p>Total in a line = position from the front + position from the back − 1 (the person is counted twice).</p><p>For rankings, write a chain: Ed > Ben > Carlo > Dan.</p>' },
        { h: 'Seating and order', html: '<p>Draw empty slots. Place the fixed clues first (“Dino is at the far left”), then the relative ones (“Ana is left of Ben”).</p>' },
        { h: 'Directions', html: '<p>Turning right goes clockwise: N → E → S → W → N. Turning left goes the other way. A 180° turn faces the opposite direction.</p>' },
        { h: 'Days of the week', html: '<p>Divide the number of days by 7 and keep only the remainder. 100 days = 14 weeks + 2 days, so it is 2 days after today.</p>' },
        { h: 'Family relations', html: '<p>Draw a small tree. “My mother’s only son” is me if I am male, or my brother if I am female.</p>' }
      ],
      examples: [
        { q: 'Liza is 7th from the front and 12th from the back. How many are in the line?', steps: ['7 + 12 counts Liza twice.', '7 + 12 − 1 = 18.'], a: '18' },
        { q: 'Today is Wednesday. What day is it 100 days from today?', steps: ['100 ÷ 7 = 14 remainder 2.', 'Count 2 days after Wednesday: Thursday, Friday.'], a: 'Friday' }
      ],
      practice: { skills: ['queue', 'days', 'direction'], topics: [['AA', 'Logic']] }
    },
    {
      id: 'coding', area: 'AA', title: 'Letter series and codes', mins: 10,
      intro: 'Knowing letter positions instantly turns these items into simple arithmetic.',
      sections: [
        { h: 'Remember EJOTY', html: '<p>E = 5, J = 10, O = 15, T = 20, Y = 25. Count from the nearest one: R is 2 before T, so R = 18.</p><pre class="calc">A B C D E | F G H I J | K L M N O | P Q R S T | U V W X Y | Z\n1 2 3 4 5 | 6 7 8 9 10|11 . . . 15|16 . . . 20|21 . . . 25|26</pre>' },
        { h: 'Opposite letters add up to 27', html: '<p>A ↔ Z (1 + 26), B ↔ Y, M ↔ N. To code a word in reverse alphabet, replace each letter by 27 minus its position: C (3) → 24 = X.</p>' },
        { h: 'Common code types', html: '<ul><li>Shift every letter by the same amount (TABLE → UBCMF is +1).</li><li>Reverse alphabet (A ↔ Z).</li><li>Write the word backward (MANGO → OGNAM).</li><li>Letters to numbers (A = 1 … Z = 26).</li></ul>' }
      ],
      examples: [
        { q: 'In reverse-alphabet code (A ↔ Z), how is CSC written?', steps: ['C = 3 → 27 − 3 = 24 = X.', 'S = 19 → 27 − 19 = 8 = H.', 'CSC → XHX.'], a: 'XHX' },
        { q: 'What letter comes next? A, C, F, J, O, ___', steps: ['Positions: 1, 3, 6, 10, 15.', 'Differences: 2, 3, 4, 5. Next is 6.', '15 + 6 = 21 = U.'], a: 'U' }
      ],
      practice: { skills: ['letters', 'shift', 'alphaSum'], topics: [['AA', 'Series & Coding']] }
    },
    {
      id: 'data', area: 'AA', title: 'Assumptions, conclusions, and data tables', mins: 12,
      intro: 'These items reward careful reading over clever thinking. Use only the information given.',
      sections: [
        { h: 'Assumptions', html: '<p>An assumption is an unstated belief that the statement depends on. Test it: if the assumption were false, would the statement still make sense? If not, it is an assumption.</p>' },
        { h: 'Conclusions', html: '<p>A conclusion must follow from the statement alone. Reject choices that need outside knowledge or that go further than the statement does (“always,” “all,” “never”).</p>' },
        { h: 'Reading a table', html: '<ol class="steps"><li>Read the title and units first.</li><li>Find totals before computing shares.</li><li>An overall rate is total part ÷ total whole. Averaging the individual rates is a common trap.</li><li>Estimate, then match a choice.</li></ol>' }
      ],
      examples: [
        { q: 'Four regions had 12,000, 8,000, 20,000, and 10,000 examinees, with 1,800, 1,600, 2,400, and 2,200 passers. What is the overall passing rate?', steps: ['Total examinees: 50,000. Total passers: 8,000.', '8,000 ÷ 50,000 = 8/50 = 16/100.', 'The overall rate is 16%. The average of the four rates (17.25%) is the trap.'], a: '16%' }
      ],
      practice: { skills: [], topics: [['AA', 'Assumptions & Conclusions'], ['AA', 'Data Interpretation']] }
    }
  ];
  root.PASADO_LESSONS = LESSONS;
})(window);
