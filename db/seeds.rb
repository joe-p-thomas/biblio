#### USERS #####
# Guest User
guest = User.create(first_name: 'guest', last_name: 'user',
                    username: 'guest_user', password: 'password')
# Master Account
joe = User.create(first_name: 'Joe', last_name: 'Thomas',
                    username: 'joe-thomas', password: 'password')
# Dummy Users
ned = User.create(first_name: 'Ned', last_name: 'Stark',
                    username: 'user3', password: 'password')

tyrion = User.create(first_name: 'Tyrion', last_name: 'Lannister',
                    username: 'user4', password: 'password')

jon = User.create(first_name: 'Jon', last_name: 'Snow',
                    username: 'user5', password: 'password')

hodor = User.create(first_name: 'Hodor', last_name: 'Hodor',
                    username: 'user6', password: 'password')

gandalf = User.create(first_name: 'Gandalf', last_name: 'the Grey',
                    username: 'user7', password: 'password')

legolas = User.create(first_name: 'Legolas', last_name: 'Greenleaf',
                    username: 'user8', password: 'password')

galadriel = User.create(first_name: 'Galadriel,', last_name: 'Lady of Light',
                    username: 'user9', password: 'password')

kvothe = User.create(first_name: 'Kvothe,', last_name: 'son of Arliden',
                    username: 'user10', password: 'password')

paul = User.create(first_name: 'Paul', last_name: 'Atreides',
                    username: 'user11', password: 'password')

george = User.create(first_name: 'George', last_name: 'R.R. Martin',
                    username: 'user12', password: 'password')

locke = User.create(first_name: 'Locke', last_name: 'Lamora',
                    username: 'user13', password: 'password')

roland = User.create(first_name: 'Roland', last_name: 'Deschain',
                    username: 'user13', password: 'password')

tolkien = User.create(first_name: 'J.R.R.', last_name: 'Tolkien',
                    username: 'user14', password: 'password')

gandalf2 = User.create(first_name: 'Gandalf', last_name: 'the White',
                    username: 'user15', password: 'password')

samwise = User.create(first_name: 'Samwise', last_name: 'Gamgee',
                    username: 'user16', password: 'password')

tom = User.create(first_name: 'Tom', last_name: 'Bombadil',
                    username: 'user17', password: 'password')

inigo = User.create(first_name: 'Inigo', last_name: 'Montoya',
                    username: 'user18', password: 'password')



#### BOOKS ####
## Fantasy ##
book1 = Book.create(title: 'The Hobbit',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'hobbit-cover-688x1024_wbuwij',
                    description: 'Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum. ')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.')

book3 = Book.create(title: 'The Two Towers',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'eee4b31031637cd20d984c4146500ebf_bjt3ig',
                    description: 'Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go. ')

book4 = Book.create(title: 'The Return of the King',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'Return_20of_20the_20King_sipblx',
                    description: 'As the Shadow of Mordor grows across the land, the Companions of the Ring have become involved in separate adventures. Aragorn, revealed as the hidden heir of the ancient Kings of the West, has joined with the Riders of Rohan against the forces of Isengard, and takes part in the desperate victory of the Hornburg. Merry and Pippin, captured by Orcs, escape into Fangorn Forest and there encounter the Ents. Gandalf has miraculously returned and defeated the evil wizard, Saruman. Sam has left his master for dead after a battle with the giant spider, Shelob; but Frodo is still alive—now in the foul hands of the Orcs. And all the while the armies of the Dark Lord are massing as the One Ring draws ever nearer to the Cracks of Doom.')

book5 = Book.create(title: 'A Game of Thrones',
                    author: 'George R.R. Martin',
                    user_id: 1,
                    image_url: 'latest_g2dwmd',
                    description: 'Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. To the south, the king’s powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the frozen land they were born to. Now Lord Eddard Stark is reluctantly summoned to serve as the king’s new Hand, an appointment that threatens to sunder not only his family but the kingdom itself.')

book6 = Book.create(title: 'A Clash of Kings',
                    author: 'George R.R. Martin',
                    user_id: 1,
                    image_url: 'clash_of_kings_i796qv',
                    description: 'A comet the color of blood and flame cuts across the sky. And from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns. Six factions struggle for control of a divided land and the Iron Throne of the Seven Kingdoms, preparing to stake their claims through tempest, turmoil, and war. It is a tale in which brother plots against brother and the dead rise to walk in the night. Here a princess masquerades as an orphan boy; a knight of the mind prepares a poison for a treacherous sorceress; and wild men descend from the Mountains of the Moon to ravage the countryside. Against a backdrop of incest and fratricide, alchemy and murder, victory may go to the men and women possessed of the coldest steel...and the coldest hearts. For when kings clash, the whole land trembles.')

