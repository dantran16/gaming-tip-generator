export { games,experiences };

const games = [
    { value: 'ASTLIBRA Revision', label: 'ASTLIBRA Revision', description: 'Confront time and fate in the 2D action RPG, Astlibra Revision. Explore meticulously crafted worlds, fight brutal boss battles, and upgrade your skills to take down enemies lurking around every corner.' },
    { value: 'Counter-Strike: Global Offensive', label: 'Counter-Strike: Global Offensive', description:'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).' },
    { value: 'Crab Champions', label: 'Crab Champions', description: 'Claw your way across exotic islands combining fluid movement with fast paced combat to become a Crab Champion in this third person shooter with roguelike elements.'}
]

const experiences = [
    { value: 'beginner', label: 'Beginner - You are just getting started!' },
    { value: 'intermediate', label: 'Intermediate - You have played the game enough!' },
    { value: 'expert', label: 'Expert - You need tips that very few know or require a high technical mastery to execute.' }
]

const tips = [
    { game: 'ASTLIBRA Revision', experience: 'beginner', spoilerFree: true, description: 'If you want to 100% on one playthrough, make sure to play the game on Hard.'},
    { game: 'Crab Champions', experience: 'beginner', spoilerFree: true, description: "On an island, there is a chance for a chest and totems to appear. These can help you power up outside of shops, bosses, and chests."},
    { game: 'Counter-Strike: Global Offensive', experience: 'intermediate', spoilerFree: true, description: 'After you train your aim to a decent level, you want to train on movement and crosshair placement. People underestimate how effective it is to train these things because it makes aimming significantly easier.'}
]