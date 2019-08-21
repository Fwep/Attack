# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'

User.destroy_all
Channel.destroy_all
Message.destroy_all
Subscription.destroy_all

# Superheroes ----------------------------------------------------------------------------------------------------------------------------------
superman = User.create(username: "Superman", email: "clark.kent@dailyplanet.io", password: "ILoveLois123")
superman_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/superman.jpg")
superman.profile_photo.attach(io: superman_prof, filename: "superman-profile.png")

batman = User.create(username: "Batman", email: "billionaire_playboy_philanthropist@wayneindustries.co", password: "TonyStarkSucks")
batman_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/batman.jpg")
batman.profile_photo.attach(io: batman_prof, filename: "batman-profile.png")

spiderman = User.create(username: "Spiderman", email: "pp2002@yahoo.com", password: "gr3@tpowergr3@tresp0ns!b1l1ty")
spiderman_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/spiderman.jpg")
spiderman.profile_photo.attach(io: spiderman_prof, filename: "spiderman-profile.png")

ironman = User.create(username: "TheRealIronman", email: "anthonystark@mit.edu", password: "Pepper")
ironman_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/iron-man.jpeg")
ironman.profile_photo.attach(io: ironman_prof, filename: "ironman-profile.jpeg")

deadpool = User.create(username: "Deadpool", email: "wadewilson@gmail.com", password: "ball$l0ll0l")
deadpool_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/deadpool.jpg")
deadpool.profile_photo.attach(io: deadpool_prof, filename: "deadpool.jpg")

kyloren = User.create(username: "KyloRen", email: "notahero@empire.first", password: "sassofrass")
kyloren_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/kyloren.jpg")
kyloren.profile_photo.attach(io: kyloren_prof, filename: "kyloren.jpg")

mrfantastic = User.create(username: "mr_fantastic", email: "reedrichards@four.io", password: "love2sing")
mrfantastic_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/mr-fantastic.jpg")
mrfantastic.profile_photo.attach(io: mrfantastic_prof, filename: "mr-fantastic.jpg")

suestorm = User.create(username: "s_storm", email: "suerichards@four.io", password: "jessicaalba")
suestorm_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/invisible-woman.png")
suestorm.profile_photo.attach(io: suestorm_prof, filename: "sue-storm.jpg")

johnnystorm = User.create(username: "johnnystorm", email: "johnnyboy84@sbcglobal.net", password: "tislit")
johnnystorm_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/human-torch.jpg")
johnnystorm.profile_photo.attach(io: johnnystorm_prof, filename: "human-torch.jpg")

thing = User.create(username: "thing", email: "thething@four.io", password: "hulksucks123")
thing_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/the+thing.jpg")
thing.profile_photo.attach(io: thing_prof, filename: "thing.jpg")

wonderwoman = User.create(username: "DianaP_08", email: "wonderwoman@amazon.com", password: "Trevor123")
wonderwoman_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/wonder+woman.jpg")
wonderwoman.profile_photo.attach(io: wonderwoman_prof, filename: "wonder-woman.jpg")

joker = User.create(username: "Joker", email: "hahahahahahahahahahahahaha@ha.ha", password: "WHYSOSERIOUS")
joker_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/jokerface.jpg")
joker.profile_photo.attach(io: joker_prof, filename: "jokerface.jpg")

magneto = User.create(username: "ElMagneto", email: "e.lehnsherr@gmail.com", password: "Love2sing")
magneto_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/magneto.jpg")
magneto.profile_photo.attach(io: magneto_prof, filename: "magneto.jpg")

thanos = User.create(username: "Thanos", email: "lebronjames@nba.com", password: "lolifyourereadingthisstoptryingtocopyme")
thanos_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/thanos.jpg")
thanos.profile_photo.attach(io: thanos_prof, filename: "thanos.jpg")

greengoblin = User.create(username: "gr33ng0blin", email: "norman@oscorp.co", password: "money4ndp0w3r")
greengoblin_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/green+goblin.jpg")
greengoblin.profile_photo.attach(io: greengoblin_prof, filename: "green-goblin.jpg")

