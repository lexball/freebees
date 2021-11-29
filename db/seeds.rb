# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
item1 = Item.create( title: "Golf Clubs", category: "Outdoor/Sports", description: "These were clubs I used as a kid 8 years ago. They no longer fit me. Aside from some wear and tear the items are in good condition and still work great!")
item2 = Item.create( title: "Xbox Controller", category: "Gaming", description: "Missing the battery plate but still works great with some tape. I have the new xbox so I don't need this controller anymore.")
item3 = Item.create( title: "Sega Genesis Games", category: "Gaming", description: "Games include 'Gunstar Heroes', 'Sonic the Hedgehog 2', 'Streets of Rage 2', and Comix Zone'." )
item4 = Item.create( title: "4 Person Tent", category: "Outdoor/Camping", description: "Tent has a couple tiny burn holes but works great. Has original tent pegs and a rain guard. Currently airing it out.")