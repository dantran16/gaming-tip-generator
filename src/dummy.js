const games = [
    { id: 'astlibra_revision', value: 'ASTLIBRA Revision', label: 'ASTLIBRA Revision', description: 'Confront time and fate in the 2D action RPG, Astlibra Revision. Explore meticulously crafted worlds, fight brutal boss battles, and upgrade your skills to take down enemies lurking around every corner.' },
    { id: 'csgo',value: 'Counter-Strike: Global Offensive', label: 'Counter-Strike: Global Offensive', description:'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).' },
    { id: 'crab_champions', value: 'Crab Champions', label: 'Crab Champions', description: 'Claw your way across exotic islands combining fluid movement with fast paced combat to become a Crab Champion in this third person shooter with roguelike elements.'}
]

const experiences = [
    { id: 'beginner', color: 'green', label: 'Beginner - You are just getting started!' },
    { id: 'intermediate', color: 'yellow', label: 'Intermediate - You have played the game enough!' },
    { id: 'expert', color:'red', label: 'Expert - You need tips that very few know or require a high technical mastery to execute.' }
]

const tips = [
    { id: 'astralibra_revision_01', game_id: 'astlibra_revision', experience_id: 'beginner', spoilerFree: true, title: 'What difficulty do you want to play in?', description: "If you want to 100% on one playthrough, make sure to play the game on Hard. If you want a more casual playthrough, you can always scale down but you can't scale up.", likes: 10},
    { id: 'astralibra_revision_02', game_id: 'astlibra_revision', experience_id: 'intermediate', spoilerFree: true, title: 'How to survive better', description: "Always stock up on potions. If you have a shield, use the blocking feature to negate attacks, especially projectiles. You can also use skills to activate invulnerability for a few frames.", likes: 10},
    { id: 'astralibra_revision_03', game_id: 'astlibra_revision', experience_id: 'intermediate', spoilerFree: false, title: 'Chapter 5 Hidden Boss', description: "Say No the first time when Shiro asks to come with you. When Gau is with you, find Shiro again and ask her to come with you. It should activate a third phase for the boss.", likes: 10},
    { id: 'crab_champions_01' , game_id: 'crab_champions', experience_id: 'beginner', spoilerFree: true, title: 'Other ways to get stronger in a run besides chests', description: "On an island, there is a chance for a chest and totems to appear. These can help you power up outside of shops, bosses, and chests.", likes: 5},
    { id: 'crab_champions_02' , game_id: 'crab_champions', experience_id: 'intermediate', spoilerFree: true, title: 'Best perks to get', description: "Greek perks are the best ones to get. Although there is a negative consequence involved, most of the perks will have a positive that makes the negative hardly noticeable.", likes: 5},
    { id: 'csgo_01', game_id: 'csgo', experience_id: 'intermediate', spoilerFree: true,  title: 'How to win more aim duels?',description: 'After you train your aim to a decent level, you want to train on movement and crosshair placement. People underestimate how effective it is to train these things because it makes aimming significantly easier.', likes: 15},
    { id: 'csgo_02', game_id: 'csgo', experience_id: 'expert', spoilerFree: true,  title: 'Jiggle peeking',description: 'By strafing left and right at a corner, you can bait a shot from the enemy. It is effective against awpers. Once they shoot and miss, you can do a wideswing to punish them. It is harder for them to adjust if they miss a shot.', likes: 15}

]

export { games,experiences, tips };