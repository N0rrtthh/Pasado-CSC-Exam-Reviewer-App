/* Pasado question bank: original items written to the CSC Scope of Examination
   for the CSE-PPT (Professional & Subprofessional). Correct choice is listed first;
   the app shuffles choices at display time. */
(function (root) {
  const BANK = [];
  const count = {};
  function T(area, topic, rows) {
    rows.forEach(r => {
      const key = area + '.' + topic.replace(/[^A-Za-z0-9]/g, '');
      count[key] = (count[key] || 0) + 1;
      BANK.push({ id: key + '.' + count[key], area, topic, q: r[0], c: r[1], k: 0, x: r[2], p: r[3] || null });
    });
  }

  const PASSAGES = {
    p1: '<p>Government frontline offices often measure success by the number of transactions completed in a day. Yet speed alone can mislead. A permit released in an hour is of little use if it contains errors that force the applicant to return the following week. For this reason, many agencies now also track their “first-time-right” rate: the share of transactions completed correctly with no need for correction or follow-up. Offices that adopted the measure found that staff began double-checking forms before release, and that total waiting time across all visits actually fell.</p>',
    p2: '<p>Mangroves line much of the Philippine coastline, and their tangled roots do more than anchor the trees. They trap sediment, shelter young fish, and absorb wave energy during storms. Studies after strong typhoons have found that villages behind wide mangrove belts suffered less damage than those whose mangroves had been cleared for fishponds. Replanting is not simple, however. Seedlings planted in the wrong zone of the tide often die within a year, so restoration works best when it follows the species and locations where mangroves grew naturally.</p>',
    p3: '<p>Reviewees who spread their study over several weeks tend to remember more than those who cram the same number of hours into a few days. Researchers call this the spacing effect. Short, regular sessions give the brain time to consolidate what was learned, and each return to the material strengthens recall. Cramming can feel productive because the information is fresh, but much of it fades within days.</p>',
    t1: '<p class="cap">Examinees and passers by region</p><table><thead><tr><th>Region</th><th>Examinees</th><th>Passers</th></tr></thead><tbody><tr><td>A</td><td>12,000</td><td>1,800</td></tr><tr><td>B</td><td>8,000</td><td>1,600</td></tr><tr><td>C</td><td>20,000</td><td>2,400</td></tr><tr><td>D</td><td>10,000</td><td>2,200</td></tr></tbody></table>',
    t2: '<p class="cap">An office’s ₱2,400,000 annual budget</p><table><thead><tr><th>Expense class</th><th>Share</th></tr></thead><tbody><tr><td>Personnel Services (PS)</td><td>45%</td></tr><tr><td>Maintenance and Other Operating Expenses (MOOE)</td><td>35%</td></tr><tr><td>Capital Outlay (CO)</td><td>20%</td></tr></tbody></table>'
  };

  /* ---------------- GENERAL INFORMATION ---------------- */
  T('GI', 'Constitution', [
    ['When was the 1987 Philippine Constitution ratified in a national plebiscite?', ['February 2, 1987', 'February 25, 1986', 'January 17, 1973', 'October 15, 1986'], 'The plebiscite was held on February 2, 1987, which is also the date the Constitution took effect.'],
    ['What is the minimum age to be elected President of the Philippines?', ['40 years old on election day', '35 years old on election day', '45 years old on election day', '50 years old on election day'], 'Art. VII, Sec. 2: natural-born citizen, registered voter, able to read and write, at least 40 on election day, and a resident for at least 10 years.'],
    ['The President of the Philippines serves a term of:', ['Six years, without reelection', 'Four years, with one reelection', 'Six years, with one reelection', 'Five years, without reelection'], 'Art. VII, Sec. 4: the President is not eligible for any reelection.'],
    ['How many Senators make up the Senate?', ['24', '12', '25', '30'], 'Art. VI, Sec. 2: 24 Senators elected at large.'],
    ['A Senator may serve no more than how many consecutive terms?', ['Two', 'One', 'Three', 'Four'], 'Art. VI, Sec. 4: a six-year term, no more than two consecutive terms.'],
    ['Members of the House of Representatives serve a term of:', ['Three years, up to three consecutive terms', 'Six years, up to two consecutive terms', 'Three years, up to two consecutive terms', 'Four years, up to two consecutive terms'], 'Art. VI, Sec. 7.'],
    ['Party-list representatives make up what share of the total membership of the House?', ['20 percent', '10 percent', '25 percent', '30 percent'], 'Art. VI, Sec. 5(2).'],
    ['Which article of the 1987 Constitution is the Bill of Rights?', ['Article III', 'Article II', 'Article IV', 'Article XIII'], 'Article III is the Bill of Rights. Article II is the Declaration of Principles and State Policies.'],
    ['Which article of the 1987 Constitution covers the Civil Service Commission?', ['Article IX-B', 'Article IX-A', 'Article IX-C', 'Article XI'], 'Article IX covers the Constitutional Commissions: IX-B is the CSC, IX-C is COMELEC, IX-D is COA.'],
    ['The Civil Service Commission is composed of:', ['A Chairman and two Commissioners', 'A Chairman and four Commissioners', 'A Chairman and six Commissioners', 'Five Commissioners who elect a Chairman'], 'Art. IX-B, Sec. 1(1).'],
    ['The Chairman and Commissioners of the CSC are appointed for a term of:', ['Seven years without reappointment', 'Six years with one reappointment', 'Five years without reappointment', 'Seven years with one reappointment'], 'Art. IX-B, Sec. 1(2).'],
    ['Which three bodies are the independent Constitutional Commissions?', ['CSC, COMELEC, and COA', 'CSC, CHR, and COMELEC', 'COA, Ombudsman, and CSC', 'COMELEC, CHR, and COA'], 'Art. IX-A, Sec. 1. The CHR and the Ombudsman are independent offices but are not Constitutional Commissions.'],
    ['The civil service covers all branches, subdivisions, instrumentalities, and agencies of the Government, including government-owned or controlled corporations:', ['With original charters', 'Without original charters', 'Organized under the Corporation Code', 'Listed on the stock exchange'], 'Art. IX-B, Sec. 2(1).'],
    ['Appointments in the civil service are made according to:', ['Merit and fitness, determined as far as practicable by competitive examination', 'Seniority in government service', 'Recommendations of elected officials', 'Educational attainment alone'], 'Art. IX-B, Sec. 2(2). Policy-determining, primarily confidential, and highly technical positions are the exceptions.'],
    ['Under the Constitution, which act is PROHIBITED for civil service officers and employees?', ['Engaging in electioneering or partisan political campaigns', 'Joining an employees’ organization', 'Voting in national elections', 'Filing a complaint against a superior'], 'Art. IX-B, Sec. 2(4). The right to self-organization is guaranteed in Sec. 2(5).'],
    ['A candidate who lost in an election may NOT be appointed to a government office within:', ['One year after the election', 'Six months after the election', 'Two years after the election', 'Three years after the election'], 'Art. IX-B, Sec. 6.'],
    ['“Public office is a public trust” is the opening line of which article?', ['Article XI – Accountability of Public Officers', 'Article IX – Constitutional Commissions', 'Article II – Declaration of Principles', 'Article VII – Executive Department'], 'Art. XI, Sec. 1.'],
    ['Who has the exclusive power to initiate all cases of impeachment?', ['The House of Representatives', 'The Senate', 'The Supreme Court', 'The Ombudsman'], 'Art. XI, Sec. 3(1). The Senate has the sole power to try and decide impeachment cases.'],
    ['Which of the following officials is NOT impeachable?', ['A Cabinet Secretary', 'The Vice President', 'A Justice of the Supreme Court', 'The Ombudsman'], 'Art. XI, Sec. 2 lists the President, Vice President, Members of the Supreme Court, Members of the Constitutional Commissions, and the Ombudsman.'],
    ['The Supreme Court is composed of a Chief Justice and how many Associate Justices?', ['14', '12', '15', '10'], 'Art. VIII, Sec. 4(1): 15 members in all.'],
    ['The President may declare martial law or suspend the privilege of the writ of habeas corpus for a period not exceeding:', ['60 days', '30 days', '90 days', 'One year'], 'Art. VII, Sec. 18. Congress may revoke it by a majority vote of all its Members voting jointly.'],
    ['While the privilege of the writ of habeas corpus is suspended, an arrested person must be judicially charged within how many days, or be released?', ['Three days', 'Five days', 'Seven days', 'Fifteen days'], 'Art. VII, Sec. 18.'],
    ['To override a presidential veto, a bill must be approved again by:', ['Two-thirds of all the Members of each House', 'A simple majority of each House', 'Three-fourths of all Members of Congress', 'Two-thirds of the Senate only'], 'Art. VI, Sec. 27(1).'],
    ['Who has the sole power to declare the existence of a state of war?', ['Congress, by two-thirds of both Houses in joint session, voting separately', 'The President as Commander-in-Chief', 'The Secretary of National Defense', 'The Senate alone'], 'Art. VI, Sec. 23(1).'],
    ['What is the national language of the Philippines under the 1987 Constitution?', ['Filipino', 'Tagalog', 'Pilipino', 'English'], 'Art. XIV, Sec. 6. Filipino and, until otherwise provided by law, English are the official languages (Sec. 7).'],
    ['To vote, a citizen must be at least 18 and must have lived in the Philippines for at least:', ['One year, and in the place of voting for at least six months', 'Six months, and in the place of voting for at least three months', 'Two years, and in the place of voting for at least one year', 'One year, and in the place of voting for at least one year'], 'Art. V, Sec. 1.'],
    ['Through a people’s initiative, amendments to the Constitution may be proposed by a petition of at least:', ['12% of all registered voters, with at least 3% in every legislative district', '10% of all registered voters, with at least 5% in every district', '20% of all registered voters nationwide', '5% of all registered voters, with at least 1% in every district'], 'Art. XVII, Sec. 2.'],
    ['Elective local officials, except barangay officials, serve three-year terms and may serve no more than:', ['Three consecutive terms', 'Two consecutive terms', 'Four consecutive terms', 'One term'], 'Art. X, Sec. 8.'],
    ['“The prime duty of the Government is to serve and protect the people.” This provision is found in:', ['Article II – Declaration of Principles and State Policies', 'Article III – Bill of Rights', 'Article XIII – Social Justice and Human Rights', 'The Preamble'], 'Art. II, Sec. 4.'],
    ['Which principle is stated in Article II, Section 3 of the 1987 Constitution?', ['Civilian authority is, at all times, supreme over the military', 'The separation of Church and State shall be inviolable', 'The Philippines renounces war as an instrument of national policy', 'The State values the dignity of every human person'], 'Sec. 3 is civilian supremacy. Church–State separation is Sec. 6; renouncing war is Sec. 2; human dignity is Sec. 11.'],
    ['“No person shall be twice put in jeopardy of punishment for the same offense.” This right is the:', ['Protection against double jeopardy', 'Right to due process', 'Right against self-incrimination', 'Right to a speedy disposition of cases'], 'Art. III, Sec. 21.'],
    ['Under the Bill of Rights, no person shall be imprisoned for:', ['Debt or non-payment of a poll tax', 'Violation of a city ordinance', 'Estafa', 'Failure to file a SALN'], 'Art. III, Sec. 20.'],
    ['The right of the people to information on matters of public concern is guaranteed in:', ['Article III, Section 7', 'Article XI, Section 1', 'Article IX-B, Section 3', 'Article VI, Section 1'], 'Art. III, Sec. 7. It works together with the State policy of full public disclosure in Art. II, Sec. 28.'],
    ['If both the President and the Vice President die or become permanently disabled, who acts as President?', ['The Senate President, then the Speaker of the House', 'The Chief Justice', 'The Speaker of the House, then the Senate President', 'The Executive Secretary'], 'Art. VII, Sec. 8.'],
    ['Who may be appointed to the Cabinet WITHOUT confirmation by the Commission on Appointments?', ['The Vice President', 'A Senator', 'The Chief Justice', 'A sitting Governor'], 'Art. VII, Sec. 3.'],
    ['An elective official may NOT be appointed or designated to any other public office:', ['During his or her tenure', 'Within one year after the election', 'Unless confirmed by the Commission on Appointments', 'Without the consent of the CSC'], 'Art. IX-B, Sec. 7.']
  ]);

  T('GI', 'RA 6713 & Ethics', [
    ['Republic Act No. 6713 is known as the:', ['Code of Conduct and Ethical Standards for Public Officials and Employees', 'Anti-Graft and Corrupt Practices Act', 'Anti-Red Tape Act', 'Civil Service Law'], 'RA 6713 was approved on February 20, 1989. The Anti-Graft and Corrupt Practices Act is RA 3019.'],
    ['Under RA 6713, officials must act on letters and requests from the public within how many working days from receipt?', ['15 working days', '5 working days', '10 working days', '30 working days'], 'RA 6713, Sec. 5(a).'],
    ['The annual Statement of Assets, Liabilities and Net Worth (SALN) must be filed on or before:', ['April 30', 'January 31', 'March 31', 'June 30'], 'RA 6713, Sec. 8. It is also filed within 30 days after assuming office and within 30 days after separation.'],
    ['A newly hired employee must file a SALN within how many days after assuming office?', ['30 days', '15 days', '60 days', '90 days'], 'RA 6713, Sec. 8(A).'],
    ['Which of the following is NOT one of the eight norms of conduct in Section 4 of RA 6713?', ['Seniority and tenure', 'Simple living', 'Political neutrality', 'Responsiveness to the public'], 'The eight norms: commitment to public interest, professionalism, justness and sincerity, political neutrality, responsiveness to the public, nationalism and patriotism, commitment to democracy, and simple living.'],
    ['An employee lives modestly, within her position and income, and avoids extravagant displays of wealth. Which norm is she observing?', ['Simple living', 'Professionalism', 'Commitment to democracy', 'Justness and sincerity'], 'RA 6713, Sec. 4(h).'],
    ['An employee serves everyone without unfair discrimination, regardless of party affiliation. This norm is:', ['Political neutrality', 'Nationalism and patriotism', 'Commitment to public interest', 'Professionalism'], 'RA 6713, Sec. 4(d).'],
    ['When a conflict of interest arises, an official must resign from the private business or divest the shareholdings within:', ['60 days from assumption of office', '30 days from assumption of office', '90 days from assumption of office', 'One year from assumption of office'], 'RA 6713, Sec. 9.'],
    ['Under RA 6713, “public officials” include employees:', ['Whether or not they receive compensation, regardless of amount', 'Only if they hold permanent appointments', 'Only if they are in the career service', 'Only if they were elected'], 'Sec. 3(b) covers elective and appointive, permanent or temporary, career or non-career personnel, paid or not.'],
    ['Which is a PROHIBITED act under Section 7 of RA 6713?', ['Soliciting or accepting gifts in connection with official duties', 'Attending a seminar on public service', 'Joining a union of government employees', 'Teaching part-time with proper authority'], 'Sec. 7(d) prohibits soliciting or accepting gifts, favors, loans, or anything of monetary value in the course of official duties.'],
    ['The ban on private practice connected with one’s former office continues for how long after resignation, retirement, or separation?', ['One year', 'Six months', 'Two years', 'Five years'], 'RA 6713, Sec. 7(b)(2).'],
    ['A violation of Sections 7, 8, or 9 of RA 6713 is punishable by imprisonment not exceeding:', ['Five years, or a fine not exceeding ₱5,000, or both', 'One year, or a fine not exceeding ₱1,000', 'Ten years, or a fine not exceeding ₱50,000', 'Six months, or a fine equal to one month’s salary'], 'RA 6713, Sec. 11(a).'],
    ['Which agency issues the rules implementing RA 6713?', ['Civil Service Commission', 'Office of the Ombudsman', 'Commission on Audit', 'Department of Justice'], 'RA 6713, Sec. 12.'],
    ['Under RA 11032 (Ease of Doing Business Act of 2018), a SIMPLE transaction must be acted on within:', ['3 working days', '1 working day', '5 working days', '7 working days'], 'RA 11032: simple – 3 working days; complex – 7 working days; highly technical – 20 working days.'],
    ['Under RA 11032, an application that is HIGHLY TECHNICAL must be acted on within:', ['20 working days', '7 working days', '15 working days', '30 working days'], 'RA 11032, Sec. 9.'],
    ['Which office investigates and prosecutes graft and corruption cases against public officials?', ['Office of the Ombudsman', 'Civil Service Commission', 'Commission on Audit', 'Commission on Human Rights'], 'The Ombudsman (Art. XI; RA 6770), with cases often filed before the Sandiganbayan.'],
    ['Under RA 6713, “relatives” are persons related to the official within the:', ['Fourth civil degree of consanguinity or affinity', 'Second civil degree', 'Third civil degree', 'Sixth civil degree'], 'RA 6713, Sec. 3(k).']
  ]);

  T('GI', 'Peace & Human Rights', [
    ['The Universal Declaration of Human Rights was adopted by the UN General Assembly on:', ['December 10, 1948', 'October 24, 1945', 'June 26, 1945', 'December 10, 1966'], 'December 10 is observed as Human Rights Day.'],
    ['The Commission on Human Rights was created by:', ['The 1987 Constitution', 'An executive order of the President', 'Republic Act No. 6713', 'The 1973 Constitution'], 'Art. XIII, Sec. 17 of the 1987 Constitution.'],
    ['Republic Act No. 9262 is the:', ['Anti-Violence Against Women and Their Children Act of 2004', 'Magna Carta of Women', 'Safe Spaces Act', 'Anti-Sexual Harassment Act of 1995'], 'The Magna Carta of Women is RA 9710; the Safe Spaces Act is RA 11313; the Anti-Sexual Harassment Act is RA 7877.'],
    ['Gender-based sexual harassment in streets, public spaces, online, and workplaces is penalized under:', ['RA 11313 (Safe Spaces Act)', 'RA 7610', 'RA 9208', 'RA 10173'], 'RA 11313 of 2019 is also called the “Bawal Bastos” law.'],
    ['The law giving special protection to children against abuse, exploitation, and discrimination is:', ['RA 7610', 'RA 9262', 'RA 11313', 'RA 9745'], 'RA 7610 (1992).'],
    ['Which law penalizes torture and other cruel, inhuman, and degrading treatment or punishment?', ['RA 9745', 'RA 9208', 'RA 10368', 'RA 7877'], 'RA 9745 is the Anti-Torture Act of 2009.'],
    ['The International Day of Peace is observed every:', ['September 21', 'December 10', 'August 12', 'October 24'], 'The UN observes the International Day of Peace on September 21.'],
    ['Civil and political rights, such as free speech and the right to vote, are classified as:', ['First-generation rights', 'Second-generation rights', 'Third-generation rights', 'Collective rights'], 'Second-generation rights are economic, social, and cultural; third-generation rights are collective or solidarity rights.'],
    ['The rights to education, work, and social security belong to which group?', ['Economic, social, and cultural rights', 'Civil and political rights', 'Solidarity rights', 'Rights of indigenous peoples only'], 'These are often called second-generation rights.'],
    ['Human rights cannot be taken away or surrendered except in specific situations under due process. This means they are:', ['Inalienable', 'Indivisible', 'Interdependent', 'Universal'], 'Inalienable means they cannot be given up or taken away arbitrarily.'],
    ['Republic Act No. 11054 is the:', ['Organic Law for the Bangsamoro Autonomous Region in Muslim Mindanao', 'Indigenous Peoples’ Rights Act', 'Anti-Terrorism Act', 'Local Government Code'], 'RA 11054 (2018) created BARMM. IPRA is RA 8371; the Local Government Code is RA 7160.'],
    ['The law that protects personal information in information and communications systems is:', ['RA 10173 (Data Privacy Act of 2012)', 'RA 10175 (Cybercrime Prevention Act)', 'RA 8792 (E-Commerce Act)', 'RA 11032'], 'RA 10173 also created the National Privacy Commission.'],
    ['The Magna Carta of Women is:', ['RA 9710', 'RA 9262', 'RA 7877', 'RA 11313'], 'RA 9710 (2009).'],
    ['The law providing reparation and recognition to victims of human rights violations under the Marcos martial law regime is:', ['RA 10368', 'RA 9745', 'RA 9851', 'RA 7438'], 'RA 10368, the Human Rights Victims Reparation and Recognition Act of 2013.'],
    ['The rights of persons arrested, detained, or under custodial investigation, including the right to counsel, are spelled out in:', ['RA 7438', 'RA 9262', 'RA 6713', 'RA 10173'], 'RA 7438 (1992) implements Art. III, Sec. 12 of the Constitution.'],
    ['Which UN treaty, ratified by the Philippines in 1990, sets out the rights of every person below 18?', ['Convention on the Rights of the Child', 'Convention on the Elimination of All Forms of Discrimination Against Women', 'International Covenant on Civil and Political Rights', 'Geneva Conventions'], 'The CRC was adopted in 1989 and ratified by the Philippines in 1990.']
  ]);

  T('GI', 'Environment', [
    ['Republic Act No. 9003 is the:', ['Ecological Solid Waste Management Act of 2000', 'Philippine Clean Air Act of 1999', 'Philippine Clean Water Act of 2004', 'Climate Change Act of 2009'], 'RA 9003 requires segregation at source and prohibits open dumpsites.'],
    ['The Philippine Clean Air Act is:', ['RA 8749', 'RA 9275', 'RA 9003', 'RA 6969'], 'RA 8749 (1999).'],
    ['The Philippine Clean Water Act is:', ['RA 9275', 'RA 8749', 'RA 9147', 'RA 7586'], 'RA 9275 (2004).'],
    ['Which law created the Climate Change Commission?', ['RA 9729', 'RA 10121', 'RA 9512', 'RA 8550'], 'RA 9729, the Climate Change Act of 2009.'],
    ['Which law established the National Disaster Risk Reduction and Management Council (NDRRMC)?', ['RA 10121', 'RA 9729', 'RA 7160', 'RA 9003'], 'RA 10121, the Philippine DRRM Act of 2010.'],
    ['The NIPAS Act (RA 7586) on protected areas was later amended by:', ['RA 11038, the Expanded NIPAS Act of 2018', 'RA 9147', 'RA 11898', 'RA 10654'], 'RA 11038 added more protected areas to the system.'],
    ['The law that protects wildlife resources and their habitats is:', ['RA 9147', 'RA 8550', 'RA 7586', 'RA 6969'], 'RA 9147, the Wildlife Resources Conservation and Protection Act of 2001.'],
    ['The law regulating toxic substances and hazardous and nuclear wastes is:', ['RA 6969', 'RA 9275', 'RA 8749', 'RA 9003'], 'RA 6969 (1990).'],
    ['Under the Philippine Environmental Impact Statement System, a project that may affect the environment must secure an:', ['Environmental Compliance Certificate (ECC)', 'Mayor’s Permit only', 'Certificate of Ancestral Domain Title', 'Business Name Registration'], 'PD 1586 set up the EIS System; the DENR’s Environmental Management Bureau issues ECCs.'],
    ['Which international agreement phases out ozone-depleting substances such as CFCs?', ['Montreal Protocol', 'Kyoto Protocol', 'Paris Agreement', 'Ramsar Convention'], 'The Montreal Protocol (1987) protects the ozone layer. The Ramsar Convention covers wetlands.'],
    ['The Paris Agreement (2015) aims to keep global warming well below 2°C and to pursue efforts to limit it to:', ['1.5°C above pre-industrial levels', '1.0°C above pre-industrial levels', '2.5°C above pre-industrial levels', '3.0°C above pre-industrial levels'], 'That is the agreement’s headline temperature goal.'],
    ['Which greenhouse gas contributes most to human-caused global warming?', ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Argon'], 'Carbon dioxide from burning fossil fuels is the largest contributor; methane is second.'],
    ['Under RA 9003, which kind of waste facility is prohibited?', ['Open dumpsites', 'Sanitary landfills', 'Materials recovery facilities', 'Composting facilities'], 'RA 9003, Sec. 37 prohibits open dumps.'],
    ['Food scraps, leaves, and other materials that decompose naturally are classified as:', ['Biodegradable waste', 'Residual waste', 'Special waste', 'Hazardous waste'], 'Biodegradable waste can be composted.'],
    ['The law requiring large companies to recover or offset their plastic packaging waste is:', ['RA 11898 (Extended Producer Responsibility Act of 2022)', 'RA 9003', 'RA 9512', 'RA 11038'], 'RA 11898 amended RA 9003.'],
    ['Which department is the lead government agency for the environment and natural resources?', ['DENR', 'DILG', 'DOST', 'DA'], 'The Department of Environment and Natural Resources.'],
    ['Earth Day is observed every:', ['April 22', 'June 5', 'March 22', 'September 16'], 'June 5 is World Environment Day; March 22 is World Water Day; September 16 is World Ozone Day.'],
    ['The national bird of the Philippines is the:', ['Philippine Eagle', 'Maya', 'Philippine Cockatoo', 'Kingfisher'], 'Proclamation No. 615 (1995) declared the Philippine Eagle the national bird.']
  ]);

  /* ---------------- VERBAL ABILITY ---------------- */
  T('VA', 'Vocabulary', [
    ['Choose the word closest in meaning to UBIQUITOUS.', ['Present everywhere', 'Rare', 'Ancient', 'Invisible'], 'Ubiquitous means found everywhere.'],
    ['Choose the word closest in meaning to CANDID.', ['Frank', 'Careful', 'Secretive', 'Rude'], 'A candid remark is open and honest.'],
    ['Choose the word closest in meaning to METICULOUS.', ['Very careful and precise', 'Careless', 'Hasty', 'Lazy'], 'Meticulous means showing great attention to detail.'],
    ['Choose the word closest in meaning to EPHEMERAL.', ['Short-lived', 'Eternal', 'Heavy', 'Colorful'], 'Ephemeral means lasting a very short time.'],
    ['Choose the word closest in meaning to BENEVOLENT.', ['Kind', 'Cruel', 'Wealthy', 'Strict'], 'Benevolent means well-meaning and kindly.'],
    ['Choose the word closest in meaning to PRAGMATIC.', ['Practical', 'Idealistic', 'Stubborn', 'Emotional'], 'Pragmatic means dealing with things sensibly and realistically.'],
    ['Choose the word closest in meaning to LETHARGIC.', ['Sluggish', 'Energetic', 'Angry', 'Cheerful'], 'Lethargic means lacking energy.'],
    ['Choose the word closest in meaning to EXACERBATE.', ['Make worse', 'Relieve', 'Explain', 'Delay'], 'To exacerbate a problem is to make it worse.'],
    ['Choose the word closest in meaning to MITIGATE.', ['Lessen', 'Worsen', 'Ignore', 'Measure'], 'To mitigate is to make less severe.'],
    ['Choose the word closest in meaning to OSTENTATIOUS.', ['Showy', 'Modest', 'Cheap', 'Quiet'], 'Ostentatious means designed to impress or attract notice.'],
    ['Choose the word closest in meaning to FRUGAL.', ['Thrifty', 'Wasteful', 'Generous', 'Poor'], 'Frugal means sparing or economical with money.'],
    ['Choose the word closest in meaning to IMPARTIAL.', ['Unbiased', 'Incomplete', 'Unfair', 'Uninterested'], 'Impartial means treating all sides equally.'],
    ['Choose the word closest in meaning to DILIGENT.', ['Hardworking', 'Intelligent', 'Careless', 'Friendly'], 'Diligent means showing steady, earnest effort.'],
    ['Choose the word closest in meaning to CONCISE.', ['Brief and clear', 'Wordy', 'Confusing', 'Complete'], 'Concise means giving a lot of information in few words.'],
    ['Choose the word closest in meaning to INCESSANT.', ['Continuous', 'Occasional', 'Loud', 'Sudden'], 'Incessant means continuing without pause.'],
    ['Choose the word closest in meaning to ADVERSE.', ['Harmful', 'Helpful', 'Favorable', 'Gradual'], 'Adverse means preventing success or development; harmful.'],
    ['Choose the word OPPOSITE in meaning to VERBOSE.', ['Concise', 'Talkative', 'Lengthy', 'Wordy'], 'Verbose means using more words than needed; its opposite is concise.'],
    ['Choose the word OPPOSITE in meaning to SCARCE.', ['Abundant', 'Rare', 'Expensive', 'Small'], 'Scarce means in short supply.'],
    ['Choose the word OPPOSITE in meaning to OPAQUE.', ['Transparent', 'Dark', 'Solid', 'Cloudy'], 'Opaque means not able to be seen through.'],
    ['Choose the word OPPOSITE in meaning to HOSTILE.', ['Friendly', 'Aggressive', 'Strange', 'Loud'], 'Hostile means unfriendly or antagonistic.'],
    ['Choose the word OPPOSITE in meaning to RELUCTANT.', ['Eager', 'Hesitant', 'Slow', 'Unwilling'], 'Reluctant means unwilling; eager is the opposite.'],
    ['Choose the word OPPOSITE in meaning to TEMPORARY.', ['Permanent', 'Brief', 'Early', 'Passing'], 'Temporary means lasting for a limited time.'],
    ['Choose the word OPPOSITE in meaning to ACQUIT.', ['Convict', 'Release', 'Free', 'Pardon'], 'To acquit is to declare not guilty; to convict is to declare guilty.'],
    ['The memo was so ______ that even long-time employees could not tell what it required.', ['convoluted', 'lucid', 'brief', 'courteous'], 'Convoluted means extremely complex and hard to follow; lucid would mean clear.'],
    ['Because the evidence was ______, the investigator could not file charges.', ['insufficient', 'conclusive', 'abundant', 'relevant'], 'Only insufficient evidence explains why charges could not be filed.'],
    ['The new supervisor was praised for being ______; she always admitted her mistakes openly.', ['forthright', 'evasive', 'arrogant', 'indifferent'], 'Forthright means direct and honest.'],
    ['The agency aims to ______ its processes so that permits are released faster.', ['streamline', 'complicate', 'prolong', 'duplicate'], 'To streamline is to make a process simpler and more efficient.'],
    ['“To burn the midnight oil” means to:', ['Work or study late into the night', 'Waste resources', 'Start a fire', 'Celebrate a success'], 'The idiom refers to working late by lamplight.'],
    ['“To break the ice” means to:', ['Ease tension and start a conversation', 'Damage something fragile', 'Cancel a plan', 'Reveal a secret'], 'Breaking the ice relieves awkwardness at the start of an encounter.'],
    ['“A blessing in disguise” is:', ['Something good that at first seemed bad', 'A hidden gift', 'A false promise', 'A lucky charm'], 'The idiom describes an apparent misfortune that turns out well.'],
    ['“To call it a day” means to:', ['Stop working for now', 'Schedule a meeting', 'Name an event', 'Telephone someone'], 'It means to end an activity, usually work, for the time being.']
  ]);

  T('VA', 'Grammar', [
    ['Neither the supervisor nor the clerks ______ informed about the schedule change.', ['were', 'was', 'is', 'has been'], 'With neither…nor, the verb agrees with the nearer subject. “Clerks” is plural, so use “were.”'],
    ['Each of the reports ______ been reviewed by the committee.', ['has', 'have', 'are', 'were'], '“Each” is singular and takes a singular verb.'],
    ['If I ______ the head of office, I would simplify the process.', ['were', 'was', 'am', 'will be'], 'Contrary-to-fact conditions use the subjunctive “were.”'],
    ['Between you and ______, the memo was poorly written.', ['me', 'I', 'myself', 'mine'], 'The object of the preposition “between” takes the object pronoun “me.”'],
    ['There are ______ applicants this year than last year.', ['fewer', 'less', 'lesser', 'few'], 'Use “fewer” with countable nouns such as applicants.'],
    ['The documents are ______ on the director’s desk.', ['lying', 'laying', 'lain', 'laid'], '“Lie” (to rest) does not take an object; its -ing form is “lying.”'],
    ['The new rules will ______ all contractual employees.', ['affect', 'effect', 'effects', 'affection'], '“Affect” is the verb meaning to influence; “effect” is usually a noun.'],
    ['She has been working in the agency ______ 2019.', ['since', 'for', 'from', 'at'], 'Use “since” with a point in time and “for” with a length of time.'],
    ['The number of examinees ______ increasing every year.', ['is', 'are', 'were', 'have been'], '“The number of” is singular. “A number of” is plural.'],
    ['Mr. Cruz, together with his staff, ______ attending the seminar.', ['is', 'are', 'were', 'have been'], 'Phrases such as “together with” do not change the subject, “Mr. Cruz,” which is singular.'],
    ['Hardly had the meeting started ______ the power went out.', ['when', 'than', 'then', 'until'], 'The correct pairing is “hardly…when.” “No sooner” pairs with “than.”'],
    ['I look forward to ______ you at the orientation.', ['seeing', 'see', 'have seen', 'saw'], 'In “look forward to,” “to” is a preposition and is followed by a gerund.'],
    ['The police ______ investigating the incident.', ['are', 'is', 'was', 'has been'], '“Police” is a plural noun.'],
    ['Mathematics ______ the subject I find most difficult.', ['is', 'are', 'were', 'have been'], 'Names of subjects ending in -s, such as mathematics, are singular.'],
    ['Which sentence is correct?', ['Ana and I submitted the report.', 'Me and Ana submitted the report.', 'Ana and me submitted the report.', 'I and Ana submitted the report.'], 'Use the subject pronoun “I,” and by convention name the other person first.'],
    ['Which sentence shows correct parallel structure?', ['The job requires typing, filing, and answering calls.', 'The job requires typing, filing, and to answer calls.', 'The job requires to type, filing, and answering calls.', 'The job requires typing, to file, and answer calls.'], 'Items in a series should share the same grammatical form.'],
    ['The office changed ______ schedule for the holidays.', ['its', 'it’s', 'their', 'its’'], '“Its” is the possessive; “it’s” means “it is.” “Office” is singular, so not “their.”'],
    ['Find the part with an error: “The list of qualified applicants / were posted / on the bulletin board / yesterday morning.”', ['were posted', 'The list of qualified applicants', 'on the bulletin board', 'yesterday morning'], 'The subject is “list” (singular), so it should be “was posted.”'],
    ['Find the part with an error: “She don’t / usually take / her lunch / at the canteen.”', ['She don’t', 'usually take', 'her lunch', 'at the canteen'], 'A third-person singular subject takes “doesn’t.”'],
    ['Neither of the two proposals ______ acceptable to the board.', ['is', 'are', 'were', 'have been'], '“Neither” used as a pronoun is singular.'],
    ['By the time the director arrives, we ______ the report.', ['will have finished', 'finished', 'have finished', 'will finish'], 'The future perfect shows an action completed before another future event.'],
    ['The applicant ______ documents were incomplete was asked to return.', ['whose', 'who’s', 'whom', 'which'], '“Whose” is the possessive relative pronoun; “who’s” means “who is.”']
  ]);

  T('VA', 'Reading', [
    ['What is the main idea of the passage?', ['Measuring accuracy along with speed gives a truer picture of service quality.', 'Frontline offices should release every permit within one hour.', 'Applicants are responsible for errors in their permits.', 'Double-checking forms makes transactions slower overall.'], 'The passage argues that speed alone misleads and that tracking first-time-right rates improves service.', 'p1'],
    ['As used in the passage, the “first-time-right” rate is the share of transactions that:', ['Are completed correctly with no correction or follow-up', 'Are completed within one hour', 'Are filed online', 'Are approved by a supervisor'], 'The passage defines it directly after the colon.', 'p1'],
    ['Why did total waiting time fall in offices that adopted the measure?', ['Fewer applicants had to come back to fix errors.', 'The offices hired more staff.', 'Applicants were served in a single queue.', 'Permits were released without checking.'], 'Double-checking cut errors, so fewer return visits were needed.', 'p1'],
    ['According to the passage, why do many replanted mangrove seedlings die?', ['They are planted in the wrong tidal zone.', 'Fish feed on their roots.', 'Typhoons uproot them.', 'Fishpond owners remove them.'], 'The passage says seedlings planted in the wrong zone of the tide often die within a year.', 'p2'],
    ['Which best describes the author’s attitude toward mangrove restoration?', ['Supportive, but stresses that it must be done carefully', 'Opposed, because it rarely succeeds', 'Indifferent, since mangroves recover on their own', 'Doubtful that mangroves reduce storm damage'], 'The author values mangroves and explains how restoration works best.', 'p2'],
    ['Which of the following is NOT mentioned as a benefit of mangroves?', ['Producing timber for housing', 'Trapping sediment', 'Sheltering young fish', 'Absorbing wave energy'], 'Timber is never mentioned.', 'p2'],
    ['The spacing effect refers to:', ['Better retention when study is spread out over time', 'Forgetting that happens after an exam', 'Studying in a quiet, spacious room', 'Reviewing only the hardest topics'], 'The first two sentences define it.', 'p3'],
    ['According to the passage, why does cramming feel productive?', ['The information is fresh at the moment.', 'It covers more topics.', 'It takes fewer total hours.', 'It strengthens long-term recall.'], 'The last sentence gives the reason.', 'p3'],
    ['Which is the best title for the passage?', ['Why Spaced Review Beats Cramming', 'How to Pass Any Exam in a Week', 'The Science of Sleep', 'Choosing the Right Review Center'], 'The passage compares spaced study with cramming.', 'p3']
  ]);

  T('VA', 'Paragraph Organization', [
    ['Arrange the sentences into a logical paragraph.\n1. Finally, the approved budget is released to the agencies.\n2. First, agencies submit their budget proposals.\n3. The proposals are then consolidated into a national budget.\n4. Congress reviews the budget and passes it as the General Appropriations Act.', ['2 – 3 – 4 – 1', '2 – 4 – 3 – 1', '3 – 2 – 4 – 1', '1 – 2 – 3 – 4'], '“First” opens, consolidation and approval follow, and “Finally” closes.'],
    ['Arrange the sentences into a logical paragraph.\n1. Because of this, the town now requires residents to segregate waste at home.\n2. By 2024, the town’s only dumpsite was nearly full.\n3. Residents were also complaining about the smell and the flies.\n4. As a result, the volume reaching the dumpsite has dropped by a third.', ['2 – 3 – 1 – 4', '1 – 2 – 3 – 4', '2 – 1 – 3 – 4', '3 – 2 – 4 – 1'], 'Problem (2, 3), response (“Because of this”), result (“As a result”).'],
    ['Arrange the sentences into a logical paragraph.\n1. She reviewed for six months using mock exams.\n2. Maria failed her first attempt at the civil service exam.\n3. On her second attempt, she passed with a rating of 86.\n4. Determined to try again, she identified her weakest areas.', ['2 – 4 – 1 – 3', '2 – 1 – 4 – 3', '4 – 2 – 1 – 3', '1 – 2 – 4 – 3'], 'Failure, decision, preparation, success.'],
    ['Arrange the sentences into a logical paragraph.\n1. Over the next days, it hardens into a strong surface.\n2. Concrete begins as a mixture of cement, sand, gravel, and water.\n3. The cement reacts chemically with the water.\n4. This reaction, called hydration, binds the ingredients together.', ['2 – 3 – 4 – 1', '2 – 4 – 3 – 1', '3 – 4 – 2 – 1', '2 – 1 – 3 – 4'], 'Start with the ingredients, then the reaction, its name, and the result.']
  ]);

  T('VA', 'Filipino', [
    ['Piliin ang kasingkahulugan ng salitang nakasulat sa malalaking titik: MARUBDOB ang kanyang pagmamahal sa bayan.', ['Matindi at maalab', 'Mahina', 'Pansamantala', 'Lihim'], 'Ang marubdob ay nangangahulugang matindi o maalab.'],
    ['Piliin ang kasingkahulugan: DALISAY ang kanyang hangarin na makapaglingkod.', ['Wagas o tapat', 'Marumi', 'Magulo', 'Malabo'], 'Ang dalisay ay puro, wagas, o tapat.'],
    ['Piliin ang kasingkahulugan: MASALIMUOT ang proseso ng pagkuha ng permit noon.', ['Magulo at komplikado', 'Madali', 'Mabilis', 'Maayos'], 'Ang masalimuot ay magulo o mahirap unawain.'],
    ['Piliin ang kasingkahulugan: PAGAL na pagal ang mga manggagawa matapos ang maghapong trabaho.', ['Pagod', 'Masaya', 'Gutom', 'Galit'], 'Ang pagal ay pagod.'],
    ['Piliin ang kasingkahulugan: Ang empleyado ay MASINOP sa paggamit ng gamit ng opisina.', ['Maingat at matipid', 'Burara', 'Mapag-aksaya', 'Mabagal'], 'Ang masinop ay maingat at hindi aksaya.'],
    ['Piliin ang KASALUNGAT ng salitang nakasulat sa malalaking titik: MASAGANA ang ani ngayong taon.', ['Salat', 'Marami', 'Malusog', 'Mataas'], 'Ang kasalungat ng masagana ay salat o kapos.'],
    ['Ano ang ibig sabihin ng idyomang “nagbibilang ng poste”?', ['Walang trabaho', 'Nagtatrabaho sa kuryente', 'Nag-aaral ng matematika', 'Naglalakad sa kalye'], 'Ginagamit ito para sa taong walang hanapbuhay.'],
    ['Ano ang ibig sabihin ng “itaga mo sa bato”?', ['Tandaan mo; tiyak na tutuparin ang pangako', 'Magalit ka', 'Sirain mo ang bato', 'Kalimutan mo na'], 'Ito ay pagbibigay-diin na tiyak ang pangako.'],
    ['Ano ang ibig sabihin ng “bukas ang palad”?', ['Matulungin at mapagbigay', 'Mahirap', 'Mapanghusga', 'Masipag'], 'Ang taong bukas ang palad ay laging handang tumulong.'],
    ['Ano ang ibig sabihin ng “balat-sibuyas”?', ['Maramdamin o madaling masaktan', 'Maputi ang balat', 'Madaling umiyak sa kusina', 'Madaldal'], 'Ang balat-sibuyas ay taong madaling masaktan sa puna.'],
    ['Piliin ang wastong salita: Tumakbo siya ______ mabilis upang maabutan ang dyip.', ['nang', 'ng', 'na', 'ang'], 'Ginagamit ang “nang” bago ang pang-abay na naglalarawan sa pandiwa.'],
    ['Piliin ang wastong salita: Bumili si Liza ______ bagong kuwaderno.', ['ng', 'nang', 'na', 'sa'], 'Ginagamit ang “ng” bilang pantukoy bago ang pangngalan na layon ng pandiwa.'],
    ['Alin ang wastong pangungusap?', ['Pupunta rin kami sa pulong.', 'Pupunta din kami sa pulong.', 'Kakain rin siya mamaya.', 'Masaya din ako ngayon.'], 'Ginagamit ang “rin” pagkatapos ng salitang nagtatapos sa patinig, at “din” pagkatapos ng katinig.'],
    ['Piliin ang wastong salita: Isara mo ang ______ dahil malamig ang hangin.', ['pinto', 'pintuan', 'pintuhan', 'pinta'], 'Ang pinto ang mismong isinasara; ang pintuan ay ang daanan o bukana.'],
    ['Piliin ang wastong salita: ______ siyang bagong sasakyan.', ['Mayroon', 'May', 'Mayroong', 'Meron'], 'Ginagamit ang “mayroon” kapag sinusundan ng panghalip tulad ng “siya.” Ang “meron” ay di-pormal.'],
    ['Piliin ang kasingkahulugan: Ang HINUHA ng imbestigador ay may kumuha ng dokumento.', ['Palagay o konklusyon', 'Utos', 'Parusa', 'Papuri'], 'Ang hinuha ay konklusyong batay sa nakitang ebidensya.']
  ]);

  /* ---------------- ANALYTICAL ABILITY ---------------- */
  T('AA', 'Analogy', [
    ['DOCTOR : HOSPITAL :: TEACHER : ______', ['School', 'Student', 'Book', 'Lesson'], 'Worker and workplace.'],
    ['PEN : WRITE :: KNIFE : ______', ['Cut', 'Kitchen', 'Sharp', 'Metal'], 'Tool and its function.'],
    ['FLOCK : SHEEP :: SWARM : ______', ['Bees', 'Birds', 'Cattle', 'Wolves'], 'Group and its members. A group of wolves is a pack.'],
    ['AUTHOR : NOVEL :: COMPOSER : ______', ['Symphony', 'Piano', 'Singer', 'Orchestra'], 'Creator and creation.'],
    ['THERMOMETER : TEMPERATURE :: BAROMETER : ______', ['Atmospheric pressure', 'Rainfall', 'Wind speed', 'Humidity'], 'Instrument and what it measures. Rainfall uses a rain gauge, wind speed an anemometer, humidity a hygrometer.'],
    ['CAPTAIN : SHIP :: PILOT : ______', ['Airplane', 'Airport', 'Passenger', 'Runway'], 'Operator and the vehicle operated.'],
    ['PUPPY : DOG :: KITTEN : ______', ['Cat', 'Mouse', 'Pet', 'Litter'], 'Young and adult.'],
    ['DROUGHT : WATER :: FAMINE : ______', ['Food', 'Hunger', 'Farmer', 'Rain'], 'A drought is a lack of water; a famine is a lack of food.'],
    ['PAINTER : BRUSH :: SURGEON : ______', ['Scalpel', 'Hospital', 'Patient', 'Operation'], 'Worker and tool.'],
    ['LIBRARY : BOOKS :: ARCHIVE : ______', ['Records', 'Librarian', 'Building', 'Readers'], 'Place and what it keeps.'],
    ['SEISMOGRAPH : EARTHQUAKE :: ODOMETER : ______', ['Distance traveled', 'Speed', 'Fuel', 'Engine heat'], 'An odometer records distance; a speedometer shows speed.'],
    ['PRESIDENT : EXECUTIVE :: CONGRESS : ______', ['Legislative', 'Judicial', 'Electoral', 'Administrative'], 'Office and the branch of government it heads.'],
    ['CSC : CIVIL SERVICE :: COA : ______', ['Government accounts and audit', 'Elections', 'Human rights', 'Budget preparation'], 'Agency and its mandate. Budget preparation belongs to the DBM.'],
    ['WORD : SENTENCE :: BRICK : ______', ['Wall', 'Clay', 'Mason', 'Cement'], 'Part and the whole it forms.'],
    ['ASCEND : DESCEND :: EXPAND : ______', ['Contract', 'Enlarge', 'Rise', 'Extend'], 'Antonyms.']
  ]);

  T('AA', 'Logic', [
    ['All civil servants are bound by RA 6713. Jose is a civil servant. Therefore:', ['Jose is bound by RA 6713.', 'Jose is not bound by RA 6713.', 'Everyone bound by RA 6713 is a civil servant.', 'Nothing can be concluded.'], 'A valid syllogism: all A are B; Jose is A; so Jose is B.'],
    ['Some lawyers are writers. All writers are readers. Which statement must be true?', ['Some lawyers are readers.', 'All lawyers are readers.', 'All readers are lawyers.', 'No lawyer is a reader.'], 'The lawyers who are writers must also be readers.'],
    ['No fish are mammals. All whales are mammals. Which conclusion follows?', ['No whales are fish.', 'Some whales are fish.', 'All mammals are whales.', 'Some fish are whales.'], 'Whales are mammals, and no mammal is a fish.'],
    ['If it rains, the outdoor seminar will be moved indoors. The seminar was NOT moved indoors. What can be concluded?', ['It did not rain.', 'It rained.', 'The seminar was cancelled.', 'Nothing can be concluded.'], 'Denying the result denies the condition (modus tollens).'],
    ['If the report is late, the manager will be upset. The manager is upset. Which is true?', ['The report may or may not be late.', 'The report is late.', 'The report is not late.', 'The manager is never upset.'], 'Affirming the result does not prove the condition; something else may have upset the manager.'],
    ['All employees who completed the seminar received certificates. Mark, an employee, did not receive a certificate. Therefore:', ['Mark did not complete the seminar.', 'Mark completed the seminar.', 'Mark lost his certificate.', 'Mark will receive a certificate later.'], 'If completing guarantees a certificate, no certificate means no completion.'],
    ['In a queue, Liza is 7th from the front and 12th from the back. How many people are in the queue?', ['18', '19', '17', '20'], '7 + 12 − 1 = 18, since Liza is counted twice.'],
    ['Ben is taller than Carlo. Carlo is taller than Dan. Ed is taller than Ben. Who is the shortest?', ['Dan', 'Carlo', 'Ben', 'Ed'], 'Order from tallest: Ed, Ben, Carlo, Dan.'],
    ['Pointing to a man, Rosa said, “He is the son of my mother’s only son.” How is the man related to Rosa?', ['Nephew', 'Brother', 'Son', 'Cousin'], 'Her mother’s only son is Rosa’s brother; his son is her nephew.'],
    ['You face north, turn 90° to the right, turn 90° to the right again, then turn 90° to the left. Which direction do you face?', ['East', 'West', 'South', 'North'], 'North → East → South → East.'],
    ['If 5 machines make 5 parts in 5 minutes, how long will 100 machines take to make 100 parts?', ['5 minutes', '100 minutes', '20 minutes', '1 minute'], 'Each machine makes one part in 5 minutes, working in parallel.'],
    ['Which does NOT belong to the group?', ['DILG', 'COA', 'COMELEC', 'CSC'], 'COA, COMELEC, and CSC are Constitutional Commissions; DILG is an executive department.'],
    ['Which number does NOT belong? 2, 3, 5, 9, 11', ['9', '2', '5', '11'], 'All except 9 are prime numbers.'],
    ['If today is Wednesday, what day will it be 100 days from today?', ['Friday', 'Thursday', 'Saturday', 'Wednesday'], '100 = 14 weeks + 2 days, so two days after Wednesday.'],
    ['Four employees sit in a row. Dino is at the far left. Ana sits somewhere to the left of Ben, and Carla sits somewhere to the right of Ben. Who sits at the far right?', ['Carla', 'Ben', 'Ana', 'Dino'], 'The only order is Dino, Ana, Ben, Carla.']
  ]);

  T('AA', 'Assumptions & Conclusions', [
    ['“File your application online to avoid long lines,” the agency advised. Which is assumed?', ['Online filing involves less waiting than filing in person.', 'Every applicant owns a computer.', 'Lines at the office will disappear.', 'Online filing is mandatory.'], 'The advice only makes sense if online filing means less waiting.'],
    ['The barangay will hold its vaccination drive on Saturday because most residents work on weekdays. Which is assumed?', ['More residents are available on Saturday.', 'Residents dislike vaccines.', 'Health workers prefer weekends.', 'Vaccines expire on Sundays.'], 'The choice of Saturday rests on residents being free that day.'],
    ['The city installed more streetlights to reduce crime at night. The plan assumes that:', ['Better lighting discourages crime.', 'Crime happens only at night.', 'Streetlights are inexpensive.', 'Police patrols will stop.'], 'Lighting is expected to deter offenders.'],
    ['Umbrella sales in a town rose sharply in June. Which is the most likely explanation?', ['The rainy season began.', 'Umbrella prices doubled.', 'Schools closed for summer.', 'A new mall opened in December.'], 'June marks the start of the rainy season in the Philippines.'],
    ['All applicants who scored 80 or higher passed. Ramon scored 82. Which conclusion follows?', ['Ramon passed.', 'Ramon failed.', 'Ramon may have failed.', 'Ramon had the highest score.'], 'Ramon meets the stated condition.']
  ]);

  T('AA', 'Series & Coding', [
    ['What letter comes next? A, C, F, J, O, ______', ['U', 'T', 'S', 'V'], 'The gaps grow by one: +2, +3, +4, +5, +6. O + 6 = U.'],
    ['What comes next? AZ, BY, CX, ______', ['DW', 'DV', 'EW', 'DX'], 'The first letter moves forward and the second moves backward.'],
    ['If TABLE is coded as UBCMF, how is CHAIR coded?', ['DIBJS', 'DHBJS', 'BGZHQ', 'DIAJS'], 'Each letter moves one place forward.'],
    ['If MANGO is written as OGNAM, how is APPLE written?', ['ELPPA', 'EPPLA', 'ALPPE', 'ELPAP'], 'The word is written backward.'],
    ['If A = 1, B = 2, … Z = 26, what is the value of FACE?', ['15', '14', '16', '13'], 'F6 + A1 + C3 + E5 = 15.'],
    ['If A is coded as Z, B as Y, C as X, and so on, how is CSC coded?', ['XHX', 'XGX', 'XIX', 'YHY'], 'Each letter is replaced by its mirror in the alphabet: C ↔ X, S ↔ H.']
  ]);

  T('AA', 'Data Interpretation', [
    ['Which region had the highest passing rate?', ['Region D', 'Region B', 'Region A', 'Region C'], 'A 15%, B 20%, C 12%, D 22%.', 't1'],
    ['What was the overall passing rate of the four regions combined?', ['16%', '17.25%', '20%', '15%'], '8,000 passers ÷ 50,000 examinees = 16%. Averaging the four rates (17.25%) is a trap.', 't1'],
    ['Region C’s examinees made up what percent of all examinees?', ['40%', '30%', '25%', '50%'], '20,000 ÷ 50,000 = 40%.', 't1'],
    ['How many more passers did Region D have than Region B?', ['600', '400', '200', '800'], '2,200 − 1,600 = 600.', 't1'],
    ['How much was allotted for MOOE?', ['₱840,000', '₱720,000', '₱1,080,000', '₱480,000'], '35% × ₱2,400,000 = ₱840,000.', 't2'],
    ['By how much does the Personnel Services allotment exceed Capital Outlay?', ['₱600,000', '₱480,000', '₱1,080,000', '₱250,000'], 'PS ₱1,080,000 − CO ₱480,000 = ₱600,000.', 't2'],
    ['If half of Capital Outlay were moved to MOOE, what would MOOE’s new share of the budget be?', ['45%', '40%', '55%', '30%'], 'Half of 20% is 10%; 35% + 10% = 45%.', 't2']
  ]);

  /* ---------------- NUMERICAL ABILITY ---------------- */
  T('NA', 'Word Problems', [
    ['An employee’s monthly basic salary is ₱27,000. If 9% is deducted as the GSIS personal share, how much is deducted?', ['₱2,430', '₱2,700', '₱2,340', '₱3,000'], '₱27,000 × 0.09 = ₱2,430.'],
    ['A ₱800 shirt is marked 25% off, then an extra 10% off the sale price. What is the final price?', ['₱540', '₱520', '₱560', '₱600'], '₱800 × 0.75 = ₱600; ₱600 × 0.90 = ₱540. Adding the discounts to 35% would give ₱520.'],
    ['The average of five numbers is 24. If the number 32 is removed, what is the average of the remaining four?', ['22', '20', '23', '24'], 'Total 120 − 32 = 88; 88 ÷ 4 = 22.'],
    ['Ana is three times as old as her son. In 12 years, she will be twice as old as her son. How old is Ana now?', ['36', '24', '48', '30'], '3s + 12 = 2(s + 12) gives s = 12, so Ana is 36.'],
    ['The sum of three consecutive even integers is 78. What is the largest?', ['28', '26', '24', '30'], 'n + (n + 2) + (n + 4) = 78 gives n = 24; the largest is 28.'],
    ['If 15 workers can finish a project in 12 days, how many days will 20 workers need at the same rate?', ['9', '16', '10', '8'], '15 × 12 = 180 worker-days; 180 ÷ 20 = 9.'],
    ['The ratio of male to female employees in an office is 3:5. If there are 64 employees, how many are female?', ['40', '24', '32', '36'], '64 ÷ 8 parts = 8 per part; 5 × 8 = 40.'],
    ['A number increased by 20% equals 90. What is the number?', ['75', '72', '70', '108'], '1.2n = 90, so n = 75.'],
    ['A vehicle bought for ₱1,000,000 loses 10% of its value each year. What is it worth after two years?', ['₱810,000', '₱800,000', '₱900,000', '₱820,000'], '₱1,000,000 × 0.9 × 0.9 = ₱810,000.'],
    ['In a class of 40, 60% are female, and one-fourth of the females wear glasses. How many females wear glasses?', ['6', '10', '24', '4'], '40 × 0.6 = 24 females; 24 ÷ 4 = 6.'],
    ['A clerk encodes 45 forms per hour. How many hours does she need for 315 forms?', ['7', '6', '8', '9'], '315 ÷ 45 = 7.'],
    ['A tank is 3/5 full. After 24 liters are used, it is 1/5 full. What is the tank’s full capacity?', ['60 liters', '40 liters', '120 liters', '48 liters'], '3/5 − 1/5 = 2/5 of the tank is 24 liters, so the tank holds 60 liters.'],
    ['A rectangular lot measures 25 m by 40 m. What is its perimeter?', ['130 m', '65 m', '1,000 m', '100 m'], '2 × (25 + 40) = 130 m. 1,000 m² would be the area.']
  ]);

  T('NA', 'Basic Operations', [
    ['What is 3/4 of 2/3 of 480?', ['240', '320', '360', '180'], '2/3 × 480 = 320; 3/4 × 320 = 240.'],
    ['Simplify: 18 − 6 ÷ 3 × 2 + 4', ['18', '12', '22', '8'], 'Divide and multiply left to right first: 6 ÷ 3 × 2 = 4. Then 18 − 4 + 4 = 18.'],
    ['What is 0.25% of 8,000?', ['20', '200', '2,000', '2'], '0.25% = 0.0025; 0.0025 × 8,000 = 20.'],
    ['What is the least common multiple (LCM) of 12 and 18?', ['36', '6', '72', '216'], 'Multiples of 18: 18, 36…; 36 is the first that 12 divides.'],
    ['What is the greatest common factor (GCF) of 48 and 72?', ['24', '12', '8', '144'], '48 = 24 × 2 and 72 = 24 × 3.'],
    ['√144 + 3² = ?', ['21', '18', '15', '153'], '12 + 9 = 21.'],
    ['If x/4 + 3 = 7, what is x?', ['16', '4', '40', '10'], 'x/4 = 4, so x = 16.'],
    ['Express 0.375 as a fraction in lowest terms.', ['3/8', '3/7', '375/100', '5/8'], '0.375 = 375/1000 = 3/8.'],
    ['Which is the largest: 0.6, 5/8, 3/5, 0.59?', ['5/8', '0.6', '3/5', '0.59'], '5/8 = 0.625, the largest.']
  ]);

  /* ---------- added after the reviewer-site topic analysis (gaps most reviewers cover) ---------- */
  PASSAGES.f1 = '<p>Tuwing Sabado ng umaga, nagtitipon ang mga residente ng Barangay Maligaya upang linisin ang kanilang mga kanal. Nagsimula ito matapos ang malakas na pagbaha noong nakaraang taon dahil sa baradong daluyan ng tubig. Ngayon, halos hindi na bumabaha sa kanilang lugar, at natuto pang maghiwalay ng basura ang maraming pamilya.</p>';

  T('GI', 'Constitution', [
    ['Under Article I of the 1987 Constitution, the waters around, between, and connecting the islands of the archipelago form part of the Philippines’:', ['Internal waters', 'Territorial sea', 'Exclusive economic zone', 'Contiguous zone'], 'Art. I (National Territory), last sentence.'],
    ['“The State shall protect and advance the right of the people to a balanced and healthful ecology.” This is found in:', ['Article II, Section 16', 'Article III, Section 1', 'Article XII, Section 2', 'Article XIII, Section 1'], 'Art. II, Sec. 16, a State policy often cited in environmental cases.'],
    ['Under Article XII, Section 2 (the Regalian doctrine), lands of the public domain, waters, minerals, and other natural resources are owned by:', ['The State', 'The province where they are located', 'Whoever first develops them', 'The local government units'], 'Art. XII, Sec. 2.'],
    ['The State may enter into co-production, joint venture, or production-sharing agreements on natural resources with Filipino citizens or with corporations at least what percent Filipino-owned?', ['60%', '51%', '75%', '40%'], 'Art. XII, Sec. 2.'],
    ['Article XII, Section 3 classifies lands of the public domain into agricultural, forest or timber, mineral lands, and:', ['National parks', 'Residential lands', 'Industrial zones', 'Ancestral domains'], 'Alienable lands of the public domain are limited to agricultural lands.'],
    ['“The State recognizes and promotes the rights of indigenous cultural communities within the framework of national unity and development” is a provision of:', ['Article II, Section 22', 'Article III, Section 5', 'Article IX-B, Section 2', 'Article XVI, Section 1'], 'Art. II, Sec. 22. Ancestral lands are protected under Art. XII, Sec. 5.']
  ]);

  T('GI', 'Peace & Human Rights', [
    ['The Indigenous Peoples’ Rights Act (IPRA), which created the National Commission on Indigenous Peoples, is:', ['RA 8371 (1997)', 'RA 7160 (1991)', 'RA 11054 (2018)', 'RA 9710 (2009)'], 'RA 8371 implements the Constitution’s protection of indigenous cultural communities.'],
    ['The arbitral tribunal under UNCLOS issued its award in the Philippines’ case on the South China Sea (West Philippine Sea) on:', ['July 12, 2016', 'June 12, 2016', 'July 12, 2012', 'January 22, 2013'], 'The case was filed in January 2013; the award came on July 12, 2016.'],
    ['Under UNCLOS, a coastal state’s exclusive economic zone extends up to how many nautical miles from its baselines?', ['200', '12', '24', '350'], 'The territorial sea is 12 nautical miles; the EEZ is 200.'],
    ['The law that defines the archipelagic baselines of the Philippines, in line with UNCLOS, is:', ['RA 9522 (2009)', 'RA 8550 (1998)', 'RA 7586 (1992)', 'RA 10121 (2010)'], 'RA 9522 is the Philippine Archipelagic Baselines Law.']
  ]);

  T('VA', 'Grammar', [
    ['Yesterday, the clerk ______ the files before noon.', ['arranged', 'arranges', 'will arrange', 'arranging'], '“Yesterday” calls for the simple past tense.'],
    ['By next month, she ______ in the agency for ten years.', ['will have worked', 'has worked', 'worked', 'works'], 'An action completed before a future point uses the future perfect.'],
    ['The memo ______ by the time I arrived at the office.', ['had already been sent', 'has already sent', 'already sends', 'is sending'], 'An action finished before another past action uses the past perfect; the memo receives the action, so it is passive.'],
    ['Every Monday, the team ______ a short planning meeting.', ['holds', 'held', 'holding', 'have held'], 'Habits and routines use the simple present; “team” is singular.'],
    ['I wish I ______ about the deadline earlier.', ['had known', 'know', 'have known', 'knowing'], 'A wish about the past uses the past perfect.'],
    ['The new guidelines ______ next week, so read them carefully.', ['will take effect', 'took effect', 'have took effect', 'taking effect'], '“Next week” points to the future.']
  ]);

  T('VA', 'Filipino', [
    ['Bakit nagsimula ang lingguhang paglilinis ng kanal?', ['Dahil sa malakas na pagbaha na dulot ng baradong daluyan ng tubig', 'Dahil may paligsahan sa barangay', 'Dahil iniutos ito ng paaralan', 'Dahil sa nalalapit na pista'], 'Sinasabi sa ikalawang pangungusap ang dahilan.', 'f1'],
    ['Ano ang naging bunga ng gawain ng mga residente?', ['Halos hindi na bumabaha at natuto silang maghiwalay ng basura', 'Lumaki ang mga kanal sa barangay', 'Tumaas ang buwis ng barangay', 'Lumipat ng tirahan ang mga residente'], 'Nasa huling pangungusap ang bunga ng gawain.', 'f1'],
    ['Anong pagpapahalagang Pilipino ang ipinakikita sa talata?', ['Bayanihan o pagtutulungan', 'Pagkakanya-kanya', 'Pagmamataas', 'Pagwawalang-bahala'], 'Sama-samang kumikilos ang mga residente para sa kapakanan ng lahat.', 'f1']
  ]);

  root.PASADO_BANK = BANK;
  root.PASADO_PASSAGES = PASSAGES;
})(window);
