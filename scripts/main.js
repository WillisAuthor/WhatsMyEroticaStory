
$(function() {

    // Populate using an object literal
    
    WTF.init({
     heading: [
                "Let me tell you what happened last night...",
                "Check this shit out,",
                "You had a wild night? Let me tell you about my night!",
                "So remember when I said I haven't had sex in a while...",
                "Dude, you won't believe this!",
                "There I was at the bar when...",
                "I'm telling you, this really happened...",
                "Nobody is going to believe me...",
                "So, there I was when...",
                "Don't laugh but...",
                "People are going to think I'm a pervert because...",
                "I mean, not to brag, but...",
                "I saw your mom last night and she caught me...",
                "This happened, aske your mom, she was there when...",
            ],
            response: [
                "I need a cold shower now.",
                "Get your mind out of the gutter!",
                "Pardon me, I've got a hot flash coming on...",
                "I feel like a sinner in church!",
                "Good gravy!",
                "I swear I'm not a whore",
                "I can do better",
                "Oh! And then there was that time...",
                "I'm not lying!",
                "It was hot!",
                "It was amazing!",
                "Try to beat that!",
            ],
    
            template: [
                "@adjective @loveinterest @verbed and @verbed me!",
                "I was caught @verbing the @adjective @loveinterest in the @locations!",
                "A @adjective @loveinterest stuck thier @bodypart in my @bodypart!",
                "Author @author wrote a smutty erotica about me @verbing a @adjective @loveinterest! How cool!",
                "@loveinterest came throw that door and @verbed me like a @adjective harlot!",
                "I was taken to the @locations and there @loveinterest @verbed me with their @bodypart!",
                "I was reading a book by @author when @loveinterest appeared and @verbed me!",
                "Can you believe I foune my name in Author @author latest smut book about me @verbing the @adjective @loveinterest!",
                "@author's @adjective @loveinterest @verbed their @bodypart in the @locations.",
                "What is with @author and @bodypart? I swear this has come up more than once, I like @bodypart as long as I can @verb them with @loveinterest!",
                "I met with @loveinterest. Honestly, I really like it when the @verb my @bodypart after @verbing my @bodypart. It was so good!",

            ],
    
            author: [
                "Honey Cummings",
                "Ali Whippe",
                "Grayson Ace",
                "Leo Sparx",
                "Dalia Lance",
                "Randy Cloose",
                "Chastity Veldt",
                "Beau Lake",
                "V.C. Willis",
                "Shae Coon",
                "Aria Skylar",
            ],
            
            adjective: [
                "bitchy",
                "blunt",
                "boisterous",
                "bossy",
                "brave",
                "callous",
                "cautious",
                "charming",
                "cheerful",
                "churlish",
                "cold",
                "composed",
                "conceited",
                "condescending",
                "confident",
                "conscientious",
                "cool-headed",
                "courageous",
                "crass",
                "critical",
                "cruel",
                "cunning",
                "curious",
                "cynical",
                "decisive",
                "dependable",
                "determined",
                "driven",
                "fearless",
                "flamboyant",
                "flirtatious",
                "friendly",
                "gruff",
                "headstrong",
                "hot-headed",
                "lazy",
                "loud",
                "Machiavellian",
                "moody",
                "philosophical",
                "pompous",
                "pretty chill",
                "romantic",
                "selfish",
                "sensitive",
                "thoughtful",
                "delightful",
                "demure",
                "diligent",
                "disruptive",
                "dramatic",
                "dutiful",
                "frank",
                "funny",
                "fussy",
                "generous",
                "gentle",
                "grouchy",
                "guarded",
                "helpful",
                "hot-headed",
                "hypercritical",
                "level-headed",
                "mean",
                "methodical",
                "meticulous",
                "miserable",
                "motivated",
                "naive",
                "nosy",
                "peaceful",
                "pensive",
                "plain-speaking",
                "playful",
                "plucky",
                "proud",
                "quick-tempered",
                "reliable",
                "resourceful",
                "respectful",
                "restless",
                "sassy",
                "sentimental",
                "short-tempered",
                "snobby",
                "sombre",
                "sophisticated",
                "spiteful",
                "soulless",
                "stern",
                "stoic",
                "surly",
                "sweet",
                "suspicious",
                "talented",
                "warm-hearted",
                "adventurous",
                "agreeable",
                "ambitious",
                "anxious",
                "apathetic",
                "argumentative",
                "assertive",
                "attentive",
                "impulsive",
                "inventive",
                "unpredictable",
                "eager",
                "easy-going",
                "egotistical",
                "emotional",
                "enterprising",
                "enthusiastic",
                "excitable",
                "impatient",
                "impetuous",
                "obnoxious",
                "old-fashioned",
                "outgoing",
                "outspoken",
                "melodramatic",
                "chipper",
                "compassionate",
                "considerate",
                "faithful",
                "modest",
                "naked",
                "sexy",
                "sultry",
                "handsome",
                "gorgeous",
                "horny",
                "raunchy",
                "erotic",
            ],
    
            loveinterest: [
                "Professor",
                "Bouncer",
                "Chef",
                "Chupacabra",
                "Sasquatch",
                "Bigfoot",
                "Skunk Ape",
                "Blue Lady",
                "Woman in White",
                "Bloody Mary",
                "Yeti",
                "Jersey Devil",
                "Leprachaun",
                "Faerie",
                "Mermaid",
                "Siren",
                "Minotaur",
                "Billionnaire",
                "Bodyguard",
                "Bartender",
                "Guber Driver",
                "Biker",
                "Prince",
                "Priest",
                "Archbishop",
                "Blacksmith",
                "Princess",
                "Janitor",
                "Comedian",
                "Yoga Instructor",
                "Dante",
                "John",
                "Cedric",
                "Incubus",
                "Succubus",
                "Demon",
                "Vampire",
                "Bloodeater",
                "Champion",
                "Troll",
                "Werewolf",
                "Big Bad Wolf",
                "Red Riding Hood",
                "Goldie",
                "Peter von Schmidt",
                "Organ Player",
            ],
    
            verbed: [
                "kissed",
                "hugged",
                "groped",
                "licked",
                "touched",
                "goosed",
                "fingered",
                "banged",
                "fucked",
                "bit",
            ],
            
            verbing: [
                "kissing",
                "hugging",
                "groping",
                "licking",
                "touching",
                "goosing",
                "fingering",
                "banging",
                "fucking",
                "biting",
            ],
            
                   
            verb: [
                "kiss",
                "hug",
                "grope",
                "lick",
                "touch",
                "goose",
                "finger",
                "bang",
                "fuck",
                "bite",
            ],
            
                           
            bodypart: [
                "tongue",
                "ear",
                "mouth",
                "finger",
                "hand",
                "foot",
                "pussy",
                "cock",
                "dick",
                "devl doorbell",
            ],
            
            locations: [
                "closet",
                "office",
                "garage",
                "bed",
                "boat",
                "canoe",
                "car",
                "movie theater",
                "classroom",
                "teacher's office",
                "jailhouse",
                "Red's bar",
                "Lions den",
                "library",
                "bathhouse",
            ],
     });
    
    });