taran = User.create(username: "TaranCacacho", email: "tarancacacho@gmail.com", password: "Stilljobsearching")
taran_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/taran.jpg")
taran.profile_photo.attach(io: taran_prof, filename: "https://attack-seeds.s3-us-west-1.amazonaws.com/taran.jpg")

blackwidow = User.create(username: "nat_romanov", email: "bwidow@gmail.com", password: "idiedforarock")
blackwidow_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/black+widow.jpg")
blackwidow.profile_photo.attach(io: blackwidow_prof, filename: "blackwidow.jpg")

hulk = User.create(username: "HULK", email: "brucebanner@harvard.edu", password: "SMASH!")
hulk_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/hulk.jpg")
hulk.profile_photo.attach(io: hulk_prof, filename: "hulk.jpg")

thor = User.create(username: "~Thor~", email: "godofthunder@asgard.gov", password: "ILoveJane")
thor_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/thor.jpg")
thor.profile_photo.attach(io: thor_prof, filename: "thor.jpg")

hawkeye = User.create(username: "Hawkeye", email: "pinpointprecision@yahoo.com", password: "bulls3y3")
hawkeye_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/hawkeye.jpg")
hawkeye.profile_photo.attach(io: hawkeye_prof, filename: "hawkeye.jpg")

antman = User.create(username: "Scott-Lang", email: "xx_noobmaster69@msn.net", password: "password")
antman_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/antman.jpg")
antman.profile_photo.attach(io: antman_prof, filename: "antman.jpg")

emperor = User.create(username: "The.Emperor", email: "palapatine@dark.side", password: "GreatestSithL0rd")
emperor_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/emperor.jpg")
emperor.profile_photo.attach(io: emperor_prof, filename: "emperor.jpg")

darthvader = User.create(username: "annie-skywalker", email: "lord_vader@dark.side", password: "I_am_y0_d@ddy")
darthvader_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/darth+vader.jpg")
darthvader.profile_photo.attach(io: darthvader_prof, filename: "vader.jpg")

flash = User.create(username: "Flash", email: "barryadams@puma.com", password: "z00mz00mz00m")
flash_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/flash.jpg")
flash.profile_photo.attach(io: flash_prof, filename: "flash.jpg")

wolverine = User.create(username: "wolverine", email: "james-howlett@x.men", password: "fackyourself")
wolverine_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/wolverine.jpg")
wolverine.profile_photo.attach(io: wolverine_prof, filename: "wolverine.jpg")

martianmanhunter = User.create(username: "J'Onn J'ozz", email: "elonmusk@spacex.com", password: "SpaceX")
martianmanhunter_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/martianmanhunter.jpg")
martianmanhunter.profile_photo.attach(io: martianmanhunter_prof, filename: "martianmanhunter.jpg")

drstrange = User.create(username: "DrStrange", email: "stephenstrange@mma.magic", password: "0p3ny0ur3y3$")
drstrange_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/drstrange.jpg")
drstrange.profile_photo.attach(io: drstrange_prof, filename: "drstrange.jpg")

aquaman = User.create(username: "aquaman", email: "arthurCurry@warriors.com", password: "Splash")
aquaman_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/aquaman.png")
aquaman.profile_photo.attach(io: aquaman_prof, filename: 'aquaman.jpg')

blackpanther = User.create(username: "T'Challa", email: "black.panther@wakanda.gov", password: "KingIsDead")
blackpanther_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/blackpanther.jpg")
blackpanther.profile_photo.attach(io: blackpanther_prof, filename: 'blackpanther.jpg')

captainamerica = User.create(username: "SRogers", email: "therealcap@usa.gov", password: "shouldbegeneralamericabynow")
captainamerica_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/captainamerica.jpg")
captainamerica.profile_photo.attach(io: captainamerica_prof, filename: 'captainamerica.jpg')

