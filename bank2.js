/* Pasado question bank, part 2: original items on the concepts that recur across
   Philippine CSE reviewer sites, study guides, and video reviewers (researched November 2026).
   Correct choice first; the app shuffles. */
(function (root) {
  const BANK = root.PASADO_BANK || (root.PASADO_BANK = []);
  const PASSAGES = root.PASADO_PASSAGES || (root.PASADO_PASSAGES = {});
  const count = {};
  function T(area, topic, rows) {
    rows.forEach(r => {
      const key = 'b2.' + area + '.' + topic.replace(/[^A-Za-z0-9]/g, '');
      count[key] = (count[key] || 0) + 1;
      BANK.push({ id: key + '.' + count[key], area, topic, q: r[0], c: r[1], k: 0, x: r[2], p: r[3] || null });
    });
  }

  /* ---------- General Information: Constitution ---------- */
  T('GI', 'Constitution', [
    ['A search warrant or warrant of arrest may be issued only upon probable cause determined personally by:', ['The judge', 'The prosecutor', 'The chief of police', 'The barangay captain'], 'Art. III, Sec. 2.'],
    ['Evidence obtained through an unreasonable search or a violation of the privacy of communication is:', ['Inadmissible for any purpose in any proceeding', 'Admissible if it is relevant', 'Admissible only in civil cases', 'Admissible with the court’s approval'], 'Art. III, Sec. 3(2), the exclusionary rule.'],
    ['Before conviction, who may be denied bail?', ['Persons charged with offenses punishable by reclusion perpetua when evidence of guilt is strong', 'Everyone accused of a crime', 'Only foreign nationals', 'Anyone who cannot pay the bail amount'], 'Art. III, Sec. 13. The right to bail is not impaired even when the privilege of the writ of habeas corpus is suspended.'],
    ['“No law shall be made respecting an establishment of religion, or prohibiting the free exercise thereof” is found in:', ['Article III, Section 5', 'Article II, Section 6', 'Article III, Section 4', 'Article XIV, Section 3'], 'Art. III, Sec. 5. Separation of Church and State is a policy in Art. II, Sec. 6.'],
    ['“No person shall be deprived of life, liberty, or property without due process of law, nor shall any person be denied the equal protection of the laws” is:', ['Article III, Section 1', 'Article II, Section 1', 'Article III, Section 14', 'Article XIII, Section 1'], 'The first section of the Bill of Rights.'],
    ['“No person shall be compelled to be a witness against himself” describes the right against:', ['Self-incrimination', 'Double jeopardy', 'Unreasonable searches', 'Involuntary servitude'], 'Art. III, Sec. 17.'],
    ['Under Article III, Section 12, the rights of a person under custodial investigation can be waived only:', ['In writing and in the presence of counsel', 'Orally before the investigating officer', 'By a relative of the accused', 'After 24 hours of detention'], 'Art. III, Sec. 12(1).'],
    ['Private property shall not be taken for public use without:', ['Just compensation', 'The consent of the barangay', 'A two-thirds vote of Congress', 'A presidential proclamation'], 'Art. III, Sec. 9, the power of eminent domain.'],
    ['Free access to the courts and to quasi-judicial bodies shall not be denied to any person by reason of:', ['Poverty', 'Age', 'Citizenship', 'Residence'], 'Art. III, Sec. 11.'],
    ['The liberty of abode may be impaired only upon:', ['Lawful order of the court', 'Order of the mayor', 'Order of the police', 'A barangay resolution'], 'Art. III, Sec. 6. The right to travel may be impaired only in the interest of national security, public safety, or public health, as provided by law.'],
    ['Involuntary servitude is prohibited in any form EXCEPT:', ['As punishment for a crime of which the person was duly convicted', 'During a state of calamity', 'For government employees during emergencies', 'When ordered by the President'], 'Art. III, Sec. 18(2).'],
    ['Philippine citizenship is acquired mainly through:', ['Jus sanguinis (blood relationship)', 'Jus soli (place of birth)', 'Residence of five years', 'Marriage to a Filipino'], 'Art. IV, Sec. 1(2): those whose fathers or mothers are citizens of the Philippines.'],
    ['A Filipino citizen who marries a foreigner:', ['Keeps Philippine citizenship unless, by act or omission, deemed to have renounced it', 'Automatically loses Philippine citizenship', 'Must re-apply for citizenship within one year', 'Becomes a dual citizen by law'], 'Art. IV, Sec. 4.'],
    ['Which requirement may NOT be imposed on the right to vote?', ['A literacy or property requirement', 'Being at least 18 years old', 'Residence in the place of voting for six months', 'Being a Filipino citizen'], 'Art. V, Sec. 1.'],
    ['A member of the House of Representatives must be at least how old on election day?', ['25', '21', '30', '35'], 'Art. VI, Sec. 6.'],
    ['A Senator must be at least how old on election day?', ['35', '30', '40', '25'], 'Art. VI, Sec. 3.'],
    ['Appropriation, revenue, and tariff bills must originate exclusively in the:', ['House of Representatives', 'Senate', 'Office of the President', 'Department of Budget and Management'], 'Art. VI, Sec. 24.'],
    ['The Commission on Appointments is chaired, ex officio, by the:', ['Senate President', 'Speaker of the House', 'Vice President', 'Chief Justice'], 'Art. VI, Sec. 18: the Senate President, 12 Senators, and 12 Members of the House.'],
    ['Each Electoral Tribunal of Congress has nine members: three Justices of the Supreme Court and:', ['Six members of the Senate or the House, as the case may be', 'Six lawyers chosen by the President', 'Six commissioners of COMELEC', 'Six members of the Integrated Bar'], 'Art. VI, Sec. 17.'],
    ['Under the Constitution, every bill passed by Congress shall embrace:', ['Only one subject, expressed in its title', 'At most three related subjects', 'Any subject approved by the Senate', 'Only subjects certified by the President'], 'Art. VI, Sec. 26(1).'],
    ['A bill must pass three readings on separate days, unless:', ['The President certifies to its necessity for immediate enactment', 'The Senate President waives the rule', 'It is a local bill', 'It was filed by a party-list representative'], 'Art. VI, Sec. 26(2).'],
    ['The term of the President and Vice President begins at noon on:', ['June 30 following the election', 'January 1 following the election', 'The second Monday of May', 'July 4 following the election'], 'Art. VII, Sec. 4.'],
    ['Regular elections for President and Vice President are held on the:', ['Second Monday of May', 'First Monday of June', 'Second Tuesday of May', 'Last Monday of April'], 'Art. VII, Sec. 4.'],
    ['Granting amnesty requires the concurrence of:', ['A majority of all the Members of Congress', 'Two-thirds of the Senate', 'The Supreme Court', 'The Commission on Human Rights'], 'Art. VII, Sec. 19.'],
    ['The President’s power to grant pardons does NOT extend to:', ['Cases of impeachment', 'Persons convicted by final judgment', 'Remission of fines', 'Commutation of sentences'], 'Art. VII, Sec. 19.'],
    ['A treaty becomes valid and effective only when concurred in by:', ['At least two-thirds of all the Members of the Senate', 'A majority of the House of Representatives', 'The Supreme Court', 'A national referendum'], 'Art. VII, Sec. 21.'],
    ['A person who succeeded as President and served for more than how many years is no longer qualified to run for President?', ['Four years', 'Two years', 'Three years', 'Five years'], 'Art. VII, Sec. 4.'],
    ['The Judicial and Bar Council, which recommends appointees to the judiciary, is chaired ex officio by the:', ['Chief Justice', 'Secretary of Justice', 'Senate President', 'President of the Integrated Bar'], 'Art. VIII, Sec. 8(1).'],
    ['Members of the Supreme Court and judges of lower courts hold office during good behavior until they reach the age of:', ['70', '65', '60', '75'], 'Art. VIII, Sec. 11.'],
    ['The Supreme Court must decide cases within how many months from the date of submission?', ['24 months', '12 months', '6 months', '3 months'], 'Art. VIII, Sec. 15: 24 months for the Supreme Court, 12 for lower collegiate courts, 3 for other lower courts.'],
    ['The Commission on Elections is composed of a Chairman and how many Commissioners?', ['Six', 'Two', 'Four', 'Eight'], 'Art. IX-C, Sec. 1.'],
    ['The Commission on Audit is composed of a Chairman and how many Commissioners?', ['Two', 'Four', 'Six', 'Three'], 'Art. IX-D, Sec. 1.'],
    ['The Constitutional Commissions enjoy fiscal autonomy, meaning their approved annual appropriations are:', ['Automatically and regularly released', 'Subject to monthly approval by the President', 'Reviewed by the Senate every quarter', 'Released only upon request'], 'Art. IX-A, Sec. 5.'],
    ['Each Constitutional Commission must decide a case within how many days from its submission for decision?', ['60 days', '30 days', '90 days', '120 days'], 'Art. IX-A, Sec. 7.'],
    ['The Constitution provides for autonomous regions in Muslim Mindanao and in the:', ['Cordilleras', 'Bicol Region', 'Eastern Visayas', 'Ilocos Region'], 'Art. X, Sec. 15.'],
    ['The territorial and political subdivisions of the Philippines are provinces, cities, municipalities, and:', ['Barangays', 'Districts', 'Regions', 'Puroks'], 'Art. X, Sec. 1.'],
    ['The Ombudsman is appointed by the President from a list of at least six nominees prepared by the:', ['Judicial and Bar Council', 'Commission on Appointments', 'Civil Service Commission', 'Senate'], 'Art. XI, Sec. 9.'],
    ['The anti-graft court that continues to function under Article XI is the:', ['Sandiganbayan', 'Court of Appeals', 'Court of Tax Appeals', 'Ombudsman'], 'Art. XI, Sec. 4.'],
    ['The State’s right to recover properties unlawfully acquired by public officials is NOT barred by:', ['Prescription, laches, or estoppel', 'A presidential pardon', 'An act of Congress', 'The death of a witness'], 'Art. XI, Sec. 15.'],
    ['Under Article XIV, the State shall establish and maintain a system of free public education in the:', ['Elementary and high school levels', 'College level only', 'Graduate level', 'Vocational level only'], 'Art. XIV, Sec. 2(2).'],
    ['“The State recognizes the Filipino family as the foundation of the nation” is found in:', ['Article XV', 'Article II', 'Article XIII', 'Article XIV'], 'Art. XV, Sec. 1 (The Family).'],
    ['“The State may not be sued without its consent” states the principle of:', ['State immunity from suit', 'Separation of powers', 'Due process', 'Eminent domain'], 'Art. XVI, Sec. 3.'],
    ['Congress may adopt a new name for the country, a national anthem, or a national seal, effective upon:', ['Ratification by the people in a national referendum', 'Approval of the President', 'A two-thirds vote of the Senate', 'Publication in the Official Gazette'], 'Art. XVI, Sec. 2.'],
    ['Under Article II, Section 2, the Philippines adopts the generally accepted principles of international law as part of:', ['The law of the land', 'Its foreign policy only', 'Its treaty obligations only', 'The rules of the Supreme Court'], 'This is the doctrine of incorporation.'],
    ['The State shall guarantee equal access to opportunities for public service and prohibit:', ['Political dynasties as may be defined by law', 'Party-list representation', 'Re-election of senators', 'Local elections'], 'Art. II, Sec. 26.'],
    ['Under Article II, Section 14, the State shall ensure the fundamental equality before the law of:', ['Women and men', 'Citizens and foreigners', 'Public and private employees', 'Adults and minors'], 'Art. II, Sec. 14 recognizes the role of women in nation-building.'],
    ['The Preamble of the 1987 Constitution begins with the words:', ['“We, the sovereign Filipino people”', '“We, the people of the Philippines”', '“We, the Filipino nation”', '“In the name of the Republic”'], 'The Preamble continues “imploring the aid of Almighty God.”'],
    ['The Philippines, consistent with the national interest, adopts and pursues a policy of freedom from:', ['Nuclear weapons in its territory', 'Foreign investment', 'International treaties', 'Military alliances'], 'Art. II, Sec. 8.']
  ]);

  /* ---------- General Information: RA 6713 & ethics ---------- */
  T('GI', 'RA 6713 & Ethics', [
    ['An official who performs duties with the highest degree of excellence, intelligence, and skill observes which norm of conduct?', ['Professionalism', 'Simple living', 'Political neutrality', 'Nationalism and patriotism'], 'RA 6713, Sec. 4(b).'],
    ['An employee who refuses to discriminate against anyone, especially the poor and underprivileged, observes:', ['Justness and sincerity', 'Commitment to democracy', 'Professionalism', 'Simple living'], 'RA 6713, Sec. 4(c).'],
    ['Extending prompt, courteous, and adequate service to the public is the norm of:', ['Responsiveness to the public', 'Political neutrality', 'Commitment to public interest', 'Justness and sincerity'], 'RA 6713, Sec. 4(e).'],
    ['Promoting the use of locally produced goods and loyalty to the Republic fall under:', ['Nationalism and patriotism', 'Simple living', 'Professionalism', 'Responsiveness to the public'], 'RA 6713, Sec. 4(f).'],
    ['Upholding public accountability and the supremacy of civilian authority over the military falls under:', ['Commitment to democracy', 'Political neutrality', 'Justness and sincerity', 'Professionalism'], 'RA 6713, Sec. 4(g).'],
    ['Always upholding the public interest over personal interest is the norm of:', ['Commitment to public interest', 'Simple living', 'Nationalism and patriotism', 'Professionalism'], 'RA 6713, Sec. 4(a).'],
    ['Using confidential official information to advance one’s private interests is:', ['A prohibited act under RA 6713', 'Allowed if no money is involved', 'Allowed after office hours', 'Allowed with a supervisor’s consent'], 'RA 6713, Sec. 7(c).'],
    ['Having a financial interest in a transaction that requires the approval of one’s own office is:', ['Prohibited under RA 6713', 'Allowed if disclosed in the SALN', 'Allowed for contractual employees', 'Allowed if the amount is small'], 'RA 6713, Sec. 7(a).'],
    ['Republic Act No. 3019 is the:', ['Anti-Graft and Corrupt Practices Act', 'Code of Conduct and Ethical Standards', 'Ombudsman Act', 'Ease of Doing Business Act'], 'RA 3019 was enacted in 1960.'],
    ['Republic Act No. 6770 is the:', ['Ombudsman Act of 1989', 'Anti-Graft and Corrupt Practices Act', 'Civil Service Law', 'Anti-Red Tape Act of 2007'], 'RA 6770 organized the Office of the Ombudsman.'],
    ['The agency created by RA 11032 to implement ease-of-doing-business reforms is the:', ['Anti-Red Tape Authority (ARTA)', 'Civil Service Commission', 'Department of Trade and Industry', 'Commission on Audit'], 'RA 11032 created ARTA.'],
    ['Under RA 11032, a COMPLEX transaction must be acted on within:', ['7 working days', '3 working days', '20 working days', '15 working days'], 'Simple: 3; complex: 7; highly technical: 20 working days.'],
    ['The posted list of a government office’s services, requirements, fees, and processing times is the:', ['Citizen’s Charter', 'Statement of Assets, Liabilities and Net Worth', 'Performance Commitment Form', 'Office Order'], 'Required under the anti-red tape laws.'],
    ['Under RA 6713, the SALN also requires a public official to disclose:', ['Relatives in the government service', 'Political party membership', 'Religious affiliation', 'Social media accounts'], 'RA 6713, Sec. 8(B) on disclosure of relationship.'],
    ['Under RA 6713, public documents should be made accessible to the public:', ['Within reasonable working hours', 'Only with a court order', 'Only to members of the media', 'Only after one year'], 'RA 6713, Sec. 5(e).']
  ]);

  /* ---------- General Information: Peace & human rights ---------- */
  T('GI', 'Peace & Human Rights', [
    ['The Commission on Human Rights is composed of a Chairman and how many Members?', ['Four', 'Two', 'Six', 'Eight'], 'Art. XIII, Sec. 17(2).'],
    ['The CHR may investigate, on its own or on complaint, human rights violations involving:', ['Civil and political rights', 'Only economic rights', 'Only labor disputes', 'Only property rights'], 'Art. XIII, Sec. 18(1).'],
    ['The International Covenant on Civil and Political Rights (ICCPR) was adopted by the UN in:', ['1966', '1948', '1979', '1989'], 'The ICCPR and the ICESCR were both adopted in 1966.'],
    ['CEDAW is the UN convention on the elimination of all forms of discrimination against:', ['Women', 'Children', 'Indigenous peoples', 'Migrant workers'], 'CEDAW was adopted in 1979; the Philippines ratified it in 1981.'],
    ['Saying that all human rights are equally important and none can be fully enjoyed without the others means rights are:', ['Indivisible', 'Inalienable', 'Universal', 'Absolute'], 'Indivisibility means no right ranks above another.'],
    ['Human rights apply to every person everywhere. This means they are:', ['Universal', 'Indivisible', 'Inalienable', 'Interdependent'], 'Universality.'],
    ['The Philippine law on crimes against international humanitarian law, genocide, and crimes against humanity is:', ['RA 9851 (2009)', 'RA 9745 (2009)', 'RA 9208 (2003)', 'RA 10368 (2013)'], 'RA 9851.'],
    ['The Anti-Trafficking in Persons Act of 2003 is:', ['RA 9208', 'RA 9262', 'RA 7610', 'RA 9851'], 'It was expanded by RA 10364 (2012) and RA 11862 (2022).'],
    ['The Magna Carta for Disabled Persons is:', ['RA 7277 (1992)', 'RA 7610 (1992)', 'RA 9710 (2009)', 'RA 11036 (2018)'], 'Now often called the Magna Carta for Persons with Disability.'],
    ['The Mental Health Act of the Philippines is:', ['RA 11036 (2018)', 'RA 10627 (2013)', 'RA 7277 (1992)', 'RA 11313 (2019)'], 'RA 11036.'],
    ['The Anti-Bullying Act, covering elementary and secondary schools, is:', ['RA 10627 (2013)', 'RA 11313 (2019)', 'RA 7610 (1992)', 'RA 9262 (2004)'], 'RA 10627.'],
    ['The Juvenile Justice and Welfare Act of 2006, which set the minimum age of criminal responsibility at 15, is:', ['RA 9344', 'RA 7610', 'RA 9262', 'RA 11188'], 'RA 9344.'],
    ['A neutral third party who helps disputing sides reach their own agreement, without deciding for them, is doing:', ['Mediation', 'Arbitration', 'Litigation', 'Adjudication'], 'In arbitration the third party decides; in mediation the parties decide.'],
    ['In peace studies, “positive peace” means:', ['The presence of justice and fairness, not just the absence of violence', 'A ceasefire between armed groups', 'The absence of war only', 'Military strength that deters attacks'], 'Johan Galtung’s distinction: negative peace is the absence of violence.'],
    ['Harm caused by unjust social systems, such as poverty that blocks access to health care, is called:', ['Structural violence', 'Direct violence', 'Cultural tolerance', 'Negative peace'], 'A term from peace studies (Galtung).'],
    ['International humanitarian law, such as the Geneva Conventions, mainly protects:', ['People who are not or are no longer taking part in hostilities', 'Only soldiers on active duty', 'Only government officials', 'Only refugees in peacetime'], 'For example civilians, the wounded, and prisoners of war.']
  ]);

  /* ---------- General Information: Environment ---------- */
  T('GI', 'Environment', [
    ['Under RA 9003, every barangay or cluster of barangays should have a:', ['Materials Recovery Facility (MRF)', 'Sanitary landfill', 'Incinerator', 'Water treatment plant'], 'RA 9003, Sec. 32.'],
    ['RA 9003 created which body to oversee solid waste management nationwide?', ['National Solid Waste Management Commission', 'Climate Change Commission', 'National Water Resources Board', 'Laguna Lake Development Authority'], 'Chaired by the DENR Secretary.'],
    ['The Clean Air Act (RA 8749) prohibits the incineration of municipal, biomedical, and hazardous wastes that:', ['Emit poisonous and toxic fumes', 'Are produced by households', 'Can be composted', 'Come from public markets'], 'RA 8749, Sec. 20.'],
    ['The People’s Survival Fund for climate adaptation was created by:', ['RA 10174 (2012), amending the Climate Change Act', 'RA 9003', 'RA 10121', 'RA 9275'], 'RA 10174 amended RA 9729.'],
    ['Under RA 10121, the secretariat of the NDRRMC is the:', ['Office of Civil Defense', 'PAGASA', 'Department of Health', 'Philippine National Police'], 'The OCD also serves as the NDRRMC’s executive arm.'],
    ['The Philippine Fisheries Code is RA 8550 (1998). It was amended in 2015 by:', ['RA 10654', 'RA 9147', 'RA 11038', 'RA 7942'], 'RA 10654 strengthened penalties against illegal fishing.'],
    ['Under the Fisheries Code, municipal waters extend up to how many kilometers from the shoreline?', ['15 kilometers', '5 kilometers', '12 kilometers', '22 kilometers'], 'RA 8550 defines municipal waters as up to 15 km from the coastline.'],
    ['The Revised Forestry Code of the Philippines is:', ['PD 705 (1975)', 'PD 1586 (1978)', 'RA 7942 (1995)', 'RA 7586 (1992)'], 'PD 705.'],
    ['The Philippine Mining Act is:', ['RA 7942 (1995)', 'RA 7586 (1992)', 'RA 8550 (1998)', 'PD 705 (1975)'], 'RA 7942.'],
    ['The Philippine Green Jobs Act of 2016 is:', ['RA 10771', 'RA 10121', 'RA 9512', 'RA 11898'], 'It encourages jobs that help preserve the environment.'],
    ['Which convention protects wetlands of international importance?', ['Ramsar Convention', 'Basel Convention', 'CITES', 'Montreal Protocol'], 'Basel covers hazardous waste shipments; CITES covers trade in endangered species.'],
    ['The international treaty regulating trade in endangered wild animals and plants is:', ['CITES', 'Ramsar Convention', 'Kyoto Protocol', 'Basel Convention'], 'The Convention on International Trade in Endangered Species.'],
    ['The Basel Convention controls the cross-border movement of:', ['Hazardous wastes', 'Endangered species', 'Greenhouse gases', 'Migratory birds'], 'It also covers their disposal.'],
    ['Waste that can no longer be recycled or composted is classified under RA 9003 as:', ['Residual waste', 'Biodegradable waste', 'Recyclable waste', 'Special waste'], 'Residual waste goes to a sanitary landfill.'],
    ['El Niño, which often brings drier-than-usual conditions to the Philippines, is caused by:', ['Unusual warming of the central and eastern Pacific Ocean', 'Cooling of the Indian Ocean', 'Typhoons in the South China Sea', 'Volcanic eruptions'], 'La Niña is the opposite, a cooling phase.'],
    ['The Philippines is considered megadiverse because it has:', ['Very high numbers of plant and animal species, many found nowhere else', 'The largest forest area in Asia', 'The most volcanoes in the world', 'The longest coastline in the world'], 'It is among the world’s megadiverse countries.'],
    ['Tubbataha Reefs Natural Park, a UNESCO World Heritage Site, is in the:', ['Sulu Sea', 'Sibuyan Sea', 'Philippine Sea', 'Celebes Sea'], 'Protected under RA 10067 (2010).'],
    ['The maximum population an environment can support without being degraded is its:', ['Carrying capacity', 'Biodiversity index', 'Ecological footprint', 'Biomass'], 'A core concept in environmental management.']
  ]);

  /* ---------- Verbal: Vocabulary ---------- */
  const syn = (w, c, x) => [`Choose the word closest in meaning to ${w}.`, c, x];
  const ant = (w, c, x) => [`Choose the word OPPOSITE in meaning to ${w}.`, c, x];
  T('VA', 'Vocabulary', [
    syn('ABATE', ['Lessen', 'Increase', 'Delay', 'Begin'], 'The storm abated: it became less intense.'),
    syn('AMIABLE', ['Friendly', 'Angry', 'Shy', 'Tired'], 'Amiable means pleasant and friendly.'),
    syn('ARDUOUS', ['Difficult', 'Easy', 'Short', 'Pleasant'], 'An arduous task takes great effort.'),
    syn('AUDACIOUS', ['Bold', 'Timid', 'Careful', 'Quiet'], 'Audacious means willing to take bold risks.'),
    syn('BREVITY', ['Shortness', 'Length', 'Clarity', 'Humor'], 'Brevity is the quality of being brief.'),
    syn('COHERENT', ['Logical and consistent', 'Confusing', 'Loud', 'Incomplete'], 'A coherent report hangs together logically.'),
    syn('COMPLACENT', ['Self-satisfied', 'Anxious', 'Ambitious', 'Hardworking'], 'Complacent means too satisfied to see risks.'),
    syn('CONCUR', ['Agree', 'Disagree', 'Compete', 'Delay'], 'To concur is to agree.'),
    syn('CURTAIL', ['Reduce', 'Extend', 'Decorate', 'Repeat'], 'To curtail spending is to cut it.'),
    syn('DETERIORATE', ['Worsen', 'Improve', 'Remain', 'Grow'], 'To deteriorate is to become worse.'),
    syn('ELOQUENT', ['Fluent and persuasive', 'Silent', 'Rude', 'Confused'], 'An eloquent speaker expresses ideas well.'),
    syn('EMULATE', ['Imitate', 'Ignore', 'Criticize', 'Defeat'], 'To emulate someone is to copy their example.'),
    syn('ERRONEOUS', ['Wrong', 'Correct', 'Careful', 'Recent'], 'Erroneous means containing errors.'),
    syn('EXPEDITE', ['Speed up', 'Slow down', 'Cancel', 'Review'], 'To expedite a request is to process it faster.'),
    syn('FEASIBLE', ['Possible', 'Impossible', 'Expensive', 'Required'], 'A feasible plan can be carried out.'),
    syn('HAMPER', ['Hinder', 'Help', 'Hurry', 'Hide'], 'To hamper is to get in the way of.'),
    syn('IMMINENT', ['About to happen', 'Far away', 'Unlikely', 'Finished'], 'An imminent deadline is very near.'),
    syn('INEVITABLE', ['Unavoidable', 'Uncertain', 'Unusual', 'Unwanted'], 'Inevitable means certain to happen.'),
    syn('JEOPARDIZE', ['Endanger', 'Protect', 'Improve', 'Examine'], 'To jeopardize is to put at risk.'),
    syn('LUCID', ['Clear', 'Dark', 'Lengthy', 'Strange'], 'A lucid explanation is easy to understand.'),
    syn('MANDATORY', ['Required', 'Optional', 'Forbidden', 'Temporary'], 'Mandatory means compulsory.'),
    syn('NEGLIGENT', ['Careless', 'Careful', 'Generous', 'Honest'], 'Negligent means failing to take proper care.'),
    syn('PERTINENT', ['Relevant', 'Unrelated', 'Rude', 'Ancient'], 'Pertinent details relate directly to the matter.'),
    syn('PLAUSIBLE', ['Believable', 'Ridiculous', 'Proven', 'Hidden'], 'A plausible excuse seems reasonable.'),
    syn('PRUDENT', ['Wise and careful', 'Reckless', 'Proud', 'Lazy'], 'A prudent official avoids unnecessary risk.'),
    syn('RECTIFY', ['Correct', 'Worsen', 'Record', 'Repeat'], 'To rectify an error is to fix it.'),
    syn('RELINQUISH', ['Give up', 'Hold on to', 'Take over', 'Look for'], 'To relinquish a post is to surrender it.'),
    syn('SCRUTINIZE', ['Examine closely', 'Glance at', 'Throw away', 'Approve quickly'], 'To scrutinize is to inspect in detail.'),
    syn('SUBSEQUENT', ['Following', 'Previous', 'Sudden', 'Separate'], 'Subsequent means coming after.'),
    syn('TENACIOUS', ['Persistent', 'Weak', 'Careless', 'Polite'], 'Tenacious means holding firmly to a goal.'),
    syn('TRIVIAL', ['Unimportant', 'Serious', 'Complex', 'Urgent'], 'Trivial matters are of little value.'),
    syn('VIGILANT', ['Watchful', 'Sleepy', 'Generous', 'Cheerful'], 'Vigilant means alert to danger.'),
    syn('VIABLE', ['Workable', 'Useless', 'Expensive', 'Delicate'], 'A viable option can succeed.'),
    syn('ZEALOUS', ['Eager', 'Indifferent', 'Jealous', 'Gentle'], 'Zealous means full of enthusiasm.'),
    syn('REDUNDANT', ['Unnecessarily repeated', 'Essential', 'Brief', 'Original'], 'A redundant step repeats what is already done.'),
    syn('OPTIMAL', ['Best', 'Worst', 'Average', 'Partial'], 'Optimal means most favorable.'),
    ant('AMPLE', ['Insufficient', 'Plenty', 'Large', 'Enough'], 'Ample means more than enough.'),
    ant('BENIGN', ['Harmful', 'Kind', 'Gentle', 'Mild'], 'Benign means harmless.'),
    ant('CONCEAL', ['Reveal', 'Hide', 'Cover', 'Store'], 'To conceal is to hide.'),
    ant('DIMINISH', ['Increase', 'Reduce', 'Shrink', 'Weaken'], 'To diminish is to make smaller.'),
    ant('LENIENT', ['Strict', 'Kind', 'Easy', 'Forgiving'], 'Lenient means not strict.'),
    ant('RIGID', ['Flexible', 'Stiff', 'Firm', 'Strict'], 'Rigid means unable to bend.'),
    ant('TRANSIENT', ['Permanent', 'Brief', 'Passing', 'Temporary'], 'Transient means lasting a short time.'),
    ant('VAGUE', ['Clear', 'Unclear', 'Hazy', 'General'], 'Vague means not clearly expressed.'),
    ant('HUMBLE', ['Arrogant', 'Modest', 'Simple', 'Meek'], 'Humble means not proud.'),
    ant('EXPAND', ['Contract', 'Enlarge', 'Spread', 'Extend'], 'To expand is to grow larger.'),
    ['“A piece of cake” means something is:', ['Very easy', 'Delicious', 'Small', 'Shared'], 'An idiom for an easy task.'],
    ['“To hit the nail on the head” means to:', ['Be exactly right', 'Make a mistake', 'Work very hard', 'Hurt oneself'], 'It describes a precise answer or description.'],
    ['“Under the weather” means:', ['Slightly ill', 'Outdoors', 'Very busy', 'In a bad mood'], 'He stayed home because he was under the weather.'],
    ['“To spill the beans” means to:', ['Reveal a secret', 'Waste food', 'Make a mess', 'Start a conversation'], 'To let out information that should stay hidden.'],
    ['“Once in a blue moon” means:', ['Very rarely', 'Every month', 'At night', 'Never'], 'Something that happens very seldom.'],
    ['“The ball is in your court” means:', ['It is your turn to act or decide', 'You have won', 'You are in trouble', 'The game is over'], 'The next move is yours.'],
    ['“Red tape” in government refers to:', ['Excessive bureaucratic rules and procedures', 'Confidential documents', 'An official seal', 'A security barrier'], 'The anti-red tape laws aim to reduce it.'],
    ['“To bite the bullet” means to:', ['Face something difficult with courage', 'Get injured', 'Speak angrily', 'Avoid a problem'], 'To accept something unpleasant that cannot be avoided.'],
    ['The new system will ______ the processing of permits from two weeks to three days.', ['shorten', 'lengthen', 'complicate', 'postpone'], 'Going from two weeks to three days is shortening.'],
    ['Because the instructions were ______, many applicants filled out the form incorrectly.', ['ambiguous', 'precise', 'brief', 'printed'], 'Ambiguous instructions can be read in more than one way.'],
    ['The supervisor was ______ about the deadline; she would not grant any extension.', ['adamant', 'uncertain', 'careless', 'flexible'], 'Adamant means refusing to change one’s mind.'],
    ['Public servants must remain ______ and treat every client the same, regardless of politics.', ['impartial', 'biased', 'secretive', 'idle'], 'Impartial means not favoring one side.']
  ]);

  /* ---------- Verbal: Grammar ---------- */
  T('VA', 'Grammar', [
    ['Everyone in the office ______ required to attend the seminar.', ['is', 'are', 'were', 'have been'], '“Everyone” is singular.'],
    ['The data from the survey ______ been encoded.', ['have', 'has been', 'is', 'was been'], 'In formal usage “data” is plural: “the data have been encoded.”'],
    ['Either the director or her assistants ______ the memo.', ['sign', 'signs', 'is signing', 'has signed'], 'With either…or, the verb agrees with the nearer subject, “assistants.”'],
    ['Twenty pesos ______ the fee for a certified copy.', ['is', 'are', 'were', 'have been'], 'An amount of money treated as one sum takes a singular verb.'],
    ['The jury ______ reached its verdict.', ['has', 'have', 'are', 'were'], 'A collective noun acting as one unit takes a singular verb, matching “its.”'],
    ['She is the more ______ of the two applicants.', ['qualified', 'most qualified', 'qualifiedest', 'much qualified'], 'Compare two with “more”; three or more with “most.”'],
    ['This is the ______ report I have ever read.', ['clearest', 'clearer', 'most clearest', 'more clear'], 'The superlative is used when comparing more than two.'],
    ['Please give the forms to Ana and ______.', ['me', 'I', 'myself', 'mine'], 'The object of “to” takes the object pronoun.'],
    ['______ submitted the report on time?', ['Who', 'Whom', 'Whose', 'Which'], '“Who” is used for the subject of the verb.'],
    ['To ______ should I address this letter?', ['whom', 'who', 'whose', 'who’s'], 'After a preposition, use “whom.”'],
    ['The manager asked us to work quickly and ______.', ['carefully', 'careful', 'care', 'more care'], 'An adverb modifies the verb “work,” parallel with “quickly.”'],
    ['She felt ______ after hearing the news.', ['bad', 'badly', 'worse badly', 'more badly'], 'After a linking verb like “felt,” use an adjective.'],
    ['The office is closed ______ Saturdays.', ['on', 'in', 'at', 'by'], 'Use “on” with days.'],
    ['The seminar will start ______ 9:00 a.m.', ['at', 'on', 'in', 'by the'], 'Use “at” with clock times.'],
    ['He has worked here ______ ten years.', ['for', 'since', 'from', 'during'], '“For” with a length of time.'],
    ['Which sentence is punctuated correctly?', ['The office, which opened last year, serves three towns.', 'The office which opened last year, serves three towns.', 'The office, which opened last year serves three towns.', 'The office which, opened last year serves three towns.'], 'A non-essential clause is set off by commas on both sides.'],
    ['Which sentence is correct?', ['Neither the clerk nor the cashier was absent.', 'Neither the clerk nor the cashier were absent.', 'Neither the clerk or the cashier was absent.', 'Neither the clerk and the cashier was absent.'], 'Neither pairs with nor; two singular subjects take a singular verb.'],
    ['Which sentence is correct?', ['If he had studied, he would have passed.', 'If he would have studied, he would have passed.', 'If he studied, he would have passed.', 'If he has studied, he would have passed.'], 'A past unreal condition uses had + past participle.'],
    ['The new employee is ______ honest person.', ['an', 'a', 'the a', 'one'], 'Use “an” before a vowel sound; the h in honest is silent.'],
    ['Find the error: “The applicants (A) / was told (B) / to bring two (C) / valid IDs (D).”', ['was told', 'The applicants', 'to bring two', 'valid IDs'], '“Applicants” is plural, so “were told.”'],
    ['Find the error: “Each of the employees (A) / must submit (B) / their (C) / own time sheet (D).” (Use formal agreement.)', ['their', 'Each of the employees', 'must submit', 'own time sheet'], 'In formal usage “each” takes a singular pronoun: “his or her.”'],
    ['Find the error: “The director, along with (A) / her staff, (B) / are visiting (C) / the province (D).”', ['are visiting', 'The director, along with', 'her staff,', 'the province'], '“Along with her staff” does not change the subject; “the director is visiting.”'],
    ['Choose the sentence with correct parallel structure.', ['She likes reading, writing, and jogging.', 'She likes reading, writing, and to jog.', 'She likes to read, writing, and jogging.', 'She likes reading, to write, and jog.'], 'Keep items in a list in the same form.'],
    ['Choose the correct word: The new policy had a positive ______ on morale.', ['effect', 'affect', 'affection', 'effective'], '“Effect” is the noun.'],
    ['Choose the correct word: ______ going to the orientation tomorrow.', ['They’re', 'Their', 'There', 'Theyre'], '“They’re” means “they are.”']
  ]);

  /* ---------- Verbal: Reading (English and Filipino passages) ---------- */
  Object.assign(PASSAGES, {
    r1: '<p>When the town hall began accepting business permit applications online, officials expected the lines at the counter to disappear. They did shrink, but not by as much as hoped. A survey found that many small vendors did not have reliable internet or were unsure how to scan their documents. The town then set up a help desk where staff assisted applicants in filing online on the spot. Within three months, online applications doubled, and the average processing time fell from five days to two.</p>',
    r2: '<p>Rice terraces in the Cordilleras were carved into mountainsides by hand more than two thousand years ago, according to many accounts. They are more than scenery: their stone and mud walls hold water that flows down from forest-covered peaks, feeding each level in turn. When upland forests are cut, the water supply becomes irregular and the walls erode. Communities that guard their forests, therefore, are also guarding their harvests.</p>',
    r3: '<p>Many first-time job seekers believe that a long résumé impresses employers. Hiring officers say the opposite is often true. They may spend less than a minute on each application, so a one-page résumé that clearly lists relevant skills and results is more likely to be read in full. Specific numbers, such as “reduced filing errors by 30 percent,” are especially persuasive.</p>',
    r4: '<p>Typhoon warning signals tell the public how strong the expected winds will be, not how much rain will fall. A storm with a low signal can still bring days of heavy rain and severe flooding. For this reason, disaster officials urge residents to watch rainfall and flood advisories as closely as wind signals, and to evacuate when local authorities say so, even if the wind seems mild.</p>',
    r5: '<p>Bamboo is among the fastest-growing plants on Earth; some species can grow close to a meter in a single day. Because it regrows from its roots after harvesting, it can be cut again within a few years without replanting. Builders value it for being light yet strong, and environmental groups promote it as a substitute for slow-growing timber. Its main weakness is that untreated bamboo can be damaged by insects and moisture.</p>',
    f2: '<p>Mahalaga ang pagtitipid ng tubig lalo na tuwing tag-araw. Kapag kakaunti ang ulan, bumababa ang tubig sa mga dam na pinagkukunan ng lungsod. Maliliit na hakbang ang makatutulong: pagsasara ng gripo habang nagsisipilyo, paggamit ng tabo sa halip na hose sa paghuhugas ng sasakyan, at agad na pagpapaayos ng tumutulong tubo.</p>',
    f3: '<p>Si Aling Nena ay nagtitinda ng kakanin sa palengke tuwing umaga. Bago pa sumikat ang araw, gising na siya upang magluto ng puto at kutsinta. Sa kinikita niya, napagtapos niya ang tatlo niyang anak sa kolehiyo. Ayon sa kanya, ang sikreto ay sipag, tiyaga, at pag-iipon kahit kaunti araw-araw.</p>'
  });
  T('VA', 'Reading', [
    ['What was the main reason lines did not shrink as much as expected?', ['Many vendors lacked reliable internet or did not know how to scan documents.', 'The online system was often offline.', 'The fees for online filing were higher.', 'Staff refused to process online applications.'], 'The survey finding explains it.', 'r1'],
    ['What can be inferred about the help desk?', ['It removed the barriers that kept vendors from filing online.', 'It replaced the online system completely.', 'It was set up before the online system.', 'It increased processing time.'], 'After the help desk, online applications doubled.', 'r1'],
    ['The best title for the passage is:', ['Helping People Go Online Made Permits Faster', 'Why Online Systems Always Fail', 'The History of Business Permits', 'How to Scan a Document'], 'The passage moves from a problem to a solution that cut processing time.', 'r1'],
    ['According to the passage, what happens when upland forests are cut?', ['The water supply becomes irregular and the terrace walls erode.', 'The terraces receive more water.', 'Rice harvests increase.', 'Tourists stop visiting.'], 'Stated in the third sentence.', 'r2'],
    ['The passage suggests that protecting forests is important because:', ['Forests supply the water the terraces depend on.', 'Forests are a source of timber for walls.', 'Forests attract more rain to the lowlands.', 'Forests prevent typhoons.'], 'The last sentence links forests to harvests.', 'r2'],
    ['As used in the passage, “carved” most nearly means:', ['Cut and shaped', 'Painted', 'Discovered', 'Measured'], 'The terraces were cut into the mountainsides by hand.', 'r2'],
    ['What do hiring officers say about long résumés?', ['They are often less effective than a clear one-page résumé.', 'They always impress employers.', 'They are required for government jobs.', 'They should include personal hobbies.'], 'The second sentence says the opposite of the belief is often true.', 'r3'],
    ['Why is a one-page résumé more likely to be read in full?', ['Hiring officers may spend less than a minute on each application.', 'Long résumés are not accepted.', 'Printers cannot handle more pages.', 'It contains more numbers.'], 'Stated in the third sentence.', 'r3'],
    ['Which phrase would the passage consider most persuasive on a résumé?', ['“Cut processing time by 40 percent”', '“Hardworking and dedicated”', '“Good communication skills”', '“References available upon request”'], 'The passage says specific numbers are especially persuasive.', 'r3'],
    ['According to the passage, typhoon warning signals indicate:', ['The expected strength of the winds', 'The expected amount of rain', 'The expected flood level', 'The duration of the storm'], 'Stated in the first sentence.', 'r4'],
    ['Why do officials urge residents to watch rainfall and flood advisories?', ['A storm with a low signal can still cause severe flooding.', 'Wind signals are often wrong.', 'Rain is more dangerous than wind in every storm.', 'Flood advisories are issued earlier than signals.'], 'The second sentence explains the risk.', 'r4'],
    ['Which action best follows the passage’s advice?', ['Evacuating when local authorities order it, even if the wind is mild', 'Waiting until the signal reaches its highest level', 'Ignoring flood advisories during low signals', 'Relying only on wind speed to decide'], 'The last sentence gives this advice.', 'r4'],
    ['Which is given as a weakness of bamboo?', ['Untreated bamboo can be damaged by insects and moisture.', 'It grows too slowly.', 'It must be replanted after every harvest.', 'It is too heavy for building.'], 'Stated in the last sentence.', 'r5'],
    ['Why can bamboo be harvested again within a few years without replanting?', ['It regrows from its roots.', 'It is protected by law.', 'It grows only in forests.', 'It is treated with chemicals.'], 'Stated in the second sentence.', 'r5'],
    ['The passage presents bamboo mainly as:', ['A fast-growing, renewable building material', 'A dangerous invasive plant', 'A food crop', 'An expensive luxury material'], 'The passage focuses on growth, regrowth, and building uses.', 'r5']
  ]);
  T('VA', 'Filipino', [
    ['Ayon sa talata, bakit mahalaga ang pagtitipid ng tubig tuwing tag-araw?', ['Bumababa ang tubig sa mga dam kapag kakaunti ang ulan', 'Tumataas ang singil sa kuryente', 'Mas maraming tao ang naliligo sa dagat', 'Nasisira ang mga tubo kapag mainit'], 'Nasa ikalawang pangungusap ang dahilan.', 'f2'],
    ['Alin ang HINDI binanggit na paraan ng pagtitipid ng tubig?', ['Pagdidilig ng halaman tuwing tanghali', 'Pagsasara ng gripo habang nagsisipilyo', 'Paggamit ng tabo sa halip na hose', 'Agad na pagpapaayos ng tumutulong tubo'], 'Ang pagdidilig tuwing tanghali ay hindi nabanggit.', 'f2'],
    ['Ano ang pangunahing kaisipan ng talata?', ['Maliliit na hakbang ay makatutulong sa pagtitipid ng tubig', 'Dapat magtayo ng mas maraming dam', 'Masama ang paggamit ng hose', 'Laging umuulan tuwing tag-araw'], 'Ang buong talata ay tungkol sa pagtitipid ng tubig sa simpleng paraan.', 'f2'],
    ['Anong katangian ni Aling Nena ang pinakamalinaw na ipinakikita?', ['Masipag at matiyaga', 'Tamad at mareklamo', 'Mayabang at magastos', 'Mahiyain at matatakutin'], 'Gumigising siya bago sumikat ang araw at nag-iipon araw-araw.', 'f3'],
    ['Ano ang naging bunga ng pagsisikap ni Aling Nena?', ['Napagtapos niya ang tatlo niyang anak sa kolehiyo', 'Nagkaroon siya ng malaking tindahan', 'Lumipat siya sa ibang bansa', 'Tumigil siya sa pagtitinda'], 'Nakasaad sa ikatlong pangungusap.', 'f3'],
    ['Ayon kay Aling Nena, ano ang kanyang sikreto?', ['Sipag, tiyaga, at pag-iipon araw-araw', 'Swerte at malaking puhunan', 'Pagtitinda sa gabi', 'Pangungutang sa bangko'], 'Nasa huling pangungusap.', 'f3'],
    ['Piliin ang kasingkahulugan: Nagbigay siya ng TAIMTIM na panalangin.', ['Taos-puso', 'Mabilis', 'Malakas', 'Maikli'], 'Ang taimtim ay taos-puso o buong-puso.'],
    ['Piliin ang kasingkahulugan: MATIWASAY ang buhay sa probinsya.', ['Payapa', 'Magulo', 'Mahirap', 'Maingay'], 'Ang matiwasay ay payapa o tahimik.'],
    ['Piliin ang kasingkahulugan: Nakita niya ang makapal na PANGANORIN sa langit.', ['Ulap', 'Ibon', 'Bituin', 'Araw'], 'Ang panganorin ay ulap.'],
    ['Piliin ang kasingkahulugan: Hindi ko malimutan ang GUNITA ng aming bakasyon.', ['Alaala', 'Larawan', 'Pangarap', 'Kuwento'], 'Ang gunita ay alaala.'],
    ['Piliin ang kasingkahulugan: Sumakay kami ng SALIPAWPAW patungong Davao.', ['Eroplano', 'Barko', 'Bus', 'Tren'], 'Ang salipawpaw ay lumang salita para sa eroplano.'],
    ['Piliin ang kasingkahulugan: MAPANGLAW ang tanawin pagkatapos ng bagyo.', ['Malungkot', 'Masaya', 'Makulay', 'Maliwanag'], 'Ang mapanglaw ay malungkot o madilim ang dating.'],
    ['Piliin ang kasingkahulugan: MASIGASIG siya sa kanyang pag-aaral.', ['Masikap', 'Pabaya', 'Mabagal', 'Malungkot'], 'Ang masigasig ay masikap o masipag.'],
    ['Piliin ang kasingkahulugan: Ang HIKAYAT ng kanyang kaibigan ang nagtulak sa kanya na mag-aral muli.', ['Udyok', 'Pagbabawal', 'Galit', 'Pagod'], 'Ang hikayat ay udyok o pang-aakit.'],
    ['Piliin ang KASALUNGAT: MASIGLA ang mga bata sa palaruan.', ['Matamlay', 'Masaya', 'Malakas', 'Maingay'], 'Ang kasalungat ng masigla ay matamlay.'],
    ['Piliin ang KASALUNGAT: MARANGYA ang handaan sa kasal.', ['Payak', 'Magarbo', 'Malaki', 'Masarap'], 'Ang kasalungat ng marangya ay payak o simple.'],
    ['Piliin ang KASALUNGAT: MAPAGBIGAY ang kanyang lola.', ['Maramot', 'Mabait', 'Matulungin', 'Masipag'], 'Ang kasalungat ng mapagbigay ay maramot.'],
    ['Piliin ang KASALUNGAT: MATAPANG na hinarap ng bumbero ang apoy.', ['Duwag', 'Malakas', 'Mabilis', 'Maingat'], 'Ang kasalungat ng matapang ay duwag.'],
    ['Ano ang ibig sabihin ng “ilaw ng tahanan”?', ['Ina', 'Ama', 'Bunsong anak', 'Lampara'], 'Ang ina ang tinatawag na ilaw ng tahanan; ang ama ang haligi.'],
    ['Ano ang ibig sabihin ng “haligi ng tahanan”?', ['Ama', 'Ina', 'Lolo', 'Poste ng bahay'], 'Ang ama ang tinatawag na haligi ng tahanan.'],
    ['Ano ang ibig sabihin ng “magsunog ng kilay”?', ['Mag-aral nang mabuti', 'Magluto', 'Magalit', 'Magpaganda'], 'Ginagamit para sa taong nag-aaral nang husto.'],
    ['Ano ang ibig sabihin ng “butas ang bulsa”?', ['Walang pera', 'Burara', 'Mayaman', 'Nawalan ng gamit'], 'Ginagamit para sa taong walang pera.'],
    ['Ano ang ibig sabihin ng “may gatas pa sa labi”?', ['Bata pa at kulang sa karanasan', 'Mahilig sa gatas', 'Madaldal', 'Matakaw'], 'Ginagamit para sa taong bata pa o baguhan.'],
    ['Ano ang ibig sabihin ng “nagtataingang-kawali”?', ['Nagbibingi-bingihan', 'Nagluluto', 'Nakikinig nang mabuti', 'Nagagalit'], 'Ang nagtataingang-kawali ay nagkukunwaring hindi nakaririnig.'],
    ['Ano ang ibig sabihin ng “pagputi ng uwak”?', ['Hindi mangyayari kailanman', 'Mangyayari bukas', 'Paglubog ng araw', 'Pagdating ng tag-ulan'], 'Ginagamit para sa bagay na hindi kailanman mangyayari.'],
    ['Ano ang ibig sabihin ng “isang kahig, isang tuka”?', ['Sapat lamang ang kinikita para sa araw-araw', 'Mahilig mag-alaga ng manok', 'Masipag mag-ipon', 'Mayaman'], 'Ginagamit para sa taong mahirap ang buhay.'],
    ['Ano ang ibig sabihin ng “makapal ang mukha”?', ['Walang hiya', 'Mataba', 'Matapang', 'Maganda'], 'Ginagamit para sa taong hindi marunong mahiya.'],
    ['Piliin ang wastong salita: ______ mo ang pawis sa iyong noo.', ['Pahirin', 'Pahiran', 'Pahirain', 'Pahid'], 'Ang pahirin ay pag-aalis; ang pahiran ay paglalagay.'],
    ['Piliin ang wastong salita: ______ mo ng mantikilya ang tinapay.', ['Pahiran', 'Pahirin', 'Pahirain', 'Pinahid'], 'Ang pahiran ay paglalagay ng isang bagay sa ibabaw.'],
    ['Piliin ang wastong salita: ______ mo ang sahig bago dumating ang bisita.', ['Walisan', 'Walisin', 'Wawalisin', 'Walis'], 'Walisan ang lugar (sahig); walisin ang dumi.'],
    ['Piliin ang wastong salita: Umalis siya ______ dumating ako.', ['nang', 'ng', 'na', 'kung'], 'Ginagamit ang “nang” bilang pangatnig na nangangahulugang “noong.”'],
    ['Piliin ang wastong salita: Pupunta kami ______ Ana at Ben mamaya.', ['kina', 'kila', 'kinala', 'sila'], 'Ang wastong anyo ay “kina,” hindi “kila.”']
  ]);

  /* ---------- Verbal: Paragraph organization ---------- */
  T('VA', 'Paragraph Organization', [
    ['Arrange the sentences into a logical paragraph.\n1. Then, the application is checked for complete requirements.\n2. Next, the applicant pays the examination fee.\n3. First, the applicant fills out the application form.\n4. Finally, the applicant receives a notice of the testing venue.', ['3 – 1 – 2 – 4', '3 – 2 – 1 – 4', '1 – 3 – 2 – 4', '3 – 1 – 4 – 2'], 'Follow the signal words: First, Then, Next, Finally.'],
    ['Arrange the sentences into a logical paragraph.\n1. As a result, fewer students are late for their first class.\n2. Traffic near the school used to be heavy every morning.\n3. The city then opened a new loading zone and assigned traffic aides.\n4. Parents complained that students were missing their first class.', ['2 – 4 – 3 – 1', '4 – 2 – 3 – 1', '2 – 3 – 4 – 1', '3 – 2 – 4 – 1'], 'Problem, its effect, the response, the result.'],
    ['Arrange the sentences into a logical paragraph.\n1. These skills help them work well in teams.\n2. Volunteering teaches young people practical skills.\n3. For example, they learn to plan events and solve problems.\n4. Many employers therefore value volunteer experience.', ['2 – 3 – 1 – 4', '2 – 1 – 3 – 4', '3 – 2 – 1 – 4', '4 – 2 – 3 – 1'], 'Main idea, example, effect, conclusion.'],
    ['Arrange the sentences into a logical paragraph.\n1. However, the plant also needs regular pruning.\n2. Calamansi is easy to grow in a home garden.\n3. It tolerates heat and needs only moderate watering.\n4. Without pruning, it produces fewer fruits.', ['2 – 3 – 1 – 4', '2 – 1 – 3 – 4', '3 – 2 – 4 – 1', '2 – 4 – 3 – 1'], '“However” introduces the contrast after the positive points.']
  ]);

  /* ---------- Analytical: Analogy ---------- */
  const an = (a, b, c, ch, x) => [`${a} : ${b} :: ${c} : ______`, ch, x];
  T('AA', 'Analogy', [
    an('BIRD', 'NEST', 'BEE', ['Hive', 'Honey', 'Flower', 'Sting'], 'Animal and its home.'),
    an('CHEF', 'KITCHEN', 'JUDGE', ['Courtroom', 'Gavel', 'Lawyer', 'Verdict'], 'Worker and workplace.'),
    an('HUNGRY', 'EAT', 'TIRED', ['Rest', 'Run', 'Cry', 'Work'], 'A need and what satisfies it.'),
    an('GLOVE', 'HAND', 'SOCK', ['Foot', 'Shoe', 'Leg', 'Wool'], 'Clothing and the body part it covers.'),
    an('MINUTE', 'HOUR', 'MONTH', ['Year', 'Week', 'Day', 'Season'], 'Smaller unit and the larger unit it is part of.'),
    an('PETAL', 'FLOWER', 'PAGE', ['Book', 'Word', 'Paper', 'Library'], 'Part and whole.'),
    an('TEACHER', 'STUDENT', 'DOCTOR', ['Patient', 'Nurse', 'Hospital', 'Medicine'], 'Professional and the person they serve.'),
    an('RAIN', 'FLOOD', 'SPARK', ['Fire', 'Light', 'Smoke', 'Match'], 'Cause and a possible effect.'),
    an('WHISPER', 'SHOUT', 'DRIZZLE', ['Downpour', 'Cloud', 'Mist', 'Umbrella'], 'Mild versus intense degree.'),
    an('KEY', 'LOCK', 'PASSWORD', ['Account', 'Keyboard', 'Letter', 'Secret'], 'Thing that opens and what it opens.'),
    an('SCISSORS', 'CUT', 'BROOM', ['Sweep', 'Clean', 'Dust', 'Handle'], 'Tool and function.'),
    an('PILOT', 'AIRPLANE', 'DRIVER', ['Car', 'Road', 'License', 'Garage'], 'Operator and the vehicle they control.'),
    an('CARPENTER', 'WOOD', 'TAILOR', ['Cloth', 'Needle', 'Shirt', 'Button'], 'Worker and the material they work with.'),
    an('NOVICE', 'EXPERT', 'APPRENTICE', ['Master', 'Student', 'Worker', 'Beginner'], 'Beginner and highly skilled person.'),
    an('MAYOR', 'CITY', 'GOVERNOR', ['Province', 'Barangay', 'Country', 'Region'], 'Local chief executive and the unit they head.'),
    an('SENATE', 'SENATOR', 'CABINET', ['Secretary', 'Senator', 'Mayor', 'Judge'], 'Body and its member.'),
    an('PEN', 'INK', 'CAR', ['Fuel', 'Road', 'Wheel', 'Driver'], 'Object and what it uses up to work.'),
    an('ARCHIPELAGO', 'ISLANDS', 'FOREST', ['Trees', 'Leaves', 'Animals', 'Mountains'], 'Collection and its members.'),
    an('THERMOMETER', 'FEVER', 'SCALE', ['Weight', 'Height', 'Speed', 'Heat'], 'Instrument and what it measures.'),
    an('HONEST', 'TRUTH', 'GENEROUS', ['Giving', 'Taking', 'Wealth', 'Kindness'], 'Trait and the behavior it shows.'),
    an('ICE', 'MELT', 'WATER', ['Evaporate', 'Freeze', 'Flow', 'Drink'], 'Substance and the change it undergoes when heated.'),
    an('CALF', 'COW', 'FOAL', ['Horse', 'Goat', 'Sheep', 'Deer'], 'Young and adult.'),
    an('VERB', 'ACTION', 'NOUN', ['Name', 'Sentence', 'Adjective', 'Grammar'], 'Part of speech and what it expresses.'),
    an('FEBRUARY', 'MONTH', 'TUESDAY', ['Day', 'Week', 'Year', 'Date'], 'Instance and its category.'),
    an('BRIBE', 'CORRUPTION', 'THEFT', ['Crime', 'Money', 'Police', 'Jail'], 'Specific act and the broader category.'),
    an('DRY', 'ARID', 'COLD', ['Frigid', 'Warm', 'Wet', 'Breezy'], 'A word and a stronger word for it.')
  ]);

  /* ---------- Analytical: Logic ---------- */
  T('AA', 'Logic', [
    ['All passers receive an eligibility. Rosa did not receive an eligibility. Therefore:', ['Rosa is not a passer.', 'Rosa is a passer.', 'Rosa did not take the exam.', 'Nothing can be concluded.'], 'If every passer gets an eligibility, someone without one is not a passer.'],
    ['Some employees are engineers. All engineers took a licensure exam. Which must be true?', ['Some employees took a licensure exam.', 'All employees took a licensure exam.', 'All who took a licensure exam are engineers.', 'No employee took a licensure exam.'], 'The employees who are engineers took the exam.'],
    ['No reptiles have fur. All snakes are reptiles. Which conclusion follows?', ['No snakes have fur.', 'Some snakes have fur.', 'All reptiles are snakes.', 'Some animals with fur are snakes.'], 'Snakes are inside the reptile group, which has no fur.'],
    ['If the budget is approved, the project will begin in June. The project did not begin in June. What follows?', ['The budget was not approved.', 'The budget was approved.', 'The project was cancelled.', 'Nothing can be concluded.'], 'Denying the result denies the condition.'],
    ['Liza is older than Ana. Ana is older than Mia. Mia is older than Joy. Who is the second youngest?', ['Mia', 'Ana', 'Liza', 'Joy'], 'From oldest: Liza, Ana, Mia, Joy.'],
    ['In a row of 25 students, Paolo is 10th from the left. What is his position from the right?', ['16th', '15th', '14th', '17th'], '25 − 10 + 1 = 16.'],
    ['Five offices are on one floor in a line. The HR office is to the right of Accounting. The Records office is at the far right. Accounting is at the far left. Which statement must be true?', ['HR is not at the far right.', 'HR is next to Accounting.', 'Records is next to HR.', 'HR is in the middle.'], 'Records occupies the far right, so HR cannot be there.'],
    ['Pointing to a woman, Ben says, “Her mother is the only daughter of my mother.” How is the woman related to Ben?', ['Niece', 'Sister', 'Daughter', 'Cousin'], 'The only daughter of Ben’s mother is Ben’s sister; her daughter is Ben’s niece.'],
    ['If 3 clerks can encode 3 batches in 3 hours, how many batches can 6 clerks encode in 6 hours?', ['12', '6', '9', '18'], 'Each clerk does 1 batch in 3 hours, so 2 batches in 6 hours; 6 × 2 = 12.'],
    ['Which word does NOT belong with the others?', ['Senator', 'Governor', 'Mayor', 'Barangay Captain'], 'The others are local chief executives; a senator is a national legislator.'],
    ['Which number does NOT belong? 4, 9, 16, 20, 25', ['20', '4', '16', '25'], 'All others are perfect squares.'],
    ['A clock shows 3:00. What angle do the hands make?', ['90°', '45°', '120°', '180°'], 'Each hour mark is 30°; 3 × 30° = 90°.']
  ]);

  /* ---------- Analytical: Assumptions & conclusions ---------- */
  T('AA', 'Assumptions & Conclusions', [
    ['“Bring your own tumbler to the seminar; no plastic cups will be provided.” This notice assumes that:', ['Participants have tumblers they can bring', 'Plastic cups are expensive', 'The seminar is outdoors', 'Water will not be served'], 'The request only makes sense if people can bring tumblers.'],
    ['“The library extended its hours to 9 p.m. so working students can use it.” The decision assumes that:', ['Many working students are free in the evening', 'Libraries are more popular than before', 'Working students do not own books', 'The library has too few staff'], 'Extending hours helps only if students are available then.'],
    ['Sales of electric fans rose sharply in April. Which is the most likely explanation?', ['April is one of the hottest months in the Philippines.', 'Fan prices tripled in April.', 'Schools opened in April.', 'Typhoon season starts in April.'], 'April falls in the hot dry season.'],
    ['All employees who finished the training passed the assessment. Carlo, an employee, failed the assessment. Which conclusion follows?', ['Carlo did not finish the training.', 'Carlo finished the training.', 'The assessment was too difficult.', 'Carlo will repeat the training.'], 'Finishing guarantees passing; Carlo did not pass, so he did not finish.'],
    ['“To reduce absences, the office will give a certificate to employees with perfect attendance.” The plan assumes that:', ['Employees value recognition enough to change behavior', 'Absences are caused by illness', 'Certificates are inexpensive', 'Perfect attendance is impossible'], 'Rewards change behavior only if people value them.'],
    ['A study found that towns with more parks have lower crime rates. Which statement is the safest conclusion?', ['Parks and lower crime are linked, but parks may not be the cause.', 'Building parks always reduces crime.', 'Crime causes parks to close.', 'Parks have no effect on crime.'], 'A link alone does not prove cause; other factors may explain both.']
  ]);

  /* ---------- Analytical: Data interpretation ---------- */
  Object.assign(PASSAGES, {
    t3: '<p class="cap">Service requests handled by a municipal office</p><table><thead><tr><th>Month</th><th>Received</th><th>Resolved</th></tr></thead><tbody><tr><td>January</td><td>400</td><td>360</td></tr><tr><td>February</td><td>500</td><td>400</td></tr><tr><td>March</td><td>600</td><td>540</td></tr><tr><td>April</td><td>500</td><td>475</td></tr></tbody></table>',
    t4: '<p class="cap">Employees by age group in an agency of 800</p><table><thead><tr><th>Age group</th><th>Share</th></tr></thead><tbody><tr><td>20–29</td><td>30%</td></tr><tr><td>30–39</td><td>35%</td></tr><tr><td>40–49</td><td>20%</td></tr><tr><td>50 and above</td><td>15%</td></tr></tbody></table>'
  });
  T('AA', 'Data Interpretation', [
    ['In which month was the resolution rate (resolved ÷ received) highest?', ['April', 'March', 'January', 'February'], 'January 90%, February 80%, March 90%, April 95%.', 't3'],
    ['How many requests were received in all four months?', ['2,000', '1,775', '1,900', '2,100'], '400 + 500 + 600 + 500 = 2,000.', 't3'],
    ['What was the overall resolution rate for the four months?', ['88.75%', '90%', '88%', '91.25%'], '1,775 resolved ÷ 2,000 received = 88.75%.', 't3'],
    ['By what percent did received requests increase from January to March?', ['50%', '20%', '33%', '200%'], '(600 − 400) ÷ 400 = 50%.', 't3'],
    ['How many employees are aged 30–39?', ['280', '240', '160', '350'], '35% of 800 = 280.', 't4'],
    ['How many employees are 40 years old or older?', ['280', '160', '120', '400'], '20% + 15% = 35%; 35% of 800 = 280.', 't4'],
    ['How many more employees are in the 20–29 group than in the 50-and-above group?', ['120', '80', '15', '240'], '30% − 15% = 15% of 800 = 120.', 't4'],
    ['If 40 employees aged 50 and above retire, how many in that group remain?', ['80', '120', '40', '100'], '15% of 800 = 120; 120 − 40 = 80.', 't4']
  ]);

  /* ---------- Numerical: more word problems ---------- */
  T('NA', 'Word Problems', [
    ['A clerk earns ₱650 per day. How much does she earn in 22 working days?', ['₱14,300', '₱13,000', '₱14,600', '₱15,300'], '650 × 22 = 14,300.'],
    ['An office bought 12 reams of paper at ₱245 each. How much did it pay?', ['₱2,940', '₱2,450', '₱2,840', '₱3,040'], '245 × 12 = 2,940.'],
    ['A water tank holds 1,200 liters. If 15 liters are used every hour, how many hours until it is empty?', ['80', '75', '85', '120'], '1,200 ÷ 15 = 80.'],
    ['The price of a sack of rice rose from ₱1,800 to ₱2,070. By what percent did it increase?', ['15%', '13%', '27%', '17%'], '270 ÷ 1,800 = 0.15 = 15%.'],
    ['A jeepney travels 18 km in 30 minutes. What is its average speed in km/h?', ['36 km/h', '18 km/h', '9 km/h', '54 km/h'], '30 minutes is half an hour; 18 ÷ 0.5 = 36.'],
    ['The sum of two numbers is 50 and their difference is 14. What is the larger number?', ['32', '36', '18', '25'], '(50 + 14) ÷ 2 = 32.'],
    ['A father is 30 years older than his son. In 5 years, he will be 3 times as old as his son. How old is the son now?', ['10', '15', '5', '20'], 'f = s + 30; s + 35 = 3(s + 5) gives s = 10.'],
    ['If 8 workers can paint a building in 15 days, how many workers are needed to finish it in 10 days?', ['12', '10', '16', '6'], '8 × 15 = 120 worker-days; 120 ÷ 10 = 12.'],
    ['A store sells pens at 3 for ₱25. How much do 18 pens cost?', ['₱150', '₱125', '₱175', '₱450'], '18 pens = 6 sets of 3; 6 × ₱25 = ₱150.'],
    ['An employee spends 1/4 of his salary on rent and 1/3 on food. What fraction is left?', ['5/12', '7/12', '1/2', '2/7'], '1/4 + 1/3 = 7/12 spent; 1 − 7/12 = 5/12.'],
    ['A rectangle’s length is twice its width, and its perimeter is 48 cm. What is its area?', ['128 cm²', '96 cm²', '144 cm²', '64 cm²'], '2(2w + w) = 48 gives w = 8, l = 16; area = 128.'],
    ['A ₱15,000 loan is paid back in 12 equal monthly payments with ₱1,800 total interest. How much is each payment?', ['₱1,400', '₱1,250', '₱1,350', '₱1,500'], '(15,000 + 1,800) ÷ 12 = 1,400.']
  ]);
})(window);
