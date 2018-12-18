# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(username: 'Superman', email: 'clark.kent@dailyplanet.io', password: 'ILoveLois123')
User.create(username: 'Batman', email: 'billionaire_playboy_philanthropist@wayneindustries.co', password: 'TonyStarkSucks')
User.create(username: 'Spiderman', email: 'pp2002@yahoo.com', password: 'gr3@tpowergr3@tresp0ns!b1l1ty')
User.create(username: 'TheRealIronman', email: 'anthonystark@mit.edu', password: 'Pepper')
User.create(username: 'Deadpool', email: 'wadewilson@gmail.com', password: 'ball$')
User.create(username: 'KyloRen', email: 'notahero@empire.first', password: 'sassofrass')
