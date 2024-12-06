let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
 
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}
var myImage = document.querySelector('#movieimage');
var mySynop = document.querySelector('#synopsis');

function myFunction() {
    var x = document.getElementById("#movieimage");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function image1(){
    myImage.src = "./img/nb.png";
    mySynop.innerHTML = "In 1940s South Carolina, mill worker Noah Calhoun (Ryan Gosling) and rich girl Allie (Rachel McAdams) are desperately in love. But her parents don't approve. When Noah goes off to serve in World War II, it seems to mark the end of their love affair. In the interim, Allie becomes involved with another man (James Marsden). But when Noah returns to their small town years later, on the cusp of Allie's marriage, it soon becomes clear that their romance is anything but over.";
}
function image2(){
    myImage.src = "./img/lose a guy.png";
    mySynop.innerHTML = "An advice columnist, Andie Anderson (Kate Hudson), tries pushing the boundaries of what she can write about in her new piece about how to get a man to leave you in 10 days. Her editor, Lana (Bebe Neuwirth), loves it, and Andie goes off to find a man she can use for the experiment. Enter executive Ben Berry (Matthew McConaughey), who is so confident in his romantic prowess that he thinks he can make any woman fall in love with him in 10 days. When Andie and Ben meet, their plans backfire. ";
}
function image3(){
    myImage.src = "./img/50fd.png";
    mySynop.innerHTML = "Playboy vet Henry sets his heart on romancing Lucy, but she has short-term memory loss; she can't remember anything that happened the day before. So every morning, Henry has to woo her again. Her friends and family are very protective, and Henry must convince them that he's in it for love.";
}
function image4(){
    myImage.src = "./img/hou.png";
    mySynop.innerHTML = "The film is a story about the young couple Primo (Padilla) and George (Bernardo), who dream of growing old together. However, as their feelings go deep for each other, they have to deal with the struggles of being in a long-term relationship and the harsh reality of life. The film ends with them being together.";
}
function image5(){
    myImage.src = "./img/grey.png";
    mySynop.innerHTML = "When college senior Anastasia Steele (Dakota Johnson) steps in for her sick roommate to interview prominent businessman Christian Grey (Jamie Dornan) for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.";
}
function image6(){
    myImage.src = "./img/titanic.png";
    mySynop.innerHTML = "A poor artist and a rich debutante meet and fall in love on the famously ill-fated maiden voyage of the `unsinkable' RMS Titanic in 1912.";
}
function image7(){
    myImage.src = "./img/nhf.png";
    mySynop.innerHTML = "On the brink of losing her childhood home, a desperate woman agrees to date a wealthy couple's introverted and awkward 19-year-old son. However, he proves to be more of a challenge than she expected, and time is running out before she loses it all.";
}
function image8(){
    myImage.src = "./img/wwfm.png";
    mySynop.innerHTML = "After spending a night with the girl of his dreams only to become just friends, a man gets the opportunity to travel through time and alter that night over and over again until he gets everything perfect.";
}
function image9(){
    myImage.src = "./img/finfonsmne.png";
    mySynop.innerHTML = "When a woman is left at the alter, the video goes viral online and a PR rep is hired to help her. In the end, they realise that they have fallen for each other.";
}
function image10(){
    myImage.src = "./img/xandy.png";
    mySynop.innerHTML = "Popular blogger Cali is hired to work on a marketing campaign alongside another viral sensation, who also happens to be her ex-boyfriend. Former playboy Gio is intent on proving he has changed and winning Cali back.";
}
function image11(){
    myImage.src = "./img/yn.jpg";
    mySynop.innerHTML = "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.";}

function image12(){
    myImage.src = "./img/fireflies.jpg";
    mySynop.innerHTML = "A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents. Their tale of survival is as heartbreaking as it is true to life. The siblings rely completely on each other and struggle against all odds to stay together and stay alive.";
}
function image13(){
    myImage.src = "./img/violet.jpg";
    mySynop.innerHTML = "After the aftermath of a war, a young girl who was used as a tool for war learns to properly live. With the scars of burns, she goes back to her past to discover her true feelings towards the Major.";
}
function image14(){
    myImage.src = "./img/jjk0.jpg";
    mySynop.innerHTML = "Yuta Okkotsu gains control of an extremely powerful, cursed spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by sorcerers to help him control his power and keep an eye on him.";
}
function image15(){
    myImage.src = "./img/mugen.jpg";
    mySynop.innerHTML = "A boy raised by boars, who wears a boar's head, boards the Infinity Train on a new mission with the Flame Pillar along with another boy who reveals his true power when he sleeps. Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it.";
}
function image16(){
    myImage.src = "./img/spirit.jpg";
    mySynop.innerHTML = "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.";
}
function image17(){
    myImage.src = "./img/mononoke.jpg";
    mySynop.innerHTML = "In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.";
}
function image18(){
    myImage.src = "./img/pancreas.jpg";
    mySynop.innerHTML = "An aloof boy comes across a book in a hospital waiting room. He soon discovers that it is a diary kept by his very popular classmate who reveals to him that she is secretly suffering from a fatal pancreatic illness.";
}
function image19(){
    myImage.src = "./img/weather.jpg";
    mySynop.innerHTML = "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.";
}
function image20(){
    myImage.src = "./img/totoro.jpg";
    mySynop.innerHTML = "Shouyou Hinata, after losing to Kitagawa Daiichi Junior High's setter Tobio Kageyama in his first official volleyball match, transfers to Karasuno High, intent on finally having a proper volleyball team and getting his revenge on Kageyama. Upon arrival at Karasuno, however, Hinata finds out Kageyama has also gone to Karasuno. Initially at odds with each other, the two form an oddball combination and fight together with the other members of the volleyball club. Karasuno reunites with a former rival school, Nekoma High, in a practice match and reignites their school rivalry.";
}
function image21(){
    myImage.src = "./img/hungry.jpg";
    mySynop.innerHTML = " A dystopian adventure film set in the future where young tributes from twelve districts are forced to fight to the death in a televised event.";
}
function image22(){
    myImage.src = "./img/dayaftertom.jpg";
    mySynop.innerHTML = "A disaster film that depicts a sudden and catastrophic climate change event that plunges the Earth into a new Ice Age.";
}
function image23(){
    myImage.src = "./img/MORB.jpg";
    mySynop.innerHTML = "A superhero film based on the Marvel Comics character of the same name, about a scientist who becomes a living vampire.";
}
function image24(){
    myImage.src = "./img/MONKE.jpg";
    mySynop.innerHTML = "A monster movie featuring Godzilla and Kong in a colossal battle.";
}
function image25(){
    myImage.src = "./img/geostorm.jpg";
    mySynop.innerHTML = " A disaster film where a network of satellites designed to control the Earth's climate malfunctions, leading to global catastrophe.";
}
function image26(){
    myImage.src = "./img/eli.jpg";
    mySynop.innerHTML = " A post-apocalyptic action film about a lone warrior who protects a sacred book.";
}
function image27(){
    myImage.src = "./img/pereg.jpg";
    mySynop.innerHTML = "A science fiction horror series set in the 1980s about a group of kids who battle supernatural forces.";
}
function image28(){
    myImage.src = "./img/anni.jpg";
    mySynop.innerHTML = "A fantasy film based on the novel of the same name, about a young boy who discovers a hidden world of peculiar children with extraordinary abilities.";
}
function image29(){
    myImage.src = "./img/dune.jpg" ;
    mySynop.innerHTML = "A science fiction horror film about a team of scientists who enter a mysterious zone to investigate a strange phenomenon.";
}
function image30(){
    myImage.src ="./img/rotj.jpg";
    mySynop.innerHTML = "A visually stunning adaptation of Frank Herbert's classic science fiction novel, set on the desert planet of Arrakis.";
}
function image31(){
    myImage.src = "./img/terrifier.jpg";
    mySynop.innerHTML = "A crazy clown stalks and tries to kill three women in a wretched old apartment building on Halloween night.";
}
function image32(){
    myImage.src = "./img/cent.jfif";
    mySynop.innerHTML = "Two pretty but ditsy American girls are on a road trip through Europe. In Germany, they end up alone at night and when their car breaks down, they take shelter in an isolated villa. They wake in the morning to find themselves in a makeshift hospital along with a Japanese man. Here they meet a psychotic German surgeon whose life-long fantasy is to connect humans together via their gastric systems.";
}
function image33(){
    myImage.src = "./img/incant.jpg";
    mySynop.innerHTML = "Six years ago, Li Ronan is cursed after breaking a religious taboo; now, she must protect her daughter from the consequences of her actions.";
}
function image34(){
    myImage.src = "./img/asylum.jpg";
    mySynop.innerHTML = "The crew of a horror web series travels to an abandoned asylum for a live broadcast. It soon encounters much more than expected as it moves deeper inside the nightmarish old building.";
}
function image35(){
    myImage.src = "./img/conj.jpg";
    mySynop.innerHTML = "The Perrons and their five daughters have recently moved into a secluded farmhouse, where a supernatural presence has made itself known. Though the manifestations are relatively benign at first, events soon escalate in horrifying fashion, especially after the Warrens discover the house's macabre history.";
}
function image36(){
    myImage.src = "./img/it.jpg";
    mySynop.innerHTML = "Seven young outcasts in Derry, Maine, are about to face their worst nightmare, an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the town's children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.";
}
function image37(){
    myImage.src = "./img/mama.jpg";
    mySynop.innerHTML = "On the day that their parents die, sisters Lilly and Victoria vanish in the woods, prompting a frantic search by their Uncle Lucas (Nikolaj Coster-Waldau) and his girlfriend, Annabel (Jessica Chastain). Five years later, miraculously, the girls are found alive in a decaying cabin, and Lucas and Annabel welcome them into their home. But as Annabel tries to reintroduce the children to a normal life, she finds that someone or something still wants to tuck them in at night.";
}
function image38(){
    myImage.src = "./img/saw.jpg";
    mySynop.innerHTML = "A hospital orderly (Leigh Whannell) tells a police officer that he was kidnapped and forced to commit a horrific act to survive.";
}
function image39(){
    myImage.src = "./img/mist.jpg";
    mySynop.innerHTML = "After a powerful storm damages their Maine home, David Drayton (Thomas Jane) and his young son head into town to gather food and supplies. Soon afterward, a thick fog rolls in and engulfs the town, trapping the Draytons and others in the grocery store. Terror mounts as deadly creatures reveal themselves outside, but that may be nothing compared to the threat within, where a zealot (Marcia Gay Harden) calls for a sacrifice.";
}
function image40(){
    myImage.src = "./img/quiet.jpg";
    mySynop.innerHTML = "If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound. Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children while desperately searching for a way to fight back.";
}
function image41(){
    myImage.src = "./img/snwdn.jpg";
    mySynop.innerHTML = "This biographical drama follows Edward Snowden, the former NSA contractor who leaked classified information about mass surveillance, leading to his controversial exile. It’s a tense thriller about secrecy, truth, and the consequences of whistleblowing.";
}
function image42(){
    myImage.src = "./img/next.jpg";
    mySynop.innerHTML = "A man with the ability to see into his own future is pursued by the FBI and a criminal organization, both trying to manipulate his power for their own ends. He must use his gifts to outwit his pursuers and change his fate.";
}
function image43(){
    myImage.src = "./img/mile.jpg";
    mySynop.innerHTML = "A CIA operative leads a highly trained tactical team to safely transport a foreign intelligence asset to a U.S. embassy, but the mission quickly unravels as they face overwhelming opposition and must fight their way through a hostile environment.";
}
function image44(){
    myImage.src = "./img/gotg3.jpeg";
    mySynop.innerHTML = "The Guardians must come together to rescue one of their own and face new threats while exploring Rocket's painful past. Amid personal struggles, they must fight to protect the universe and their family.";
}
function image45(){
    myImage.src = "./img/cove.png";
    mySynop.innerHTML = "A soldier who owes his life to an Afghan interpreter embarks on a dangerous mission to rescue him after he is abandoned during a conflict. This gripping action-thriller explores the bond between soldier and civilian in a war-torn landscape.";
}
function image46(){
    myImage.src = "./img/ruse.jpg";
    mySynop.innerHTML = "A special ops team, led by a charming and skilled operative, is tasked with recovering a powerful weapon that could destabilize the world. They must infiltrate high-society circles and deal with an arms dealer in this action-packed espionage caper.";
}
function image47(){
    myImage.src = "./img/edge.jpg";
    mySynop.innerHTML = "A military officer caught in a time loop is forced to relive the same deadly battle against alien invaders. With each death, he gains more knowledge to help him save humanity, teaming up with a skilled soldier to turn the tide of war.";
}
function image48(){
    myImage.src = "./img/FAST.jfif";
    mySynop.innerHTML = "Dom Toretto and his team face off against a new, powerful foe who seeks revenge on them for their past actions, pushing their skills and bonds to the limit in a high-octane race against time.";
}
function image49(){
    myImage.src = "./img/intel.jpg";
    mySynop.innerHTML = " A mild-mannered accountant is thrown into a world of espionage and danger when he reconnects with his old high school friend, now a CIA agent, leading to an action-packed adventure full of comedy and chaos.";
}
function image50(){
    myImage.src = "./img/under.jpg";
    mySynop.innerHTML = "A billionaire creates a covert team of operatives, each with a unique skill set, to take down dangerous criminals around the world. With no ties to their previous lives, they work outside the law to eliminate threats in explosive and dangerous missions.";
}
