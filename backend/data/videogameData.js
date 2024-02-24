const videogames = [
  {
    "name": "Grand Theft Auto V",
    "genres": "Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "74 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    "metacritic": "92"
  },
  {
    "name": "The Witcher 3: Wild Hunt",
    "genres": "Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, macOS",
    "released": "2015",
    "playtime": "46 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "metacritic": "92"
  },
  {
    "name": "Portal 2",
    "genres": "Shooter, Puzzle",
    "platforms": "PC, Xbox One, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "11 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    "metacritic": "95"
  },
  {
    "name": "Counter-Strike: Global Offensive",
    "genres": "Shooter",
    "platforms": "PC, Linux, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "65 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    "metacritic": "81"
  },
  {
    "name": "Tomb Raider (2013)",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "metacritic": "86"
  },
  {
    "name": "Portal",
    "genres": "Action, Puzzle",
    "platforms": "PC, Nintendo Switch, Android, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2007",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    "metacritic": "90"
  },
  {
    "name": "Left 4 Dead 2",
    "genres": "Shooter, Action",
    "platforms": "PC, macOS, Linux, Xbox 360",
    "released": "2009",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    "metacritic": "89"
  },
  {
    "name": "The Elder Scrolls V: Skyrim",
    "genres": "Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "46 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "metacritic": "94"
  },
  {
    "name": "Red Dead Redemption 2",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "20 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    "metacritic": "96"
  },
  {
    "name": "BioShock Infinite",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Linux, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "12 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    "metacritic": "94"
  },
  {
    "name": "Life is Strange",
    "genres": "Adventure",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, Android, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2015",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    "metacritic": "83"
  },
  {
    "name": "Borderlands 2",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, Android, macOS, Linux, Xbox 360, PlayStation 3, PS Vita",
    "released": "2012",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    "metacritic": "89"
  },
  {
    "name": "Half-Life 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Android, macOS, Linux, Xbox 360, Xbox",
    "released": "2004",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    "metacritic": "96"
  },
  {
    "name": "BioShock",
    "genres": "Shooter, Action",
    "platforms": "PC, macOS, Xbox 360, PlayStation 3",
    "released": "2007",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    "metacritic": "96"
  },
  {
    "name": "Destiny 2",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Web",
    "released": "2017",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    "metacritic": "82"
  },
  {
    "name": "God of War (2018)",
    "genres": "Action",
    "platforms": "PC, PlayStation 4",
    "released": "2018",
    "playtime": "13 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    "metacritic": "94"
  },
  {
    "name": "Limbo",
    "genres": "Platformer, Indie, Action, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux, Xbox 360, PlayStation 3, PS Vita",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    "metacritic": "88"
  },
  {
    "name": "Fallout 4",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "40 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    "metacritic": "84"
  },
  {
    "name": "DOOM (2016)",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2016",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg",
    "metacritic": "85"
  },
  {
    "name": "PAYDAY 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Linux",
    "released": "2013",
    "playtime": "9 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    "metacritic": "79"
  },
  {
    "name": "Team Fortress 2",
    "genres": "Shooter, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2007",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
    "metacritic": "92"
  },
  {
    "name": "Cyberpunk 2077",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2020",
    "playtime": "26 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    "metacritic": "73"
  },
  {
    "name": "Horizon Zero Dawn",
    "genres": "Action, RPG",
    "platforms": "PC, PlayStation 4",
    "released": "2017",
    "playtime": "11 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
    "metacritic": "89"
  },
  {
    "name": "Grand Theft Auto IV",
    "genres": "Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
    "metacritic": "95"
  },
  {
    "name": "Terraria",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, Nintendo 3DS, macOS, Linux, Xbox 360, PlayStation 3, PS Vita, Wii U",
    "released": "2011",
    "playtime": "14 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
    "metacritic": "81"
  },
  {
    "name": "Rocket League",
    "genres": "Racing, Indie, Sports",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2015",
    "playtime": "20 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
    "metacritic": "86"
  },
  {
    "name": "Dota 2",
    "genres": "Massively Multiplayer, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "14 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
    "metacritic": "90"
  },
  {
    "name": "Warframe",
    "genres": "Shooter, Massively Multiplayer, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2013",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
    "metacritic": "73"
  },
  {
    "name": "Metro 2033",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
    "metacritic": "79"
  },
  {
    "name": "Rise of the Tomb Raider",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "released": "2015",
    "playtime": "15 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
    "metacritic": "86"
  },
  {
    "name": "Metal Gear Solid V: The Phantom Pain",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2015",
    "playtime": "23 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
    "metacritic": "91"
  },
  {
    "name": "Batman: Arkham Knight",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2015",
    "playtime": "20 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
    "metacritic": "81"
  },
  {
    "name": "The Witcher 2: Assassins of Kings Enhanced Edition",
    "genres": "RPG",
    "platforms": "PC, macOS, Xbox 360",
    "released": "2012",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
    "metacritic": "88"
  },
  {
    "name": "Half-Life 2: Lost Coast",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "2005",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
    "metacritic": ""
  },
  {
    "name": "Grand Theft Auto: San Andreas",
    "genres": "Racing, Action",
    "platforms": "PC, Xbox One, PlayStation 4, iOS, Android, macOS, Xbox 360, Xbox, PlayStation 3, PlayStation 2",
    "released": "2004",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
    "metacritic": "93"
  },
  {
    "name": "The Walking Dead: Season 1",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android, macOS, Xbox 360, PlayStation 3, PS Vita",
    "released": "2012",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
    "metacritic": "92"
  },
  {
    "name": "The Witcher: Enhanced Edition Director's Cut",
    "genres": "Action, RPG",
    "platforms": "PC, macOS",
    "released": "2008",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
    "metacritic": "86"
  },
  {
    "name": "Middle-earth: Shadow of Mordor",
    "genres": "Action, RPG",
    "platforms": "PC, PlayStation 4, Xbox One, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "13 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
    "metacritic": "85"
  },
  {
    "name": "Apex Legends",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS",
    "released": "2019",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
    "metacritic": "80"
  },
  {
    "name": "Half-Life 2: Episode One",
    "genres": "Shooter, Action",
    "platforms": "PC, Android, macOS, Linux, Xbox 360",
    "released": "2006",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
    "metacritic": "87"
  },
  {
    "name": "Half-Life 2: Episode Two",
    "genres": "Shooter, Action, Puzzle",
    "platforms": "PC, Android, macOS, Linux, Xbox 360",
    "released": "2007",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
    "metacritic": "90"
  },
  {
    "name": "BioShock 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
    "metacritic": "88"
  },
  {
    "name": "Hollow Knight",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2017",
    "playtime": "6 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
    "metacritic": "88"
  },
  {
    "name": "Little Nightmares",
    "genres": "Platformer, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
    "metacritic": "81"
  },
  {
    "name": "Hitman",
    "genres": "Shooter, Action, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2016",
    "playtime": "7 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
    "metacritic": "83"
  },
  {
    "name": "Dark Souls III",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "29 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
    "metacritic": "89"
  },
  {
    "name": "Mirror's Edge",
    "genres": "Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
    "metacritic": "81"
  },
  {
    "name": "Hotline Miami",
    "genres": "Indie, Shooter, Arcade, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Linux, PS Vita",
    "released": "2012",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
    "metacritic": "85"
  },
  {
    "name": "Outlast",
    "genres": "Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
    "metacritic": "80"
  },
  {
    "name": "Half-Life",
    "genres": "Shooter, Action",
    "platforms": "PC, macOS, Linux, PlayStation 2, Dreamcast",
    "released": "1998",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
    "metacritic": "96"
  },
  {
    "name": "Deus Ex: Mankind Divided",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2016",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg",
    "metacritic": "83"
  },
  {
    "name": "Far Cry 3",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "16 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
    "metacritic": "88"
  },
  {
    "name": "BioShock Remastered",
    "genres": "Shooter",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
    "metacritic": ""
  },
  {
    "name": "Half-Life 2: Deathmatch",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "2004",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
    "metacritic": ""
  },
  {
    "name": "Marvel's Spider-Man",
    "genres": "Action",
    "platforms": "PC, PlayStation 5, PlayStation 4",
    "released": "2018",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
    "metacritic": "87"
  },
  {
    "name": "Spec Ops: The Line",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
    "metacritic": "76"
  },
  {
    "name": "Alan Wake",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, Xbox 360",
    "released": "2010",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
    "metacritic": "83"
  },
  {
    "name": "Amnesia: The Dark Descent",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
    "metacritic": "85"
  },
  {
    "name": "Wolfenstein: The New Order",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "12 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
    "metacritic": "81"
  },
  {
    "name": "Saints Row: The Third",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, Linux, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "14 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
    "metacritic": "84"
  },
  {
    "name": "Stardew Valley",
    "genres": "Indie, RPG, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux, PS Vita",
    "released": "2016",
    "playtime": "12 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
    "metacritic": "89"
  },
  {
    "name": "Path of Exile",
    "genres": "Indie, Massively Multiplayer, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
    "metacritic": "86"
  },
  {
    "name": "Detroit: Become Human",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 4",
    "released": "2018",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
    "metacritic": "79"
  },
  {
    "name": "PlayerUnknown’s Battlegrounds",
    "genres": "Shooter, Massively Multiplayer, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "32 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg",
    "metacritic": "81"
  },
  {
    "name": "Borderlands",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "10 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
    "metacritic": "81"
  },
  {
    "name": "Prey",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
    "metacritic": "80"
  },
  {
    "name": "Garry's Mod",
    "genres": "Adventure, Action, Casual, Simulation, Indie",
    "platforms": "PC, macOS, Linux",
    "released": "2004",
    "playtime": "14 min",
    "esrb_rating": "Rating Pending",
    "background_image": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
    "metacritic": ""
  },
  {
    "name": "Fallout: New Vegas",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "12 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
    "metacritic": "84"
  },
  {
    "name": "Injustice: Gods Among Us Ultimate Edition",
    "genres": "Arcade, Action, Fighting",
    "platforms": "PC, PlayStation 4, Xbox 360, PlayStation 3, PS Vita",
    "released": "2013",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
    "metacritic": "80"
  },
  {
    "name": "L.A. Noire",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
    "metacritic": "83"
  },
  {
    "name": "Dishonored",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
    "metacritic": "91"
  },
  {
    "name": "The Elder Scrolls V: Skyrim Special Edition",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
    "metacritic": "74"
  },
  {
    "name": "Super Meat Boy",
    "genres": "Platformer, Indie",
    "platforms": "PC, PlayStation 4, Nintendo Switch, Android, macOS, Linux, Xbox 360, PS Vita, Wii U, Web",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
    "metacritic": "87"
  },
  {
    "name": "Dishonored 2",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "12 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
    "metacritic": "86"
  },
  {
    "name": "Sid Meier's Civilization V",
    "genres": "Strategy",
    "platforms": "PC, macOS, Linux",
    "released": "2010",
    "playtime": "26 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg",
    "metacritic": "90"
  },
  {
    "name": "Grand Theft Auto: Vice City",
    "genres": "Action",
    "platforms": "PC, iOS, Android, macOS, Xbox, PlayStation 2, PS Vita",
    "released": "2002",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg",
    "metacritic": "94"
  },
  {
    "name": "For Honor",
    "genres": "Massively Multiplayer, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
    "metacritic": "76"
  },
  {
    "name": "Uncharted 4: A Thief’s End",
    "genres": "Shooter, Action",
    "platforms": "PlayStation 5, PlayStation 4",
    "released": "2016",
    "playtime": "",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
    "metacritic": "93"
  },
  {
    "name": "Hellblade: Senua's Sacrifice",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
    "metacritic": "83"
  },
  {
    "name": "Company of Heroes 2",
    "genres": "Strategy",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
    "metacritic": "80"
  },
  {
    "name": "Assassin’s Creed IV: Black Flag",
    "genres": "Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, Xbox 360, PlayStation 3, Wii U",
    "released": "2013",
    "playtime": "25 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
    "metacritic": "85"
  },
  {
    "name": "Dead Space (2008)",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
    "metacritic": "86"
  },
  {
    "name": "Hitman: Absolution",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 4, macOS, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
    "metacritic": "79"
  },
  {
    "name": "Half-Life Deathmatch: Source",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "2006",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg",
    "metacritic": ""
  },
  {
    "name": "Mass Effect 2",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "22 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
    "metacritic": "94"
  },
  {
    "name": "Control",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2019",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
    "metacritic": "84"
  },
  {
    "name": "Don't Starve Together",
    "genres": "Indie, Action, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2016",
    "playtime": "7 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg",
    "metacritic": "83"
  },
  {
    "name": "Star Wars Jedi: Fallen Order",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "8 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg",
    "metacritic": "80"
  },
  {
    "name": "Death Stranding",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 4",
    "released": "2019",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
    "metacritic": "84"
  },
  {
    "name": "Counter-Strike: Source",
    "genres": "Shooter",
    "platforms": "PC, macOS, Linux",
    "released": "2004",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
    "metacritic": "88"
  },
  {
    "name": "The Last Of Us Remastered",
    "genres": "Adventure, Action",
    "platforms": "PlayStation 4",
    "released": "2014",
    "playtime": "16 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
    "metacritic": "95"
  },
  {
    "name": "Just Cause 3",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg",
    "metacritic": "74"
  },
  {
    "name": "Borderlands: The Pre-Sequel",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, Android, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
    "metacritic": "75"
  },
  {
    "name": "Metal Gear Solid V: Ground Zeroes",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
    "metacritic": "80"
  },
  {
    "name": "Mass Effect",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2007",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
    "metacritic": "89"
  },
  {
    "name": "Metro: Last Light Redux",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2014",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg",
    "metacritic": "76"
  },
  {
    "name": "Mortal Kombat X",
    "genres": "Action, Fighting",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg",
    "metacritic": "76"
  },
  {
    "name": "Counter-Strike",
    "genres": "Shooter, Action",
    "platforms": "PC, macOS, Linux, Xbox",
    "released": "2000",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
    "metacritic": "88"
  },
  {
    "name": "Left 4 Dead",
    "genres": "Shooter, Action",
    "platforms": "PC, macOS, Xbox 360",
    "released": "2008",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg",
    "metacritic": "89"
  },
  {
    "name": "Metro 2033 Redux",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2014",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg",
    "metacritic": "88"
  },
  {
    "name": "Bloodborne",
    "genres": "Action, RPG",
    "platforms": "PlayStation 4",
    "released": "2015",
    "playtime": "12 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg",
    "metacritic": "92"
  },
  {
    "name": "Bastion",
    "genres": "Indie, Adventure, Action, RPG",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, macOS, Linux, Xbox 360, PS Vita",
    "released": "2011",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
    "metacritic": "86"
  },
  {
    "name": "Just Cause 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg",
    "metacritic": "84"
  },
  {
    "name": "BioShock 2 Remastered",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg",
    "metacritic": "83"
  },
  {
    "name": "NieR:Automata",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "14 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg",
    "metacritic": "86"
  },
  {
    "name": "Fall Guys: Ultimate Knockout",
    "genres": "Action, Casual, Sports, Indie, Massively Multiplayer",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2020",
    "playtime": "6 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
    "metacritic": "80"
  },
  {
    "name": "Mad Max",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux, Xbox 360",
    "released": "2015",
    "playtime": "11 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
    "metacritic": "73"
  },
  {
    "name": "Journey",
    "genres": "Family, Indie, Adventure",
    "platforms": "PC, PlayStation 4, iOS, PlayStation 3",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg",
    "metacritic": "92"
  },
  {
    "name": "Minecraft",
    "genres": "Action, Arcade, Simulation, Indie, Massively Multiplayer",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, Nintendo 3DS, macOS, Linux, Xbox 360, PlayStation 3, PS Vita, Wii U",
    "released": "2009",
    "playtime": "26 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg",
    "metacritic": "83"
  },
  {
    "name": "Monster Hunter: World",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "15 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
    "metacritic": "89"
  },
  {
    "name": "Resident Evil 7: Biohazard",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
    "metacritic": "85"
  },
  {
    "name": "XCOM: Enemy Unknown",
    "genres": "Strategy",
    "platforms": "PC, iOS, Android, macOS, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "13 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg",
    "metacritic": "89"
  },
  {
    "name": "Brothers: A Tale of Two Sons",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg",
    "metacritic": "90"
  },
  {
    "name": "Hades",
    "genres": "Indie, Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2020",
    "playtime": "9 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
    "metacritic": "93"
  },
  {
    "name": "Brutal Legend",
    "genres": "Strategy, Action",
    "platforms": "PC, Xbox One, iOS, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg",
    "metacritic": "80"
  },
  {
    "name": "Titanfall 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
    "metacritic": "87"
  },
  {
    "name": "Cities: Skylines",
    "genres": "Strategy, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2015",
    "playtime": "9 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
    "metacritic": "85"
  },
  {
    "name": "Paladins",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS",
    "released": "2016",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg",
    "metacritic": "78"
  },
  {
    "name": "Batman: Arkham City - Game of the Year Edition",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "9 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg",
    "metacritic": "91"
  },
  {
    "name": "Middle-earth: Shadow of War",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Android",
    "released": "2017",
    "playtime": "13 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg",
    "metacritic": "82"
  },
  {
    "name": "Mafia II",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "13 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg",
    "metacritic": "77"
  },
  {
    "name": "ARK: Survival Of The Fittest",
    "genres": "Action, RPG, Strategy, Indie, Massively Multiplayer",
    "platforms": "PC, iOS, Android, macOS, Linux",
    "released": "2016",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
    "metacritic": ""
  },
  {
    "name": "Heavy Rain",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 4, PlayStation 3",
    "released": "2010",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg",
    "metacritic": "80"
  },
  {
    "name": "Watch Dogs",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3, Wii U",
    "released": "2014",
    "playtime": "17 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
    "metacritic": "77"
  },
  {
    "name": "SEGA Mega Drive and Genesis Classics",
    "genres": "Adventure, Action, RPG, Fighting, Platformer",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg",
    "metacritic": "76"
  },
  {
    "name": "Psychonauts",
    "genres": "Platformer, Action",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, macOS, Linux, Xbox 360, Xbox, PlayStation 3, PlayStation 2",
    "released": "2005",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
    "metacritic": "87"
  },
  {
    "name": "Batman: Arkham Asylum Game of the Year Edition",
    "genres": "Platformer, Adventure, Action",
    "platforms": "PC, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "8 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg",
    "metacritic": "91"
  },
  {
    "name": "Far Cry 5",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "19 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg",
    "metacritic": "80"
  },
  {
    "name": "INSIDE",
    "genres": "Adventure, Action, Puzzle, Indie, Platformer",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
    "metacritic": "87"
  },
  {
    "name": "Max Payne 3",
    "genres": "Shooter, Action",
    "platforms": "PC, macOS, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "11 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg",
    "metacritic": "87"
  },
  {
    "name": "Fallout",
    "genres": "RPG",
    "platforms": "PC, macOS, Linux, Classic Macintosh",
    "released": "1997",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg",
    "metacritic": ""
  },
  {
    "name": "Shadow of the Tomb Raider",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2018",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg",
    "metacritic": "78"
  },
  {
    "name": "Undertale",
    "genres": "Indie, RPG",
    "platforms": "PC, PlayStation 4, Xbox One, Xbox Series S/X, Nintendo Switch, macOS, Linux, PS Vita",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
    "metacritic": "92"
  },
  {
    "name": "Saints Row IV",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Linux, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "13 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg",
    "metacritic": "86"
  },
  {
    "name": "The Darkness II",
    "genres": "Action",
    "platforms": "PC, Xbox One, macOS, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg",
    "metacritic": "77"
  },
  {
    "name": "Alien: Isolation",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android",
    "released": "2014",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
    "metacritic": "81"
  },
  {
    "name": "Assassin's Creed II",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "14 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/1be/1bed7fae69d1004c09dfe1101d5a3a94.jpg",
    "metacritic": "89"
  },
  {
    "name": "Firewatch",
    "genres": "Indie, Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg",
    "metacritic": "81"
  },
  {
    "name": "Assassin's Creed Odyssey",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "32 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
    "metacritic": "85"
  },
  {
    "name": "Unturned",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg",
    "metacritic": ""
  },
  {
    "name": "Warhammer: Vermintide 2",
    "genres": "Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/5be/5bec14622f6faf804a592176577c1347.jpg",
    "metacritic": "82"
  },
  {
    "name": "Darksiders",
    "genres": "Action",
    "platforms": "PC, Xbox One, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg",
    "metacritic": "83"
  },
  {
    "name": "Sekiro: Shadows Die Twice",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "15 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
    "metacritic": "90"
  },
  {
    "name": "ARK: Survival Evolved",
    "genres": "Adventure, Action, RPG, Indie, Massively Multiplayer",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2015",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/58a/58ac7f6569259dcc0b60b921869b19fc.jpg",
    "metacritic": "70"
  },
  {
    "name": "Tom Clancy's Rainbow Six Siege",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2015",
    "playtime": "31 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg",
    "metacritic": "75"
  },
  {
    "name": "Metro Exodus",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg",
    "metacritic": "81"
  },
  {
    "name": "Transistor",
    "genres": "Indie, Action, RPG",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg",
    "metacritic": "83"
  },
  {
    "name": "Hitman 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg",
    "metacritic": "83"
  },
  {
    "name": "Cuphead",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS",
    "released": "2017",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg",
    "metacritic": "87"
  },
  {
    "name": "Batman: Arkham Origins",
    "genres": "Action",
    "platforms": "PC, Android, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "12 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg",
    "metacritic": "74"
  },
  {
    "name": "No Man's Sky",
    "genres": "Adventure, Action, RPG, Simulation, Indie, Massively Multiplayer",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2016",
    "playtime": "14 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg",
    "metacritic": "75"
  },
  {
    "name": "Assassin's Creed Origins",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "30 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/336/336c6bd63d83cf8e59937ab8895d1240.jpg",
    "metacritic": "81"
  },
  {
    "name": "Titan Quest Anniversary Edition",
    "genres": "Action, RPG",
    "platforms": "PC",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg",
    "metacritic": ""
  },
  {
    "name": "Brawlhalla",
    "genres": "Casual, Indie, Action, Fighting",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS",
    "released": "2014",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg",
    "metacritic": ""
  },
  {
    "name": "War Thunder",
    "genres": "Shooter, Massively Multiplayer, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg",
    "metacritic": "81"
  },
  {
    "name": "Layers of Fear",
    "genres": "Indie, Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg",
    "metacritic": "72"
  },
  {
    "name": "The Wolf Among Us",
    "genres": "Adventure",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, Android, macOS, Xbox 360, PS Vita",
    "released": "2013",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
    "metacritic": "82"
  },
  {
    "name": "Battlefield 1",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg",
    "metacritic": "88"
  },
  {
    "name": "GRID 2",
    "genres": "Racing, Arcade",
    "platforms": "PC, macOS, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg",
    "metacritic": "80"
  },
  {
    "name": "Crusader Kings II",
    "genres": "Strategy, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2012",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg",
    "metacritic": "82"
  },
  {
    "name": "The Stanley Parable",
    "genres": "Indie, Adventure",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg",
    "metacritic": "88"
  },
  {
    "name": "DOOM Eternal",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2020",
    "playtime": "12 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
    "metacritic": "86"
  },
  {
    "name": "Deus Ex: Human Revolution - Director's Cut",
    "genres": "Action, RPG",
    "platforms": "PC, macOS, Xbox 360, PlayStation 3, Wii U",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg",
    "metacritic": "91"
  },
  {
    "name": "Far Cry 4",
    "genres": "Shooter",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "18 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b39/b396dac1f3e0f538841aa0355dd066d3.jpg",
    "metacritic": "80"
  },
  {
    "name": "Halo Infinite",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, Xbox Series S/X",
    "released": "2021",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg",
    "metacritic": "84"
  },
  {
    "name": "Resident Evil 5",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "11 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/974/974342a3959981a17bdbbff2fd7f97b0.jpg",
    "metacritic": "86"
  },
  {
    "name": "Call of Duty: Modern Warfare 2",
    "genres": "Shooter",
    "platforms": "PC, Xbox One, macOS, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "22 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg",
    "metacritic": "86"
  },
  {
    "name": "XCOM 2",
    "genres": "Strategy, RPG",
    "platforms": "PC, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2016",
    "playtime": "15 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
    "metacritic": "88"
  },
  {
    "name": "Insurgency",
    "genres": "Shooter, Indie, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg",
    "metacritic": "74"
  },
  {
    "name": "Assassin’s Creed III",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3, Wii U",
    "released": "2012",
    "playtime": "22 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg",
    "metacritic": "80"
  },
  {
    "name": "Ori and the Blind Forest: Definitive Edition",
    "genres": "Platformer, Adventure",
    "platforms": "PC, Xbox One, Nintendo Switch, Xbox 360",
    "released": "2016",
    "playtime": "6 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg",
    "metacritic": "88"
  },
  {
    "name": "Saints Row 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Linux, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg",
    "metacritic": "78"
  },
  {
    "name": "Disco Elysium",
    "genres": "Indie, Adventure, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, macOS",
    "released": "2019",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg",
    "metacritic": "91"
  },
  {
    "name": "Trine 2: Complete Story",
    "genres": "Platformer, Indie, Action, Puzzle",
    "platforms": "PC, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg",
    "metacritic": "84"
  },
  {
    "name": "Viscera Cleanup Detail: Shadow Warrior",
    "genres": "Indie, Action, Simulation",
    "platforms": "PC, macOS",
    "released": "2013",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg",
    "metacritic": ""
  },
  {
    "name": "Counter-Strike: Condition Zero",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "2004",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg",
    "metacritic": "65"
  },
  {
    "name": "Among Us",
    "genres": "Casual, Action, Simulation",
    "platforms": "PC, Xbox One, Nintendo Switch, iOS, Android",
    "released": "2018",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg",
    "metacritic": "82"
  },
  {
    "name": "Amnesia: A Machine for Pigs",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg",
    "metacritic": "72"
  },
  {
    "name": "SOMA",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2015",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/149/149bbed9d90dc09328ba79bbacfda3c8.jpg",
    "metacritic": "84"
  },
  {
    "name": "Total War: SHOGUN 2",
    "genres": "Strategy",
    "platforms": "PC, macOS, Linux",
    "released": "2011",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg",
    "metacritic": "90"
  },
  {
    "name": "Watch Dogs 2",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "17 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg",
    "metacritic": "79"
  },
  {
    "name": "Red Dead Redemption",
    "genres": "Shooter, Action",
    "platforms": "Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg",
    "metacritic": "95"
  },
  {
    "name": "Shadowrun Returns",
    "genres": "Strategy, Indie, RPG",
    "platforms": "PC, iOS, Android, macOS, Linux",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg",
    "metacritic": "76"
  },
  {
    "name": "Thief",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg",
    "metacritic": "70"
  },
  {
    "name": "Grand Theft Auto III",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 4, iOS, Android, macOS, Xbox, PlayStation 2",
    "released": "2001",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg",
    "metacritic": "93"
  },
  {
    "name": "Ori and the Blind Forest",
    "genres": "Platformer, Adventure",
    "platforms": "PC, Xbox One, Xbox 360",
    "released": "2015",
    "playtime": "6 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg",
    "metacritic": "88"
  },
  {
    "name": "The Last of Us Part II",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PlayStation 5, PlayStation 4",
    "released": "2020",
    "playtime": "",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
    "metacritic": "93"
  },
  {
    "name": "Call of Duty: Black Ops III",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2015",
    "playtime": "15 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg",
    "metacritic": "73"
  },
  {
    "name": "Wolfenstein II: The New Colossus",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "11 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg",
    "metacritic": "86"
  },
  {
    "name": "This War of Mine",
    "genres": "Indie, Adventure, Simulation",
    "platforms": "PC, Nintendo Switch, iOS, Android, macOS, Linux, PS Vita",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
    "metacritic": "83"
  },
  {
    "name": "Dead Island",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/56e/56ed40948bebaf1968234aa6e3c74771.jpg",
    "metacritic": "74"
  },
  {
    "name": "Magicka",
    "genres": "Action, RPG",
    "platforms": "PC, Android",
    "released": "2011",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/c7a/c7a71a0531a9518236d99d0d60abe447.jpg",
    "metacritic": "74"
  },
  {
    "name": "Darksiders Warmastered Edition",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Wii U",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg",
    "metacritic": "79"
  },
  {
    "name": "Lara Croft and the Temple of Osiris",
    "genres": "Adventure, Action, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2014",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/1fb/1fb1c5f7a71d771f440b27ce7f71e7eb.jpg",
    "metacritic": "73"
  },
  {
    "name": "FEZ",
    "genres": "Adventure, Action, Puzzle, Indie, Platformer",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, macOS, Linux, Xbox 360, PlayStation 3, PS Vita",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
    "metacritic": "91"
  },
  {
    "name": "Elden Ring",
    "genres": "Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2022",
    "playtime": "59 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
    "metacritic": "95"
  },
  {
    "name": "Killing Floor",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "2009",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg",
    "metacritic": "72"
  },
  {
    "name": "The Last Of Us",
    "genres": "Adventure, Action",
    "platforms": "PlayStation 4, PlayStation 3",
    "released": "2013",
    "playtime": "15 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg",
    "metacritic": "95"
  },
  {
    "name": "Papers, Please",
    "genres": "Educational, Indie, Simulation, Puzzle",
    "platforms": "PC, iOS, Android, macOS, Linux, PS Vita",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg",
    "metacritic": "85"
  },
  {
    "name": "Sid Meier’s Civilization VI",
    "genres": "Strategy, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2016",
    "playtime": "15 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg",
    "metacritic": "88"
  },
  {
    "name": "Kingdom Come: Deliverance",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg",
    "metacritic": "71"
  },
  {
    "name": "Dead Cells",
    "genres": "Platformer, Indie, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2018",
    "playtime": "10 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg",
    "metacritic": "88"
  },
  {
    "name": "Dragon Age: Origins",
    "genres": "RPG",
    "platforms": "PC, Xbox One, macOS, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg",
    "metacritic": "91"
  },
  {
    "name": "Call of Duty: Black Ops",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, iOS, Nintendo DS, macOS, Xbox 360, PlayStation 3, Wii",
    "released": "2010",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg",
    "metacritic": "81"
  },
  {
    "name": "South Park: The Stick of Truth",
    "genres": "Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "12 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg",
    "metacritic": "84"
  },
  {
    "name": "Quake Champions",
    "genres": "Shooter, Action",
    "platforms": "PC",
    "released": "2017",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/fba/fbae1bcfae1feffda6a11fbc1c939420.jpg",
    "metacritic": ""
  },
  {
    "name": "Call of Juarez: Gunslinger",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a86/a86ce0afaf2d5ec2b0f048989f01795e.jpg",
    "metacritic": "79"
  },
  {
    "name": "DiRT Rally",
    "genres": "Racing, Simulation, Sports",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
    "metacritic": "86"
  },
  {
    "name": "Black Desert Online",
    "genres": "Adventure, Action, RPG, Strategy, Simulation, Massively Multiplayer",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
    "metacritic": "73"
  },
  {
    "name": "Assassin's Creed Unity",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2014",
    "playtime": "16 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg",
    "metacritic": "71"
  },
  {
    "name": "Star Wars: Knights of the Old Republic",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, Nintendo Switch, iOS, Android, macOS, Xbox 360, Xbox",
    "released": "2003",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/6e0/6e0c19bb111bd4fa20cf0eb72a049519.jpg",
    "metacritic": "88"
  },
  {
    "name": "Subnautica",
    "genres": "Indie, Adventure",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, macOS",
    "released": "2018",
    "playtime": "10 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg",
    "metacritic": "83"
  },
  {
    "name": "Resident Evil 4 (2005)",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 4, iOS, Android, PlayStation 2, Wii, GameCube",
    "released": "2005",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg",
    "metacritic": "83"
  },
  {
    "name": "Chivalry: Medieval Warfare",
    "genres": "Indie, Action",
    "platforms": "PC, PlayStation 4, Xbox One, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg",
    "metacritic": "79"
  },
  {
    "name": "Halo: The Master Chief Collection",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One",
    "released": "2014",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/c24/c24f4434882ae9c2c8d9d38de82cb7a5.jpg",
    "metacritic": "85"
  },
  {
    "name": "Castle Crashers",
    "genres": "Indie, Action",
    "platforms": "PC, Nintendo Switch, macOS, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg",
    "metacritic": "84"
  },
  {
    "name": "Divinity: Original Sin 2",
    "genres": "Strategy, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "21 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg",
    "metacritic": "95"
  },
  {
    "name": "Darkest Dungeon",
    "genres": "Strategy, Indie, RPG",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, macOS, Linux, PS Vita",
    "released": "2016",
    "playtime": "8 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg",
    "metacritic": "84"
  },
  {
    "name": "Half-Life: Blue Shift",
    "genres": "Action",
    "platforms": "PC, macOS, Linux, Dreamcast",
    "released": "2001",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg",
    "metacritic": "71"
  },
  {
    "name": "Rayman Legends",
    "genres": "Platformer",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3, PS Vita, Wii U",
    "released": "2013",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg",
    "metacritic": "89"
  },
  {
    "name": "Don't Starve",
    "genres": "Indie",
    "platforms": "PC, PlayStation 4, Xbox One, macOS, Linux, PlayStation 3, PS Vita, Wii U",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg",
    "metacritic": "79"
  },
  {
    "name": "Half-Life: Opposing Force",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "1999",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/110/1106ebafac87cc573161f1f4f16e84cf.jpeg",
    "metacritic": ""
  },
  {
    "name": "Fallout Shelter",
    "genres": "RPG, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg",
    "metacritic": "63"
  },
  {
    "name": "The Binding of Isaac",
    "genres": "Indie, Action, RPG",
    "platforms": "PC, macOS",
    "released": "2011",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/cef/cefedf18016cbab466861eb698daf988.jpg",
    "metacritic": "84"
  },
  {
    "name": "Dead Space 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg",
    "metacritic": "87"
  },
  {
    "name": "DmC: Devil May Cry",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/295/295eb868c241e6ad32ac033b8e6a2ede.jpg",
    "metacritic": "85"
  },
  {
    "name": "Quantum Break",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One",
    "released": "2016",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a28/a289e23b4d4d84f26ab59125e3be4483.jpg",
    "metacritic": "66"
  },
  {
    "name": "Uncharted 3: Drake's Deception",
    "genres": "Action",
    "platforms": "PlayStation 4, PlayStation 3",
    "released": "2011",
    "playtime": "12 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/589/589fc47c5ae34160d65c4682e21fed66.jpg",
    "metacritic": "92"
  },
  {
    "name": "Batman: Arkham City",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "20 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b5a/b5a1226bfd971284a735a4a0969086b3.jpg",
    "metacritic": "94"
  },
  {
    "name": "The Bureau: XCOM Declassified",
    "genres": "Shooter, Action",
    "platforms": "PC, macOS, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/5cc/5cc765484c6df567ed9207c1781b88cb.jpg",
    "metacritic": "66"
  },
  {
    "name": "A Plague Tale: Innocence",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2019",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b4a/b4adf80c36e267b35acc3497ed2af19c.jpg",
    "metacritic": "82"
  },
  {
    "name": "Fallout 3",
    "genres": "Shooter, RPG",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/5a4/5a4e70bb8a862829dbaa398aa5f66afc.jpg",
    "metacritic": "91"
  },
  {
    "name": "Syberia",
    "genres": "Adventure, Puzzle",
    "platforms": "PC, Nintendo Switch, iOS, Android, Nintendo DS, macOS, Xbox 360, PlayStation 3",
    "released": "2002",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg",
    "metacritic": "82"
  },
  {
    "name": "Dying Light: The Following - Enhanced Edition",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2015",
    "playtime": "17 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg",
    "metacritic": "87"
  },
  {
    "name": "Guacamelee! Super Turbo Championship Edition",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, Wii U",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg",
    "metacritic": "86"
  },
  {
    "name": "Beyond: Two Souls",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 4, PlayStation 3",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg",
    "metacritic": "73"
  },
  {
    "name": "What Remains of Edith Finch",
    "genres": "Indie, Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/34e/34e100b1f648de99f32d477065f04653.jpg",
    "metacritic": "89"
  },
  {
    "name": "Devil May Cry 5",
    "genres": "Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg",
    "metacritic": "88"
  },
  {
    "name": "Battlefield 4",
    "genres": "Shooter",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg",
    "metacritic": "81"
  },
  {
    "name": "Torchlight II",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2012",
    "playtime": "10 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg",
    "metacritic": "88"
  },
  {
    "name": "Mafia III",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "released": "2016",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a34/a348e613424260bc7e034fb6031c762e.jpg",
    "metacritic": "62"
  },
  {
    "name": "Goat Simulator",
    "genres": "Casual, Indie, Action, Simulation",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, Android, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a44/a444a7628bdb49b24d06a7672f805814.jpg",
    "metacritic": "62"
  },
  {
    "name": "Yakuza 0",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, PlayStation 3",
    "released": "2015",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg",
    "metacritic": "85"
  },
  {
    "name": "Grim Fandango Remastered",
    "genres": "Adventure, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux, PS Vita",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg",
    "metacritic": "84"
  },
  {
    "name": "Call of Duty: WWII",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg",
    "metacritic": "77"
  },
  {
    "name": "Homefront",
    "genres": "Shooter",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/657/657574cd437df9102f511b3be095b0ea.jpg",
    "metacritic": "70"
  },
  {
    "name": "SUPERHOT",
    "genres": "Shooter, Indie, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, macOS, Linux, Web",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/ad4/ad445a12ee46543d4d117f3893041ebf.jpg",
    "metacritic": "82"
  },
  {
    "name": "Sleeping Dogs: Definitive Edition",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "released": "2014",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg",
    "metacritic": "76"
  },
  {
    "name": "The Witness",
    "genres": "Indie, Adventure, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, iOS, Android, macOS",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/00b/00b164224ebaf381104d0b215a37afb3.jpg",
    "metacritic": "87"
  },
  {
    "name": "Sniper Elite V2",
    "genres": "Shooter, Action",
    "platforms": "PC, Nintendo Switch, Xbox 360, PlayStation 3, Wii U",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/03d/03d17d237f9541b67a13f9425ced4ca4.jpg",
    "metacritic": "66"
  },
  {
    "name": "Days Gone",
    "genres": "Action",
    "platforms": "PC, PlayStation 4",
    "released": "2019",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg",
    "metacritic": "74"
  },
  {
    "name": "Broforce",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2015",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg",
    "metacritic": "83"
  },
  {
    "name": "Call of Duty: Modern Warfare 3",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, iOS, macOS, Xbox 360, PlayStation 3, Wii",
    "released": "2011",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg",
    "metacritic": "85"
  },
  {
    "name": "Dragon Age: Inquisition",
    "genres": "Strategy, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg",
    "metacritic": "86"
  },
  {
    "name": "FTL: Faster Than Light",
    "genres": "Strategy, Indie, Simulation",
    "platforms": "PC, iOS, macOS, Linux",
    "released": "2012",
    "playtime": "6 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/5f4/5f4780690dbf04900cbac5f05b9305f3.jpg",
    "metacritic": "84"
  },
  {
    "name": "Hotline Miami 2: Wrong Number",
    "genres": "Indie, Shooter, Arcade, Action",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux, PlayStation 3, PS Vita",
    "released": "2015",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg",
    "metacritic": "72"
  },
  {
    "name": "Resident Evil 6",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, Xbox 360, PlayStation 3, Web",
    "released": "2012",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg",
    "metacritic": "67"
  },
  {
    "name": "The Walking Dead: Season 2",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android, macOS, Xbox 360, PlayStation 3, PS Vita",
    "released": "2013",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg",
    "metacritic": "80"
  },
  {
    "name": "Deus Ex: Human Revolution",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, macOS, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "17 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/81e/81e6c6819d4322caf375b6735c3043ec.jpg",
    "metacritic": "89"
  },
  {
    "name": "Resident Evil 2 (1998)",
    "genres": "Action",
    "platforms": "PC, PlayStation, GameCube, Nintendo 64, Dreamcast",
    "released": "1998",
    "playtime": "13 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d64/d646810b629081cc12aec49ed9f49441.jpg",
    "metacritic": "90"
  },
  {
    "name": "Ratchet & Clank",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PlayStation 4",
    "released": "2016",
    "playtime": "18 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/d30/d30ef0c7dd4878161b1f781e297ae6a0.jpg",
    "metacritic": "85"
  },
  {
    "name": "Sleeping Dogs",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "14 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/3d9/3d9bac98d79bcd2d445f829e8d6be902.jpg",
    "metacritic": "81"
  },
  {
    "name": "Kingdom: Classic",
    "genres": "Strategy, Indie, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg",
    "metacritic": "74"
  },
  {
    "name": "Ori and the Will of the Wisps",
    "genres": "Platformer, Adventure, Action",
    "platforms": "PC, Xbox One, Xbox Series S/X, Nintendo Switch",
    "released": "2020",
    "playtime": "11 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg",
    "metacritic": "91"
  },
  {
    "name": "Forza Horizon 4",
    "genres": "Racing, Arcade",
    "platforms": "PC, Xbox One, Xbox Series S/X",
    "released": "2018",
    "playtime": "13 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg",
    "metacritic": "90"
  },
  {
    "name": "The Outer Worlds",
    "genres": "Shooter, Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2019",
    "playtime": "8 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/704/704f831d2d132e9614931f1c4eab9e86.jpg",
    "metacritic": "80"
  },
  {
    "name": "inFAMOUS Second Son",
    "genres": "Action",
    "platforms": "PlayStation 4",
    "released": "2014",
    "playtime": "",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/be2/be239d5eb4d0bf02bf722aff51e694ad.jpg",
    "metacritic": "80"
  },
  {
    "name": "Tom Clancy’s The Division",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "28 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/c73/c73c4ffebfe968ba0982a56c2b5020ef.jpg",
    "metacritic": "80"
  },
  {
    "name": "POSTAL 2",
    "genres": "Indie, Shooter, Adventure, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2003",
    "playtime": "4 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/2a2/2a2f9a0035544500e59a171c7038ec3a.jpg",
    "metacritic": "59"
  },
  {
    "name": "Surviving Mars",
    "genres": "Strategy, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2018",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/08b/08b2eee52a9876a48b955e5149affe5b.jpg",
    "metacritic": "75"
  },
  {
    "name": "Bayonetta",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, Xbox 360, PlayStation 3, Wii U",
    "released": "2009",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg",
    "metacritic": "90"
  },
  {
    "name": "A Story About My Uncle",
    "genres": "Adventure, Casual, Arcade, Indie, Platformer",
    "platforms": "PC, macOS, Linux",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/37a/37a9536e92cf8fe3b60045aa75dbd41f.jpg",
    "metacritic": "73"
  },
  {
    "name": "The Legend of Zelda: Breath of the Wild",
    "genres": "Adventure, Action, RPG",
    "platforms": "Nintendo Switch, Wii U",
    "released": "2017",
    "playtime": "121 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg",
    "metacritic": "97"
  },
  {
    "name": "To the Moon",
    "genres": "Indie, Adventure, RPG",
    "platforms": "PC, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2011",
    "playtime": "4 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/fae/faebf3c8cbf30db3f46bfbecf6ada3d6.jpg",
    "metacritic": "81"
  },
  {
    "name": "Alan Wake's American Nightmare",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360",
    "released": "2012",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/0b3/0b34647c42271600399b93d19b10f1aa.jpg",
    "metacritic": "73"
  },
  {
    "name": "Call of Duty: Black Ops II",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3, Wii U",
    "released": "2012",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8ee/8eed88e297441ef9202b5d1d35d7d86f.jpg",
    "metacritic": "74"
  },
  {
    "name": "PAYDAY The Heist",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 3",
    "released": "2011",
    "playtime": "4 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/546/546cf59a24b0ae308e311a07611ca22f.jpg",
    "metacritic": "76"
  },
  {
    "name": "Syberia 2",
    "genres": "Adventure, Puzzle",
    "platforms": "PC, Nintendo Switch, iOS, Android, macOS, Xbox 360, Xbox, PlayStation 3, PlayStation 2",
    "released": "2004",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/c00/c003705c0eaed100397ae408b7b89e90.jpg",
    "metacritic": "80"
  },
  {
    "name": "Batman: Arkham Asylum",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "13 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/d56/d564ee964eb3c17892b3b35dd607f836.jpg",
    "metacritic": "91"
  },
  {
    "name": "Euro Truck Simulator 2",
    "genres": "Indie, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2012",
    "playtime": "12 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/1f5/1f5ddf7199f2778ff83663b93b5cb330.jpg",
    "metacritic": "79"
  },
  {
    "name": "Warhammer 40,000: Space Marine",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "5 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg",
    "metacritic": "74"
  },
  {
    "name": "Dark Souls II: Scholar of the First Sin",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "24 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg",
    "metacritic": "79"
  },
  {
    "name": "Overcooked",
    "genres": "Casual, Indie, Arcade, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/270/270b412b66688081497b3d70c100b208.jpg",
    "metacritic": "81"
  },
  {
    "name": "FINAL FANTASY XV",
    "genres": "RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/2ee/2eeed8524931b4fae1e4a40d0e5443b5.jpg",
    "metacritic": "82"
  },
  {
    "name": "Until Dawn (2015)",
    "genres": "Adventure, Action",
    "platforms": "PlayStation 4, PlayStation 3",
    "released": "2015",
    "playtime": "14 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d64/d6443375f9971152866ea76bff97d6d6.jpg",
    "metacritic": "79"
  },
  {
    "name": "Team Fortress Classic",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "1999",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg",
    "metacritic": ""
  },
  {
    "name": "Borderlands Game of the Year Enhanced",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2019",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/df9/df988191048e92cf86dabd2987c47b62.jpg",
    "metacritic": "78"
  },
  {
    "name": "STAR WARS Battlefront II",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/f54/f54e9fb2f4aac37810ea1a69a3e4480a.jpg",
    "metacritic": "74"
  },
  {
    "name": "The Sims 4",
    "genres": "Casual, Strategy, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox Series S/X, macOS",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg",
    "metacritic": "67"
  },
  {
    "name": "Assassin's Creed Syndicate",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "24 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/9f1/9f189c639f70f91166df415811a8b525.jpg",
    "metacritic": "74"
  },
  {
    "name": "Age of Wonders III",
    "genres": "Strategy, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/f95/f95ec06eddda5c5bf206618c49cd3e68.jpg",
    "metacritic": "80"
  },
  {
    "name": "SMITE",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg",
    "metacritic": "83"
  },
  {
    "name": "Metal Gear Rising: Revengeance",
    "genres": "Action",
    "platforms": "PC, Xbox One, Android, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8e6/8e699e91cf77c2060b6d515e2135b1b1.jpg",
    "metacritic": "83"
  },
  {
    "name": "Borderlands 3",
    "genres": "Shooter, Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2019",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    "metacritic": "83"
  },
  {
    "name": "Dark Souls: Prepare To Die Edition",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "14 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/511/5116b4524cea34c6b3f12e0ca027d850.jpg",
    "metacritic": "85"
  },
  {
    "name": "Deus Ex: Game of the Year Edition",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, macOS, PlayStation 3, PlayStation 2",
    "released": "2000",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg",
    "metacritic": "90"
  },
  {
    "name": "Celeste",
    "genres": "Platformer, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2018",
    "playtime": "6 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/594/59487800889ebac294c7c2c070d02356.jpg",
    "metacritic": "91"
  },
  {
    "name": "Black Mesa",
    "genres": "Shooter, Indie, Action",
    "platforms": "PC, Linux",
    "released": "2020",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/009/009e4e84975d6a60173ec1199db25aa3.jpg",
    "metacritic": "86"
  },
  {
    "name": "The Forest",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, PlayStation 4",
    "released": "2018",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/1be/1be575aa6de86de328433a63fb534d9a.jpg",
    "metacritic": ""
  },
  {
    "name": "Half-Life: Source",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "2004",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d54/d54f0267a042f44c032d8ca264584ecf.jpg",
    "metacritic": ""
  },
  {
    "name": "Company of Heroes",
    "genres": "Strategy",
    "platforms": "PC, iOS",
    "released": "2006",
    "playtime": "7 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg",
    "metacritic": "93"
  },
  {
    "name": "Mafia: The City of Lost Heaven",
    "genres": "Action",
    "platforms": "PC, Xbox, PlayStation 2",
    "released": "2002",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/74c/74ca0ec569682a150f3c6f9f661fb6a5.jpg",
    "metacritic": "88"
  },
  {
    "name": "Hitman: Blood Money",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 4, Xbox 360, Xbox, PlayStation 3, PlayStation 2",
    "released": "2006",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/233/233cdc08cce0228f6f35222eca3bff92.jpg",
    "metacritic": "82"
  },
  {
    "name": "A Way Out",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg",
    "metacritic": "78"
  },
  {
    "name": "Oddworld: Abe's Oddysee",
    "genres": "Platformer, Action",
    "platforms": "PC, PlayStation 5, PlayStation 4, PlayStation",
    "released": "1997",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg",
    "metacritic": "85"
  },
  {
    "name": "Human: Fall Flat",
    "genres": "Indie, Action, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg",
    "metacritic": "70"
  },
  {
    "name": "Frostpunk",
    "genres": "Strategy, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a88/a886c37bf112d009e318b106db9d420a.jpg",
    "metacritic": "85"
  },
  {
    "name": "Dead by Daylight",
    "genres": "Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2016",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/e11/e11325e2f89151d31f612e38dee3b6a0.jpg",
    "metacritic": "72"
  },
  {
    "name": "Ghost of Tsushima",
    "genres": "Adventure, Action, RPG",
    "platforms": "PlayStation 5, PlayStation 4",
    "released": "2020",
    "playtime": "",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg",
    "metacritic": "83"
  },
  {
    "name": "S.T.A.L.K.E.R.: Shadow of Chernobyl",
    "genres": "Shooter, Adventure, Action, RPG",
    "platforms": "PC",
    "released": "2007",
    "playtime": "3 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/348/348640e78a7fcd4bb7dcad4fea014eeb.jpg",
    "metacritic": "82"
  },
  {
    "name": "The Long Dark",
    "genres": "Indie, Adventure, Action, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2014",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/fd2/fd20a68d7ef195855588c937865dd0a7.jpg",
    "metacritic": "76"
  },
  {
    "name": "Rust",
    "genres": "Shooter, Action, RPG, Indie, Massively Multiplayer",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2018",
    "playtime": "14 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg",
    "metacritic": "66"
  },
  {
    "name": "Wallpaper Engine",
    "genres": "Casual",
    "platforms": "PC, Android",
    "released": "2016",
    "playtime": "13 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/5a7/5a72aed79451d8fbd6a7b82f784002bd.jpg",
    "metacritic": ""
  },
  {
    "name": "LEGO The Lord of the Rings",
    "genres": "Casual, Platformer, Family, Action",
    "platforms": "PC, iOS, Android, Nintendo 3DS, Nintendo DS, Xbox 360, PlayStation 3, PS Vita, Wii",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/89a/89a700d3c6a76bd0610ca89ccd20da54.jpg",
    "metacritic": "80"
  },
  {
    "name": "Titan Souls",
    "genres": "Indie, Action",
    "platforms": "PC, PlayStation 4, macOS, PS Vita",
    "released": "2015",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/2fc/2fc6994425146f9dba3133400b414e29.jpg",
    "metacritic": "74"
  },
  {
    "name": "Max Payne",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 4, Xbox 360, Xbox, PlayStation 3, PlayStation 2, Classic Macintosh",
    "released": "2001",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/2f5/2f5eb72fe45540e93ac2726877551a20.jpg",
    "metacritic": "89"
  },
  {
    "name": "The Binding of Isaac: Rebirth",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Nintendo 3DS, macOS, Linux, PS Vita, Wii U",
    "released": "2014",
    "playtime": "31 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg",
    "metacritic": "86"
  },
  {
    "name": "Wolfenstein: The Old Blood",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "7 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg",
    "metacritic": "76"
  },
  {
    "name": "Race Driver: Grid",
    "genres": "Racing",
    "platforms": "PC, Xbox One, Nintendo DS, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/fc0/fc076b974197660a582abd34ebccc27f.jpg",
    "metacritic": "87"
  },
  {
    "name": "Ryse: Son of Rome",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/736/736c0eaec96d848d7824b33298a182f2.jpg",
    "metacritic": "61"
  },
  {
    "name": "Guns of Icarus Online",
    "genres": "Indie, Action, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg",
    "metacritic": "64"
  },
  {
    "name": "Tropico 4",
    "genres": "Strategy, Simulation",
    "platforms": "PC, Xbox One, macOS, Xbox 360",
    "released": "2011",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d1e/d1e70ce3762efcfc170c6bd067d7e9e3.jpg",
    "metacritic": "78"
  },
  {
    "name": "Darksiders II Deathinitive Edition",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2015",
    "playtime": "9 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg",
    "metacritic": "75"
  },
  {
    "name": "Doki Doki Literature Club!",
    "genres": "Indie, Adventure",
    "platforms": "PC, macOS, Linux",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/972/972aea3c9eb253e893947bec2d2cfbb9.jpg",
    "metacritic": "78"
  },
  {
    "name": "Divinity: Original Sin - Enhanced Edition",
    "genres": "Indie, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2015",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg",
    "metacritic": "94"
  },
  {
    "name": "The Evil Within",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/157/1570121f5c4d240504f1eae5c3854733.jpg",
    "metacritic": "68"
  },
  {
    "name": "Dear Esther: Landmark Edition",
    "genres": "Casual, Indie, Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "released": "2017",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/b20/b20a20205954f9765e82298dbd41e48a.jpg",
    "metacritic": ""
  },
  {
    "name": "Star Wars: Knights of the Old Republic II – The Sith Lords",
    "genres": "Adventure, RPG",
    "platforms": "PC, Nintendo Switch, Android, macOS, Linux, Xbox 360, Xbox",
    "released": "2004",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg",
    "metacritic": "85"
  },
  {
    "name": "Jotun: Valhalla Edition",
    "genres": "Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/032/0329db96e252aa41e672da2ba16f914c.jpg",
    "metacritic": "79"
  },
  {
    "name": "Hacknet",
    "genres": "Indie, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg",
    "metacritic": "82"
  },
  {
    "name": "Sid Meier's Civilization III Complete",
    "genres": "Strategy, Simulation",
    "platforms": "PC",
    "released": "2001",
    "playtime": "1 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg",
    "metacritic": "90"
  },
  {
    "name": "Braid",
    "genres": "Action, Puzzle, Arcade, Indie, Platformer",
    "platforms": "PC, Xbox One, iOS, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/a5a/a5abaa1b5cc1567b026fa3aa9fbd828e.jpg",
    "metacritic": "92"
  },
  {
    "name": "Sea of Thieves",
    "genres": "Massively Multiplayer, Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, Xbox Series S/X",
    "released": "2018",
    "playtime": "12 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/539/53911178036df07d518dd492ddc25289.jpg",
    "metacritic": "68"
  },
  {
    "name": "Mortal Kombat 11",
    "genres": "Adventure, Action, Fighting",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2019",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg",
    "metacritic": "82"
  },
  {
    "name": "Prison Architect",
    "genres": "Strategy, Indie, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg",
    "metacritic": "83"
  },
  {
    "name": "Murdered: Soul Suspect",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/54a/54a3e4c617217848dc43c4de9989fe37.jpg",
    "metacritic": "59"
  },
  {
    "name": "Assassin's Creed",
    "genres": "Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2007",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/0bc/0bcc108295a244b488d5c25f7d867220.jpg",
    "metacritic": "80"
  },
  {
    "name": "Red Orchestra 2: Heroes of Stalingrad with Rising Storm",
    "genres": "Action",
    "platforms": "PC",
    "released": "2011",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/bff/bff077fb7c3b037bd5ed920bf447c863.jpg",
    "metacritic": "76"
  },
  {
    "name": "Darksiders II",
    "genres": "Action, RPG",
    "platforms": "PC, Nintendo Switch, Xbox 360, PlayStation 3, Wii U",
    "released": "2012",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/848/8482235332f4518da363c3cb4e5cd075.jpg",
    "metacritic": "83"
  },
  {
    "name": "Sanctum 2",
    "genres": "Indie, Shooter, Strategy, Action",
    "platforms": "PC, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/963/963815b2a1a88475a31f311b591e70fb.jpg",
    "metacritic": "77"
  },
  {
    "name": "Counter-Strike: Condition Zero Deleted Scenes",
    "genres": "Shooter",
    "platforms": "PC, macOS, Linux",
    "released": "2004",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/9fd/9fd128fef547eb630182a1995b1edeb5.jpg",
    "metacritic": ""
  },
  {
    "name": "Dark Souls: Remastered",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "14 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/29c/29c6c21cc0c78cff6f45d23631cc82f4.jpg",
    "metacritic": "84"
  },
  {
    "name": "Serious Sam Fusion 2017 (beta)",
    "genres": "Indie, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2017",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/21b/21babfc41e2a6972290833d1b860f13e.jpg",
    "metacritic": ""
  },
  {
    "name": "Beholder",
    "genres": "Indie, Strategy, Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/40a/40ab95c1639aa1d7ec04d4cd523af6b1.jpg",
    "metacritic": "75"
  },
  {
    "name": "Resident Evil 2",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2019",
    "playtime": "11 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg",
    "metacritic": "91"
  },
  {
    "name": "Resident Evil",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation, SEGA Saturn",
    "released": "1996",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/510/51039d0ec5dc8c3e08ae4374dfceecec.jpg",
    "metacritic": "91"
  },
  {
    "name": "Game of Thrones - A Telltale Games Series",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, Android, macOS, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "7 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/c81/c812e158129e00c9b0f096ae8a0bb7d6.jpg",
    "metacritic": "66"
  },
  {
    "name": "Lords of the Fallen (2014)",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, iOS, Android",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d09/d096ad37b7f522e11c02848252213a9a.jpg",
    "metacritic": "73"
  },
  {
    "name": "Mark of the Ninja",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, Nintendo Switch, macOS, Linux, Xbox 360",
    "released": "2012",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b17/b17485d757ca36b5f1ad376b6b096885.jpg",
    "metacritic": "91"
  },
  {
    "name": "Minion Masters",
    "genres": "Strategy, Indie, Action",
    "platforms": "PC, Xbox One",
    "released": "2019",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg",
    "metacritic": ""
  },
  {
    "name": "Trine Enchanted Edition",
    "genres": "Indie, Platformer, Arcade, Action",
    "platforms": "PC, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2009",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg",
    "metacritic": "80"
  },
  {
    "name": "Starbound",
    "genres": "Casual, Indie, Action, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2016",
    "playtime": "16 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/6d9/6d92d50affeebf2eb3894d178eb1117e.jpg",
    "metacritic": "81"
  },
  {
    "name": "Far Cry 3: Blood Dragon",
    "genres": "Shooter",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/5e4/5e4bff02098b2b6f824c68286d5da1a6.jpg",
    "metacritic": "81"
  },
  {
    "name": "The Playroom",
    "genres": "Arcade",
    "platforms": "PlayStation 4",
    "released": "2013",
    "playtime": "",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/363/36306deef81e7955a5d0f5c3b43fccee.jpg",
    "metacritic": ""
  },
  {
    "name": "Fallout 2",
    "genres": "RPG",
    "platforms": "PC, macOS",
    "released": "1998",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/218/218167ff4011acc825c844d0070940a0.jpg",
    "metacritic": "86"
  },
  {
    "name": "Serious Sam 3: BFE",
    "genres": "Shooter, Indie, Action",
    "platforms": "PC, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/12e/12ea6b35b65df38258e25885a0a392a6.jpg",
    "metacritic": "72"
  },
  {
    "name": "Neverwinter",
    "genres": "Massively Multiplayer, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg",
    "metacritic": "74"
  },
  {
    "name": "Jet Set Radio",
    "genres": "Platformer, Action, Sports",
    "platforms": "PC, iOS, Android, Xbox 360, PlayStation 3, PS Vita, Game Boy Advance, Dreamcast",
    "released": "2000",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/fd7/fd794a9f0ffe816038d981b3acc3eec9.jpg",
    "metacritic": "94"
  },
  {
    "name": "F.E.A.R.",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2005",
    "playtime": "2 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/89a/89a8378d49732505cdb28babe505df9e.jpg",
    "metacritic": "88"
  },
  {
    "name": "Enter the Gungeon",
    "genres": "Shooter, Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2016",
    "playtime": "7 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/3be/3be0e624424d3453005019799a760af2.jpg",
    "metacritic": "84"
  },
  {
    "name": "Endless Space - Collection",
    "genres": "Strategy",
    "platforms": "PC, macOS",
    "released": "2012",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/bf7/bf71c819eace914e6c42ae3ecb667308.jpg",
    "metacritic": "77"
  },
  {
    "name": "Destiny",
    "genres": "Shooter, Action",
    "platforms": "Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "24 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/062/062420d85c7143f72ad3557f32c41ead.jpg",
    "metacritic": "76"
  },
  {
    "name": "Killing Floor 2",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "9 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/192/1921ec949024a5fbd1e1c7008f54b5af.jpg",
    "metacritic": "75"
  },
  {
    "name": "Resident Evil Revelations 2",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, Xbox 360, PlayStation 3, PS Vita",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/ea3/ea3228b5c6c749019a9ed42e90a4e7c6.jpg",
    "metacritic": "72"
  },
  {
    "name": "Assassin’s Creed Brotherhood",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "15 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg",
    "metacritic": "88"
  },
  {
    "name": "Child of Light",
    "genres": "Indie, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3, PS Vita, Wii U",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg",
    "metacritic": "77"
  },
  {
    "name": "Fortnite Battle Royale",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, iOS, Android, macOS",
    "released": "2017",
    "playtime": "",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg",
    "metacritic": "82"
  },
  {
    "name": "Final Fantasy VII",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, PlayStation 4",
    "released": "2020",
    "playtime": "",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
    "metacritic": "87"
  },
  {
    "name": "The Elder Scrolls Online: Tamriel Unlimited",
    "genres": "Massively Multiplayer, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "released": "2015",
    "playtime": "15 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/596/596a48ef3b62b63b4cc59633e28be903.jpg",
    "metacritic": "77"
  },
  {
    "name": "BattleBlock Theater",
    "genres": "Adventure, Action, Casual, Indie, Platformer",
    "platforms": "PC, Xbox One, macOS, Linux, Xbox 360",
    "released": "2013",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg",
    "metacritic": "85"
  },
  {
    "name": "Fallout 3: Game of the Year Edition",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/e53/e5372e767149bc88106e1da0ae7e9104.jpg",
    "metacritic": "91"
  },
  {
    "name": "Remember Me",
    "genres": "Platformer, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg",
    "metacritic": "65"
  },
  {
    "name": "Broken Age",
    "genres": "Adventure, Puzzle, Casual, Family, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux, PS Vita",
    "released": "2014",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/3ef/3eff92562640e452d3487c04ba6d7fae.jpg",
    "metacritic": "81"
  },
  {
    "name": "Orwell: Keeping an Eye On You",
    "genres": "Indie, Adventure, Simulation, Puzzle",
    "platforms": "PC, iOS, Android, macOS, Linux",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg",
    "metacritic": "77"
  },
  {
    "name": "LEGO The Hobbit",
    "genres": "Family, Adventure, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo 3DS, macOS, Xbox 360, PlayStation 3, PS Vita, Wii U",
    "released": "2014",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/e4f/e4fb3fd188f61fabec48dca22e6ef28a.jpg",
    "metacritic": "70"
  },
  {
    "name": "Oxenfree",
    "genres": "Indie, Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/7ba/7baf4663962bad7197e2470d59a6e322.jpg",
    "metacritic": "80"
  },
  {
    "name": "ABZU",
    "genres": "Indie, Adventure, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2016",
    "playtime": "2 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg",
    "metacritic": "83"
  },
  {
    "name": "Far Cry 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/0f3/0f38cdcefd5cfa2f450d0ccb3f569a5d.jpg",
    "metacritic": "85"
  },
  {
    "name": "Tales from the Borderlands: A Telltale Game Series",
    "genres": "Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Xbox 360, PlayStation 3",
    "released": "2015",
    "playtime": "11 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg",
    "metacritic": "85"
  },
  {
    "name": "STAR WARS Battlefront",
    "genres": "Strategy, Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/bd2/bd2cc7714e0b9b1adad1ba1b2400d436.jpg",
    "metacritic": "73"
  },
  {
    "name": "Stray",
    "genres": "Adventure, Action, Puzzle, Indie, Platformer",
    "platforms": "PC, PlayStation 5, PlayStation 4, Xbox Series S/X",
    "released": "2022",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg",
    "metacritic": "82"
  },
  {
    "name": "Sonic Mania",
    "genres": "Casual, Platformer, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg",
    "metacritic": "85"
  },
  {
    "name": "Monaco: What's Yours Is Mine",
    "genres": "Casual, Strategy, Indie, Action",
    "platforms": "PC, macOS, Linux, Xbox 360",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg",
    "metacritic": "83"
  },
  {
    "name": "Battlefield 3",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8bd/8bda6d876f3e241c6024022299553efd.jpg",
    "metacritic": "86"
  },
  {
    "name": "F.E.A.R. 3",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/1da/1da9a7af524e81d257f972fbc06baefd.jpg",
    "metacritic": "74"
  },
  {
    "name": "Dying Light",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2015",
    "playtime": "22 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/4a5/4a5ce21f529cf8fd4670b4c3188b25df.jpg",
    "metacritic": "74"
  },
  {
    "name": "Lara Croft and the Guardian of Light",
    "genres": "Adventure, Action",
    "platforms": "PC, iOS, Android, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/a92/a92272ea5cfc35b8ad6317fbd81ce0f6.jpg",
    "metacritic": "82"
  },
  {
    "name": "The Flame in the Flood",
    "genres": "Indie, Action, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS",
    "released": "2016",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/87a/87a29bcc56b6b6082ead1dd5e2510aaa.jpg",
    "metacritic": "73"
  },
  {
    "name": "F.E.A.R. 2: Project Origin",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d1d/d1dd46e2ef7f8a1ee946d3ab779c3754.jpg",
    "metacritic": "79"
  },
  {
    "name": "Dragon's Dogma: Dark Arisen",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg",
    "metacritic": "81"
  },
  {
    "name": "Rogue Legacy",
    "genres": "Platformer, Indie, Action, RPG",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, Xbox 360, PlayStation 3, PS Vita",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/598/59851e152a6898c8bf79069b5bf2f4db.jpg",
    "metacritic": "85"
  },
  {
    "name": "Mafia II: Definitive Edition",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2020",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d73/d7364906c530ccc2d89b0b5d8695e03c.jpg",
    "metacritic": "65"
  },
  {
    "name": "Resident Evil 3",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2020",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg",
    "metacritic": "80"
  },
  {
    "name": "PlanetSide 2",
    "genres": "Shooter, Massively Multiplayer, Action",
    "platforms": "PC, PlayStation 4",
    "released": "2012",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/2fd/2fd1b58116b10cc1f4442bee5593ca7c.jpg",
    "metacritic": "84"
  },
  {
    "name": "Slay the Spire",
    "genres": "Card, Strategy, Indie, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2019",
    "playtime": "12 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/f52/f5206d55f918edf8ee07803101106fa6.jpg",
    "metacritic": "86"
  },
  {
    "name": "Stellaris",
    "genres": "Strategy, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2016",
    "playtime": "10 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/92b/92bbf8a451e2742ab812a580546e593a.jpg",
    "metacritic": "78"
  },
  {
    "name": "The Elder Scrolls III: Morrowind",
    "genres": "RPG",
    "platforms": "PC, Xbox 360, Xbox",
    "released": "2002",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/ccf/ccf26f6e3d553a04f0033a8107a521b8.jpg",
    "metacritic": "89"
  },
  {
    "name": "Vampyr",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/23b/23b42b7a896140f4ce1d0df8c42fa012.jpg",
    "metacritic": "70"
  },
  {
    "name": "Drawful 2",
    "genres": "Casual, Strategy, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS",
    "released": "2016",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/eeb/eeb9e668da5fd07bab9f655acfbbe579.jpg",
    "metacritic": "74"
  },
  {
    "name": "Killer is Dead - Nightmare Edition",
    "genres": "Action",
    "platforms": "PC",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a72/a72e405a19f93dc68cbc06d7a39b2a4a.jpg",
    "metacritic": ""
  },
  {
    "name": "The Talos Principle",
    "genres": "Indie, Adventure, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2014",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg",
    "metacritic": "85"
  },
  {
    "name": "Dust: An Elysian Tail",
    "genres": "Platformer, Indie, Action, RPG",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, macOS, Linux, Xbox 360",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/c40/c40f9f0a3d1b4601a7a44d230c95f126.jpg",
    "metacritic": "84"
  },
  {
    "name": "Overlord",
    "genres": "Action, RPG",
    "platforms": "PC, macOS, Linux, Xbox 360",
    "released": "2007",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/d1c/d1cd8a226cb224357c1f59605577cbf2.jpg",
    "metacritic": "81"
  },
  {
    "name": "Gwent: The Witcher Card Game",
    "genres": "Card, Strategy, Board Games, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, iOS, Android",
    "released": "2018",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg",
    "metacritic": "80"
  },
  {
    "name": "Deponia",
    "genres": "Indie, Adventure, RPG, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/c2e/c2e6ad5c838d551aeff376f1f3d9d65e.jpg",
    "metacritic": "74"
  },
  {
    "name": "Crysis 2 - Maximum Edition",
    "genres": "Action",
    "platforms": "PC",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg",
    "metacritic": ""
  },
  {
    "name": "Persona 5",
    "genres": "Adventure, Action, RPG",
    "platforms": "PlayStation 4, PlayStation 3",
    "released": "2016",
    "playtime": "105 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/3ea/3ea0e57ede873970c0f1130e30d88749.jpg",
    "metacritic": "93"
  },
  {
    "name": "Burnout Paradise: The Ultimate Box",
    "genres": "Racing, Arcade",
    "platforms": "PC",
    "released": "2009",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/7cf/7cf38d2d80267c121c6d0d361e9429ce.jpg",
    "metacritic": "87"
  },
  {
    "name": "Valiant Hearts: The Great War",
    "genres": "Adventure, Puzzle",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg",
    "metacritic": "80"
  },
  {
    "name": "DiRT Showdown",
    "genres": "Racing, Arcade",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/23d/23d78acedbb5f40c9fb64e73af5af65d.jpg",
    "metacritic": "74"
  },
  {
    "name": "Spelunky",
    "genres": "Platformer, Indie",
    "platforms": "PC, PlayStation 4, Xbox 360, PlayStation 3, PS Vita",
    "released": "2012",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/fad/fadc4be043ed07904012d47cd02671e4.jpg",
    "metacritic": "90"
  },
  {
    "name": "Heroes & Generals",
    "genres": "Indie, Shooter, Massively Multiplayer, Action",
    "platforms": "PC",
    "released": "2016",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg",
    "metacritic": ""
  },
  {
    "name": "It Takes Two",
    "genres": "Platformer, Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2021",
    "playtime": "10 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg",
    "metacritic": "88"
  },
  {
    "name": "Battlefield V",
    "genres": "Massively Multiplayer, Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/45b/45b57ed59de4b84effd8f6bc4b7bf515.jpg",
    "metacritic": "77"
  },
  {
    "name": "Divinity: Original Sin",
    "genres": "Strategy, Indie, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "released": "2014",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg",
    "metacritic": "87"
  },
  {
    "name": "Medal of Honor",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg",
    "metacritic": "72"
  },
  {
    "name": "Star Wars: Battlefront II (2005)",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox, PlayStation 2, PSP",
    "released": "2005",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/662/6625a20ca1d13699ee7c191b20a02408.jpg",
    "metacritic": "78"
  },
  {
    "name": "Assassin's Creed Revelations",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "14 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/193/19390fa5e75e9048b22c9a736cf9992f.jpg",
    "metacritic": "80"
  },
  {
    "name": "Deep Rock Galactic",
    "genres": "Indie, Action",
    "platforms": "PC, PlayStation 5, PlayStation 4",
    "released": "2020",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg",
    "metacritic": "84"
  },
  {
    "name": "Gris",
    "genres": "Indie, Platformer, Adventure, Puzzle",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, iOS, Android, macOS",
    "released": "2018",
    "playtime": "3 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/51c/51c430f1795c79b78f863a9f22dc422d.jpg",
    "metacritic": "83"
  },
  {
    "name": "Shadow of the Colossus (2011)",
    "genres": "Action",
    "platforms": "PlayStation 3",
    "released": "2011",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/6ac/6ac602e70c837ababdf025e997391d9c.jpg",
    "metacritic": "91"
  },
  {
    "name": "Crash Bandicoot N. Sane Trilogy",
    "genres": "Platformer, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/444/4440f674e2bcb257e249a9ab595d8ab6.jpg",
    "metacritic": "81"
  },
  {
    "name": "The Swapper",
    "genres": "Adventure, Action, Puzzle, Indie, Platformer",
    "platforms": "PC, PlayStation 4, Xbox One, macOS, Linux, PlayStation 3, PS Vita, Wii U",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/6fc/6fcb1c529c764700d55f3bbc1b0fbb5b.jpg",
    "metacritic": "87"
  },
  {
    "name": "VRChat",
    "genres": "Adventure, Casual, Simulation, Sports, Massively Multiplayer",
    "platforms": "PC",
    "released": "2017",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg",
    "metacritic": ""
  },
  {
    "name": "Uncharted: Legacy of Thieves Collection",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 5",
    "released": "2022",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg",
    "metacritic": ""
  },
  {
    "name": "Tomb Raider: Underworld",
    "genres": "Adventure, Action",
    "platforms": "PC, Nintendo DS, macOS, Xbox 360, PlayStation 3, Wii",
    "released": "2008",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/341/3413d7275fb1e919f00a925df8288b77.jpg",
    "metacritic": "80"
  },
  {
    "name": "Red Faction: Guerrilla",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/94a/94a59c5136a9b90eef5f23fea7bf997c.jpg",
    "metacritic": "82"
  },
  {
    "name": "Max Payne 2: The Fall of Max Payne",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox, PlayStation 2",
    "released": "2003",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
    "metacritic": "80"
  },
  {
    "name": "Pillars of Eternity",
    "genres": "RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2015",
    "playtime": "9 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/789/7896837ec22a83e4007018ddd55e8c9a.jpg",
    "metacritic": "89"
  },
  {
    "name": "Gothic Playable Teaser",
    "genres": "RPG",
    "platforms": "PC",
    "released": "2019",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/64e/64e4fc48c5d977188e8c47287f2a2cef.jpg",
    "metacritic": ""
  },
  {
    "name": "Mass Effect 3",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3, Wii U",
    "released": "2012",
    "playtime": "30 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg",
    "metacritic": "90"
  },
  {
    "name": "Machinarium",
    "genres": "Family, Indie, Adventure, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux, PlayStation 3, PS Vita",
    "released": "2009",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/8cd/8cd179c85bd3de8f79bef245b15075fb.jpg",
    "metacritic": "85"
  },
  {
    "name": "Call of Duty: Modern Warfare Remastered",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/509/509c81a5da92a8d0645d9e160d155017.jpg",
    "metacritic": "86"
  },
  {
    "name": "Resident Evil: Village",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, iOS",
    "released": "2021",
    "playtime": "16 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg",
    "metacritic": "83"
  },
  {
    "name": "Binary Domain",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/bcd/bcd9896b7c3b9fa80e5dcb67c961e2be.jpg",
    "metacritic": "68"
  },
  {
    "name": "Crysis",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2007",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/90f/90fd5e569bc4c4a666c588a732124908.jpg",
    "metacritic": "91"
  },
  {
    "name": "Mafia: Definitive Edition",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2020",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/345/3452d9d4483686c602372e0e6b3bb4cc.jpg",
    "metacritic": "78"
  },
  {
    "name": "Day of Defeat: Source",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "2005",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg",
    "metacritic": "80"
  },
  {
    "name": "Sniper Elite 4",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/2fe/2feec1ba840f467a2280061b9e665c6e.jpg",
    "metacritic": "78"
  },
  {
    "name": "Forza Horizon 5",
    "genres": "Racing, Arcade",
    "platforms": "PC, Xbox One, Xbox Series S/X, iOS",
    "released": "2021",
    "playtime": "14 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg",
    "metacritic": ""
  },
  {
    "name": "Rage",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8a7/8a75028028592f9323d1e6e86668bb91.jpg",
    "metacritic": "79"
  },
  {
    "name": "Vampire Survivors",
    "genres": "Casual, Indie, Action, RPG",
    "platforms": "PC, Xbox One, Nintendo Switch, iOS, Android, Web",
    "released": "2022",
    "playtime": "10 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg",
    "metacritic": ""
  },
  {
    "name": "Yakuza Kiwami",
    "genres": "Adventure, Action, RPG, Fighting",
    "platforms": "PC, Xbox One, PlayStation 4, PlayStation 3",
    "released": "2016",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/fbb/fbbd9fe21317bde9134114e2b1306069.jpg",
    "metacritic": "83"
  },
  {
    "name": "Sins of a Solar Empire: Rebellion",
    "genres": "Strategy, Indie",
    "platforms": "PC",
    "released": "2012",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg",
    "metacritic": "82"
  },
  {
    "name": "The LEGO NINJAGO Movie Video Game",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "1 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/f60/f607e3212c540e3d25c2418c2edb6306.jpg",
    "metacritic": "70"
  },
  {
    "name": "Gears 5",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox Series S/X",
    "released": "2019",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg",
    "metacritic": "83"
  },
  {
    "name": "World of Goo",
    "genres": "Educational, Puzzle, Strategy, Indie, Family",
    "platforms": "PC, Nintendo Switch, iOS, Android, macOS, Linux, Wii",
    "released": "2008",
    "playtime": "1 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg",
    "metacritic": "90"
  },
  {
    "name": "Call of Duty: World at War",
    "genres": "Shooter",
    "platforms": "PC, Xbox One, Nintendo DS, Xbox 360, PlayStation 3, Wii",
    "released": "2008",
    "playtime": "7 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/da1/da15524e850ee9791b32973b748e08d5.jpg",
    "metacritic": "83"
  },
  {
    "name": "Outer Wilds",
    "genres": "Indie, Adventure, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2019",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/9f4/9f418898f5415668ca47b5f4ab1ecfeb.jpg",
    "metacritic": "84"
  },
  {
    "name": "Tabletop Simulator",
    "genres": "RPG, Casual, Strategy, Simulation, Indie",
    "platforms": "PC, macOS, Linux",
    "released": "2015",
    "playtime": "7 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/f86/f869253c68b38fa789f58cc5be2cb996.jpg",
    "metacritic": ""
  },
  {
    "name": "Hitman 2: Silent Assassin",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, Xbox, PlayStation 3, PlayStation 2, GameCube",
    "released": "2002",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/683/6833fbb183fd72a61c032501e3bc6d36.jpg",
    "metacritic": "87"
  },
  {
    "name": "The Elder Scrolls IV: Oblivion Game of the Year Edition",
    "genres": "RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/886/8868f9ea0c91d45316319ebf5dd4fc64.jpg",
    "metacritic": "94"
  },
  {
    "name": "Life is Strange 2",
    "genres": "Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2018",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg",
    "metacritic": "75"
  },
  {
    "name": "Magicka 2",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, PlayStation 4, macOS, Linux",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/516/516c6bfe36ddb498d860f68927448a75.jpg",
    "metacritic": "69"
  },
  {
    "name": "Injustice 2",
    "genres": "Fighting",
    "platforms": "PC, Xbox One, PlayStation 4, iOS, Android",
    "released": "2017",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/e42/e428e70c97064037326d7863a43a0454.jpg",
    "metacritic": "88"
  },
  {
    "name": "S.T.A.L.K.E.R.: Call of Pripyat",
    "genres": "Shooter, RPG",
    "platforms": "PC",
    "released": "2009",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/5ad/5adab016a307c2902a82b60d487fe287.jpg",
    "metacritic": "80"
  },
  {
    "name": "The Awesome Adventures of Captain Spirit",
    "genres": "Adventure",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/efd/efd6b2cb621c41a2b6580d8ac260b8ba.jpg",
    "metacritic": "77"
  },
  {
    "name": "Valheim",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, Linux",
    "released": "2021",
    "playtime": "12 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/adb/adb59be81367b19c2544457424bcf086.jpg",
    "metacritic": ""
  },
  {
    "name": "Shadow Tactics: Blades of the Shogun",
    "genres": "Strategy, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/c35/c354856af9151dc63844be4f9843d2c2.jpg",
    "metacritic": "85"
  },
  {
    "name": "Deponia: The Complete Journey",
    "genres": "Adventure, RPG",
    "platforms": "PC, iOS, macOS, Linux",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/99d/99d7fadd2342f575d238a4e1f5c542b6.jpg",
    "metacritic": ""
  },
  {
    "name": "S.T.A.L.K.E.R.: Clear Sky",
    "genres": "Shooter, RPG",
    "platforms": "PC",
    "released": "2008",
    "playtime": "3 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/68e/68e34eb2122fe9e23f634e0b5f5ea6ae.jpg",
    "metacritic": "75"
  },
  {
    "name": "Torchlight",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, macOS, Linux, Xbox 360",
    "released": "2009",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b17/b175178f8842276b8b18b339fe3146a1.jpg",
    "metacritic": "83"
  },
  {
    "name": "Gone Home",
    "genres": "Indie, Adventure",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg",
    "metacritic": "86"
  },
  {
    "name": "Satellite Reign",
    "genres": "Strategy, Indie, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/8df/8df64136042eb6e2ed4fa910a6ad96ac.jpg",
    "metacritic": "75"
  },
  {
    "name": "Life is Strange: Before The Storm",
    "genres": "Adventure",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, Android, macOS, Linux",
    "released": "2017",
    "playtime": "11 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/214/2140885d34e3a3398b45036e5d870971.jpg",
    "metacritic": "77"
  },
  {
    "name": "Day of Defeat",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "2003",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/ccc/ccc0d5396e3331d58e5eb58a6a1fa1b7.jpg",
    "metacritic": "79"
  },
  {
    "name": "Sunset Overdrive",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/c2e/c2eb6021a2596644b437e943612af25c.jpg",
    "metacritic": "82"
  },
  {
    "name": "Metro: Last Light",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b1f/b1f1eeee149ef49c008a2258ee6c0d78.jpg",
    "metacritic": "81"
  },
  {
    "name": "Red Faction: Armageddon",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/395/395ad028483d6cd9076b746a3eec993d.jpg",
    "metacritic": "75"
  },
  {
    "name": "Shadow Warrior",
    "genres": "Shooter, Action",
    "platforms": "PC, macOS, Linux",
    "released": "1997",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/f7e/f7e70957c14ead1fa187a616dfa83e09.jpg",
    "metacritic": "73"
  },
  {
    "name": "Street Fighter V",
    "genres": "Action, Fighting",
    "platforms": "PC, PlayStation 4",
    "released": "2016",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/a32/a32c9c299488ca99afc3fcea605a7718.jpg",
    "metacritic": "74"
  },
  {
    "name": "Alien Swarm",
    "genres": "Shooter, Action",
    "platforms": "PC",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/a65/a65e9f01832997a4d913b3ea86319af4.jpg",
    "metacritic": "77"
  },
  {
    "name": "Bully: Scholarship Edition",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox 360, Wii",
    "released": "2008",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/e2b/e2b2bf36ff4af8f8495d2f4e08b1d392.jpg",
    "metacritic": "72"
  },
  {
    "name": "Ricochet",
    "genres": "Indie, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2000",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/120/120d930368bc171c42f9caab94e33c65.jpg",
    "metacritic": ""
  },
  {
    "name": "Never Alone",
    "genres": "Casual, Indie, Adventure",
    "platforms": "PC, PlayStation 4, Xbox One, macOS, Linux, PlayStation 3, Wii U",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/23a/23acbd56da0c30bca0227967a5720c96.jpg",
    "metacritic": "70"
  },
  {
    "name": "System Shock 2",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "1999",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/65f/65f661f1487395055ba05e0a95fc0330.jpg",
    "metacritic": "92"
  },
  {
    "name": "Deathloop",
    "genres": "Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox Series S/X",
    "released": "2021",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/018/01857c5ff9579c48fa8bd76b4d83a946.jpg",
    "metacritic": "88"
  },
  {
    "name": "Marvel's Guardians of the Galaxy",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2021",
    "playtime": "10 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/708/7080e6c87e0825cb02888bf3c44b3889.jpg",
    "metacritic": ""
  },
  {
    "name": "Deathmatch Classic",
    "genres": "Action",
    "platforms": "PC, macOS, Linux",
    "released": "2001",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/b04/b042f8a7d3d9f8fe61d5af5d47ab6088.jpg",
    "metacritic": ""
  },
  {
    "name": "Shadowrun: Dragonfall - Director's Cut",
    "genres": "Indie, Strategy, Adventure, RPG",
    "platforms": "PC, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg",
    "metacritic": "87"
  },
  {
    "name": "Resident Evil Revelations",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Nintendo 3DS, Xbox 360, PlayStation 3, Wii U",
    "released": "2012",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/89a/89ac2742fcfeba3b95ac94457af766ef.jpg",
    "metacritic": "77"
  },
  {
    "name": "Outlast 2",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "5 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/880/880f6aa65fe9d786f1a455963df76180.jpg",
    "metacritic": "76"
  },
  {
    "name": "Awesomenauts",
    "genres": "Platformer, Strategy, Indie, Action",
    "platforms": "PC, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "7 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/4df/4df0b0812fd89af2285e683fb78f1323.jpg",
    "metacritic": "78"
  },
  {
    "name": "Call of Duty 4: Modern Warfare",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo DS, macOS, Xbox 360, PlayStation 3, Wii",
    "released": "2007",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/9fb/9fbaea2168caea1f806546dfdaaeb1da.jpg",
    "metacritic": "92"
  },
  {
    "name": "Orcs Must Die! 2",
    "genres": "Strategy, Indie, Action",
    "platforms": "PC",
    "released": "2012",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/725/725eb4171c8aacee030a2d050ebf9fad.jpg",
    "metacritic": "83"
  },
  {
    "name": "Star Wars Jedi Knight: Jedi Academy",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Xbox 360, Xbox",
    "released": "2003",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/7e8/7e8890a662539b1bdefcf57409aef765.jpg",
    "metacritic": "81"
  },
  {
    "name": "Robocraft",
    "genres": "Action, RPG, Simulation, Indie, Massively Multiplayer",
    "platforms": "PC, macOS, Linux",
    "released": "2014",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/2b9/2b9a49e89c1ba892a648620194dcf327.jpg",
    "metacritic": ""
  },
  {
    "name": "Sonic Generations",
    "genres": "Family, Platformer, Arcade, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo 3DS, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/9a1/9a18c226cf379272c698f26d2b79b3da.jpg",
    "metacritic": "77"
  },
  {
    "name": "ARMA: Cold War Assault",
    "genres": "Strategy, Action, Simulation",
    "platforms": "PC",
    "released": "2001",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/109/10956e4561064fc4f1dda0baa540735e.jpg",
    "metacritic": ""
  },
  {
    "name": "God of War III Remastered",
    "genres": "Adventure, Action",
    "platforms": "PlayStation 4",
    "released": "2015",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/4b6/4b67558bf04c7211aabeff179271bdd8.jpg",
    "metacritic": "81"
  },
  {
    "name": "Deadlight",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, Xbox 360",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/595/59556e1839b2e79b6f11f2c68a197663.jpg",
    "metacritic": "78"
  },
  {
    "name": "Assassin's Creed Valhalla",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2020",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg",
    "metacritic": "82"
  },
  {
    "name": "The Evil Within 2",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "12 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d5f/d5fd2f970f48d0877a53aec98825faba.jpg",
    "metacritic": "82"
  },
  {
    "name": "Final Fantasy VII (1997)",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, PlayStation",
    "released": "1997",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/6c0/6c00ee85d1344f58c469e8e47fd8ae7c.jpg",
    "metacritic": "83"
  },
  {
    "name": "Uncharted: The Lost Legacy",
    "genres": "Adventure, Action",
    "platforms": "PlayStation 5, PlayStation 4",
    "released": "2017",
    "playtime": "",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/560/56056a71c74f751552c9baedebf8f317.jpg",
    "metacritic": "85"
  },
  {
    "name": "Trove",
    "genres": "Casual, Massively Multiplayer, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/d68/d684c5ec81b8ea46bfd4b5c3bae4007f.jpg",
    "metacritic": "65"
  },
  {
    "name": "Battlefield: Bad Company 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/e8f/e8f923180ecb9614ec564a15937cfd9e.jpg",
    "metacritic": "87"
  },
  {
    "name": "Tomb Raider: Legend",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox 360, Xbox, PlayStation 3, PlayStation 2, PSP, GameCube",
    "released": "2006",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/9d4/9d45e22df640fcb6f4b754aa3491ae09.jpg",
    "metacritic": "82"
  },
  {
    "name": "Kholat",
    "genres": "Indie, Adventure, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/813/813f9dab418a3d549f8b9ad8ef2f3d9c.jpg",
    "metacritic": "64"
  },
  {
    "name": "Outland",
    "genres": "Indie, Platformer, Adventure, Action",
    "platforms": "PC, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/f80/f805774c679cca1a1a472d9ac39c78b7.jpg",
    "metacritic": "83"
  },
  {
    "name": "Spyro Reignited Trilogy",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/a50/a505bccdcfdc79970a93574c747f6e0d.jpg",
    "metacritic": "80"
  },
  {
    "name": "HELL YEAH! Wrath of the Dead Rabbit",
    "genres": "Platformer, Arcade, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/3f1/3f1c417b405a86ed7d92b903e0fcfd0c.jpg",
    "metacritic": "64"
  },
  {
    "name": "Battlerite",
    "genres": "Action",
    "platforms": "PC",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/54f/54fcf1a626faa92afa3f5d2834dbc5ce.jpg",
    "metacritic": ""
  },
  {
    "name": "Katana ZERO",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, Xbox One, Nintendo Switch, macOS",
    "released": "2019",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d37/d37e110ddcc0bd52d99f0f647b737a0a.jpg",
    "metacritic": "83"
  },
  {
    "name": "Clicker Heroes",
    "genres": "Adventure, RPG, Casual, Strategy, Simulation, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, iOS, Android, macOS",
    "released": "2015",
    "playtime": "9 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/054/054bf49d9e736edfda5aa8e9015faf9b.jpeg",
    "metacritic": ""
  },
  {
    "name": "Deus Ex 2: Invisible War",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox",
    "released": "2003",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/ca0/ca06700d8184f451b99396c23b4ffbe4.jpg",
    "metacritic": "80"
  },
  {
    "name": "Galactic Civilizations II: Ultimate Edition",
    "genres": "Strategy",
    "platforms": "PC",
    "released": "2011",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/3d8/3d8e76154123ef352d8d3216da061a2d.jpg",
    "metacritic": "92"
  },
  {
    "name": "Stories: The Path of Destinies",
    "genres": "Platformer, Indie, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/1aa/1aaf454e0d3809ba1c34df4514492237.jpg",
    "metacritic": "74"
  },
  {
    "name": "Renegade Ops",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/31b/31b1a1a45ad7103e52eed8ef658209a2.jpg",
    "metacritic": "76"
  },
  {
    "name": "Mass Effect: Andromeda",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "23 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a9b/a9be26838e6d54d8fb008ffc70e0d59a.jpg",
    "metacritic": "73"
  },
  {
    "name": "Overcooked! 2",
    "genres": "Casual, Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2018",
    "playtime": "4 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/d11/d11470677a829e34562e95a4002c2c7f.jpg",
    "metacritic": "82"
  },
  {
    "name": "Tomb Raider: Anniversary",
    "genres": "Adventure, Action",
    "platforms": "PC, iOS, macOS, Xbox 360, PlayStation 2, PSP, Wii",
    "released": "2007",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/791/791abcd56601482964f0fee6d8ab6a61.jpeg",
    "metacritic": "83"
  },
  {
    "name": "Steep",
    "genres": "Action, Simulation, Sports",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b22/b227810b1a1bcbe9cf3dda22534c686e.jpg",
    "metacritic": "72"
  },
  {
    "name": "Dota Underlords",
    "genres": "Casual, Strategy, Board Games",
    "platforms": "PC, iOS, Android, macOS, Linux",
    "released": "2020",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/66e/66e90c9d7b9a17335b310ceb294e9365.jpg",
    "metacritic": ""
  },
  {
    "name": "Ghostrunner",
    "genres": "Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2020",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/957/957154d665ae676b00c0859551c733b1.jpg",
    "metacritic": ""
  },
  {
    "name": "Everlasting Summer",
    "genres": "Indie",
    "platforms": "PC, iOS, Android, macOS, Linux",
    "released": "2013",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/3b5/3b56220d6038b8b1ad66c4d05ef95215.jpg",
    "metacritic": ""
  },
  {
    "name": "VVVVVV",
    "genres": "Adventure, Action, Puzzle, Casual, Arcade, Indie, Platformer",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, Android, Nintendo 3DS, macOS, Linux, PS Vita",
    "released": "2010",
    "playtime": "1 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/screenshots/6fe/6fe228662a253cd929cc78a103541ee0.jpg",
    "metacritic": "81"
  },
  {
    "name": "Mortal Kombat Komplete Edition",
    "genres": "Arcade, Fighting",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "7 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/297/297a51aa1f0999016d5a35e2e1d6d8ab.jpg",
    "metacritic": "82"
  },
  {
    "name": "TEKKEN 7",
    "genres": "Action, Fighting, Sports",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "7 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/62b/62b035add7205737540d66e082b85930.jpg",
    "metacritic": "82"
  },
  {
    "name": "Uncharted 2: Among Thieves",
    "genres": "Shooter, Action",
    "platforms": "PlayStation 4, PlayStation 3",
    "released": "2009",
    "playtime": "13 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/74b/74b239f6ef0216a2f66e652d54abb2e6.jpg",
    "metacritic": "96"
  },
  {
    "name": "Shadow Warrior 2",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/0b2/0b240149610b8b20eac098b8071f575a.jpg",
    "metacritic": "78"
  },
  {
    "name": "Evolve Stage 2",
    "genres": "Action",
    "platforms": "PC",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/28a/28a895c2e05e508dca8fd73c51492d59.jpg",
    "metacritic": "77"
  },
  {
    "name": "Just Cause",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, Xbox, PlayStation 2",
    "released": "2006",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/e60/e601c02ec49ef4f1d5ef147994b3935f.jpg",
    "metacritic": "75"
  },
  {
    "name": "Styx: Master of Shadows",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg",
    "metacritic": "71"
  },
  {
    "name": "Totally Accurate Battlegrounds",
    "genres": "Shooter, Indie, Action",
    "platforms": "PC",
    "released": "2018",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/c88/c88463dcf1b3fc79c54a59c30076344a.jpg",
    "metacritic": ""
  },
  {
    "name": "Saints Row: Gat Out of Hell",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Linux, Xbox 360, PlayStation 3",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/1ad/1ad3737af2c4a4ff8e7f5540b5dcade8.jpg",
    "metacritic": "66"
  },
  {
    "name": "Surgeon Simulator",
    "genres": "Educational, Indie, Action, Simulation",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg",
    "metacritic": "71"
  },
  {
    "name": "FINAL FANTASY XIII",
    "genres": "RPG",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "7 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/943/9432de383089b0a427a3cdf3687b2b73.jpg",
    "metacritic": "77"
  },
  {
    "name": "Mount & Blade: Warband",
    "genres": "Strategy, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Android, macOS, Linux",
    "released": "2010",
    "playtime": "10 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/ccd/ccd40e8f86c0ae10a082b610d31d4475.jpg",
    "metacritic": "78"
  },
  {
    "name": "Marvel's Spider-Man: Miles Morales",
    "genres": "Action",
    "platforms": "PC, PlayStation 5, PlayStation 4",
    "released": "2020",
    "playtime": "7 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/048/048b46cdc66cbc7e235e1f359c2a77ec.jpg",
    "metacritic": "86"
  },
  {
    "name": "Tell Me Why",
    "genres": "Adventure",
    "platforms": "PC, Xbox One",
    "released": "2020",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b28/b28a135fa6133e17b228f46902a4fda4.jpg",
    "metacritic": "76"
  },
  {
    "name": "Furi",
    "genres": "Arcade, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg",
    "metacritic": "76"
  },
  {
    "name": "F1 2015",
    "genres": "Racing, Sports",
    "platforms": "PC, Xbox One, PlayStation 4, Linux",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/ff6/ff66ce127716df74175961831ad3a23a.jpg",
    "metacritic": "61"
  },
  {
    "name": "LEGO Marvel Super Heroes",
    "genres": "Family, Adventure, Action",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, Android, Nintendo 3DS, Nintendo DS, macOS, Xbox 360, PlayStation 3, PS Vita, Wii U",
    "released": "2013",
    "playtime": "8 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a87/a8743bdee8627c55bb9f2f01b9136ac1.jpg",
    "metacritic": "78"
  },
  {
    "name": "Warhammer: End Times - Vermintide",
    "genres": "Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/1dc/1dc45435c09f844b24eb96cd66eb6325.jpg",
    "metacritic": "79"
  },
  {
    "name": "Titan Quest",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android",
    "released": "2006",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/910/910d547965a5c4928ca19112778a1b4f.jpg",
    "metacritic": "69"
  },
  {
    "name": "Fable Anniversary",
    "genres": "RPG",
    "platforms": "PC, Xbox 360",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/071/0715f91a89d634d9183e2f23c0cb1a98.jpg",
    "metacritic": "68"
  },
  {
    "name": "Serious Sam: The First Encounter",
    "genres": "Shooter, Indie, Action",
    "platforms": "PC",
    "released": "2001",
    "playtime": "1 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/f0e/f0e050dc774d4ae3afced76b33516295.jpg",
    "metacritic": "87"
  },
  {
    "name": "Enclave",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2002",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/de4/de4b7cb80b39d95943f2931093b46932.jpg",
    "metacritic": "71"
  },
  {
    "name": "Grand Theft Auto: Episodes from Liberty City",
    "genres": "Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg",
    "metacritic": ""
  },
  {
    "name": "Sniper Elite 3",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/fe6/fe68940746007261e34da4d9cce81423.jpg",
    "metacritic": "67"
  },
  {
    "name": "Viking: Battle for Asgard",
    "genres": "Adventure, Action, RPG, Fighting",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "1 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/a1f/a1f93b9b287a0808161a35952635867e.jpg",
    "metacritic": "66"
  },
  {
    "name": "Prince of Persia (2008)",
    "genres": "Adventure, Action",
    "platforms": "PC, macOS, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/956/95640d5ea0288c187dbce849a4254a41.jpg",
    "metacritic": "82"
  },
  {
    "name": "Strider",
    "genres": "Arcade, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg",
    "metacritic": "78"
  },
  {
    "name": "Uncharted: Drake's Fortune",
    "genres": "Shooter, Action",
    "platforms": "PlayStation 4, PlayStation 3",
    "released": "2007",
    "playtime": "12 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/f2e/f2e6dcf9c27d99ba2551f1094ad41756.jpg",
    "metacritic": "88"
  },
  {
    "name": "Serious Sam HD:  The First Encounter",
    "genres": "Shooter, Indie, Action",
    "platforms": "PC, Xbox 360",
    "released": "2009",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/d07/d07a7e2f7be2428c51ad26326c84e21d.jpg",
    "metacritic": "68"
  },
  {
    "name": "Mirror's Edge Catalyst",
    "genres": "Platformer, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg",
    "metacritic": "72"
  },
  {
    "name": "Kerbal Space Program",
    "genres": "Indie, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/bda/bdab2603c0dc67268d0610449bc7df16.jpg",
    "metacritic": "88"
  },
  {
    "name": "SteamWorld Dig",
    "genres": "Adventure, Action, Puzzle, Indie, Platformer",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Nintendo 3DS, macOS, Linux, PS Vita, Wii U",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/e07/e07737df8469bf32d132ba9eaffc3461.jpg",
    "metacritic": "76"
  },
  {
    "name": "Genshin Impact",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, PlayStation 4, Nintendo Switch, iOS, Android",
    "released": "2020",
    "playtime": "",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/c38/c38bdb5da139005777176d33c463d70f.jpg",
    "metacritic": "83"
  },
  {
    "name": "7 Days to Die",
    "genres": "Shooter, Indie, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2013",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/5cb/5cbbc5cd24677331c85253f961cad72a.jpg",
    "metacritic": ""
  },
  {
    "name": "H1Z1: King of the Kill",
    "genres": "Massively Multiplayer, Adventure, Action",
    "platforms": "PC",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/848/848253347dc93c762bfd51c7e4989b8f.jpg",
    "metacritic": ""
  },
  {
    "name": "Prototype",
    "genres": "Casual, Strategy, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b74/b74b15a48ac7bc37fbb42ee4afcc0b91.jpg",
    "metacritic": "79"
  },
  {
    "name": "Call of Duty: Modern Warfare (2019)",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "7 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/e43/e43f9f0a1429bd9332020ac5876bc693.jpg",
    "metacritic": "80"
  },
  {
    "name": "The Order: 1886",
    "genres": "Adventure, Action",
    "platforms": "PlayStation 4",
    "released": "2015",
    "playtime": "11 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/c5b/c5b3b6aa220050f7f504f4477cb51d3b.jpg",
    "metacritic": "63"
  },
  {
    "name": "Blasphemous",
    "genres": "Indie, Platformer, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2019",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b01/b01aa6b2d6d4f683203e9471a8b8d5b5.jpg",
    "metacritic": "78"
  },
  {
    "name": "Hitman: Codename 47",
    "genres": "Shooter, Action",
    "platforms": "PC",
    "released": "2000",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/3f6/3f6a397ec36acfcc18bb6ab3414c7658.jpg",
    "metacritic": "73"
  },
  {
    "name": "The Banner Saga",
    "genres": "Strategy, Indie, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2014",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/fa3/fa3dd043cba3a9cbfe3085e75d92bf7e.jpg",
    "metacritic": "81"
  },
  {
    "name": "Warhammer 40,000: Dawn of War - Game of the Year Edition",
    "genres": "Strategy",
    "platforms": "PC",
    "released": "2007",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/0e6/0e60075818860647a1e6a9f9a8ebfada.jpg",
    "metacritic": "86"
  },
  {
    "name": "Unravel",
    "genres": "Adventure, Action, Puzzle, Arcade, Platformer",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360",
    "released": "2016",
    "playtime": "2 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/cfe/cfe114c081281960bd79ace5209c0a4a.jpg",
    "metacritic": "78"
  },
  {
    "name": "Thomas Was Alone",
    "genres": "Family, Indie, Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux, PlayStation 3, PS Vita, Wii U",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg",
    "metacritic": "77"
  },
  {
    "name": "The Vanishing of Ethan Carter",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/90c/90caf1fcb836cad70013452f6f239008.jpg",
    "metacritic": "82"
  },
  {
    "name": "Risk of Rain 2",
    "genres": "Shooter, Arcade, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2020",
    "playtime": "8 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/238/238e2b2b24c9838626700c69cacf1e3a.jpg",
    "metacritic": "82"
  },
  {
    "name": "Crypt of the NecroDancer",
    "genres": "Indie, Action, RPG",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, macOS, Linux, PS Vita",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/70a/70a7a7b21d8fdf5f19622e5e14599bcd.jpg",
    "metacritic": "87"
  },
  {
    "name": "World of Tanks",
    "genres": "Shooter, Massively Multiplayer, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/c3b/c3be1d5f55cb9324c97ccb7aaaf42ad4.jpg",
    "metacritic": "78"
  },
  {
    "name": "Darksiders III",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/cb7/cb770f3f9871e1130f40812b05e401b2.jpg",
    "metacritic": "65"
  },
  {
    "name": "Fallout 76",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg",
    "metacritic": "51"
  },
  {
    "name": "Grim Dawn",
    "genres": "Indie, Action, RPG",
    "platforms": "PC, Xbox One, Xbox Series S/X",
    "released": "2016",
    "playtime": "8 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/920/92039cd19460532b76f6244b2bb3e4ac.jpg",
    "metacritic": "83"
  },
  {
    "name": "Dead Rising 2",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/7e7/7e79e3296a7f64e7535c9e5bb5aa4b53.jpg",
    "metacritic": "78"
  },
  {
    "name": "Tropico 5",
    "genres": "Strategy, RPG, Simulation",
    "platforms": "PC, PlayStation 4, macOS, Linux, Xbox 360",
    "released": "2014",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/3c9/3c994986d767f56e7b72a124a35d4c3c.jpg",
    "metacritic": "75"
  },
  {
    "name": "Plants vs. Zombies GOTY Edition",
    "genres": "Strategy",
    "platforms": "PC, PlayStation 4, iOS, Android, Nintendo DS, Nintendo DSi, macOS, Xbox 360, PlayStation 3, PS Vita",
    "released": "2010",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/096/0962642c3f74cd6306ad8bfdfd3d6150.jpg",
    "metacritic": "87"
  },
  {
    "name": "RiME",
    "genres": "Adventure, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/5aa/5aa4c12a53bc5f606bf8d92461ec747d.jpg",
    "metacritic": "78"
  },
  {
    "name": "Alpha Protocol",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8b9/8b9e77be7f0f7941b11ae4b21ca2db43.jpg",
    "metacritic": "72"
  },
  {
    "name": "Overlord II",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/bfb/bfb2bf7a0413443b1fcf0be7c3244053.jpg",
    "metacritic": "79"
  },
  {
    "name": "Super Mario Odyssey",
    "genres": "Platformer, Arcade",
    "platforms": "Nintendo Switch",
    "released": "2017",
    "playtime": "",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/267/267bd0dbc496f52692487d07d014c061.jpg",
    "metacritic": "97"
  },
  {
    "name": "Dishonored: Death of the Outsider",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/742/74276457ebb9466e11d75a2be7722265.jpg",
    "metacritic": "83"
  },
  {
    "name": "Superhot: Mind Control Delete",
    "genres": "Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2020",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/b56/b56853f28ecdc04b44f552f7b9c8ea69.jpg",
    "metacritic": "79"
  },
  {
    "name": "Age of Empires II HD",
    "genres": "Strategy",
    "platforms": "PC",
    "released": "2013",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/c07/c07e1c1e6908a2eeebd5dad0708abd01.jpg",
    "metacritic": "68"
  },
  {
    "name": "The Surge",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/396/3963e0df75c22d5995368ec43dacc19e.jpg",
    "metacritic": "72"
  },
  {
    "name": "Elite Dangerous",
    "genres": "Adventure, Action, RPG, Simulation, Massively Multiplayer",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "released": "2015",
    "playtime": "14 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b69/b69a67833630dd96d8eee9d2c8c27574.jpg",
    "metacritic": "80"
  },
  {
    "name": "Need for Speed",
    "genres": "Racing, Arcade",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/19a/19a512a8c1293c22894b7364e1405ec1.jpg",
    "metacritic": "66"
  },
  {
    "name": "Shadow Warrior (2013)",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, iOS, macOS, Linux",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/907/90757eaa9dc7c5cf7c47bf4960843999.jpg",
    "metacritic": "73"
  },
  {
    "name": "Nioh",
    "genres": "Action, RPG",
    "platforms": "PC, PlayStation 4",
    "released": "2017",
    "playtime": "",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/f84/f84c7c45e074117fb81fecf427f8b41f.jpg",
    "metacritic": "88"
  },
  {
    "name": "Tom Clancy's Ghost Recon Wildlands",
    "genres": "Shooter, Massively Multiplayer, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "18 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/72e/72e0e063c817e90c696b2da3ea78abaa.jpg",
    "metacritic": "72"
  },
  {
    "name": "Need for Speed Payback",
    "genres": "Racing, Arcade",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/a57/a57e3c73ca46cbf55b526c828e3545c0.jpg",
    "metacritic": "61"
  },
  {
    "name": "Dungeons 2",
    "genres": "Strategy, RPG, Simulation",
    "platforms": "PC, PlayStation 4, iOS, macOS, Linux",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/476/4767c380895fd35a4f1b59016dc45967.jpg",
    "metacritic": "70"
  },
  {
    "name": "SpeedRunners",
    "genres": "Racing, Action, Casual, Sports, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/9e5/9e52a797f049e701d4eee84774a99007.jpg",
    "metacritic": "84"
  },
  {
    "name": "The Expendabros",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, macOS",
    "released": "2014",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/604/6046ad65ac38adfe0553823489bb7ed4.jpg",
    "metacritic": ""
  },
  {
    "name": "LittleBigPlanet 3",
    "genres": "Platformer, Adventure, Puzzle",
    "platforms": "PlayStation 4, PlayStation 3",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/8e3/8e399167fd529da5e9e505e987ae63ff.jpg",
    "metacritic": "79"
  },
  {
    "name": "Hellblade: Senua's Sacrifice VR Edition",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC",
    "released": "2018",
    "playtime": "1 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/screenshots/015/015988a097b5a0e78b4ecd631e85daba.jpg",
    "metacritic": "87"
  },
  {
    "name": "Far Cry Primal",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/119/119bb59e64c7956171a33df0d35aee6b.jpg",
    "metacritic": "74"
  },
  {
    "name": "Star Wars Jedi Knight II: Jedi Outcast",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, PlayStation 4, Nintendo Switch, macOS, Xbox, GameCube, Classic Macintosh",
    "released": "2002",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/0a5/0a56e2bb9ce95359e69ff9689c553a45.jpg",
    "metacritic": "89"
  },
  {
    "name": "ArmA II",
    "genres": "Strategy, Action, Simulation",
    "platforms": "PC",
    "released": "2009",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/c38/c38595cc04bdddaa84ed8feae5319849.jpg",
    "metacritic": "77"
  },
  {
    "name": "Dark Messiah of Might and Magic",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox 360",
    "released": "2006",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/330/330952c1726bbb56fc3b9f8a8c83ab1d.jpg",
    "metacritic": "72"
  },
  {
    "name": "Company of Heroes: Opposing Fronts",
    "genres": "Strategy, Action",
    "platforms": "PC",
    "released": "2007",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/fcf/fcf81e19683092d40d519a6d6a9bcf6e.jpg",
    "metacritic": "87"
  },
  {
    "name": "Mass Effect: Legendary Edition",
    "genres": "Shooter, Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2021",
    "playtime": "15 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/64e/64e2a77f37ddc48d102127234af99886.jpg",
    "metacritic": "88"
  },
  {
    "name": "Ultimate Epic Battle Simulator",
    "genres": "Adventure, Action, Strategy, Simulation, Indie",
    "platforms": "PC",
    "released": "2017",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/2a2/2a2a162a08f2bba053334ecfda25228d.jpg",
    "metacritic": ""
  },
  {
    "name": "Scribblenauts Unlimited",
    "genres": "Casual, Strategy, Adventure, Puzzle",
    "platforms": "PC, iOS, Android, Nintendo 3DS, Wii U",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/42d/42d770eb49f2ba01cd4045e0d92af7a9.jpg",
    "metacritic": "75"
  },
  {
    "name": "DOOM 3",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, macOS, Linux, Xbox",
    "released": "2004",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/3b0/3b01313965c19adc6b6c37a3d9d33576.jpg",
    "metacritic": "87"
  },
  {
    "name": "Dirty Bomb",
    "genres": "Shooter, Action",
    "platforms": "PC",
    "released": "2015",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/616/616437f375a1080756c917b1437404f3.jpg",
    "metacritic": "63"
  },
  {
    "name": "Risk of Rain",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, macOS, Linux, PS Vita",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/f62/f62eb0901c7017776e0a5c6a94f979d5.jpg",
    "metacritic": "77"
  },
  {
    "name": "Need For Speed: Hot Pursuit",
    "genres": "Racing, Arcade",
    "platforms": "PC, Nintendo Switch, iOS, Android, Xbox 360, PlayStation 3, Wii",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg",
    "metacritic": "86"
  },
  {
    "name": "Plague Inc: Evolved",
    "genres": "Casual, Strategy, Indie, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/e31/e315213a5cb21645df8db3e5191e530c.jpg",
    "metacritic": "80"
  },
  {
    "name": "The Uncertain: Episode 1 - The Last Quiet Day",
    "genres": "Indie, Adventure",
    "platforms": "PC, macOS",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/72c/72c1405b3524e40c44c7860f2b5fa7f9.jpg",
    "metacritic": ""
  },
  {
    "name": "TERA",
    "genres": "Massively Multiplayer, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg",
    "metacritic": "77"
  },
  {
    "name": "Need for Speed Heat",
    "genres": "Racing, Arcade",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg",
    "metacritic": "73"
  },
  {
    "name": "No More Room in Hell",
    "genres": "Indie, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/f34/f34c86335d0c51baa582aa93fa2d3f55.jpg",
    "metacritic": ""
  },
  {
    "name": "X-COM: UFO Defense",
    "genres": "Strategy",
    "platforms": "PC, PlayStation, Commodore / Amiga",
    "released": "1993",
    "playtime": "1 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/010/0101f021b2dc123c98969fda7e4bcd92.jpg",
    "metacritic": ""
  },
  {
    "name": "Unreal Gold",
    "genres": "Shooter, Action",
    "platforms": "PC",
    "released": "2000",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8b5/8b591049784d961016852873bdcb5b2d.jpg",
    "metacritic": ""
  },
  {
    "name": "EVE Online",
    "genres": "Strategy, Massively Multiplayer, Action, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2003",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/82b/82be203e68d737762846203811165933.jpg",
    "metacritic": "88"
  },
  {
    "name": "Rayman Origins",
    "genres": "Family, Platformer, Arcade, Action",
    "platforms": "PC, Xbox One, iOS, Nintendo 3DS, macOS, Xbox 360, PlayStation 3, PS Vita, Wii",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/375/375f84d018242d7519a230f623981217.jpg",
    "metacritic": "86"
  },
  {
    "name": "SpaceChem",
    "genres": "Strategy, Indie, Simulation, Puzzle",
    "platforms": "PC, Android, macOS, Linux",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/95a/95a557d6dfa6430dd662a136d71e5915.jpg",
    "metacritic": "84"
  },
  {
    "name": "Risen",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox 360",
    "released": "2009",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/155/155a7d8f464ef6029e11cc6a9c0f763d.jpg",
    "metacritic": "77"
  },
  {
    "name": "Fallout Tactics: Brotherhood of Steel",
    "genres": "Strategy, RPG",
    "platforms": "PC",
    "released": "2001",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/27c/27c86ebfba2281ebe3ea8ca6c9e752f1.jpg",
    "metacritic": "82"
  },
  {
    "name": "Bulletstorm",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b42/b42b05096de6668833bbab38f6099c6a.jpg",
    "metacritic": "83"
  },
  {
    "name": "Loadout",
    "genres": "Indie, Action",
    "platforms": "PC, PlayStation 4",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/560/560847de3a0fd510bbe6c305abca0f0f.jpg",
    "metacritic": "72"
  },
  {
    "name": "This is the Police",
    "genres": "Indie, Strategy, Adventure, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2016",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg",
    "metacritic": "66"
  },
  {
    "name": "Gothic",
    "genres": "Action, RPG",
    "platforms": "PC",
    "released": "2001",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/0bb/0bbceedd3e1420df0fdaf66a2e373b2b.jpg",
    "metacritic": "81"
  },
  {
    "name": "The Red Solstice",
    "genres": "Strategy, Indie, Action, RPG",
    "platforms": "PC",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d87/d87268c4b7b33b278cbc1f152db39729.jpg",
    "metacritic": "74"
  },
  {
    "name": "Overwatch",
    "genres": "Casual, Shooter, Massively Multiplayer, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2016",
    "playtime": "41 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg",
    "metacritic": "91"
  },
  {
    "name": "My Friend Pedro",
    "genres": "Shooter, Adventure, Action, Arcade, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS",
    "released": "2019",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/21d/21dfa5f7f5c0fa2b85f418c4e1c6ab1b.jpg",
    "metacritic": "76"
  },
  {
    "name": "Tropico 3",
    "genres": "Strategy, Simulation",
    "platforms": "PC, Xbox 360",
    "released": "2009",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d49/d4974f5eb9e6c47794f681f149280d9d.jpg",
    "metacritic": "79"
  },
  {
    "name": "South Park: The Fractured But Whole",
    "genres": "Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "12 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/63c/63cb04333dea1726e90b38dc3d10258f.jpg",
    "metacritic": "80"
  },
  {
    "name": "Thief Gold",
    "genres": "Action, Simulation",
    "platforms": "PC",
    "released": "1999",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/934/934db575e66d63f2a6e86a2c688c141b.jpeg",
    "metacritic": "92"
  },
  {
    "name": "Hyper Light Drifter",
    "genres": "Indie, Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/578/57885b9590c9a9f80ceea34d147a34c4.jpg",
    "metacritic": "84"
  },
  {
    "name": "Race The Sun",
    "genres": "Racing, Arcade, Action, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, iOS, macOS, Linux, PlayStation 3, PS Vita, Wii U, Web",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a01/a01b34c722ceec784817381eb1824fa5.jpg",
    "metacritic": "79"
  },
  {
    "name": "Remnant: From the Ashes",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "7 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/30f/30f2c0f6890da6971102210c56d8513c.jpg",
    "metacritic": "76"
  },
  {
    "name": "RUINER",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/489/4899fe1e7b65e550ea619db02006ca6c.jpg",
    "metacritic": "78"
  },
  {
    "name": "Call of Duty: Advanced Warfare",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/e05/e053aae547e0978ad90280a1a3d8f177.jpg",
    "metacritic": "78"
  },
  {
    "name": "Skullgirls",
    "genres": "Action, Fighting",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/416/4164ca654a339af5be8e63cc9c480c70.jpg",
    "metacritic": "81"
  },
  {
    "name": "Just Cause 4",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/02a/02a7f96f5a1156642bc0f827fd1b63f0.jpg",
    "metacritic": "68"
  },
  {
    "name": "SteamWorld Dig 2",
    "genres": "Indie, Platformer, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Nintendo 3DS, macOS, Linux, PS Vita",
    "released": "2017",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/95a/95adc7a2135783dfd2204f694200c836.jpg",
    "metacritic": "88"
  },
  {
    "name": "Oddworld: New 'n' Tasty",
    "genres": "Indie, Platformer, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux, PlayStation 3, PS Vita, Wii U",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/ba0/ba006ef12175ad4773e5964c320099c4.jpg",
    "metacritic": "87"
  },
  {
    "name": "Vanquish",
    "genres": "Indie, Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/88a/88af17cc08783ccdd1608ae63c47eeac.jpg",
    "metacritic": "79"
  },
  {
    "name": "Snake Pass",
    "genres": "Adventure, Puzzle, Casual, Simulation, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/f15/f15e1dbda32b588a981bbc6b222a4b4c.jpg",
    "metacritic": "71"
  },
  {
    "name": "Vampire: The Masquerade - Bloodlines",
    "genres": "Action, RPG",
    "platforms": "PC",
    "released": "2004",
    "playtime": "2 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/6f0/6f0a69db053bce957d8328a7253fbb29.jpg",
    "metacritic": "80"
  },
  {
    "name": "Serious Sam HD: The Second Encounter",
    "genres": "Shooter, Indie, Action",
    "platforms": "PC, Xbox 360",
    "released": "2010",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/46a/46ac84997152eaf4f760257a60099231.jpg",
    "metacritic": "76"
  },
  {
    "name": "Kane & Lynch 2: Dog Days",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/b50/b501727147644474562935f19a60134e.jpg",
    "metacritic": "66"
  },
  {
    "name": "Besiege",
    "genres": "Strategy, Indie, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2015",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/570/5704316c673fab6994db582e0f43f924.jpg",
    "metacritic": ""
  },
  {
    "name": "Orcs Must Die!",
    "genres": "Strategy, Indie, Action",
    "platforms": "PC, Xbox 360",
    "released": "2011",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/417/4176298c1b22ccd338ce3dfc34eb7e28.jpg",
    "metacritic": "83"
  },
  {
    "name": "Far Cry",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, Xbox, PlayStation 3, PlayStation 2, Wii",
    "released": "2004",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/2ee/2eef5ed5e82c28d1299ecc2a0e60f2cb.jpg",
    "metacritic": "89"
  },
  {
    "name": "STAR WARS: The Force Unleashed II",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, Nintendo DS, Xbox 360, PlayStation 3, Wii",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/693/693952316d4b90984a92e7ab0f5c9b81.jpg",
    "metacritic": "59"
  },
  {
    "name": "Tom Clancy's Splinter Cell: Conviction",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, Android, macOS, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/366/366e521df82c81218984915203aa3644.jpg",
    "metacritic": "83"
  },
  {
    "name": "Gothic 3",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC",
    "released": "2006",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8a3/8a3e91293e38dcc1126ae83d31bfd6e4.jpg",
    "metacritic": "63"
  },
  {
    "name": "Project Zomboid",
    "genres": "Indie, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/243/2436b84b99f1121c302367f0c5901b84.jpg",
    "metacritic": ""
  },
  {
    "name": "SPORE",
    "genres": "Family, Simulation",
    "platforms": "PC",
    "released": "2008",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/cae/caeb9d0cb154124b132d51861735431e.jpg",
    "metacritic": "84"
  },
  {
    "name": "Aegis Defenders",
    "genres": "Adventure, Action, RPG, Strategy, Indie",
    "platforms": "PC, PlayStation 4, Nintendo Switch, macOS",
    "released": "2018",
    "playtime": "1 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/054/054ab7dd5e83f84f1ec8bedf849b627f.jpg",
    "metacritic": "76"
  },
  {
    "name": "Risen 2: Dark Waters",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/224/224bc150dfb159caf58ae504f507847e.jpg",
    "metacritic": "69"
  },
  {
    "name": "AdVenture Capitalist",
    "genres": "Casual, Indie, Board Games, Simulation",
    "platforms": "PC, PlayStation 4, iOS, Android, macOS, Linux",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/11b/11b81edff7f45024e36b88e880d86585.jpg",
    "metacritic": ""
  },
  {
    "name": "Game Dev Tycoon",
    "genres": "Casual, Strategy, Indie, Simulation",
    "platforms": "PC, iOS, Android, macOS, Linux",
    "released": "2012",
    "playtime": "8 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/e70/e7009d889b38df2a16f78859a7343308.jpg",
    "metacritic": "68"
  },
  {
    "name": "Anomaly: Warzone Earth",
    "genres": "Strategy, Indie, Action, Simulation",
    "platforms": "PC, iOS, Android, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d28/d28e64fd1af23d1846d20b47dfa933f8.jpeg",
    "metacritic": "80"
  },
  {
    "name": "HELLDIVERS",
    "genres": "Action",
    "platforms": "PC, PlayStation 4, PlayStation 3",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/ae3/ae357d6e6f9e89597e8293469ddabba9.jpg",
    "metacritic": "83"
  },
  {
    "name": "Gears of War",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360",
    "released": "2006",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/988/98834d39955e7f15d3717fac438128aa.jpg",
    "metacritic": "90"
  },
  {
    "name": "Dark Souls",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "48 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/582/582b5518a52f5086d15dde128264b94d.jpg",
    "metacritic": "89"
  },
  {
    "name": "Red Faction Guerrilla Re-Mars-tered",
    "genres": "Shooter, Arcade, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b38/b3825d2c32be1c43d667cc20113230cf.jpg",
    "metacritic": "70"
  },
  {
    "name": "DiRT Rally 2.0",
    "genres": "Racing, Simulation, Sports",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/8f3/8f306808c45a4dbe0cd698e0b142af08.jpg",
    "metacritic": "83"
  },
  {
    "name": "Lord of the Rings: War in the North",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/f32/f3240d0b7a9e6523c8d708129c512ac8.jpg",
    "metacritic": "66"
  },
  {
    "name": "Golf With Your Friends",
    "genres": "Casual, Indie, Sports",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/f5a/f5abab52c4d606551cd5ec3ab709e501.jpg",
    "metacritic": "69"
  },
  {
    "name": "inFAMOUS: First Light",
    "genres": "Action",
    "platforms": "PlayStation 4",
    "released": "2014",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/3bd/3bd37baee6dc6e15c278a83c787ebd8d.jpg",
    "metacritic": "73"
  },
  {
    "name": "Fable III",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, Xbox 360",
    "released": "2010",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/827/8276bc29cdc27752e27802b94aea255e.jpg",
    "metacritic": "78"
  },
  {
    "name": "Company of Heroes: Tales of Valor",
    "genres": "Strategy",
    "platforms": "PC",
    "released": "2009",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/249/249cb9b8c402ed713358fcf434bcca11.jpg",
    "metacritic": "70"
  },
  {
    "name": "The Dark Pictures Anthology: Man of Medan",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/206/2060eda39e4646bbe90b55ab7495c173.jpg",
    "metacritic": "71"
  },
  {
    "name": "The Lab",
    "genres": "",
    "platforms": "PC",
    "released": "2016",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/d33/d331d95adf10b44ee3678129020bc31f.jpg",
    "metacritic": ""
  },
  {
    "name": "Prince of Persia: The Sands of Time",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox, PlayStation 3, PlayStation 2, GameCube",
    "released": "2003",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/99b/99b39612e864d6ddfdb2c407fd9010a1.jpg",
    "metacritic": "89"
  },
  {
    "name": "Her Story",
    "genres": "Indie, Adventure, Simulation, Puzzle",
    "platforms": "PC, iOS, Android, macOS",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a9a/a9a4e45ad8e653df2295e8410b7e96fd.jpg",
    "metacritic": "88"
  },
  {
    "name": "Moonlighter",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2018",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/5c2/5c2b78d4ee2647849d0bfb5d772345c8.jpg",
    "metacritic": "82"
  },
  {
    "name": "Star Wars: Republic Commando",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, Xbox",
    "released": "2005",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b1d/b1de33eca64ad293702d9554f5ac5cd5.jpg",
    "metacritic": "78"
  },
  {
    "name": "Factorio",
    "genres": "Casual, Strategy, Indie, Simulation",
    "platforms": "PC, Nintendo Switch, macOS, Linux",
    "released": "2020",
    "playtime": "19 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/7e4/7e4e22b76da131e9690d5757555093c2.jpg",
    "metacritic": "83"
  },
  {
    "name": "Deceit",
    "genres": "Action",
    "platforms": "PC",
    "released": "2017",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/ff5/ff594fc8b1ada40fe2ae9a5d549dc197.jpg",
    "metacritic": ""
  },
  {
    "name": "LEGO Star Wars - The Complete Saga",
    "genres": "Family, Adventure, Action",
    "platforms": "PC, Xbox One, iOS, Android, Nintendo DS, macOS, Xbox 360, PlayStation 3, Wii",
    "released": "2007",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/cf3/cf39c637f18800b6d3f65d640a8ebbaa.jpg",
    "metacritic": "77"
  },
  {
    "name": "Warhammer 40,000: Dawn of War II",
    "genres": "Strategy, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2009",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/4d9/4d9afae02fdf2896569b1c7bfeabb8c1.jpg",
    "metacritic": "85"
  },
  {
    "name": "PAC-MAN CHAMPIONSHIP EDITION 2",
    "genres": "Casual, Arcade",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2016",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/7fa/7fa3e1fbabb9fb5c77525e47fa49e261.jpg",
    "metacritic": "77"
  },
  {
    "name": "Trials Fusion",
    "genres": "Racing",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/69b/69bb243ea9896ddfc2e051b58e81624d.jpg",
    "metacritic": "80"
  },
  {
    "name": "Need for Speed Rivals",
    "genres": "Racing, Arcade",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/1fa/1fa75f0895240b12fc65cc98ae9649fd.jpg",
    "metacritic": "77"
  },
  {
    "name": "Duke Nukem Forever",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, macOS, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/08a/08aa92e004f13ad2d41127327314c3f9.jpg",
    "metacritic": "54"
  },
  {
    "name": "The Incredible Adventures of Van Helsing",
    "genres": "Indie, Action, RPG",
    "platforms": "PC, Xbox One, macOS",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/3c3/3c363e31f4add887affadc82c641de72.jpg",
    "metacritic": "72"
  },
  {
    "name": "The Elder Scrolls IV: Oblivion",
    "genres": "RPG",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2006",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/615/61503312a95d451198d80d9bae275f79.jpg",
    "metacritic": "94"
  },
  {
    "name": "AudioSurf",
    "genres": "Indie",
    "platforms": "PC",
    "released": "2008",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/0f5/0f585fa72f534f62f9e5da051179f5de.jpg",
    "metacritic": "85"
  },
  {
    "name": "Headsnatchers",
    "genres": "Casual, Indie, Action, Sports",
    "platforms": "PC, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/831/8317fca646c75922f2ba6f291f6aac6d.jpg",
    "metacritic": ""
  },
  {
    "name": "ArmA II: Operation Arrowhead",
    "genres": "Strategy, Action, Simulation",
    "platforms": "PC",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/screenshots/cce/cce227a4ac4e432ee0ba19d0dfe77c30.jpg",
    "metacritic": "73"
  },
  {
    "name": "Call of Duty: Ghosts",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3, Wii U",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/eb2/eb24800b4491701eca481e7c990bce4a.jpg",
    "metacritic": "68"
  },
  {
    "name": "Cortex Command",
    "genres": "Strategy, Indie, Action",
    "platforms": "PC, macOS",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/f81/f81fd968a3161e7d35612d8c4232923e.jpg",
    "metacritic": "44"
  },
  {
    "name": "Serious Sam 2",
    "genres": "Indie, Action",
    "platforms": "PC, Xbox",
    "released": "2005",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/bc7/bc77b1eb8e35df2d90b952bac5342c75.jpg",
    "metacritic": "74"
  },
  {
    "name": "The Last Guardian",
    "genres": "Action, Puzzle",
    "platforms": "PlayStation 4",
    "released": "2016",
    "playtime": "7 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/276/2769b1982cd132a60c69dc5d574445fa.jpg",
    "metacritic": "82"
  },
  {
    "name": "Tom Clancy’s The Division 2",
    "genres": "Shooter, Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Web",
    "released": "2019",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/0e5/0e5e869f2e8f496b3f09e00187ea94fc.jpg",
    "metacritic": "83"
  },
  {
    "name": "Valkyria Chronicles",
    "genres": "Strategy, Action, RPG",
    "platforms": "PC, Nintendo Switch, PlayStation 3",
    "released": "2008",
    "playtime": "6 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/0d4/0d4e5446db732e2fcce34d1dcb4dd914.jpg",
    "metacritic": "85"
  },
  {
    "name": "Bloodstained: Ritual of the Night",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android",
    "released": "2019",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/26c/26cacc55399ed6b2c14e20d2eca0620a.jpg",
    "metacritic": "81"
  },
  {
    "name": "Dungeon of the Endless",
    "genres": "Indie, Strategy, Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/a0c/a0cb0ac048c75b41d2620d2e6cb6f983.jpg",
    "metacritic": "79"
  },
  {
    "name": "Alice: Madness Returns",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/0b5/0b5410b1e4b3fb72696dcefbf4f1cf40.jpg",
    "metacritic": "75"
  },
  {
    "name": "Call of Duty: Infinite Warfare",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/6f7/6f7341dd656910be2c2cda39193a7ec9.jpg",
    "metacritic": "73"
  },
  {
    "name": "Quake",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, macOS, Linux, Xbox, Nintendo 64, Classic Macintosh, Commodore / Amiga, SEGA Saturn",
    "released": "1996",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/3a8/3a82d7f5c90ab082fe475e28d58bee8b.jpg",
    "metacritic": "94"
  },
  {
    "name": "Into the Breach",
    "genres": "Strategy, Indie, RPG",
    "platforms": "PC, Nintendo Switch, Android, macOS",
    "released": "2018",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/800/800d07ca648a9778a8230f40088e0866.jpg",
    "metacritic": "90"
  },
  {
    "name": "Day of the Tentacle Remastered",
    "genres": "Family, Adventure",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, macOS, Linux, PS Vita",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/764/7648a8802fae5247298d775c85e9535f.jpg",
    "metacritic": "86"
  },
  {
    "name": "Battlefield Hardline",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d2b/d2b33b26e0d61aca35d434c8a69e3711.jpg",
    "metacritic": "72"
  },
  {
    "name": "Unravel Two",
    "genres": "Platformer, Adventure, Action, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/3e3/3e355e1b8a5ee47f4c76e28e3055236d.jpg",
    "metacritic": "79"
  },
  {
    "name": "Realm Royale",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/621/62130da33398d23116ac8e61a7b3111a.jpg",
    "metacritic": ""
  },
  {
    "name": "DOOM II",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android, macOS, Xbox 360, Game Boy Advance, Classic Macintosh",
    "released": "1994",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/38a/38af969459ad6e5de116ec8a4a84218c.jpg",
    "metacritic": "83"
  },
  {
    "name": "Slime Rancher",
    "genres": "Indie, Adventure, Action, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2016",
    "playtime": "6 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/43f/43f4f3a50651f371c147ecce8ee841a9.jpg",
    "metacritic": "81"
  },
  {
    "name": "Antichamber",
    "genres": "Indie, Puzzle",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/76f/76ff4289a2a3ad7659cae129b859d67e.jpg",
    "metacritic": "82"
  },
  {
    "name": "Goat of Duty",
    "genres": "Action",
    "platforms": "PC",
    "released": "2019",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/eef/eef872fddedf40e6d2236bb981725cc6.jpg",
    "metacritic": ""
  },
  {
    "name": "Divinity II: Developer's Cut",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox 360",
    "released": "2012",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/c88/c88c0929d09ec9270ca1207a0838c202.jpg",
    "metacritic": "77"
  },
  {
    "name": "Guns of Icarus Alliance",
    "genres": "Indie, Action, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2017",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/57f/57fc2051dd27c9947d12cdf63790d122.jpg",
    "metacritic": ""
  },
  {
    "name": "Tomb Raider II",
    "genres": "Platformer, Shooter, Adventure, Action",
    "platforms": "PC, iOS, Android, macOS, PlayStation 3, PlayStation, PSP, Classic Macintosh",
    "released": "1997",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/c9c/c9c4e6d1792b5e12676819f3b57e5e26.jpeg",
    "metacritic": "69"
  },
  {
    "name": "Dungeon Defenders",
    "genres": "Strategy, Indie, Action, RPG",
    "platforms": "PC, iOS, Android, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "8 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/321/3213f56333ca5e92a620f41bd3365637.jpg",
    "metacritic": "81"
  },
  {
    "name": "Fahrenheit: Indigo Prophecy Remastered",
    "genres": "Adventure, Action",
    "platforms": "PC, PlayStation 4, iOS, macOS, Linux",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b51/b51c46cccb277e6451e2a67e4213a820.jpg",
    "metacritic": "68"
  },
  {
    "name": "Assassin's Creed 2 Deluxe Edition",
    "genres": "Adventure, Action",
    "platforms": "PC, macOS",
    "released": "2010",
    "playtime": "13 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/c14/c14d85f2ec10e82e3d5cd837c9c0a56d.jpg",
    "metacritic": "86"
  },
  {
    "name": "Gothic II: Gold Edition",
    "genres": "Action, RPG",
    "platforms": "PC",
    "released": "2010",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/5b7/5b7929040526f74f5e6073c06e7de902.jpg",
    "metacritic": "79"
  },
  {
    "name": "Deiland",
    "genres": "Indie, Adventure, RPG",
    "platforms": "PC, PlayStation 4, iOS, Android, macOS",
    "released": "2016",
    "playtime": "1 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/ee6/ee659c373573c9966dd773a59eb1af24.jpg",
    "metacritic": ""
  },
  {
    "name": "STAR WARS - The Force Unleashed Ultimate Sith Edition",
    "genres": "Action",
    "platforms": "PC, macOS, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b2d/b2db4496b084b235742cf6e9894bbf36.jpg",
    "metacritic": "65"
  },
  {
    "name": "Halo 3",
    "genres": "Shooter",
    "platforms": "PC, Xbox One, Xbox 360",
    "released": "2007",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/982/982ff61d574fed5e416cb1867b40d9b0.jpg",
    "metacritic": "91"
  },
  {
    "name": "Serious Sam: The Second Encounter",
    "genres": "Shooter, Indie, Action",
    "platforms": "PC",
    "released": "2002",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/68e/68e7d64c8b37ae0de3616aca74cc4bba.jpg",
    "metacritic": "85"
  },
  {
    "name": "How to Survive",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3, Wii U",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/73a/73a2c7af85d51bbdb20516bf2128fd7d.jpg",
    "metacritic": "60"
  },
  {
    "name": "We Were Here",
    "genres": "Adventure, Action, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2017",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/77b/77bd0acea49153dc6c5a89d91eb568bc.jpg",
    "metacritic": "63"
  },
  {
    "name": "Dead Space 3",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/568/5689c58278e807c1574ceefb8dec026b.jpg",
    "metacritic": "77"
  },
  {
    "name": "Sonic & All-Stars Racing Transformed",
    "genres": "Racing, Family, Sports",
    "platforms": "PC, Xbox One, iOS, Android, Nintendo 3DS, Xbox 360, PlayStation 3, PS Vita, Wii U",
    "released": "2012",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/0c1/0c1c9965ba59166ab986a663ab2252dc.jpg",
    "metacritic": "79"
  },
  {
    "name": "Conan Exiles",
    "genres": "Massively Multiplayer, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "9 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/c9e/c9e47fd222f631084879d395eee07d66.jpg",
    "metacritic": "67"
  },
  {
    "name": "Children of Morta",
    "genres": "Indie, Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2019",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/434/43431e04f0cd5419a3d8e31a5c8c3d5d.jpg",
    "metacritic": "80"
  },
  {
    "name": "Phasmophobia",
    "genres": "Indie, Action",
    "platforms": "PC",
    "released": "2020",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/370/370895ff725d74e26b8d30389222b397.jpg",
    "metacritic": ""
  },
  {
    "name": "Kane and Lynch: Dead Men",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2007",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/bef/bef072bb5a968347f40cbeefcf7b80db.jpg",
    "metacritic": "67"
  },
  {
    "name": "Persona 4 Golden",
    "genres": "RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, PS Vita",
    "released": "2012",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b2c/b2c9c6115114c8f7d461b5430e8a7d4a.jpg",
    "metacritic": "89"
  },
  {
    "name": "Halo: Reach",
    "genres": "Shooter",
    "platforms": "PC, Xbox One, Xbox 360",
    "released": "2010",
    "playtime": "11 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/045/0457f748c9492261ccb46147edf9c761.jpg",
    "metacritic": "91"
  },
  {
    "name": "Sherlock Holmes: The Devil's Daughter",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2016",
    "playtime": "7 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/8c3/8c33e956567aae5cfa839e8b4bb1fb39.jpg",
    "metacritic": "65"
  },
  {
    "name": "F1 2018",
    "genres": "Racing, Indie, Action, Sports",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a1c/a1cea552040aecf9414548e209f9c0d8.jpg",
    "metacritic": "84"
  },
  {
    "name": "Dino D-Day",
    "genres": "Indie, Action",
    "platforms": "PC",
    "released": "2011",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/711/7115f17fd8453b9d4d93536446247404.jpg",
    "metacritic": "53"
  },
  {
    "name": "Diablo III: Reaper of Souls",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "20 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/202/2023cb28ef354720a2ca4652727687d0.jpg",
    "metacritic": "87"
  },
  {
    "name": "LEGO Batman",
    "genres": "Family, Action",
    "platforms": "PC, Xbox One, Nintendo DS, macOS, Xbox 360, PlayStation 3, PlayStation 2, PSP, Wii",
    "released": "2008",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/9f7/9f750cb69a31a42648f45e3681abed3a.jpg",
    "metacritic": "80"
  },
  {
    "name": "Condemned: Criminal Origins",
    "genres": "Action",
    "platforms": "PC, Xbox 360",
    "released": "2005",
    "playtime": "1 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/98d/98deaf99f06aa3d7e54e1fa69e4a9060.jpg",
    "metacritic": "80"
  },
  {
    "name": "Super Hexagon",
    "genres": "Casual, Indie, Arcade, Action",
    "platforms": "PC, iOS, Android, macOS, Linux",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/screenshots/112/112c9ecfe850e318bb999660361782bb.jpeg",
    "metacritic": "88"
  },
  {
    "name": "The Elder Scrolls II: Daggerfall",
    "genres": "Action, RPG",
    "platforms": "PC",
    "released": "1996",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/522/522f66c5f8542a945b9e2b1942f1ad63.jpg",
    "metacritic": ""
  },
  {
    "name": "Trackmania Turbo",
    "genres": "Racing, Massively Multiplayer",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/82e/82eeea65ebb047cc7f366faf2fb062b6.jpg",
    "metacritic": "79"
  },
  {
    "name": "Stealth Inc 2: A Game of Clones",
    "genres": "Indie, Adventure, Action, Puzzle",
    "platforms": "PC, PlayStation 4, Xbox One, Android, PlayStation 3, PS Vita, Wii U",
    "released": "2014",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/2ff/2ffe731b3388bd795f94c38e9afed60f.jpg",
    "metacritic": "79"
  },
  {
    "name": "OKAMI HD",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, PlayStation 3",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/a38/a3857b2445c70ac5dbe73b210a827ad8.jpg",
    "metacritic": "92"
  },
  {
    "name": "Marvel Heroes",
    "genres": "Massively Multiplayer, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "released": "2013",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/37f/37f6c595ddfc5050a02f0f95d8805d77.jpg",
    "metacritic": "81"
  },
  {
    "name": "Cry of Fear",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC",
    "released": "2012",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/e06/e062facadfeb0a0339103bf7e81ca129.jpg",
    "metacritic": ""
  },
  {
    "name": "Resident Evil 0 / Biohazard 0 HD REMASTER",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/955/9554440f1c17236c0233b644e47909d2.jpg",
    "metacritic": "69"
  },
  {
    "name": "Worms Armageddon",
    "genres": "Strategy",
    "platforms": "PC, PlayStation, Nintendo 64, Game Boy Color, Dreamcast",
    "released": "1999",
    "playtime": "2 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/96a/96a48ac7487d9db9179d83170afcb16a.jpg",
    "metacritic": ""
  },
  {
    "name": "Hero Siege",
    "genres": "Adventure, Action, RPG, Indie, Massively Multiplayer",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/71c/71c015df012029897e87ac00b7a8de4c.jpg",
    "metacritic": ""
  },
  {
    "name": "Baldur's Gate III",
    "genres": "Strategy, Adventure, RPG",
    "platforms": "PC, PlayStation 5, macOS",
    "released": "2023",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg",
    "metacritic": "97"
  },
  {
    "name": "Northgard",
    "genres": "Adventure, RPG, Strategy, Simulation, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2018",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/725/725d08c4174c129ce5275c43cd0347c6.jpg",
    "metacritic": "79"
  },
  {
    "name": "Helltaker",
    "genres": "Indie, Adventure, Puzzle",
    "platforms": "PC, macOS, Linux",
    "released": "2020",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/67a/67aef58e8ead90609f7adbd20d72a033.jpg",
    "metacritic": ""
  },
  {
    "name": "Catherine",
    "genres": "Adventure, Action, RPG, Puzzle",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a91/a917f41bb87e4b9e7a762ac87d97a9dc.jpg",
    "metacritic": "80"
  },
  {
    "name": "Gears of War 2",
    "genres": "Shooter",
    "platforms": "Xbox One, Xbox 360",
    "released": "2008",
    "playtime": "22 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/51b/51ba5f9b280c6fec71c293fe276e24ec.jpg",
    "metacritic": "93"
  },
  {
    "name": "Bulletstorm: Full Clip Edition",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/4ec/4ec6786820944f923eb212a3ed8d23be.jpg",
    "metacritic": "76"
  },
  {
    "name": "Hitman: Contracts",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, macOS, Xbox 360, Xbox, PlayStation 3, PlayStation 2",
    "released": "2004",
    "playtime": "1 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/07b/07b5abbe6330a76d6b30636d3aa5e0f3.jpg",
    "metacritic": "77"
  },
  {
    "name": "Dead Island Riptide",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/569/5695d8534579129ad6b40fefa2ef360c.jpg",
    "metacritic": "60"
  },
  {
    "name": "Lost Ark",
    "genres": "Massively Multiplayer, RPG",
    "platforms": "PC",
    "released": "2022",
    "playtime": "9 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/d9e/d9e868382c48ec98c9b23b8fbe6a2045.jpg",
    "metacritic": "81"
  },
  {
    "name": "Prince of Persia: Warrior Within",
    "genres": "Adventure, Action",
    "platforms": "PC, iOS, Xbox, PlayStation 3, PlayStation 2, GameCube",
    "released": "2004",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/459/459ac8745027643ed7338516c0025cf7.jpg",
    "metacritic": "83"
  },
  {
    "name": "Marvel’s Avengers",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2020",
    "playtime": "12 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/1eb/1ebef06e55f756974654c35b9aedb127.jpg",
    "metacritic": "68"
  },
  {
    "name": "Regions Of Ruin",
    "genres": "Adventure, Action, RPG, Strategy, Simulation, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2018",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/2cc/2cc8e0cfe5df94b586ad42f4319514e9.jpg",
    "metacritic": ""
  },
  {
    "name": "Teleglitch: Die More Edition",
    "genres": "Indie, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/f7b/f7be8b51b1f9d94ddeac27f7b7229440.jpg",
    "metacritic": "78"
  },
  {
    "name": "Fortnite: Save The World",
    "genres": "Shooter, Strategy, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS",
    "released": "2017",
    "playtime": "",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/d97/d97f663b752a6484df105993f17abb49.jpg",
    "metacritic": ""
  },
  {
    "name": "Serial Cleaner",
    "genres": "Indie, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/439/4397f836727bdd13bd38deeb4f7355bb_GacwmJ9.jpg",
    "metacritic": "72"
  },
  {
    "name": "MultiVersus",
    "genres": "Action, Fighting",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2022",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d2e/d2ee15fda80056efef174da4ca5ae54f.jpg",
    "metacritic": ""
  },
  {
    "name": "Star Wars: Dark Forces",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation, Classic Macintosh",
    "released": "1995",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/5ad/5ad8b055d14c14fd626d5eb42f218bc6.jpg",
    "metacritic": ""
  },
  {
    "name": "Hawken",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2014",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/9da/9da42a4da370cc386c8578f0b2578e2c.jpg",
    "metacritic": "73"
  },
  {
    "name": "Doom 3: BFG Edition",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 4, Android, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/645/64578c2a6daa30995692525172fd13ef.jpg",
    "metacritic": ""
  },
  {
    "name": "DayZ",
    "genres": "Indie, Massively Multiplayer, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2013",
    "playtime": "17 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/7d7/7d7c89793578f721df56022c6cf53bb0.jpg",
    "metacritic": "44"
  },
  {
    "name": "Aim Lab",
    "genres": "Indie, Action",
    "platforms": "PC",
    "released": "2018",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/998/998c7f9d1b765975cd6222f4e44503e5.jpg",
    "metacritic": ""
  },
  {
    "name": "Assassin’s Creed Rogue",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "12 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/3c4/3c4a44ed99c87c56e0cdcfaaaf5c3628.jpg",
    "metacritic": "74"
  },
  {
    "name": "Mount & Blade",
    "genres": "Indie, Action, RPG",
    "platforms": "PC",
    "released": "2008",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/ee7/ee7e7b6d5dbf0adf7705eff6912a3e60.jpg",
    "metacritic": "72"
  },
  {
    "name": "Deus Ex: The Fall",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, iOS, Android",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/24d/24df5a8d70c80c15dade8304dd4370a5.jpg",
    "metacritic": "45"
  },
  {
    "name": "Full Throttle Remastered",
    "genres": "Adventure",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, macOS, Linux, PS Vita",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/ab1/ab1b125c1bf4899c58fe90226b9a1f5b.jpg",
    "metacritic": "77"
  },
  {
    "name": "Hard Reset Extended Edition",
    "genres": "Indie, Action",
    "platforms": "PC",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/e29/e29ce2369152515e9ae20c6e217cbe81.jpg",
    "metacritic": "73"
  },
  {
    "name": "RaceRoom Racing Experience",
    "genres": "Racing, Simulation, Sports",
    "platforms": "PC",
    "released": "2013",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/c02/c02c64324edc2045ea1fc0601cdaaa0c.jpg",
    "metacritic": ""
  },
  {
    "name": "Observеr",
    "genres": "Casual, Indie, Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/0f4/0f4f4764555736eebfeb01571e44e99e.jpg",
    "metacritic": "77"
  },
  {
    "name": "Guacamelee! Gold Edition",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/2eb/2eb8f1b4787c3beaa568bc52c0580cba.jpg",
    "metacritic": "88"
  },
  {
    "name": "Command & Conquer: Red Alert 3 - Uprising",
    "genres": "Strategy",
    "platforms": "PC",
    "released": "2009",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/4a1/4a1e460708b6c2114e4735e04dc58510.jpg",
    "metacritic": "64"
  },
  {
    "name": "Crossout",
    "genres": "Racing, Massively Multiplayer, Action, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/7a6/7a6f90e85a2e264c3b440bb4787cf378.jpg",
    "metacritic": "68"
  },
  {
    "name": "Graveyard Keeper",
    "genres": "Adventure, RPG, Casual, Strategy, Simulation, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2018",
    "playtime": "7 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/066/066eb1b7a3f332b8089645fbf8c3ebdc.jpg",
    "metacritic": "68"
  },
  {
    "name": "Divine Divinity",
    "genres": "Action, RPG",
    "platforms": "PC, macOS",
    "released": "2002",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/7d8/7d89761cadbd930a2e3cf7ff2679882f.jpg",
    "metacritic": "81"
  },
  {
    "name": "Kingdom: New Lands",
    "genres": "Casual, Strategy, Arcade, Simulation, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/5f6/5f691054fdbec8705491fa1f54a06b8a.jpg",
    "metacritic": "80"
  },
  {
    "name": "LEGO Batman 2 DC Super Heroes",
    "genres": "Family, Action",
    "platforms": "PC, Xbox One, iOS, Android, Nintendo 3DS, Nintendo DS, macOS, Xbox 360, PlayStation 3, PS Vita, Wii U, Wii",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/3c1/3c139f67a73f0bf5ce0d8f2abf83c0d0.jpg",
    "metacritic": "75"
  },
  {
    "name": "Endless Legend",
    "genres": "Strategy, RPG",
    "platforms": "PC, macOS",
    "released": "2014",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/0a6/0a62ee096ef629d5c3c44cc4bcc8cbb5.jpg",
    "metacritic": "82"
  },
  {
    "name": "Two Point Hospital",
    "genres": "RPG, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS",
    "released": "2018",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/2b9/2b90a0b4cafe05eefaa2698d6613dc7f.jpg",
    "metacritic": "84"
  },
  {
    "name": "Invisible, Inc.",
    "genres": "Strategy, Adventure",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/849/849c187c0b5d4cd1ee3283148f7e4cdb.jpg",
    "metacritic": "82"
  },
  {
    "name": "Grow Home",
    "genres": "Casual, Indie, Adventure",
    "platforms": "PC, PlayStation 4, Linux",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/dc2/dc2814dc50d61be1ea4fcd5d3c03ddb6.jpg",
    "metacritic": "75"
  },
  {
    "name": "Rage 2",
    "genres": "Racing, Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "11 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/662/66261db966238da20c306c4b78ae4603.jpg",
    "metacritic": "71"
  },
  {
    "name": "Dungeon Defenders II",
    "genres": "Strategy, Indie, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2014",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/ef8/ef8201008461d1c102b6c11c4114d08e.jpg",
    "metacritic": ""
  },
  {
    "name": "Return Of The Obra Dinn",
    "genres": "Indie, Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS",
    "released": "2018",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/052/052f9afc7aaeea3e2c5d46eafa92c64e.jpg",
    "metacritic": "88"
  },
  {
    "name": "Endless Space 2",
    "genres": "Strategy",
    "platforms": "PC, macOS",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/72b/72bf31a664fcbcb079baf4ef8221f308.jpg",
    "metacritic": "82"
  },
  {
    "name": "Thief 3: Deadly Shadows",
    "genres": "Action, Simulation",
    "platforms": "PC, Xbox",
    "released": "2004",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/f89/f899f0bdeb6bcd7419d9b2281a693ad8.jpg",
    "metacritic": "85"
  },
  {
    "name": "Need For Speed: Most Wanted",
    "genres": "Racing, Arcade",
    "platforms": "PC, Xbox 360, Xbox, PlayStation 3, PlayStation 2, PSP, GameCube",
    "released": "2005",
    "playtime": "",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/41b/41ba37b6a3e706dc1d27d49afbf0f72a.jpg",
    "metacritic": "83"
  },
  {
    "name": "A Hat in Time",
    "genres": "Platformer, Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, PlayStation 3",
    "released": "2017",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/594/5949baae74fe9e399adbce0c44e28783.jpg",
    "metacritic": "77"
  },
  {
    "name": "Ring of Elysium",
    "genres": "Shooter, Massively Multiplayer, Action",
    "platforms": "PC",
    "released": "2018",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/41b/41b396a56bcce431dfe1beb920e9faf5.jpg",
    "metacritic": ""
  },
  {
    "name": "Dying Light 2 Stay Human",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2022",
    "playtime": "22 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/73d/73db43df633477d4604c7248292f34b2.jpg",
    "metacritic": "77"
  },
  {
    "name": "Superbrothers: Sword & Sworcery",
    "genres": "Indie, Adventure, RPG",
    "platforms": "PC, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2011",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/db5/db5ab0d41a2a57274902d32ea8e6f1ec.jpg",
    "metacritic": ""
  },
  {
    "name": "Fable: The Lost Chapters",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, macOS, Xbox",
    "released": "2005",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/aa2/aa25254dbfa5b2073595bf69d8c8bac4.jpg",
    "metacritic": "83"
  },
  {
    "name": "Yakuza Kiwami 2",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/b32/b32735e3f7d95959cc39265f555f2aa8.jpg",
    "metacritic": "85"
  },
  {
    "name": "FIFA 18",
    "genres": "Sports",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2017",
    "playtime": "",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/cb4/cb487ab3c54b81cb685388bab42ec848.jpeg",
    "metacritic": "79"
  },
  {
    "name": "Legend of Grimrock",
    "genres": "Indie, Adventure, RPG",
    "platforms": "PC, iOS, macOS, Linux",
    "released": "2012",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/237/237711d80fbd1658218271e362d85287.jpg",
    "metacritic": "82"
  },
  {
    "name": "Killzone Shadow Fall",
    "genres": "Shooter",
    "platforms": "PlayStation 4",
    "released": "2013",
    "playtime": "",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/dfa/dfa0906773ebb8a50d15548ac5b8ee5e.jpg",
    "metacritic": "73"
  },
  {
    "name": "ENSLAVED: Odyssey to the West Premium Edition",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/780/7804a1ce365e2c30d51007b910b14acf.jpg",
    "metacritic": "70"
  },
  {
    "name": "Dragon Age 2",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, macOS, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "10 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg",
    "metacritic": "81"
  },
  {
    "name": "Pyre",
    "genres": "Adventure, RPG, Arcade, Sports, Indie",
    "platforms": "PC, PlayStation 4, macOS, Linux",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/e63/e635b8c7fbe3ffd69ad6c1c586cd250e.jpg",
    "metacritic": "84"
  },
  {
    "name": "Fractured Space",
    "genres": "Strategy, Indie, Action",
    "platforms": "PC",
    "released": "2016",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/e10/e10258b8e132c269dd2b0faeba0d8057.jpg",
    "metacritic": "79"
  },
  {
    "name": "Arma 3",
    "genres": "Shooter, Strategy, Action, Simulation",
    "platforms": "PC",
    "released": "2013",
    "playtime": "16 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/7a2/7a2d3c0883f01e43bff02f0d124d4642.jpg",
    "metacritic": "74"
  },
  {
    "name": "POSTAL",
    "genres": "Indie, Action",
    "platforms": "PC, macOS, Linux",
    "released": "1997",
    "playtime": "2 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/screenshots/7ab/7ab68441389f60523d2f6cb75c6393f2.jpg",
    "metacritic": "56"
  },
  {
    "name": "Geneshift",
    "genres": "Indie, Action, RPG",
    "platforms": "PC, Linux",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/80a/80a0d07be6109fde6b92ac5283e7056c.jpg",
    "metacritic": ""
  },
  {
    "name": "GreedFall",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/c68/c6842e7b1e4a8c5fdff79504b7284e49.jpg",
    "metacritic": "74"
  },
  {
    "name": "Brink",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/55c/55c7e7a972d361db3677c1dd10a5558d.jpg",
    "metacritic": "70"
  },
  {
    "name": "Crash Bandicoot",
    "genres": "Platformer, Action",
    "platforms": "PlayStation",
    "released": "1996",
    "playtime": "20 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/bc1/bc141ec3f4ca8d1d14f0ab4e4f9e654d.jpg",
    "metacritic": ""
  },
  {
    "name": "Dark Souls II",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "43 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/651/6512783a214618584d144d5d852ba595.jpg",
    "metacritic": "91"
  },
  {
    "name": "Warface: Ice Breaker",
    "genres": "Massively Multiplayer, Action",
    "platforms": "PC",
    "released": "2014",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/12a/12ab4965b0b871b61d5e8568df27be46.jpg",
    "metacritic": "62"
  },
  {
    "name": "Half-Life: Alyx",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC",
    "released": "2020",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/855/8552c056d729f34c951c30f3cfef9da8.jpg",
    "metacritic": "93"
  },
  {
    "name": "Persona 5 Royal",
    "genres": "Adventure, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2020",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg",
    "metacritic": "94"
  },
  {
    "name": "Sid Meier's Civilization IV",
    "genres": "Strategy",
    "platforms": "PC, macOS",
    "released": "2005",
    "playtime": "1 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/85c/85c91c5064d2cdd56a949c8008868318.jpg",
    "metacritic": "94"
  },
  {
    "name": "Astroneer",
    "genres": "Indie, Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2019",
    "playtime": "8 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/02f/02f775a806c6cd64c28d5aeca928dc76.jpg",
    "metacritic": "73"
  },
  {
    "name": "The Elder Scrolls: Arena",
    "genres": "Action, RPG",
    "platforms": "PC",
    "released": "1994",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/ef8/ef823f3c46ff1e00803888b5c4476e10.jpg",
    "metacritic": ""
  },
  {
    "name": "Two Worlds Epic Edition",
    "genres": "RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2009",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/6e5/6e504144ccbbc5c194c7f6cd6f544aaf.jpg",
    "metacritic": "65"
  },
  {
    "name": "The Ascent",
    "genres": "Indie, Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2021",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/3f4/3f43f03406a5ea087352bf32d60e3a0a.jpg",
    "metacritic": "73"
  },
  {
    "name": "Overlord: Raising Hell",
    "genres": "RPG",
    "platforms": "PC, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/f8c/f8c181db845de856e519558451b8e481.jpg",
    "metacritic": "72"
  },
  {
    "name": "Ashes of the Singularity: Escalation",
    "genres": "Strategy, Indie, RPG, Simulation",
    "platforms": "PC",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/651/651f338d5c03b8c650543629ce486a52.jpg",
    "metacritic": "81"
  },
  {
    "name": "Call of Duty: Black Ops 4",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/450/4501d8493e6ed172bd4982a16b56e580.jpg",
    "metacritic": "84"
  },
  {
    "name": "Tyranny",
    "genres": "RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/c81/c8120bf5faed7309c9812553da54da80.jpg",
    "metacritic": "80"
  },
  {
    "name": "10 Second Ninja X",
    "genres": "Indie, Action",
    "platforms": "PC, Xbox One, PlayStation 4, PS Vita",
    "released": "2016",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/085/0851d86b5e8250ee33af5ab56544989b.jpg",
    "metacritic": ""
  },
  {
    "name": "DISTRAINT",
    "genres": "Casual, Indie, Adventure",
    "platforms": "PC",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/b4c/b4c8dd2f639bf2e8b84b2f1c365406e0.jpg",
    "metacritic": "76"
  },
  {
    "name": "DiRT 3",
    "genres": "Racing, Arcade, Sports",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/640/6409857596fe6553d3bb5af9a17f6160.jpg",
    "metacritic": "87"
  },
  {
    "name": "Cave Story+",
    "genres": "Indie, Platformer, Adventure, Action",
    "platforms": "PC, Nintendo Switch, Nintendo 3DS, Nintendo DS, macOS, Linux, Wii",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/4f2/4f2246a85225b7a91d63990fe540b7c4.jpg",
    "metacritic": "83"
  },
  {
    "name": "Keep Talking and Nobody Explodes",
    "genres": "Indie, Simulation, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Android, macOS",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/e88/e88ccd83bb2d69ad04d18b06c5e0df3d.jpg",
    "metacritic": "67"
  },
  {
    "name": "Jagged Alliance 1: Gold Edition",
    "genres": "Strategy, Action, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "1994",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/c98/c98c214657f024107f438d0eaa501d9f.jpg",
    "metacritic": ""
  },
  {
    "name": "FIFA 17",
    "genres": "Sports",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2016",
    "playtime": "",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/1a7/1a77ee44d7e91949aa794597d32c2e28.jpg",
    "metacritic": "85"
  },
  {
    "name": "Quake Live",
    "genres": "Action",
    "platforms": "PC, Web",
    "released": "2014",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/bb7/bb71799efe642c69f28c92c835a1257d.jpg",
    "metacritic": ""
  },
  {
    "name": "Pixel Puzzles Ultimate",
    "genres": "Casual, Indie, Puzzle",
    "platforms": "PC",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/ab0/ab012b3fe017ab1dad34c7936200d24c.jpg",
    "metacritic": ""
  },
  {
    "name": "Code Vein",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/16a/16a81cc458b0acb6ed2bcfd2a10f1527.jpg",
    "metacritic": "72"
  },
  {
    "name": "Tricky Towers",
    "genres": "Casual, Indie, Arcade, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/df4/df464501be72da0052bc5e4c8896a0aa.jpg",
    "metacritic": "80"
  },
  {
    "name": "Little Inferno",
    "genres": "Adventure, Puzzle, Casual, Simulation, Indie",
    "platforms": "PC, Nintendo Switch, iOS, Android, macOS, Linux, Wii U",
    "released": "2012",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d79/d794c9198ec994cc12ede5ebd4672623.jpg",
    "metacritic": "68"
  },
  {
    "name": "Poker Night at the Inventory",
    "genres": "Casual, Card, Sports",
    "platforms": "PC, macOS",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/1be/1be2141edae05d4ba9858182b081e604.jpg",
    "metacritic": "71"
  },
  {
    "name": "Wasteland 2: Director's Cut",
    "genres": "Indie, Strategy, Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2015",
    "playtime": "6 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/4f4/4f4c0c0d2127fd67b1e894204029468b.jpg",
    "metacritic": "87"
  },
  {
    "name": "Psychonauts 2",
    "genres": "Platformer, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox Series S/X, macOS, Linux",
    "released": "2021",
    "playtime": "12 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/c3c/c3c536cc4d32623ba928020dfd39a648.jpg",
    "metacritic": "88"
  },
  {
    "name": "Tales of Berseria",
    "genres": "Action, RPG",
    "platforms": "PC, PlayStation 4, PlayStation 3",
    "released": "2016",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/158/15880530ce424311f264671e4b0611ee.jpg",
    "metacritic": "80"
  },
  {
    "name": "Shank 2",
    "genres": "Arcade, Indie, Adventure, Action",
    "platforms": "PC, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/a6e/a6e83e0f449883b6df57ae52b6805756.jpg",
    "metacritic": "72"
  },
  {
    "name": "Baldur's Gate: Enhanced Edition",
    "genres": "Strategy, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/313/3136687fb0b34490d082b7272a0868e2.jpg",
    "metacritic": "78"
  },
  {
    "name": "Two Worlds II",
    "genres": "RPG",
    "platforms": "PC, macOS, Xbox 360",
    "released": "2010",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/db7/db7ede330a09ddeb5c899900f70b1896.jpg",
    "metacritic": "76"
  },
  {
    "name": "Mini Ninjas",
    "genres": "Family, Adventure, Action",
    "platforms": "PC, Nintendo DS, macOS, Xbox 360, PlayStation 3, Wii",
    "released": "2009",
    "playtime": "1 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/157/1571cdfb52888191eabaf53c2b897240.jpg",
    "metacritic": "74"
  },
  {
    "name": "Shank",
    "genres": "Arcade, Indie, Adventure, Action",
    "platforms": "PC, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/c80/c8050355992f431d0efd10a19630b6ea.jpg",
    "metacritic": "67"
  },
  {
    "name": "Flower",
    "genres": "Arcade, Family, Casual, Adventure",
    "platforms": "PC, PlayStation 4, iOS, PlayStation 3, PS Vita",
    "released": "2009",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/4bc/4bc75319da5601d337452ca0462255ab.jpg",
    "metacritic": "89"
  },
  {
    "name": "Horizon Chase Turbo",
    "genres": "Racing, Action, Casual, Sports, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2018",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/d16/d160819f22de73d29813f7b6dad815f9.jpg",
    "metacritic": "78"
  },
  {
    "name": "Space Engineers",
    "genres": "Strategy, Indie, Action, Simulation",
    "platforms": "PC, Xbox One",
    "released": "2013",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/ac7/ac707457a89f1f7d15ef5934a26ea21a.jpg",
    "metacritic": "68"
  },
  {
    "name": "Europa Universalis IV",
    "genres": "Strategy",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/eff/eff7b309ae98c32b48f22a10e7523106.jpg",
    "metacritic": "87"
  },
  {
    "name": "FlatOut 2",
    "genres": "Racing, Arcade",
    "platforms": "PC, Linux, Xbox, PlayStation 2",
    "released": "2006",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/d3e/d3e2a3bc62a62bc9b70d6ebe0f54f040.jpg",
    "metacritic": "76"
  },
  {
    "name": "STAR WARS Jedi Knight: Dark Forces II",
    "genres": "Shooter, Action",
    "platforms": "PC",
    "released": "1997",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/841/841b827812b7e2bf8b00cd200f35406d.jpg",
    "metacritic": "91"
  },
  {
    "name": "Tom Clancy’s Splinter Cell Blacklist",
    "genres": "Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3, Wii U",
    "released": "2013",
    "playtime": "10 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/de9/de93cd3e51d2c57e33bbf7dade34f25a.jpg",
    "metacritic": "81"
  },
  {
    "name": "Gunpoint",
    "genres": "Strategy, Indie, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a12/a12eecf2feb2df9ceedd6e36ba758245.jpg",
    "metacritic": "83"
  },
  {
    "name": "RimWorld",
    "genres": "Strategy, Indie, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2016",
    "playtime": "18 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/4d8/4d85fbe90066fdbef295a618640c4a82.jpg",
    "metacritic": "87"
  },
  {
    "name": "Call of Duty 2",
    "genres": "Shooter",
    "platforms": "PC, Xbox One, iOS, macOS, Xbox 360",
    "released": "2005",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/50c/50c69996b917ae50d8d319f6ce9bed37.jpg",
    "metacritic": "86"
  },
  {
    "name": "Splitgate",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2019",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/278/27873379c6d27b968babbeefa9b44da3.jpg",
    "metacritic": ""
  },
  {
    "name": "Absolver",
    "genres": "Indie, Adventure, Action, Fighting",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2017",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/684/684ecc08397479de72c5f89ef6f16f4f.jpg",
    "metacritic": "69"
  },
  {
    "name": "Costume Quest",
    "genres": "Adventure, Action, RPG, Casual, Family",
    "platforms": "PC, Xbox One, iOS, macOS, Linux, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/2b4/2b47c5edfeea2970eeb44d1f8cbd562d.jpg",
    "metacritic": ""
  },
  {
    "name": "Dear Esther",
    "genres": "Casual, Indie, Adventure",
    "platforms": "PC, iOS, macOS",
    "released": "2012",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/bc6/bc6b163403504d0c041253749e233ed3.jpg",
    "metacritic": "75"
  },
  {
    "name": "Untitled Goose Game",
    "genres": "Indie, Family, Action, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS",
    "released": "2019",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/199/1996ab6448cadb2ce4bea31536466333.jpg",
    "metacritic": "80"
  },
  {
    "name": "Back 4 Blood",
    "genres": "Shooter, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2021",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/4fe/4feffcec6315c5f5a96442a8444431ca.jpg",
    "metacritic": "76"
  },
  {
    "name": "Tomb Raider: Definitive Edition",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Xbox 360, PlayStation 3",
    "released": "2014",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/08e/08e8d09cd5aae30959c4486649fda3e6.jpg",
    "metacritic": "86"
  },
  {
    "name": "Prince of Persia: The Two Thrones",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox, PlayStation 3, PlayStation 2, PSP, Wii, GameCube, Classic Macintosh",
    "released": "2005",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/dd7/dd72d8a527cd9245c7eb7cd05aa53efa.jpg",
    "metacritic": "85"
  },
  {
    "name": "Demon's Souls",
    "genres": "Action, RPG",
    "platforms": "PlayStation 3",
    "released": "2009",
    "playtime": "38 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/ac3/ac3a89bfbda76082402e42b933c5825a.jpg",
    "metacritic": "89"
  },
  {
    "name": "Punch Club",
    "genres": "RPG, Fighting, Strategy, Simulation, Sports, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, Nintendo 3DS, macOS, Linux",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/ad1/ad15e71b0a3d431ce0a59bcd783efa88.jpg",
    "metacritic": "73"
  },
  {
    "name": "Need for Speed: Most Wanted - A Criterion Game",
    "genres": "Racing, Arcade",
    "platforms": "PC, iOS, Android, Xbox 360, PlayStation 3, PS Vita, Wii U",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/228/228e21229213695c8f6697a6b3387a2b.jpg",
    "metacritic": "82"
  },
  {
    "name": "Stick Fight: The Game",
    "genres": "Casual, Indie, Action",
    "platforms": "PC, iOS, Android, macOS",
    "released": "2017",
    "playtime": "2 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/screenshots/424/4246b028e70891609700f1566db8b8dd.jpg",
    "metacritic": ""
  },
  {
    "name": "Crazy Taxi (1999)",
    "genres": "Racing, Arcade, Action",
    "platforms": "PC, iOS, Android, Xbox 360, PlayStation 3, PlayStation 2, GameCube, Dreamcast",
    "released": "1999",
    "playtime": "1 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/d9b/d9bbb8e69f53c4c42b8ff928cb581548.jpg",
    "metacritic": "82"
  },
  {
    "name": "King's Bounty: The Legend",
    "genres": "Strategy, RPG",
    "platforms": "PC, macOS",
    "released": "2008",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/1aa/1aa082df2dbde6940e9ccbee4aac0feb.jpg",
    "metacritic": "79"
  },
  {
    "name": "Inscryption",
    "genres": "Indie, Strategy, Adventure",
    "platforms": "PC, PlayStation 5, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2021",
    "playtime": "8 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/73e/73efc5c0ac6f354271dae610276f617c.jpg",
    "metacritic": "86"
  },
  {
    "name": "The Turing Test",
    "genres": "Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2016",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b90/b90af2554ee2660b2bf79afdabeea30b.jpg",
    "metacritic": "74"
  },
  {
    "name": "Quiplash",
    "genres": "Casual, Strategy, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, PlayStation 3",
    "released": "2015",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/680/6805c301d72c53ee9f4e8b8ed2d4558a.jpg",
    "metacritic": ""
  },
  {
    "name": "Kingdom Hearts III",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/968/968e6210715fd61237139e3caa193be0.jpg",
    "metacritic": "82"
  },
  {
    "name": "Call of Duty",
    "genres": "Shooter",
    "platforms": "PC, macOS, Xbox 360, PlayStation 3",
    "released": "2003",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/9c5/9c5bc0b6e67102bc96dcf1ba41509e42.jpg",
    "metacritic": "91"
  },
  {
    "name": "Natural Selection 2",
    "genres": "Strategy, Indie, Action",
    "platforms": "PC, Linux",
    "released": "2012",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a2e/a2efc7b5801500e8d5223c3953ef9b0f.jpg",
    "metacritic": "80"
  },
  {
    "name": "Burnout Paradise",
    "genres": "Racing, Arcade",
    "platforms": "Xbox 360, PlayStation 3",
    "released": "2008",
    "playtime": "8 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/788/788b80cbc8c39167f7ed6dd89fd398dc.jpg",
    "metacritic": "87"
  },
  {
    "name": "The Secret of Monkey Island: Special Edition",
    "genres": "Family, Adventure",
    "platforms": "PC, macOS, Xbox 360",
    "released": "2009",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/656/65654f69256420c0126eb506c1a72d7f.jpg",
    "metacritic": "86"
  },
  {
    "name": "Gang Beasts",
    "genres": "Casual, Indie, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2014",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/160/160f894fc774f4cc51a99f435abadd4e.jpg",
    "metacritic": ""
  },
  {
    "name": "Bomber Crew",
    "genres": "Strategy, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/9d1/9d12fe709e4bc87166b1cdb2101fa91b.jpg",
    "metacritic": "75"
  },
  {
    "name": "Warhammer 40,000: Dawn of War II: Retribution",
    "genres": "Strategy, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2011",
    "playtime": "7 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/ae4/ae4a8087739c065fb6ddda1308820ece.jpg",
    "metacritic": "80"
  },
  {
    "name": "LEGO Batman 3: Beyond Gotham",
    "genres": "Family, Adventure, Action",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, Android, Nintendo 3DS, macOS, PlayStation 3, PS Vita, Wii U",
    "released": "2014",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/a8c/a8cd58ee985ab6d509370bddada91dbd.jpeg",
    "metacritic": "75"
  },
  {
    "name": "Kingdoms of Amalur: Reckoning",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "6 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/bad/bad95aa1f2edbbad2ae93981291b6560.jpg",
    "metacritic": "81"
  },
  {
    "name": "State of Decay 2",
    "genres": "Shooter, Action, RPG, Simulation",
    "platforms": "PC, Xbox One",
    "released": "2018",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/20a/20a1892c6dbe9b820a2f0d79f9ed47a2.jpg",
    "metacritic": "68"
  },
  {
    "name": "The Ship: Murder Party",
    "genres": "Indie, Action, RPG",
    "platforms": "PC",
    "released": "2006",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/a46/a46801970d3b30d7fc63d6db72b3dc0e.jpg",
    "metacritic": "76"
  },
  {
    "name": "Pid",
    "genres": "Adventure, Action, Puzzle, Arcade, Indie, Platformer",
    "platforms": "PC, macOS, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "1 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/d93/d93e93149d781484bfc9c6ae7b48e1d4.jpg",
    "metacritic": "63"
  },
  {
    "name": "Pathfinder: Kingmaker",
    "genres": "RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2018",
    "playtime": "9 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/4e6/4e6c6259ad910c31261d90b42c45e046.jpg",
    "metacritic": "73"
  },
  {
    "name": "DRAGON BALL FighterZ",
    "genres": "Action, Fighting",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/96b/96b9420bbd4bd1b79bf2a67f7779733a.jpg",
    "metacritic": "86"
  },
  {
    "name": "Ni no Kuni II: Revenant Kingdom",
    "genres": "Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2018",
    "playtime": "7 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/b92/b924c4beeed6617201d5d91511cfcf8e.jpg",
    "metacritic": "82"
  },
  {
    "name": "God of War II",
    "genres": "Action",
    "platforms": "PlayStation 3, PlayStation 2, PS Vita",
    "released": "2007",
    "playtime": "17 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/615/615e9fc0a325e0d87b84dad029b8b7b9.jpg",
    "metacritic": "93"
  },
  {
    "name": "Gears of War 3",
    "genres": "Shooter",
    "platforms": "Xbox One, Xbox 360",
    "released": "2011",
    "playtime": "16 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/422/4228842dcfaef2a83bdb14c2a3ca2165.jpg",
    "metacritic": "91"
  },
  {
    "name": "Devil May Cry 4: Special Edition",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "8 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/8e7/8e79a8e6bd4e71c8ce0006544a17aaf2.jpg",
    "metacritic": ""
  },
  {
    "name": "The Ship: Single Player",
    "genres": "Indie, Action, RPG",
    "platforms": "PC",
    "released": "2006",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/506/5063f823789894332d3e0d16703854d1.jpg",
    "metacritic": ""
  },
  {
    "name": "Gears of War 4",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox Series S/X",
    "released": "2016",
    "playtime": "",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/079/079175933a50b2bf202edd6aa17be19c.jpg",
    "metacritic": "85"
  },
  {
    "name": "Star Wars: The Old Republic",
    "genres": "Massively Multiplayer, RPG",
    "platforms": "PC",
    "released": "2011",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/baa/baac774072d6319a166a453b8b3506df.jpg",
    "metacritic": "85"
  },
  {
    "name": "METAL SLUG 3",
    "genres": "Casual, Arcade, Action, Fighting",
    "platforms": "PC, PlayStation 4, Xbox One, iOS, Android, Xbox 360, PlayStation 3, Wii, Neo Geo",
    "released": "2000",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/df1/df1a27300bf1e4696734b437d81b0fcf.jpg",
    "metacritic": ""
  },
  {
    "name": "Portal Knights",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android",
    "released": "2016",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/999/9996d2692128d717880d2be9f9351765.jpg",
    "metacritic": "72"
  },
  {
    "name": "Knights and Merchants",
    "genres": "Strategy, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/b15/b15b55537e4fbaefe6e4b60ae4ce8d0d.jpg",
    "metacritic": ""
  },
  {
    "name": "Aliens vs. Predator",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/fbc/fbced95c523be0444ce6d2fa83b1afc0.jpg",
    "metacritic": "68"
  },
  {
    "name": "Sonic Adventure 2",
    "genres": "Platformer, Adventure, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3, GameCube, Dreamcast",
    "released": "2001",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/4f5/4f57124f7c0285150626cd1411c45b6e.jpg",
    "metacritic": "89"
  },
  {
    "name": "Mutant Year Zero: Road to Eden",
    "genres": "Strategy, Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/fcc/fccc143096ea188a7fb7daab52d26e35.jpg",
    "metacritic": "78"
  },
  {
    "name": "Planet Coaster",
    "genres": "Strategy, Simulation",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/aea/aea1581227fa10cbc006a6594845a01e.jpg",
    "metacritic": "83"
  },
  {
    "name": "Night in the Woods",
    "genres": "Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2017",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b0a/b0a370527fea0e824225269d4a8797db.jpg",
    "metacritic": "88"
  },
  {
    "name": "BIT.TRIP RUNNER",
    "genres": "Indie, Arcade, Action",
    "platforms": "PC, macOS, Linux, Wii",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/screenshots/72f/72f1e176e1affdf7a6c0e49e167080d7.jpg",
    "metacritic": ""
  },
  {
    "name": "Beneath a Steel Sky",
    "genres": "Indie, Adventure",
    "platforms": "PC, iOS, macOS, Linux, Classic Macintosh, Commodore / Amiga",
    "released": "1994",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/f6b/f6b3338889ec877c9d3d89fc4f665152.jpg",
    "metacritic": ""
  },
  {
    "name": "Streets of Rage 4",
    "genres": "Indie, Adventure, Action, Fighting",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS",
    "released": "2020",
    "playtime": "4 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/e56/e56d74b0a1072662eea7c1a194363884.jpg",
    "metacritic": "84"
  },
  {
    "name": "Jurassic World Evolution",
    "genres": "Strategy, Action, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/ea6/ea6d85ea0239943ff31a86097fb3fbc3.jpg",
    "metacritic": "71"
  },
  {
    "name": "DiRT 5",
    "genres": "Racing, Arcade",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2020",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/9c7/9c7dd09596246993169b356d7c1facf0.jpg",
    "metacritic": "79"
  },
  {
    "name": "Planetary Annihilation",
    "genres": "Strategy",
    "platforms": "PC, macOS, Linux",
    "released": "2014",
    "playtime": "7 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/20e/20ec6440ede691638c42684fd6551156.jpg",
    "metacritic": "62"
  },
  {
    "name": "NiGHTS into dreams...",
    "genres": "Platformer, Adventure",
    "platforms": "PC, Xbox 360, PlayStation 3, SEGA Saturn",
    "released": "1995",
    "playtime": "1 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/screenshots/fe0/fe0ccce931cdb5aaff9500a331e5c2eb.jpg",
    "metacritic": ""
  },
  {
    "name": "Pathologic Classic HD",
    "genres": "Indie, Adventure, Action, RPG",
    "platforms": "PC",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/55d/55dd16f70b86426359334a785a1888e6.jpg",
    "metacritic": "76"
  },
  {
    "name": "Dragon Age: Origins - Ultimate Edition",
    "genres": "RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2010",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/add/add07a75a3f1e479b55dbe920d9fb13d.jpg",
    "metacritic": "88"
  },
  {
    "name": "Defiance",
    "genres": "Shooter, Massively Multiplayer, Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/f63/f63bb0916d982394dfedc1900375c88e.jpg",
    "metacritic": "64"
  },
  {
    "name": "The Sims 3",
    "genres": "Casual, Simulation",
    "platforms": "PC, iOS, Nintendo 3DS, Nintendo DS, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "11 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/369/36914d895c20e35f273286145c267764.jpg",
    "metacritic": "86"
  },
  {
    "name": "Assassin's Creed: Director's Cut Edition",
    "genres": "Adventure, Action",
    "platforms": "PC",
    "released": "2008",
    "playtime": "6 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/4b1/4b11e8fc75e054939c29e7319a643600.jpg",
    "metacritic": "79"
  },
  {
    "name": "Superliminal",
    "genres": "Indie, Puzzle",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2019",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/eca/eca35ae10f6e934ca79b7dc17ff71b23.jpg",
    "metacritic": "77"
  },
  {
    "name": "No Time To Explain Remastered",
    "genres": "Casual, Indie, Adventure, Action",
    "platforms": "PC, macOS, Linux",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/d5c/d5c4c4af04545fe14604b2807d83a927.jpg",
    "metacritic": ""
  },
  {
    "name": "Prototype 2",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "7 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/445/44507fdd60a8ec02b1c3c64a293ca754.jpg",
    "metacritic": "76"
  },
  {
    "name": "Sonic Adventure DX: Director's Cut",
    "genres": "Arcade, Platformer, Adventure",
    "platforms": "PC, Xbox 360, PlayStation 3, GameCube",
    "released": "2003",
    "playtime": "2 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/74c/74c68a8de3d4983ff932dd456ac2dc66.jpg",
    "metacritic": "57"
  },
  {
    "name": "Downwell",
    "genres": "Adventure, Action, Casual, Arcade, Indie, Platformer",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, Android, PS Vita",
    "released": "2015",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/e9c/e9ce72a3e2c1ac344e8876d6bb0dcf50.jpeg",
    "metacritic": "81"
  },
  {
    "name": "Pathologic 2",
    "genres": "Indie, Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/c4a/c4a948e3d1ab733f21641844c6df3e43.jpg",
    "metacritic": "69"
  },
  {
    "name": "Medieval II: Total War",
    "genres": "Strategy, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2007",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/72f/72feeda516c44390c7ab218b8b328fda.jpg",
    "metacritic": "88"
  },
  {
    "name": "Capcom Arcade Stadium",
    "genres": "Arcade, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2021",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/2a5/2a5072e5b28e1653a10e4f931f1991af.jpg",
    "metacritic": "78"
  },
  {
    "name": "Hand of Fate",
    "genres": "Indie, Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/b9c/b9cb8c4e69907a68e33a4ebb2580f82a.jpg",
    "metacritic": "78"
  },
  {
    "name": "Crusader Kings III",
    "genres": "Strategy, RPG, Simulation",
    "platforms": "PC, PlayStation 5, Xbox Series S/X, macOS, Linux",
    "released": "2020",
    "playtime": "11 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/77e/77e8a4a7b377a081aabd0dbf688417e1.jpg",
    "metacritic": "86"
  },
  {
    "name": "Giana Sisters: Twisted Dreams",
    "genres": "Adventure, Action, Arcade, Indie, Platformer",
    "platforms": "PC, Xbox 360, PlayStation 3, Wii U",
    "released": "2012",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/e5b/e5be8c031ac0dbd85bf058947d480375.jpg",
    "metacritic": "77"
  },
  {
    "name": "ORION: Prelude",
    "genres": "Indie, Adventure, Action, RPG",
    "platforms": "PC",
    "released": "2012",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/428/4286a224467623d23706dacb569a2ea1.jpg",
    "metacritic": ""
  },
  {
    "name": "Hogwarts Legacy",
    "genres": "Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2023",
    "playtime": "30 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/044/044b2ee023930ca138deda151f40c18c.jpg",
    "metacritic": ""
  },
  {
    "name": "Loop Hero",
    "genres": "Strategy, Indie, RPG, Simulation",
    "platforms": "PC, Xbox Series S/X, Nintendo Switch, macOS, Linux",
    "released": "2021",
    "playtime": "10 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/cef/cef4c326dd57a8f39d696379eaa84411.jpg",
    "metacritic": "83"
  },
  {
    "name": "Wreckfest",
    "genres": "Racing, Arcade",
    "platforms": "PC, PlayStation 5, PlayStation 4, Xbox One, Xbox Series S/X, Nintendo Switch, iOS, Android",
    "released": "2018",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/ff2/ff2315fb895502efcbd40f1e5f37c170.jpg",
    "metacritic": "79"
  },
  {
    "name": "Crash Bandicoot 3: Warped",
    "genres": "Platformer, Action",
    "platforms": "PlayStation",
    "released": "1998",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/837/837a609b0584db5d03534c8e767861b1.jpg",
    "metacritic": "91"
  },
  {
    "name": "LEGO Harry Potter: Years 1-4",
    "genres": "Family, Platformer, Adventure, Action",
    "platforms": "PC, Android, Nintendo DS, macOS, Xbox 360, PlayStation 3, PS Vita, PSP, Wii",
    "released": "2010",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/694/6940fa3fbe0d836e4a272c468e65e480.jpg",
    "metacritic": "79"
  },
  {
    "name": "Counter-Strike Nexon: Zombies",
    "genres": "Casual, Massively Multiplayer, Action",
    "platforms": "PC",
    "released": "2014",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/5ff/5ff7e855a4d0f4de1bfa515cd0e19071.jpg",
    "metacritic": ""
  },
  {
    "name": "Dungeon Siege 3",
    "genres": "Action, RPG",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a8d/a8d08a70ce7a4f3263bedf5d764fc538.jpg",
    "metacritic": "72"
  },
  {
    "name": "Crysis 3",
    "genres": "Strategy, Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2013",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/1c6/1c61ef4ce04bce876841118580b03ccb.jpg",
    "metacritic": "76"
  },
  {
    "name": "Portal Stories: Mel",
    "genres": "Puzzle",
    "platforms": "PC, macOS, Linux",
    "released": "2015",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/9e5/9e5b25a276f9248c36c0fd78288738ce.jpg",
    "metacritic": ""
  },
  {
    "name": "My Time At Portia",
    "genres": "Casual, RPG, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS",
    "released": "2019",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/176/1765390b699b432edc3a208d544c6ba0.jpg",
    "metacritic": "73"
  },
  {
    "name": "GameGuru",
    "genres": "Educational",
    "platforms": "PC",
    "released": "2015",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/f24/f24122a8e3d30ec3e99472e3e826d0cb.jpg",
    "metacritic": ""
  },
  {
    "name": "Steel Rats",
    "genres": "Racing, Platformer, Action, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/43c/43cfdb7fdc48d99b4a4c2525b411daf8.jpg",
    "metacritic": "66"
  },
  {
    "name": "FIFA 15",
    "genres": "Sports",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo 3DS, Xbox 360, PlayStation 3, PS Vita",
    "released": "2014",
    "playtime": "17 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/be5/be51faf9bec778b4ea1b06e9b084792c.jpg",
    "metacritic": "82"
  },
  {
    "name": "STAR WARS Empire at War - Gold Pack",
    "genres": "Strategy",
    "platforms": "PC",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/6c3/6c3cea606428109394ef18fbf7f3d8b5.jpg",
    "metacritic": ""
  },
  {
    "name": "Thief II: The Metal Age",
    "genres": "Action, Simulation",
    "platforms": "PC",
    "released": "2000",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/f04/f04030abc433df09da4bb70a74bdf339.jpg",
    "metacritic": "87"
  },
  {
    "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge",
    "genres": "Adventure, Action, Fighting, Casual, Arcade, Indie",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, iOS, Android, Linux",
    "released": "2022",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/aac/aac683272f862540a18625f02f5f3679.jpg",
    "metacritic": "86"
  },
  {
    "name": "Wasteland 3",
    "genres": "Strategy, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2020",
    "playtime": "6 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/370/370a4cbcfa75e5238ee8f74bf323694d.jpg",
    "metacritic": "83"
  },
  {
    "name": "Serious Sam Classics: Revolution",
    "genres": "Indie, Action",
    "platforms": "PC",
    "released": "2014",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/017/017e1f2c593b4f1a036f96b9ccdbd500.jpg",
    "metacritic": ""
  },
  {
    "name": "Lucius",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/679/67900b47263413bd65fc0032ad966e0b.jpg",
    "metacritic": "59"
  },
  {
    "name": "Fishing Planet",
    "genres": "Massively Multiplayer, Simulation, Sports",
    "platforms": "PC, PlayStation 4, iOS, macOS, Linux",
    "released": "2015",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/28b/28bec9939d190ba619cad0693ebe304d.jpg",
    "metacritic": ""
  },
  {
    "name": "The Bridge",
    "genres": "Casual, Strategy, Indie, Puzzle",
    "platforms": "PC, PlayStation 4, Xbox One, Nintendo Switch, macOS, Linux, Xbox 360, PlayStation 3, PS Vita, Wii U",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/5a3/5a36930b16d9b1949d8c8c92b5a28d89.jpg",
    "metacritic": "74"
  },
  {
    "name": "DuckTales: Remastered",
    "genres": "Platformer, Adventure",
    "platforms": "PC, Xbox One, iOS, Android, Xbox 360, PlayStation 3, Wii U",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/36d/36dbcc51d45ae1105c7cb744a5fa6e2a.jpg",
    "metacritic": "73"
  },
  {
    "name": "Wizard of Legend",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2018",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/b25/b258a515226ab56c46ac8619cacb8f26.jpeg",
    "metacritic": "77"
  },
  {
    "name": "Raft",
    "genres": "Adventure",
    "platforms": "PC",
    "released": "2022",
    "playtime": "8 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/6b2/6b253d2d39fc05b2368e5e78bb4abffc.jpg",
    "metacritic": ""
  },
  {
    "name": "The Crew",
    "genres": "Racing, Adventure, Massively Multiplayer",
    "platforms": "PC, Xbox One, PlayStation 4, Xbox 360",
    "released": "2014",
    "playtime": "16 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/screenshots/b79/b797325a14fc62444ca6032d59aa1c75.jpg",
    "metacritic": "71"
  },
  {
    "name": "Crash Bandicoot 2: Cortex Strikes Back",
    "genres": "Platformer",
    "platforms": "PlayStation",
    "released": "1997",
    "playtime": "",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a84/a84dc4980063ce934705ea5d8d241939.jpg",
    "metacritic": ""
  },
  {
    "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
    "genres": "Action, Fighting",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2016",
    "playtime": "8 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b1f/b1f0b19226228555d8b93b2f42b22349.jpg",
    "metacritic": "80"
  },
  {
    "name": "Tacoma",
    "genres": "Indie, Adventure",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/256/256a3188c2907eff4d7721ce044df5d7.jpg",
    "metacritic": "78"
  },
  {
    "name": "Sunless Sea",
    "genres": "Indie, Adventure, RPG",
    "platforms": "PC, iOS, macOS, Linux",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/c32/c323f9c17ac95c363772bb9ff3693dc6.jpg",
    "metacritic": "81"
  },
  {
    "name": "Hearts of Iron IV",
    "genres": "Strategy, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2016",
    "playtime": "7 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/2b6/2b6e8f8efaa2499e9a3a09dc76028d44.jpg",
    "metacritic": "83"
  },
  {
    "name": "Crysis 2",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2011",
    "playtime": "13 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/899/899ce332d07c3fc1dd924bf828d1f484.jpg",
    "metacritic": "85"
  },
  {
    "name": "Oxygen Not Included",
    "genres": "Strategy, Indie, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2017",
    "playtime": "7 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/000/0002b2686a50b30762fb6040a8d9187f.jpg",
    "metacritic": "86"
  },
  {
    "name": "Worms Revolution",
    "genres": "Strategy, Simulation",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2012",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/197/197780c33719b9b2e4d3619a527f3c21.jpg",
    "metacritic": "73"
  },
  {
    "name": "Operation Flashpoint: Dragon Rising",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox One, Xbox 360, PlayStation 3",
    "released": "2009",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/cd8/cd89ed5083a6cca9c2768ebca7a73b2d.jpg",
    "metacritic": "76"
  },
  {
    "name": "Fable II",
    "genres": "Adventure, Action, RPG",
    "platforms": "Xbox One, Xbox 360",
    "released": "2008",
    "playtime": "27 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/cec/cec82d526f9d056d426c985562963eec.jpg",
    "metacritic": "89"
  },
  {
    "name": "Mirage: Arcane Warfare",
    "genres": "Indie, Action",
    "platforms": "PC",
    "released": "2017",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/bb6/bb69662c8fb265e790d07039dd30066c.jpg",
    "metacritic": "74"
  },
  {
    "name": "Trine 3: The Artifacts of Power",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/0fb/0fbd117f2417089f4527eeb05f7dca87.jpg",
    "metacritic": ""
  },
  {
    "name": "Spiritfarer",
    "genres": "Indie, Adventure, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2020",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/727/727f889060e688bbdcba7b2a5d26a603.jpg",
    "metacritic": "84"
  },
  {
    "name": "Kentucky Route Zero",
    "genres": "Indie, Adventure",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2020",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/177/1775aacedb915b0e0880476530dc87b4.jpg",
    "metacritic": "81"
  },
  {
    "name": "Sang-Froid - Tales of Werewolves",
    "genres": "Adventure, Action, RPG, Strategy, Indie",
    "platforms": "PC",
    "released": "2013",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/6ec/6ec7245a6a69fa45d49cfc8a37787865.jpg",
    "metacritic": "79"
  },
  {
    "name": "Far Cry New Dawn",
    "genres": "Arcade, Shooter, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2019",
    "playtime": "11 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/6d2/6d27cf9c22f2b28cf3ae706464d138f9.jpg",
    "metacritic": "73"
  },
  {
    "name": "Darkwood",
    "genres": "Indie, Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2017",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/341/3415bdd0f19cb034574e559f2ff163ab.jpg",
    "metacritic": "78"
  },
  {
    "name": "Project CARS",
    "genres": "Racing, Simulation, Sports",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/05a/05a6ca96307b25626d1af5607a8c96a8.jpg",
    "metacritic": "83"
  },
  {
    "name": "Shadowrun: Hong Kong - Extended Edition",
    "genres": "Indie, Strategy, Adventure, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2015",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/56c/56cdc9d4e29255e4a0d90cb2bce2dc14.jpg",
    "metacritic": "81"
  },
  {
    "name": "Rebel Galaxy",
    "genres": "Adventure, Action, RPG, Strategy, Simulation, Indie",
    "platforms": "PC, Xbox One, PlayStation 4, macOS",
    "released": "2015",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/59f/59f8ff56cde745ceb56029f229ad4e43.jpg",
    "metacritic": "72"
  },
  {
    "name": "Star Wars: Squadrons",
    "genres": "Action, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2020",
    "playtime": "3 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/b19/b191ff2b8ccb646d1d2d9297ed5c7e89.jpg",
    "metacritic": "79"
  },
  {
    "name": "Chaos on Deponia",
    "genres": "Indie, Adventure, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS, Linux",
    "released": "2012",
    "playtime": "5 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/6bc/6bc337100b6f6b7afb638bc0806c0b6d.jpg",
    "metacritic": "78"
  },
  {
    "name": "Quake II",
    "genres": "Shooter, Action",
    "platforms": "PC, Linux, Xbox 360, PlayStation, Nintendo 64, Classic Macintosh, Commodore / Amiga",
    "released": "1997",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/0c5/0c5fcdf04048200da14b90e0e6cfaf6b.jpg",
    "metacritic": ""
  },
  {
    "name": "Plants vs. Zombies",
    "genres": "Strategy, Arcade, Puzzle",
    "platforms": "PC, Xbox One, iOS, Android, Nintendo DS, Xbox 360, PlayStation 3, PS Vita",
    "released": "2009",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/590/590aa45fbab8d43b57f93dd60027af7f.jpg",
    "metacritic": "86"
  },
  {
    "name": "Halo 5: Guardians",
    "genres": "Shooter, Adventure, Action",
    "platforms": "Xbox One",
    "released": "2015",
    "playtime": "",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/77f/77fb27e5b7ec6984f43a70a289376e6a.jpg",
    "metacritic": "84"
  },
  {
    "name": "Lovers in a Dangerous Spacetime",
    "genres": "Shooter, Indie, Action, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2015",
    "playtime": "3 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/b47/b47da312357f548ceeb3a4d00021cd1d.jpg",
    "metacritic": "80"
  },
  {
    "name": "Sanctum",
    "genres": "Shooter, Action, Casual, Strategy, Indie",
    "platforms": "PC, macOS",
    "released": "2011",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/486/4867553de7f93ab572102c47570a9050.jpg",
    "metacritic": "70"
  },
  {
    "name": "Mafia III: Definitive Edition",
    "genres": "Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2020",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/944/94497cb4d179b652ba8da2a52ab55a3e.jpg",
    "metacritic": ""
  },
  {
    "name": "The Tiny Bang Story",
    "genres": "Adventure, Puzzle, Casual, Family, Indie",
    "platforms": "PC, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2011",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/fb9/fb912e77c4295b0c47af632cd1b48522.jpeg",
    "metacritic": "63"
  },
  {
    "name": "Dead Island Definitive Edition",
    "genres": "Action",
    "platforms": "PC, Xbox One, PlayStation 4, Linux",
    "released": "2016",
    "playtime": "6 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/dc9/dc9bfcddb7d0abc2d689193b3f43893a.jpg",
    "metacritic": "67"
  },
  {
    "name": "Watch Dogs: Legion",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2020",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/415/41563ce6cb061a210160687a4e5d39f6.jpg",
    "metacritic": "72"
  },
  {
    "name": "The Council",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/123/123e035701a975f5d96c233f4048eed2.jpg",
    "metacritic": "76"
  },
  {
    "name": "Mini Metro",
    "genres": "Strategy, Indie, Simulation, Puzzle",
    "platforms": "PC, PlayStation 4, Nintendo Switch, iOS, Android, macOS, Linux",
    "released": "2015",
    "playtime": "4 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/c49/c4983df94a8a8167d652b812de742da8.jpg",
    "metacritic": "77"
  },
  {
    "name": "Unreal Tournament 3 Black",
    "genres": "Shooter, Action",
    "platforms": "PC, Xbox 360, PlayStation 3",
    "released": "2007",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/9e3/9e3f90e9d012bbf3f6bfa91be67d7572.jpg",
    "metacritic": "83"
  },
  {
    "name": "Crysis Warhead",
    "genres": "Shooter, Action",
    "platforms": "PC",
    "released": "2008",
    "playtime": "2 min",
    "esrb_rating": "Adults Only",
    "background_image": "https://media.rawg.io/media/games/e34/e344d4b45f3d393d44cbed087279379c.jpg",
    "metacritic": "84"
  },
  {
    "name": "System Shock (1994)",
    "genres": "Shooter, Action, RPG",
    "platforms": "PC",
    "released": "1994",
    "playtime": "3 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/202/20253cf9a7bd4f3ddb26bf68cf9117ba.jpg",
    "metacritic": "85"
  },
  {
    "name": "Back to the Future: The Game",
    "genres": "Adventure, Action, Puzzle",
    "platforms": "PC, PlayStation 4, iOS, macOS, Xbox 360, PlayStation 3, Wii",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/e2e/e2eac90903c56886e39d21ac71b958e5.jpg",
    "metacritic": "74"
  },
  {
    "name": "Realm of the Mad God",
    "genres": "Indie, Massively Multiplayer, Action, RPG",
    "platforms": "PC, macOS, Web",
    "released": "2012",
    "playtime": "2 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/c20/c201f665fc1d461719833ec1320935d6.jpg",
    "metacritic": "82"
  },
  {
    "name": "Horizon Forbidden West",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, PlayStation 4",
    "released": "2022",
    "playtime": "",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/bf7/bf73b105ccbba42107986bbcd96fcada.jpg",
    "metacritic": "86"
  },
  {
    "name": "Receiver",
    "genres": "Shooter, Indie, Action, Simulation",
    "platforms": "PC, macOS, Linux",
    "released": "2012",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/666/666bb577dbf6c3b012c67e2782d79b27.jpg",
    "metacritic": ""
  },
  {
    "name": "Puzzle Agent",
    "genres": "Casual, Adventure, Puzzle",
    "platforms": "PC, iOS, macOS, PlayStation 3",
    "released": "2010",
    "playtime": "2 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/screenshots/332/3327c47e0abc76882fc96c434d2e06bd.jpg",
    "metacritic": "70"
  },
  {
    "name": "Cuisine Royale",
    "genres": "Massively Multiplayer, Action",
    "platforms": "PC, Xbox One, PlayStation 4",
    "released": "2018",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/screenshots/319/319262248c762977f7f8d0557988b9e6.jpg",
    "metacritic": ""
  },
  {
    "name": "Yakuza: Like a Dragon",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2020",
    "playtime": "18 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/a59/a5993b9f84944570a31cb6ad08bfe502.jpg",
    "metacritic": "85"
  },
  {
    "name": "Tunic",
    "genres": "Indie, Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch, macOS",
    "released": "2022",
    "playtime": "4 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/2c1/2c1984e128ac48b89953ed4de4904a3b.jpg",
    "metacritic": "86"
  },
  {
    "name": "DEFCON",
    "genres": "Strategy, Indie",
    "platforms": "PC, macOS, Linux",
    "released": "2006",
    "playtime": "1 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/d6a/d6a68393fa48d1f2f2ae8e3406fc5ff9.jpg",
    "metacritic": "84"
  },
  {
    "name": "KAO the Kangaroo: Round 2",
    "genres": "Racing, Adventure, Action, Casual, Arcade, Platformer",
    "platforms": "PC, Xbox, PlayStation 2, GameCube",
    "released": "2005",
    "playtime": "1 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/83a/83af36d8924271087360d142d34f0960.jpg",
    "metacritic": ""
  },
  {
    "name": "FIFA 19",
    "genres": "Simulation, Sports",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, Xbox 360, PlayStation 3",
    "released": "2018",
    "playtime": "",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/games/b59/b59560a7277b16b53e4786b4abe45baa.jpg",
    "metacritic": "80"
  },
  {
    "name": "Everybody's Gone to the Rapture",
    "genres": "Casual, Indie, Adventure",
    "platforms": "PC, PlayStation 4",
    "released": "2015",
    "playtime": "2 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/c64/c6463b164c3eab0c96e1fad70c8793e5.jpg",
    "metacritic": "76"
  },
  {
    "name": "Far Cry 6",
    "genres": "Shooter, Adventure, Action",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X",
    "released": "2021",
    "playtime": "14 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/5dd/5dd4d2dd986d2826800bc37fff64aa4f.jpg",
    "metacritic": "75"
  },
  {
    "name": "LittleBigPlanet",
    "genres": "Arcade, Action",
    "platforms": "PlayStation 3",
    "released": "2008",
    "playtime": "5 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/c32/c32fd6c512c48b3e2f10686a6e06690d.jpg",
    "metacritic": "95"
  },
  {
    "name": "Call of Cthulhu",
    "genres": "Adventure, Action, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "5 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/1b8/1b8a3ed646ccea6375bd4d4b7dd67aa4.jpg",
    "metacritic": "66"
  },
  {
    "name": "House Flipper",
    "genres": "Indie, Adventure, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, macOS",
    "released": "2018",
    "playtime": "7 min",
    "esrb_rating": "Everyone",
    "background_image": "https://media.rawg.io/media/screenshots/dd9/dd91beec6add2a49038d62d67fd0733f.jpg",
    "metacritic": "62"
  },
  {
    "name": "Warhammer 40,000: Dawn of War II Chaos Rising",
    "genres": "Strategy, RPG",
    "platforms": "PC, macOS, Linux",
    "released": "2010",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/screenshots/6f3/6f3855fc42784a7da7bdc4cf325b0d30.jpg",
    "metacritic": "85"
  },
  {
    "name": "Reus",
    "genres": "Strategy, Indie, Simulation",
    "platforms": "PC, Xbox One, PlayStation 4, macOS, Linux",
    "released": "2013",
    "playtime": "3 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/screenshots/825/8259c21da3dcb834daec3675a4dcebd3.jpg",
    "metacritic": "75"
  },
  {
    "name": "The Banner Saga 2",
    "genres": "Strategy, Indie, RPG",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, iOS, Android, macOS",
    "released": "2016",
    "playtime": "5 min",
    "esrb_rating": "",
    "background_image": "https://media.rawg.io/media/games/3af/3af9976b83868a1042eac59531a1a986.jpg",
    "metacritic": "82"
  },
  {
    "name": "Yooka-Laylee",
    "genres": "Indie, Platformer, Adventure, Action",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch, macOS, Linux",
    "released": "2017",
    "playtime": "4 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/213/2138ba3c97d02b581ca0b50805fcd49c.jpg",
    "metacritic": "73"
  },
  {
    "name": "Maneater",
    "genres": "Indie, Adventure, Action, RPG",
    "platforms": "PC, PlayStation 5, Xbox One, PlayStation 4, Xbox Series S/X, Nintendo Switch",
    "released": "2020",
    "playtime": "4 min",
    "esrb_rating": "Mature",
    "background_image": "https://media.rawg.io/media/games/895/8951013b8ace2d652727df2f9023cbb8.jpg",
    "metacritic": "68"
  },
  {
    "name": "Beyond Divinity",
    "genres": "Action, RPG",
    "platforms": "PC, macOS",
    "released": "2004",
    "playtime": "1 min",
    "esrb_rating": "Teen",
    "background_image": "https://media.rawg.io/media/games/f69/f69d51606fb5d72b462c75e8de9383f5.jpg",
    "metacritic": "73"
  },
  {
    "name": "Burnout Paradise Remastered",
    "genres": "Racing, Arcade",
    "platforms": "PC, Xbox One, PlayStation 4, Nintendo Switch",
    "released": "2018",
    "playtime": "2 min",
    "esrb_rating": "Everyone 10+",
    "background_image": "https://media.rawg.io/media/games/cb6/cb63a33e16f90fa6f008cc093239dad3.jpg",
    "metacritic": "80"
  }
];

module.exports = { videogames };