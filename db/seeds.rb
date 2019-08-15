# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Channel.destroy_all
Message.destroy_all
Subscription.destroy_all

user1 = User.create(username: "Superman", email: "clark.kent@dailyplanet.io", password: "ILoveLois123")
user2 = User.create(username: "Batman", email: "billionaire_playboy_philanthropist@wayneindustries.co", password: "TonyStarkSucks")
user3 = User.create(username: "Spiderman", email: "pp2002@yahoo.com", password: "gr3@tpowergr3@tresp0ns!b1l1ty")
user4 = User.create(username: "TheRealIronman", email: "anthonystark@mit.edu", password: "Pepper")
user5 = User.create(username: "Deadpool", email: "wadewilson@gmail.com", password: "ball$l0ll0l")
user6 = User.create(username: "KyloRen", email: "notahero@empire.first", password: "sassofrass")
user7 = User.create(username: "mr_fantastic", email: "reedrichards@four.io", password: "love2sing")
user8 = User.create(username: "s_storm", email: "suerichards@four.io", password: "jessicaalba")
user9 = User.create(username: "johnnystorm", email: "johnnyboy84@sbcglobal.net", password: "tislit")
user10 = User.create(username: "thing", email: "thething@four.io", password: "hulksucks123")
user11 = User.create(username: "DianaP_08", email: "wonderwoman@amazon.com", password: "Trevor123")
user12 = User.create(username: "Joker", email: "hahahahahahahahahahahahaha@ha.ha", password: "WHYSOSERIOUS")
user13 = User.create(username: "ElMagneto", email: "e.lehnsherr@gmail.com", password: "Love2sing")
user14 = User.create(username: "Thanos", email: "lebronjames@nba.com", password: "lolifyourereadingthisstoptryingtocopyme")
user15 = User.create(username: "gr33ng0blin", email: "norman@oscorp.co", password: "money4ndp0w3r")
user16 = User.create(username: "TaranCacacho", email: "tarancacacho@gmail.com", password: "Stilljobsearching")


channel1 = Channel.create(name: "general", description: "This channel is for team-wide communication and announcements. All team members are in this channel.", is_private: false, is_direct: false, creator_id: user1.id)
channel2 = Channel.create(name: "justiceleague", description: "The most judicious justices of this unjust era", is_private: false, is_direct: false, creator_id: user2.id)
channel3 = Channel.create(name: "avengers", description: "The Aven (get it?)", is_private: false, is_direct: false, creator_id: user4.id)
channel4 = Channel.create(name: "fantastic-four", description: "The fourth channel dedicated for the fourthiest foursome of four fighters", is_private: false, is_direct: false, creator_id: user7.id)
channel5 = Channel.create(name: "mutants", description: "Communication for mutated misfits", is_private: false, is_direct: false, creator_id: user5.id)
channel6 = Channel.create(name: "newyork-heroes", description: "The definitive forum for fellow Big Appler life-savers", is_private: true, is_direct: false, creator_id: user3.id)
channel7 = Channel.create(name: "moms", description: "The real heroes", is_private: false, is_direct: false, creator_id: user11.id)
channel8 = Channel.create(name: "supervillains", description: "Because Attack doesn't discriminate", is_private: false, is_direct: false, creator_id: user11.id)

message1 = Message.create(user_id: user3.id, channel_id: channel3.id, body: "I don't feel so good...I don't wanna go! I don't wanna go!",)
message2 = Message.create(user_id: user2.id, channel_id: channel2.id, body: "I'm Batman.")
message3 = Message.create(user_id: user4.id, channel_id: channel3.id, body: "We lost. He won. It's over. We're in the endgame now.")
message4 = Message.create(user_id: user1.id, channel_id: channel2.id, body: "Anyone want some Starbucks?")
message5 = Message.create(user_id: user5.id, channel_id: channel5.id, body: "@stacy, can you check my spreadsheets? I think they're ready to be sent to the boss.")
message6 = Message.create(user_id: user1.id, channel_id: channel1.id, body: "Anyone have a place for me to crash for the night?")
message7 = Message.create(user_id: user11.id, channel_id: channel1.id, body: "I might have a spot free if you're willing to share with Bob." )
message8 = Message.create(user_id: user4.id, channel_id: channel1.id, body: "Stark Industries is hiring! We're looking for a machine-learning engineer with a Ruby on Rails + React/Redux stack.
Tell your friends!")
message9 = Message.create(user_id: user5.id, channel_id: channel6.id, body: "YOOO Pete! When we going to that barcade you tell me about?")
message10 = Message.create(user_id: user3.id, channel_id: channel6.id, body: "I just bombed my midterm...I'll head over in a bit.")
message11 = Message.create(user_id: user7.id, channel_id: channel4.id, body: "One...")
message12 = Message.create(user_id: user8.id, channel_id: channel4.id, body: "...two...")
message13 = Message.create(user_id: user10.id, channel_id: channel4.id, body: "...3...")
message14 = Message.create(user_id: user9.id, channel_id: channel4.id, body: "I'm actually a 96-year old genetically-enhanced supersoldier..." )
message15 = Message.create(user_id: user12.id, channel_id: channel8.id, body: "Hey Magneto! Knock knock")
message16 = Message.create(user_id: user13.id, channel_id: channel8.id, body: "r u serious")
message17 = Message.create(user_id: user12.id, channel_id: channel8.id, body: "Yes. KNOCK KNOCK")
message18 = Message.create(user_id: user15.id, channel_id: channel8.id, body: "Why so SERIOUS? :)")
message19 = Message.create(user_id: user13.id, channel_id: channel8.id, body: "Alright, alright...who's there?")
message20 = Message.create(user_id: user12.id, channel_id: channel8.id, body: "NOT YOUR PARENTS")
message21 = Message.create(user_id: user14.id, channel_id: channel8.id, body: "Oh snap!")
message21 = Message.create(user_id: user16.id, channel_id: channel7.id, body: "Love you Mom...")


User.all do |user|
  Subscription.create(user_id: user_id, channel_id = channel1.id)
end
Channel.all do |channel|
  Subscription.create(user_id: user2.id, channel_id: channel.id)
end
subscription7 = Subscription.create(user_id: user1.id, channel_id: channel2.id)
subscription8 = Subscription.create(user_id: user2.id, channel_id: channel2.id)
subscription9 = Subscription.create(user_id: user3.id, channel_id: channel3.id)
subscription10 = Subscription.create(user_id: user3.id, channel_id: channel6.id)
subscription11 = Subscription.create(user_id: user4.id, channel_id: channel3.id)
subscription12 = Subscription.create(user_id: user4.id, channel_id: channel4.id)
subscription13 = Subscription.create(user_id: user5.id, channel_id: channel5.id)
subscription14 = Subscription.create(user_id: user6.id, channel_id: channel5.id)
subscription15 = Subscription.create(user_id: user7.id, channel_id: channel4.id)
subscription16 = Subscription.create(user_id: user8.id, channel_id: channel4.id)
subscription17 = Subscription.create(user_id: user9.id, channel_id: channel4.id)
subscription18 = Subscription.create(user_id: user10.id, channel_id: channel4.id)
subscription19 = Subscription.create(user_id: user11.id, channel_id: channel2.id)
subscription20 = Subscription.create(user_id: user12.id, channel_id: channel8.id)
subscription21 = Subscription.create(user_id: user13.id, channel_id: channel8.id)
subscription22 = Subscription.create(user_id: user14.id, channel_id: channel8.id)
subscription23 = Subscription.create(user_id: user15.id, channel_id: channel8.id)
subscription24 = Subscription.create(user_id: user16.id, channel_id: channel7.id)