groot = User.create(username: "GROOT", email: "iamgroot@iamgroot.tree", password: "iamgr00t")
groot_prof = open("https://attack-seeds.s3-us-west-1.amazonaws.com/groot.png")
groot.profile_photo.attach(io: groot_prof, filename: 'groot.png')

# Channels ----------------------------------------------------------------------------------------------------------------------------------
general = Channel.create(name: "general", description: "This channel is for team-wide communication and announcements. All team members are in this channel.", is_private: false, is_direct: false, creator_id: superman.id)
justiceleague = Channel.create(name: "justiceleague", description: "The most judicious justices of this unjust era", is_private: false, is_direct: false, creator_id: batman.id)
avengers = Channel.create(name: "avengers", description: "Earth's Mightiest Defenders", is_private: false, is_direct: false, creator_id: ironman.id)
fantasticfour = Channel.create(name: "fantastic-four", description: "The fourth channel dedicated for the fourthiest foursome of four fighters", is_private: false, is_direct: false, creator_id: mrfantastic.id)
mutants = Channel.create(name: "mutants", description: "Communication for mutated misfits", is_private: false, is_direct: false, creator_id: deadpool.id)
moms = Channel.create(name: "moms", description: "The real heroes", is_private: false, is_direct: false, creator_id: wonderwoman.id)
villains = Channel.create(name: "villains", description: "Because Attack doesn't discriminate", is_private: false, is_direct: false, creator_id: joker.id)
random = Channel.create(name: "random", description: "For non-work related banter", is_private: false, is_direct: false, creator_id: antman.id)

# Avengers --------------------------------------------------------------------------------------------------------
avengers1 = Message.create(user_id: hawkeye.id, channel_id: avengers.id, body: "So, I'm down at Wal-Mart getting some cheap arrows for Black Friday and Hulky here's freaking out.")
avengers2 = Message.create(user_id: ironman.id, channel_id: avengers.id, body: "What's he doing there? I have enough money to buy us everything.")
avengers3 = Message.create(user_id: hawkeye.id, channel_id: avengers.id, body: "There was a sale on sweat pants. Purple's hard to find. Thor, you and billionaire boy can get started on Hulk. I'm getting in line to pay for these arrows and I'll be right there.")
avengers4 = Message.create(user_id: thor.id, channel_id: avengers.id, body: "You need not look. I'm already here. Let us convene in aisle 4.".upcase)
avengers5 = Message.create(user_id: ironman.id, channel_id: avengers.id, body: "Is Hulk there?")
avengers6 = Message.create(user_id: thor.id, channel_id: avengers.id, body: "Nay, but the price of these here 'Pringles' are remarkable, on this, your darkest of Frey-days.".upcase)
avengers7 = Message.create(user_id: captainamerica.id, channel_id: avengers.id, body: "Gentlemen, I must remind you that this channel is strictly for emergencies only.")
avengers8 = Message.create(user_id: hulk.id, channel_id: avengers.id, body: "I SMASHED!")
avengers9 = Message.create(user_id: captainamerica.id, channel_id: avengers.id, body: "*sigh*")
avengers10 = Message.create(user_id: hawkeye.id, channel_id: avengers.id, body: "nice")
avengers11 = Message.create(user_id: antman.id, channel_id: avengers.id, body: "NOICE")
avengers12 = Message.create(user_id: groot.id, channel_id: avengers.id, body: "I am Groot.")
avengers13 = Message.create(user_id: captainamerica.id, channel_id: avengers.id, body: "I am Steve Rogers!")

