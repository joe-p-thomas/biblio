# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#### USERS #####
# Master Account
user1 = User.create(first_name: 'Joe', last_name: 'Thomas',
                    username: 'joe-thomas', password: 'password')
# Guest User
user2 = User.create(first_name: 'guest', last_name: 'user',
                    username: 'guest_user', password: 'password')




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

book = Book.create(title: 'The Lies of Locke Lamora',
                   author: 'Scott Lynch',
                   user_id: 1,
                   image_url: '51tpIK8K_2BtL_dfcbei',
                   description: 'temp')

book = Book.create(title: 'Red Seas Under Red Skies',
                   author: 'Scott Lynch',
                   user_id: 1,
                   image_url: '887877_q9oehf',
                   description: 'temp')

book = Book.create(title: 'The Republic of Thieves',
                   author: 'Scott Lynch',
                   user_id: 1,
                   image_url: '220px-Republic_of_Thieves_by_Scott_Lynch_Cover_fngibs',
                   description: 'temp')

book = Book.create(title: 'American Gods',
                   author: 'Neil Gaiman',
                   user_id: 1,
                   image_url: '51s8nymjzwl_mz216q',
                   description: 'temp')

book = Book.create(title: 'Ready Player One',
                   author: 'Ernest Cline',
                   user_id: 1,
                   image_url: 'Ready_Player_One_cover_dxkt1e',
                   description: 'temp')

book = Book.create(title: 'The Left Hand of Darkness',
                   author: 'Ursula K. Le Guin',
                   user_id: 1,
                   image_url: '34e1dee4900b7334725714c1e9e533e8_jmfike',
                   description: 'temp')

book = Book.create(title: 'The Fountainhead',
                   author: 'Ayn Rand',
                   user_id: 1,
                   image_url: '5_the-fountainhead-by-ayn-rand_xosknh',
                   description: 'temp')

book = Book.create(title: 'The Restaurant at the End of the Universe',
                   author: 'Douglas Adams',
                   user_id: 1,
                   image_url: '8695_jehmwh',
                   description: 'temp')

book = Book.create(title: 'A Walk in the Woods',
                   author: 'Bill Bryson',
                   user_id: 1,
                   image_url: '51FH8CFR32L_h582ha',
                   description: 'temp')

book = Book.create(title: 'The Name of the Wind',
                   author: 'Patrick Rothfuss',
                   user_id: 1,
                   image_url: 'cover_277_ha1xib',
                   description: 'temp')

book = Book.create(title: "The Wise Man's Fear",
                   author: 'Patrick Rothfuss',
                   user_id: 1,
                   image_url: 'cover-paperback-wise-man_277_bkgbrh',
                   description: 'temp')

book = Book.create(title: 'Brave New World',
                   author: 'Aldous Huxley',
                   user_id: 1,
                   image_url: 'BraveNewWorld_FirstEdition_qlrmz2',
                   description: 'temp')

## Science Fiction ##
book10 = Book.create(title: 'Stranger in a Strange Land',
                   author: 'Robert A Heinlein',
                   user_id: 1,
                   image_url: 'stranger_ina_strange_land._oljloy',
                   description: 'Valentine Michael Smith is a human being raised on Mars, newly returned to Earth. Among his people for the first time, he struggles to understand the social mores and prejudices of human nature that are so alien to him, while teaching them his own fundamental beliefs in grokking, watersharing, and love. ')

book11 = Book.create(title: 'Dune',
                   author: 'Frank Herbert',
                   user_id: 1,
                   image_url: '41shWIN_2BssL_tybesv',
                   description: "Here is the novel that will be forever considered a triumph of the imagination. Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Muad'Dib. He would avenge the traitorous plot against his noble family--and would bring to fruition humankind's most ancient and unattainable dream.")








#### BOOKSHELVES ####
bookshelf1 = Bookshelf.create(title: 'Fantasy', user_id: user2.id)
bookshelf2 = Bookshelf.create(title: 'Science Fiction', user_id: user2.id)




#### SHELVINGS ####
Shelving.create(book_id: book1.id, bookshelf_id: 3)
Shelving.create(book_id: book2.id, bookshelf_id: 3)
Shelving.create(book_id: book3.id, bookshelf_id: 3)
Shelving.create(book_id: book4.id, bookshelf_id: 3)
Shelving.create(book_id: book5.id, bookshelf_id: 3)
Shelving.create(book_id: book6.id, bookshelf_id: 3)
Shelving.create(book_id: book10.id, bookshelf_id: 3)
Shelving.create(book_id: book11.id, bookshelf_id: 3)

shelving1 = Shelving.create(book_id: book1.id, bookshelf_id: bookshelf1.id)
shelving2 = Shelving.create(book_id: book2.id, bookshelf_id: bookshelf1.id)
shelving3 = Shelving.create(book_id: book3.id, bookshelf_id: bookshelf1.id)
shelving4 = Shelving.create(book_id: book4.id, bookshelf_id: bookshelf1.id)
shelving5 = Shelving.create(book_id: book5.id, bookshelf_id: bookshelf1.id)
shelving6 = Shelving.create(book_id: book6.id, bookshelf_id: bookshelf1.id)

shelving7 = Shelving.create(book_id: book10.id, bookshelf_id: bookshelf2.id)
shelving8 = Shelving.create(book_id: book11.id, bookshelf_id: bookshelf2.id)

#### REVIEWS ####
Review.create(book_id: book1.id, user_id: user1.id, rating: 5)