book7 = Book.create(title: 'A Storm of Swords',
                    author: 'George R.R. Martin',
                    user_id: 1,
                    image_url: 'A-Storm-of-Swords_ogpk99',
                    description: 'Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken. Joffrey, of House Lannister, sits on the Iron Throne, the uneasy ruler of the land of the Seven Kingdoms. His most bitter rival, Lord Stannis, stands defeated and disgraced, the victim of the jealous sorceress who holds him in her evil thrall. But young Robb, of House Stark, still rules the North from the fortress of Riverrun. Robb plots against his despised Lannister enemies, even as they hold his sister hostage at King’s Landing, the seat of the Iron Throne. Meanwhile, making her way across a blood-drenched continent is the exiled queen, Daenerys, mistress of the only three dragons still left in the world. . . .
                                  But as opposing forces maneuver for the final titanic showdown, an army of barbaric wildlings arrives from the outermost line of civilization. In their vanguard is a horde of mythical Others--a supernatural army of the living dead whose animated corpses are unstoppable. As the future of the land hangs in the balance, no one will rest until the Seven Kingdoms have exploded in a veritable storm of swords. . .')

book8 = Book.create(title: 'A Feast for Crows',
                    author: 'George R.R. Martin',
                    user_id: 1,
                    image_url: 'AFeastForCrows_hcdchw',
                    description: 'It seems too good to be true. After centuries of bitter strife and fatal treachery, the seven powers dividing the land have decimated one another into an uneasy truce. Or so it appears. . . . With the death of the monstrous King Joffrey, Cersei is ruling as regent in King’s Landing. Robb Stark’s demise has broken the back of the Northern rebels, and his siblings are scattered throughout the kingdom like seeds on barren soil. Few legitimate claims to the once desperately sought Iron Throne still exist—or they are held in hands too weak or too distant to wield them effectively. The war, which raged out of control for so long, has burned itself out.
                                  But as in the aftermath of any climactic struggle, it is not long before the survivors, outlaws, renegades, and carrion eaters start to gather, picking over the bones of the dead and fighting for the spoils of the soon-to-be dead. Now in the Seven Kingdoms, as the human crows assemble over a banquet of ashes, daring new plots and dangerous new alliances are formed, while surprising faces—some familiar, others only just appearing—are seen emerging from an ominous twilight of past struggles and chaos to take up the challenges ahead. ')

book9 = Book.create(title: 'A Dance with Dragons',
                    author: 'George R.R. Martin',
                    user_id: 1,
                    image_url: '6618aa0653da0c28411454128b52a8d7_s75yt0',
                    description: 'In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance—beset by newly emerging threats from every direction. In the east, Daenerys Targaryen, the last scion of House Targaryen, rules with her three dragons as queen of a city built on dust and death. But Daenerys has thousands of enemies, and many have set out to find her. As they gather, one young man embarks upon his own quest for the queen, with an entirely different goal in mind.
                                  Fleeing from Westeros with a price on his head, Tyrion Lannister, too, is making his way to Daenerys. But his newest allies in this quest are not the rag-tag band they seem, and at their heart lies one who could undo Daenerys’s claim to Westeros forever.
                                  Meanwhile, to the north lies the mammoth Wall of ice and stone—a structure only as strong as those guarding it. There, Jon Snow, 998th Lord Commander of the Night’s Watch, will face his greatest challenge. For he has powerful foes not only within the Watch but also beyond, in the land of the creatures of ice.')

book10 = Book.create(title: 'The Lies of Locke Lamora',
                   author: 'Scott Lynch',
                   user_id: 1,
                   image_url: '51tpIK8K_2BtL_dfcbei',
                   description: "An orphan’s life is harsh—and often short—in the mysterious island city of Camorr. But young Locke Lamora dodges death and slavery, becoming a thief under the tutelage of a gifted con artist. As leader of the band of light-fingered brothers known as the Gentleman Bastards, Locke is soon infamous, fooling even the underworld’s most feared ruler. But in the shadows lurks someone still more ambitious and deadly. Faced with a bloody coup that threatens to destroy everyone and everything that holds meaning in his mercenary life, Locke vows to beat the enemy at his own brutal game—or die trying.")

book11 = Book.create(title: 'Red Seas Under Red Skies',
                   author: 'Scott Lynch',
                   user_id: 1,
                   image_url: '887877_q9oehf',
                   description: "After a brutal battle with the underworld that nearly destroyed him, Locke and his trusted sidekick, Jean, fled the island city of their birth and landed on the exotic shores of Tal Verrar to nurse their wounds. But even at this westernmost edge of civilization, they can’t rest for long—and are soon back to what they do best: stealing from the undeserving rich and pocketing the proceeds for themselves.
                                 This time, however, they have targeted the grandest prize of all: the Sinspire, the most exclusive and heavily guarded gambling house in the world. Its nine floors attract the wealthiest clientele—and to rise to the top, one must impress with good credit, amusing behavior…and excruciatingly impeccable play. For there is one cardinal rule, enforced by Requin, the house’s cold-blooded master: it is death to cheat at any game at the Sinspire. ")

book12 = Book.create(title: 'The Republic of Thieves',
                   author: 'Scott Lynch',
                   user_id: 1,
                   image_url: '220px-Republic_of_Thieves_by_Scott_Lynch_Cover_fngibs',
                   description: "With what should have been the greatest heist of their career gone spectacularly sour, Locke and his trusted partner, Jean, have barely escaped with their lives. Or at least Jean has. But Locke is slowly succumbing to a deadly poison that no alchemist or physiker can cure. Yet just as the end is near, a mysterious Bondsmage offers Locke an opportunity that will either save him or finish him off once and for all.
                                 Magi political elections are imminent, and the factions are in need of a pawn. If Locke agrees to play the role, sorcery will be used to purge the venom from his body—though the process will be so excruciating he may well wish for death. Locke is opposed, but two factors cause his will to crumble: Jean’s imploring—and the Bondsmage’s mention of a woman from Locke’s past: Sabetha. She is the love of his life, his equal in skill and wit, and now, his greatest rival.")

book13 = Book.create(title: 'American Gods',
                   author: 'Neil Gaiman',
                   user_id: 1,
                   image_url: '51s8nymjzwl_mz216q',
                   description: "It is the story of Shadow—released from prison just days after his wife and best friend are killed in an accident—who gets recruited to be bodyguard, driver, and errand boy for the enigmatic trickster, Mr. Wednesday. So begins Shadow’s dark and strange road trip, one that introduces him to a host of eccentric characters whose fates are mysteriously intertwined with his own. For, beneath the placid surface of everyday life, a storm is brewing—an epic war for the very soul of America—and Shadow is standing squarely in its path.")

book14 = Book.create(title: 'The Name of the Wind',
                   author: 'Patrick Rothfuss',
                   user_id: 1,
                   image_url: 'cover_277_ha1xib',
                   description: "So begins a tale unequaled in fantasy literature—the story of a hero told in his own voice. It is a tale of sorrow, a tale of survival, a tale of one man’s search for meaning in his universe, and how that search, and the indomitable will that drove it, gave birth to a legend.")

book15 = Book.create(title: "The Wise Man's Fear",
                   author: 'Patrick Rothfuss',
                   user_id: 1,
                   image_url: 'cover-paperback-wise-man_277_bkgbrh',
                   description: "So begins the tale of a hero told from his own point of view—a story unequaled in fantasy literature. Now in The Wise Man’s Fear, Day Two of The Kingkiller Chronicle, Kvothe takes his first steps on the path of the hero and learns how difficult life can be when a man becomes a legend in his own time.")

## Science Fiction ##
book16 = Book.create(title: 'Stranger in a Strange Land',
                   author: 'Robert A Heinlein',
                   user_id: 1,
                   image_url: 'stranger_ina_strange_land._oljloy',
                   description: 'Valentine Michael Smith is a human being raised on Mars, newly returned to Earth. Among his people for the first time, he struggles to understand the social mores and prejudices of human nature that are so alien to him, while teaching them his own fundamental beliefs in grokking, watersharing, and love. ')

book17 = Book.create(title: 'Dune',
                   author: 'Frank Herbert',
                   user_id: 1,
                   image_url: '41shWIN_2BssL_tybesv',
                   description: "Here is the novel that will be forever considered a triumph of the imagination. Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Muad'Dib. He would avenge the traitorous plot against his noble family--and would bring to fruition humankind's most ancient and unattainable dream.")

book18 = Book.create(title: 'Ready Player One',
                  author: 'Ernest Cline',
                  user_id: 1,
                  image_url: 'Ready_Player_One_cover_dxkt1e',
                  description: "In the year 2044, reality is an ugly place. The only time teenage Wade Watts really feels alive is when he's jacked into the virtual utopia known as the OASIS. Wade's devoted his life to studying the puzzles hidden within this world's digital confines—puzzles that are based on their creator's obsession with the pop culture of decades past and that promise massive power and fortune to whoever can unlock them.
                                But when Wade stumbles upon the first clue, he finds himself beset by players willing to kill to take this ultimate prize. The race is on, and if Wade's going to survive, he'll have to win—and confront the real world he's always been so desperate to escape.")

book19 = Book.create(title: 'The Left Hand of Darkness',
                  author: 'Ursula K. Le Guin',
                  user_id: 1,
                  image_url: '34e1dee4900b7334725714c1e9e533e8_jmfike',
                  description: "When the human ambassador Genly Ai is sent to Gethen, the planet known as Winter by those outsiders who have experienced its arctic climate, he thinks that his mission will be a standard one of making peace between warring factions. Instead the ambassador finds himself wildly unprepared. For Gethen is inhabited by a society with a rich, ancient culture full of strange beauty and deadly intrigue—a society of people who are both male and female in one, and neither. This lack of fixed gender, and the resulting lack of gender-based discrimination, is the very cornerstone of Gethen life. But Genly is all too human. Unless he can overcome his ingrained prejudices about the significance of 'male' and 'female', he may destroy both his mission and himself.")

book20 = Book.create(title: 'Brave New World',
                   author: 'Aldous Huxley',
                   user_id: 1,
                   image_url: 'BraveNewWorld_FirstEdition_qlrmz2',
                   description: "Far in the future, the World Controllers have created the ideal society. Through clever use of genetic engineering, brainwashing and recreational sex and drugs, all its members are happy consumers. Bernard Marx seems alone harbouring an ill-defined longing to break free. A visit to one of the few remaining Savage Reservations, where the old, imperfect life still continues, may be the cure for his distress...")

## Humor ##
book21 = Book.create(title: 'A Walk in the Woods',
                   author: 'Bill Bryson',
                   user_id: 1,
                   image_url: '51FH8CFR32L_h582ha',
                   description: "The Appalachian Trail trail stretches from Georgia to Maine and covers some of the most breathtaking terrain in America–majestic mountains, silent forests, sparking lakes. If you’re going to take a hike, it’s probably the place to go. And Bill Bryson is surely the most entertaining guide you’ll find. He introduces us to the history and ecology of the trail and to some of the other hardy (or just foolhardy) folks he meets along the way–and a couple of bears.")

book22 = Book.create(title: 'The Restaurant at the End of the Universe',
                  author: 'Douglas Adams',
                  user_id: 1,
                  image_url: '8695_jehmwh',
                  description: "Among Arthur's motley shipmates are Ford Prefect, a longtime friend and expert contributor to the Hitchhiker's Guide to the Galaxy; Zaphod Beeblebrox, the three-armed, two-headed ex-president of the galaxy; Tricia McMillan, a fellow Earth refugee who's gone native (her name is Trillian now); and Marvin, the moody android who suffers nothing and no one very gladly. Their destination? The ultimate hot spot for an evening of apocalyptic entertainment and fine dining, where the food (literally) speaks for itself.")

book23 = Book.create(title: "The Hitchhiker's Guide to the Galaxy",
                   author: 'Douglas Adams',
                   user_id: 1,
                   image_url: '51BxlBTSLyL._SX304_BO1_204_203_200__vwefy2',
                   description:  "Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.
                                  Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide ('A towel is about the most massively useful thing an interstellar hitchhiker can have') and a galaxy-full of fellow travelers: Zaphod Beeblebrox--the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.")

book24 = Book.create(title: 'The Princess Bride',
                   author: 'William Goldman',
                   user_id: 1,
                   image_url: 'The-font-b-Princess-b-font-font-b-Bride-b-font-font-b-Book-b-font_nfsmkx',
                   description: 'Rich in character and satire, the novel is set in 1941 and framed cleverly as an “abridged” retelling of a centuries-old tale set in the fabled country of Florin that is home to “Beasts of all natures and descriptions. Pain. Death. Brave men. Coward men. Strongest men. Chases. Escapes. Lies. Truths. Passions.”')

## Fiction ##
book25 = Book.create(title: 'The Fountainhead',
                   author: 'Ayn Rand',
                   user_id: 1,
                   image_url: '5_the-fountainhead-by-ayn-rand_xosknh',
                   description: "This instant classic is the story of an intransigent young architect, his violent battle against conventional standards, and his explosive love affair with a beautiful woman who struggles to defeat him.")



#### BOOKSHELVES ####
fantasy = Bookshelf.create(title: 'Fantasy', user_id: guest.id)
science_fiction = Bookshelf.create(title: 'Science Fiction', user_id: guest.id)
humor = Bookshelf.create(title: 'Humor', user_id: guest.id)



#### SHELVINGS ####
## Read ##
Shelving.create(book_id: book1.id, bookshelf_id: 1)
Shelving.create(book_id: book2.id, bookshelf_id: 1)
Shelving.create(book_id: book3.id, bookshelf_id: 1)
Shelving.create(book_id: book4.id, bookshelf_id: 1)
Shelving.create(book_id: book5.id, bookshelf_id: 1)
Shelving.create(book_id: book6.id, bookshelf_id: 1)
Shelving.create(book_id: book7.id, bookshelf_id: 1)
Shelving.create(book_id: book10.id, bookshelf_id: 1)
Shelving.create(book_id: book11.id, bookshelf_id: 1)
Shelving.create(book_id: book14.id, bookshelf_id: 1)
Shelving.create(book_id: book15.id, bookshelf_id: 1)
Shelving.create(book_id: book16.id, bookshelf_id: 1)
Shelving.create(book_id: book17.id, bookshelf_id: 1)
Shelving.create(book_id: book18.id, bookshelf_id: 1)
Shelving.create(book_id: book19.id, bookshelf_id: 1)
Shelving.create(book_id: book20.id, bookshelf_id: 1)
Shelving.create(book_id: book21.id, bookshelf_id: 1)
Shelving.create(book_id: book22.id, bookshelf_id: 1)
Shelving.create(book_id: book23.id, bookshelf_id: 1)
Shelving.create(book_id: book24.id, bookshelf_id: 1)
## Will Read ##
Shelving.create(book_id: book8.id, bookshelf_id: 2)
Shelving.create(book_id: book9.id, bookshelf_id: 2)
Shelving.create(book_id: book12.id, bookshelf_id: 2)
Shelving.create(book_id: book13.id, bookshelf_id: 2)
Shelving.create(book_id: book25.id, bookshelf_id: 2)
## Fantasy ##
Shelving.create(book_id: book1.id, bookshelf_id: fantasy.id)
Shelving.create(book_id: book2.id, bookshelf_id: fantasy.id)
Shelving.create(book_id: book3.id, bookshelf_id: fantasy.id)
Shelving.create(book_id: book4.id, bookshelf_id: fantasy.id)
Shelving.create(book_id: book5.id, bookshelf_id: fantasy.id)
Shelving.create(book_id: book6.id, bookshelf_id: fantasy.id)
Shelving.create(book_id: book7.id, bookshelf_id: fantasy.id)
Shelving.create(book_id: book10.id, bookshelf_id: fantasy.id)
Shelving.create(book_id: book11.id, bookshelf_id: fantasy.id)
Shelving.create(book_id: book14.id, bookshelf_id: fantasy.id)
Shelving.create(book_id: book15.id, bookshelf_id: fantasy.id)
## Science Fiction ##
Shelving.create(book_id: book16.id, bookshelf_id: science_fiction.id)
Shelving.create(book_id: book17.id, bookshelf_id: science_fiction.id)
Shelving.create(book_id: book18.id, bookshelf_id: science_fiction.id)
Shelving.create(book_id: book19.id, bookshelf_id: science_fiction.id)
Shelving.create(book_id: book20.id, bookshelf_id: science_fiction.id)
## Humor ##
Shelving.create(book_id: book21.id, bookshelf_id: humor.id)
Shelving.create(book_id: book22.id, bookshelf_id: humor.id)
Shelving.create(book_id: book23.id, bookshelf_id: humor.id)
Shelving.create(book_id: book24.id, bookshelf_id: humor.id)



#### REVIEWS ####
ratings = [1,
           2, 2,
           3, 3, 3, 3,
           4, 4, 4, 4,
           5, 5, 5]
good_reviews = ["A dazzling achievement.",
           "A work of manifest originality, if not genius.",
           "Immensely enjoyable… full of energy, intelligence and delicious turns of phrase.",
           "A book that you cannot put down. If you have yet to read this, go get it now. If
              you have read it, go read it again.",
           "Here is an author that never ceases to amaze me. Another hit from this
              prolific writer.",
           "The story dragged in places and tended to be dull. But the end made up for it all.
              Was worth the time.",
           "Not a genre that I normally delve into, but this book was a delightful surprise.
              I will be back for more.",
           "",
           "",
           "",
           "",
           "",
           ""]

bad_reviews = ["A dull read, I would skip this one.",
               "A waste of my time. Do yourself a favor and move along.",
               "",
               ""]

300.times do |_|
  user = User.all.sample
  book = Book.all.sample
  rating = ratings.sample
  if rating < 3
    body = bad_reviews.sample
  else
    body = good_reviews.sample
  end

  if user.first_name === 'Hodor'
    body = 'Hodor'
  end

  Review.create(book_id: book.id, user_id: user.id,
                rating: rating, body: body)
end