# Justice League --------------------------------------------------------------------------------------------------------
jl1 = Message.create(user_id: batman.id, channel_id: justiceleague.id, body: "I'm Batman.")
jl2 = Message.create(user_id: superman.id, channel_id: justiceleague.id, body: "Anyone want some Starbucks?")
jl3 = Message.create(user_id: aquaman.id, channel_id: justiceleague.id, body: "A few of us are decorating the Watchtower's Christmas tree if anyone wants to help.")
jl4 = Message.create(user_id: flash.id, channel_id: justiceleague.id, body: "Absolutely!")
jl5 = Message.create(user_id: wonderwoman.id, channel_id: justiceleague.id, body: "Arthur, you know you can't invite Barry to these things!")
jl6 = Message.create(user_id: aquaman.id, channel_id: justiceleague.id, body: "Why not?")
jl7 = Message.create(user_id: flash.id, channel_id: justiceleague.id, body: "Done!")
jl8 = Message.create(user_id: wonderwoman.id, channel_id: justiceleague.id, body: "Because it'd be nice if the festivities lasted more than 5 seconds...")
jl9 = Message.create(user_id: flash.id, channel_id: justiceleague.id, body: "I know, the holidays go by so fast, they disappear in a")
jl10 = Message.create(user_id: martianmanhunter.id, channel_id: justiceleague.id, body: "NOOO")
jl11 = Message.create(user_id: flash.id, channel_id: justiceleague.id, body: "flash!")
jl12 = Message.create(user_id: flash.id, channel_id: justiceleague.id, body: "Anyway...I'm doing some shopping rn. What does everyone need? I can be *quick* about it.")
jl13 = Message.create(user_id: superman.id, channel_id: justiceleague.id, body: "Oh, well, I'm pretty fast too.")
jl14 = Message.create(user_id: aquaman.id, channel_id: justiceleague.id, body: "Turtle wax. I've been meaning to try that.")
jl15 = Message.create(user_id: flash.id, channel_id: justiceleague.id, body: "You know it's not actually for waxing turtles, right?")
jl16 = Message.create(user_id: aquaman.id, channel_id: justiceleague.id, body: "Never mind then.")
jl17 = Message.create(user_id: superman.id, channel_id: justiceleague.id, body: "Do you guys not think I'm fast?")

# General --------------------------------------------------------------------------------------------------------
general1 = Message.create(user_id: superman.id, channel_id: general.id, body: "Anyone have a place for me to crash for the night?")
general2 = Message.create(user_id: wonderwoman.id, channel_id: general.id, body: "I might have a spot free if you're willing to share with Bob." )
general3 = Message.create(user_id: ironman.id, channel_id: general.id, body: "Stark Industries is hiring! We're looking for a full-stack engineer with a Ruby on Rails + React/Redux stack. Tell your friends!")
general4 = Message.create(user_id: drstrange.id, channel_id: general.id, body: "WANTED: Karl Mordo, approximately 5'10, medium build, clean-cut hair, dark complexion. Last affiliated with the Masters of the Mystic Arts and last seen in the battle against Dormammu.")
general5 = Message.create(user_id: blackwidow.id, channel_id: general.id, body: "Hey heroes, has anyone been to the Gotham Marriott? Trying to scope out a spot for a meeting with a client.")
general6 = Message.create(user_id: batman.id, channel_id: general.id, body: "I own the place. Trouble's all on me ;)")
general7 = Message.create(user_id: groot.id, channel_id: general.id, body: "I am Groot?")
general8 = Message.create(user_id: blackwidow.id, channel_id: general.id, body: "Wow Bruce, I'm flattered! How could I repay you?")
general9 = Message.create(user_id: hulk.id, channel_id: general.id, body: "HULK SMASH!")
general10 = Message.create(user_id: blackwidow.id, channel_id: general.id, body: "Uh...")

