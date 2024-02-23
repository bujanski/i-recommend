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
    "platforms": "PC, Xbox 360, PlayStation 3",
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
  }
];

module.exports = { videogames };