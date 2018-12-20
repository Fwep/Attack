# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Message.destroy_all
Subscription.destroy_all

user1 = User.create(username: 'Superman', email: 'clark.kent@dailyplanet.io', password: 'ILoveLois123')
user2 = User.create(username: 'Batman', email: 'billionaire_playboy_philanthropist@wayneindustries.co', password: 'TonyStarkSucks')
user3 = User.create(username: 'Spiderman', email: 'pp2002@yahoo.com', password: 'gr3@tpowergr3@tresp0ns!b1l1ty')
user4 = User.create(username: 'TheRealIronman', email: 'anthonystark@mit.edu', password: 'Pepper')
user5 = User.create(username: 'Deadpool', email: 'wadewilson@gmail.com', password: 'ball$')
user6 = User.create(username: 'KyloRen', email: 'notahero@empire.first', password: 'sassofrass')

channel1 = Channel.create(name: 'general', description: 'This channel is for team-wide communication and announcements. All team members are in this channel.', private: false, is_direct: false, creator_id: user1.id)
channel2 = Channel.create(name: 'justiceleague', description: 'The most judicious justices of this unjust era', private: false, is_direct: false, creator_id: user2.id)
channel3 = Channel.create(name: 'avengers', description: 'The Aven (get it?)', private: false, is_direct: false, creator_id: user4.id)
channel4 = Channel.create(name: 'newyork-heroes', description: 'The definitive forum for fellow Big Appler life-savers', private: true, is_direct: false, creator_id: user3.id)
channel5 = Channel.create(name: 'mutants', description: 'Communication for mutated misfits', private: false, is_direct: false, creator_id: user5.id)

message1 = Message.create(user_id: user3.id, channel_id: channel3.id, body: "I don't feel so good...I don't wanna go! I don't wanna go!",)
message2 = Message.create(user_id: user2.id, channel_id: channel2.id, body: "I'm Batman.")
message3 = Message.create(user_id: user4.id, channel_id: channel3.id, body: "We lost. He won. It's over. We're in the endgame now.")
message4 = Message.create(user_id: user1.id, channel_id: channel2.id, body: "Anyone want some Starbucks?")
message5 = Message.create(user_id: user5.id, channel_id: channel5.id, body: "@stacy, can you check my spreadsheets? I think they're ready to be sent to the boss.")

subscription1 = Subscription.create(user_id: user1.id, channel_id: channel1.id)
subscription2 = Subscription.create(user_id: user2.id, channel_id: channel1.id)
subscription3 = Subscription.create(user_id: user3.id, channel_id: channel1.id)
subscription4 = Subscription.create(user_id: user4.id, channel_id: channel1.id)
subscription5 = Subscription.create(user_id: user5.id, channel_id: channel1.id)
subscription6 = Subscription.create(user_id: user6.id, channel_id: channel1.id)
subscription7 = Subscription.create(user_id: user1.id, channel_id: channel2.id)
subscription8 = Subscription.create(user_id: user2.id, channel_id: channel2.id)
subscription9 = Subscription.create(user_id: user3.id, channel_id: channel3.id)
subscription10 = Subscription.create(user_id: user3.id, channel_id: channel4.id)
subscription11 = Subscription.create(user_id: user4.id, channel_id: channel3.id)
subscription12 = Subscription.create(user_id: user4.id, channel_id: channel4.id)
subscription13 = Subscription.create(user_id: user5.id, channel_id: channel5.id)
subscription14 = Subscription.create(user_id: user6.id, channel_id: channel5.id)