# Villains ----------------------------------------------------------------------------------------------------------------------------------
villains1 = Message.create(user_id: joker.id, channel_id: villains.id, body: "Hey Magneto! Knock knock")
villains2 = Message.create(user_id: magneto.id, channel_id: villains.id, body: "r u serious")
villains3 = Message.create(user_id: joker.id, channel_id: villains.id, body: "Yes. KNOCK KNOCK")
villains4 = Message.create(user_id: greengoblin.id, channel_id: villains.id, body: "Why so SERIOUS? :)")
villains4 = Message.create(user_id: magneto.id, channel_id: villains.id, body: "Alright, alright...who's there?")
villains5 = Message.create(user_id: joker.id, channel_id: villains.id, body: "NOT YOUR PARENTS")
villains6 = Message.create(user_id: thanos.id, channel_id: villains.id, body: "Oh snap!")
villains7 = Message.create(user_id: magneto.id, channel_id: villains.id, body: "Count yourself infinitely lucky we do not reside in the same universe.")
villains8 = Message.create(user_id: joker.id, channel_id: villains.id, body: "HAHAHAHAHAHAHAHAHAHAHA")
villains9 = Message.create(user_id: kyloren.id, channel_id: villains.id, body: "That wasn't even that funny...")
villains10 = Message.create(user_id: joker.id, channel_id: villains.id, body: "Oh please, funny was how some farmer girl with no formal training and an indecisive stromtrooper bested you on Starkiller Base.")
villains11 = Message.create(user_id: emperor.id, channel_id: villains.id, body: "He's got ya there, young one.")
villains12 = Message.create(user_id: kyloren.id, channel_id: villains.id, body: "Shut up! You're just a discount Snoake, and he bathed in the fire of my saber!")
villains13 = Message.create(user_id: emperor.id, channel_id: villains.id, body: "Good. I can feel your anger. I am defenseless...take your weapon and find me. I am in the board room. Strike me down with all of your hatred, and your journey to employee termination will be complete.")
villains14 = Message.create(user_id: magneto.id, channel_id: villains.id, body: "Who are you gentlemen? Get out of our chat.")
villains15 = Message.create(user_id: emperor.id, channel_id: villains.id, body: "You will not stop me. Darth Vader will become more powerful than either of us!")
villains16 = Message.create(user_id: magneto.id, channel_id: villains.id, body: "Who?")
villains17 = Message.create(user_id: darthvader.id, channel_id: villains.id, body: "ME")
villains18 = Message.create(user_id: greengoblin.id, channel_id: villains.id, body: "And who are you, exactly?")
villains19 = Message.create(user_id: darthvader.id, channel_id: villains.id, body: "I AM your father.")
villains20 = Message.create(user_id: darthvader.id, channel_id: villains.id, body: "I am the most powerful Sith Lord this galaxy has ever seen. I have the power to wipe out your whole pathetic planet you call, EARF.")
villains21 = Message.create(user_id: greengoblin.id, channel_id: villains.id, body: "It's called Earth.")
villains22 = Message.create(user_id: thanos.id, channel_id: villains.id, body: "Please...with all six stones I could simply snap my fingers, and half the living universe would cease to exist?")
villains23 = Message.create(user_id: darthvader.id, channel_id: villains.id, body: "That's pretty OP.")
villains24 = Message.create(user_id: emperor.id, channel_id: villains.id, body: "I concur.")

# Mutants ----------------------------------------------------------------------------------------------------------------------------------
mutants1 = Message.create(user_id: deadpool.id, channel_id: mutants.id, body: "@stacy, can you check my spreadsheets? I think they're ready to be sent to the boss.")
mutants2 = Message.create(user_id: wolverine.id, channel_id: mutants.id, body: "Piss off, bub. Nobody here.")
mutants3 = Message.create(user_id: deadpool.id, channel_id: mutants.id, body: "O-M-G. Hey Logan!")

# Fantastic Four ----------------------------------------------------------------------------------------------------------------------------------
ff1 = Message.create(user_id: mrfantastic.id, channel_id: fantasticfour.id, body: "One...")
ff2 = Message.create(user_id: suestorm.id, channel_id: fantasticfour.id, body: "...two...")
ff3 = Message.create(user_id: thing.id, channel_id: fantasticfour.id, body: "...3...")
ff4 = Message.create(user_id: johnnystorm.id, channel_id: fantasticfour.id, body: "I'm actually a 96-year old genetically-enhanced supersoldier..." )
ff5 = Message.create(user_id: thing.id, channel_id: fantasticfour.id, body: "Four real?")
ff6 = Message.create(user_id: suestorm.id, channel_id: fantasticfour.id, body: "My god, Johnny, why didn't you tell me this?!")
ff7 = Message.create(user_id: mrfantastic.id, channel_id: fantasticfour.id, body: "So you're leaving us now?")
ff8 = Message.create(user_id: johnnystorm.id, channel_id: fantasticfour.id, body: "Yeah...kinda")
ff9 = Message.create(user_id: thing.id, channel_id: fantasticfour.id, body: "Good riddance.")
ff10 = Message.create(user_id: captainamerica.id, channel_id: fantasticfour.id, body: "What was that? I couldn't hear you from the critical box office success from up here!")

# Moms ----------------------------------------------------------------------------------------------------------------------------------
moms1 = Message.create(user_id: taran.id, channel_id: moms.id, body: "Love you Mom...")
moms2 = Message.create(user_id: superman.id, channel_id: moms.id, body: "Martha!")
moms3 = Message.create(user_id: batman.id, channel_id: moms.id, body: "WHY DID YOU SAY THAT NAME!!")
moms4 = Message.create(user_id: taran.id, channel_id: moms.id, body: "It's his mother's name!")

# Subscriptions --------------------------------------------------------------------------------------------------------
User.all do |user|
  Subscription.create(user_id: user_id, channel_id: general.id)
end
Channel.all do |channel|
  Subscription.create(user_id: batman.id, channel_id: channel.id) # because Batman is OP
end

Subscription.create(user_id: superman.id, channel_id: justiceleague.id)
Subscription.create(user_id: batman.id, channel_id: justiceleague.id)
Subscription.create(user_id: wonderwoman.id, channel_id: justiceleague.id)
Subscription.create(user_id: martianmanhunter.id, channel_id: justiceleague.id)
Subscription.create(user_id: aquaman.id, channel_id: justiceleague.id)
Subscription.create(user_id: flash.id, channel_id: justiceleague.id)

Subscription.create(user_id: thor.id, channel_id: avengers.id)
Subscription.create(user_id: antman.id, channel_id: avengers.id)
Subscription.create(user_id: blackwidow.id, channel_id: avengers.id)
Subscription.create(user_id: hawkeye.id, channel_id: avengers.id)
Subscription.create(user_id: hulk.id, channel_id: avengers.id)
Subscription.create(user_id: drstrange.id, channel_id: avengers.id)
Subscription.create(user_id: ironman.id, channel_id: avengers.id)
Subscription.create(user_id: spiderman.id, channel_id: avengers.id)
Subscription.create(user_id: blackpanther.id, channel_id: avengers.id)
Subscription.create(user_id: captainamerica.id, channel_id: avengers.id)
Subscription.create(user_id: groot.id, channel_id: avengers.id)

Subscription.create(user_id: ironman.id, channel_id: moms.id)
Subscription.create(user_id: superman.id, channel_id: moms.id)
Subscription.create(user_id: batman.id, channel_id: moms.id)
Subscription.create(user_id: taran.id, channel_id: moms.id)

Subscription.create(user_id: kyloren.id, channel_id: mutants.id)

Subscription.create(user_id: mrfantastic.id, channel_id: fantasticfour.id)
Subscription.create(user_id: suestorm.id, channel_id: fantasticfour.id)
Subscription.create(user_id: johnnystorm.id, channel_id: fantasticfour.id)
Subscription.create(user_id: thing.id, channel_id: fantasticfour.id)
Subscription.create(user_id: captainamerica.id, channel_id: fantasticfour.id)

Subscription.create(user_id: joker.id, channel_id: villains.id)
Subscription.create(user_id: magneto.id, channel_id: villains.id)
Subscription.create(user_id: thanos.id, channel_id: villains.id)
Subscription.create(user_id: greengoblin.id, channel_id: villains.id)
Subscription.create(user_id: kyloren.id, channel_id: villains.id)
Subscription.create(user_id: darthvader.id, channel_id: villains.id)
Subscription.create(user_id: emperor.id, channel_id: villains.id)

Subscription.create(user_id: deadpool.id, channel_id: mutants.id)
Subscription.create(user_id: wolverine.id, channel_id: mutants.id)