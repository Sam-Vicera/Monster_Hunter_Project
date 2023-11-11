let baseMonsters = [
  {
    beastName: "Great Izuchi",
    smallCrownSize: 967.58,
    largeCrownSize: 1322.37,
    pictureUrl: "",
    description: `The alpha Izuchi of its pack, identified by its
    larger build, upended white fur and scythe-like
    tail. A Great Izuchi forms a herd of many smaller
    Izuchi and selects two from the group to accompany
    it on territory patrols. Once it spots prey or senses
    danger, the Great Izuchi issues commands to their
    fellow Izuchi, and coordinates their movements.
    Take care that you don't get overwhelmed.
    
    
Their razor-sharp tail attacks in combination with
their synchronicity make them a force to be reckoned
with. Take out their leader to send the herd into
disarray and pick them off easily.`,
    videoUrl: "",
  },

  {
    beastName: "Great Baggi",
    smallCrownSize: 915.88,
    largeCrownSize: 1272.06,
    pictureUrl: "",
    description: `A carnivorous bird wyvern. Noted for their
    projecting cranial crests and bluish-white
    skin that's adapted to snowy climates.
    Great Baggi craftily command other Baggi
    to surround their prey and stun them with
    a tranquilizing fluid.
    
    It commands many lesser Baggi to form a wave of
all-out offense; a tactful hunter will pick off the herd
one by one and avoid being surrounded. The Great
Baggi spits out a sedative venom that will knock you
out if you're struck by it, but having Energy Drinks
on hand helps offset that threat.`,
    videoUrl: "",
  },
  {
    beastName: "Kulu-Ya-Ku",
    smallCrownSize: 811.11,
    largeCrownSize: 1108.52,
    pictureUrl: "",
    description: `A bird wyvern that has developed limbs capable
    of carrying objects. It has been spotted stealing
    eggs from nests. If attacked while carrying an egg,
    it will drop the egg in fright and flee. When engaged,
    a Kulu-Ya-Ku will dig up a small boulder to shield
    itself against threats or use it in its attacks.
    
    
    A Kulu-Ya-Ku uses small boulders to shield itself or
    smash against its enemies. Force it to drop whatever
    it's holding by staggering or blinding it, or if it's
    holding a cracked boulder, attack it to break it.`,
    videoUrl: "",
  },
  {
    beastName: "Great Wroggi",
    smallCrownSize: 842.38,
    largeCrownSize: 1151.25,
    pictureUrl: "",
    description: `Wroggi are bird wyverns that travel in packs that
    are led by the largest and most toxic member.
    Be careful when one raises its head and its
    poison sac expands—that signals that it's
    about to spit a cloud of poisonous mist.
    
    Remember to bring some Antidotes to deal
with its poison. Taking out the sac around
a Great Wroggi's neck will also prevent it
from producing venom, so aim for the head.
`,
    videoUrl: "",
  },
  {
    beastName: "Arzuros",
    smallCrownSize: 491.12,
    largeCrownSize: 692.4,
    pictureUrl: "",
    description: `Beasts known to dwell in humid forest and
    mountain regions. Though known more for
    fishing and standing upright to collect honey,
    their thick claws and heavy forearm plating
    allow them to deliver powerful blows to any
    aggressor.
    
    Arzuros love honey so much that they may
steal any you might be carrying and start
to eat it on the spot, leaving them vulnerable.
Carry around a stash of honey to take exploit
their sweet tooth.`,
    videoUrl: "",
  },
  {
    beastName: "Lagombi",
    smallCrownSize: 472.59,
    largeCrownSize: 645.88,
    pictureUrl: "",
    description: `Fanged, long-eared beasts whose warm pelts
    and thick layers of fat help them survive in cold
    climates. Though mainly herbivores, Lagombi
    occasionally make use of their exceptional hearing
    and ability to glide on ice to sneak up on prey.
    
    A Lagombi has very sensitive hearing, and Sonic
Bombs will cause it to flinch in pain. Time a well-
aimed throw for when it's sliding around, and
you may topple it. When enraged, however,
Sonic Bombs have no effect on it.`,
    videoUrl: "",
  },
  {
    beastName: "Volvidon",
    smallCrownSize: 604.81,
    largeCrownSize: 859.11,
    pictureUrl: "",
    description: `Fanged beasts with thick red carapaces that
    are resistant to lava. Their rounded bodies are
    perfect for rolling across hot surfaces, and their
    long tongues are ideal for capturing insect prey.
    Their saliva emits a paralyzing toxin that should
    be avoided.
    
    The toxin that Volvidon spit out can paralyze on
contact. You'll also want to carry some Deodorant,
as the gas they emit can cover you in a stench so
powerful that it makes it impossible to stomach
anything.
`,
    videoUrl: "",
  },
  {
    beastName: "Aknosom",
    smallCrownSize: 763.72,
    largeCrownSize: 1060.72,
    pictureUrl: "",
    description: `Tending to stand on one leg, this monster somewhat
    resembles an umbrella. The Aknosom is highly
    territorial; it will spread out its wings and show
    off its characteristic comb to scare off threats. It
    also bears flammable venom that burns fiercely and
    lingers on the ground when lit. Draw the beast to
    water for an easier fight.
    
    
It can manipulate the umbrella-shaped crest on its
head to curl up, fan out, or shut tight. Observe
its shape closely, and you might be able to predict
which attack it will use next.
`,
    videoUrl: "",
  },
  {
    beastName: "Royal Ludroth",
    smallCrownSize: 1376.33,
    largeCrownSize: 1880.98,
    pictureUrl: "",
    description: `Larger than regular Ludroth, Royal Ludroth use
    their sponge-like mane to absorb water and keep
    from drying out on land. Once the sponge loses
    moisture, they will seek out water to recover.
    They also spew mucus to trip up their prey.
    
    The Royal Ludroth's attacks are empowered when
in proximity of water, and can inflict foes with water-
blight. Combat this by stocking up on Nulberries
and drawing the creature away from aquatic areas.`,
    videoUrl: "",
  },
  {
    beastName: "Barroth",
    smallCrownSize: 1244.76,
    largeCrownSize: 1728.83,
    pictureUrl: "",
    description: `Barroth usually remain beneath the mud, perhaps
    to shield themselves from heat; they are even
    known to attack by flinging mud. They will charge
    in a frenzy at anything that disturbs their bogs.
    
    If you get hit by the mud a Barroth flings around,
you'll get muddy, which means that any pro hunter
should prioritize attacking the muddy parts of the
monster to clean it off! Once you've got rid of all
that mud, fighting it will be some good, clean fun!
`,
    videoUrl: "",
  },
  {
    beastName: "Khezu",
    smallCrownSize: 793.15,
    largeCrownSize: 1004.65,
    pictureUrl: "",
    description: `Loathsome wyverns that dwell in caves and other
    dark places. All but blind, Khezu hunt by smell.
    Their tail has evolved to cling to walls and ceilings.
    After using an electric shock to paralyze their prey,
    they extend their long neck and pounce.
    
    The Khezu will cling to walls or the ceiling
to unleash its electric attacks from above.
Use Wiredash to get to it and knock it down,
or exhaust it to weaken its electricity.`,
    videoUrl: "",
  },
  {
    beastName: "Tetranadon",
    smallCrownSize: 868.49,
    largeCrownSize: 1186.93,
    pictureUrl: "",
    description: `An amphibious monster resembling a frog. Its appetite
    is infinite, and if it sees anything moving, it will gobble
    it up, dirt an all. It's theorized that the dirt it consumes
    builds up in its stomach and aids in digestion. If it eats
    something that it cannot digest, it will throw it back up.
    The cranial disc protecting its tender head is said to
    harden and become a more brilliant blue over time.
    
    After a large meal, its movements become sluggish,
but don't be fooled; its swings become more weighty
and destructive as well! Watch for when it moves
slowly, strike true, and it'll belch up its dinner
and return to normal.`,
    videoUrl: "",
  },
  {
    beastName: "Bishaten",
    smallCrownSize: 832.31,
    largeCrownSize: 1054.26,
    pictureUrl: "",
    description: `A monster with a distinctive tail. While it is
    omnivorous, it has a preference for fruit,
    and keeps various fruits with all kinds of
    effects in its belly pouch. An incredibly
    curious beast, it enjoys playing tricks on
    people, and has been seen to bat fruit at
    its prey using its tail.
    
    Its varied tail attacks are incredibly powerful, and
sometimes it spins around like a top, so avoiding
damage can be tough. But, if you use that chance to
attack, the beast will drop its fruit, and you can
pick it up and throw it back, aiding your hunt.
Watch its moves carefully to find your opening.
`,
    videoUrl: "",
  },
  {
    beastName: "Pukei-Pukei",
    smallCrownSize: 981.18,
    largeCrownSize: 1356.1,
    pictureUrl: "",
    description: `A bird wyvern known to store toxins within
    its body. It uses its tongue like a whip and
    can stretch or shrink it at will, allowing
    it to grab up food. As a defense against
    threats, Pukei-Pukei have numerous toxic
    attacks. Keep an eye on both its mouth
    and tail!
    
    
The regurgitation of a Pukei-Pukei varies depending
on what it has eaten: it may spread wider, linger on
on the ground, or even stun prey more easily. Check,
therefore, that the monster's mouth and tail aren't
swollen prior to engaging.`,
    videoUrl: "",
  },
  {
    beastName: "Jyuratodus",
    smallCrownSize: 1357.83,
    largeCrownSize: 1870.8,
    pictureUrl: "",
    description: `A piscine wyvern that inhabits swamps,
    utilizing the mud there to hunt and survive.
    It wallows in the mire to maximize cutaneous
    respiration and preserve the toughness of its
    scales. The sludge it spits is highly viscous, so
    watch where you step, lest you get stuck in it.
    
    A Jyuratodus's mud-caked carapace is tough, so use
water-elemental weapons to dissolve the mud and get
to its squishy core. Stepping in its mud slows you
down, so pay attention to your footing.
`,
    videoUrl: "",
  },
  {
    beastName: "Basarios",
    smallCrownSize: 1271.7,
    largeCrownSize: 1766.26,
    pictureUrl: "",
    description: `These juvenile Gravios are famous for their
    rock-hard carapaces. They often burrow
    underground, mimicking rocks and savaging
    oblivious miners. Because their carapaces
    are tougher than that of a full-grown Gravios,
    they'll attack a threat by charging at it. They
    are also known to emit a poisonous gas.
    
    Its thick, hardened shell is impervious to most
attacks, making it tricky to approach, but if you
can break its abdominal plating, you should be
able to rip off its shell and deal some heavy hits.
Attacks that produce heat will soften up the hide
and make the job easier.`,
    videoUrl: "",
  },
  {
    beastName: "Somnacanth",
    smallCrownSize: 1390.49,
    largeCrownSize: 1900.35,
    pictureUrl: "",
    description: `A formidable aquatic serpent that crests on moonlit
    nights—likely why it has often been mistaken for a
    mermaid. It expels an intoxicating sleep powder from
    its neck gills and tail, knocking out prey before it can
    resist. Some Somnacanth sightings tell of this species
    making use of unusual shells, so exercise caution if
    you catch one swimming towards you with a shell
    in its claws.
    
    While in the water, it can move about as it pleases,
but it doesn't fare so well on land, so draw it out
to shore for an easy hunt. If you're caught in a cloud
of its sleep powder, it's lights out; use a Wirebug to
leap away from it and position for a counterattack.`,
    videoUrl: "",
  },
  {
    beastName: "Rathian",
    smallCrownSize: 1578.93,
    largeCrownSize: 2157.87,
    pictureUrl: "",
    description: `Fire-breathing female wyverns, also known as
    the "Queens of the Land." With powerful legs
    and poison-secreting tails, they hunt mainly
    on the ground. Sometimes seen preying as a
    couple, Rathian and Rathalos cooperate well.
    
    The strong venom in her tail, along with the wide
reach of her sweeping attacks, makes maneuvering
around the Rathian a dangerous feat. Cutting off her
tail can give you quite a bit more breathing room.`,
    videoUrl: "",
  },
  {
    beastName: "Barioth",
    smallCrownSize: 1881.89,
    largeCrownSize: 2571.93,
    pictureUrl: "",
    description: `Wyverns that rule the eternally frozen Tundra.
    Barioth use their forelegs, tail and their spiked
    scales to traverse the slippery ice with ease; this
    ability makes them very difficult to keep up with.
    
    Destroy the spikes on its winged forelegs and it
won't be as zippy on the ice anymore! If you really
want to slow a Barioth down, aim at those spikes.`,
    videoUrl: "",
  },
  {
    beastName: "Tobi-Kadachi",
    smallCrownSize: 1170.46,
    largeCrownSize: 1612.64,
    pictureUrl: "",
    description: `A fanged wyvern that flies among the treetops.
    Its penchant to brush against the ground and
    the trees as it moves around builds up static
    electricity within its fur. This action allows it to
    reach a charged state—identified by its glowing
    fur—in which its head and tail attacks are said
    to be particularly lethal.
    
    Always keep the Tobi-Kadachi in your sights to avoid
being ambushed from behind. The key to defeating
this monster is to immobilize it and prevent it from
reaching a charged state. If you can make use of
endemic life to afflict it with waterblight, it'll
no longer be able to charge itself up.`,
    videoUrl: "",
  },

  {
    beastName: "Magnamalo",
    smallCrownSize: 1638.8,
    largeCrownSize: 2239.69,
    pictureUrl: "",
    description: `A monster with a carapace like tempered steel armor.
    The vapor around it is actually the expelling of trapped
    gases from the hordes of monsters Magnamalo has
    consumed. This has earned it the moniker "Wyvern of
    Malice." Its shrouded swings can inflict hellfireblight,
    which causes one to combust either spontaneously
    or when hit. Use a Deodorant or a Wirebug to rid
    yourself of hellfire.
    
    The majority of Magnamalo's attacks involve its hellfire.
If you become afflicted with hellfireblight, Wiredash to
rid yourself of this status. You can counter its attacks
by focusing on parts of its body that are emitting hellfire.
If you can manage to ignite any of the vapor with your
attacks, you can deal massive damage.`,
    videoUrl: "",
  },
  {
    beastName: "Anjanath",
    smallCrownSize: 1481.81,
    largeCrownSize: 2025.14,
    pictureUrl: "",
    description: `This belligerent monster will attack anything
    without hesitation. The membrane along its
    tail fans out when it is provoked—a behavior
    theorized to be either an act of intimidation
    or thermoregulation, as it has been known to
    do so when it breathes fire.
    
    Anjanath spits fiery blasts from its mouth utilizing
a unique organ in its throat when it is angered. When
it does so, focus attacks on its throat to gain an edge.`,
    videoUrl: "",
  },
  {
    beastName: "Nargacuga",
    smallCrownSize: 1722.72,
    largeCrownSize: 2354.39,
    pictureUrl: "",
    description: `Flying wyverns that have evolved to live in
    thickly wooded areas. Covered in jet black
    fur, these cunning predators stalk their prey
    from the shadows and attack with ferocious
    speed. Their massive tails are as dexterous
    as they are deadly, and powerful enough to
    slay smaller monsters with one strike.
    
    The Nargacuga is a beast of the shadows, and becomes
enraged by bright light. At the risk of missing the
mark and simply riling it up further, its excellent
hearing can be exploited by throwing a Sonic Bomb
as it pauses to focus. It can destroy Pitfall Traps,
so be discreet when placing them.`,
    videoUrl: "",
  },
  {
    beastName: "Mizutsune",
    smallCrownSize: 1648.88,
    largeCrownSize: 2253.48,
    pictureUrl: "",
    description: `A specially evolved Leviathan with a sleek,
    lithe body, Mizutsune can secrete a peculiar
    foam that covers its foes in immobilizing bubbles.
    Once its prey's movement is impaired, it closes
    in with spry, dance-like movements.
    
    
A Mizutsune slicks itself up to do a sliding attack,
but its sliding also makes it susceptible to falling
over, providing an opening for attack. If you're hit
by its bubbles, you can scrub them off by running
around and dodging furiously, or using a Cleanser.`,
    videoUrl: "",
  },
  {
    beastName: "Goss Harag",
    smallCrownSize: 657.87,
    largeCrownSize: 899.9,
    pictureUrl: "",
    description: `A monster native to ice-cold climates. Covered in
    fur so thick it keeps out the harsh frost, it roams
    the snowy plains in search of prey. It can inhale
    the cold air to freeze its own bodily fluids and
    then spit them out to create icy blades on its
    arms. When riled up, the Goss Harag turns red
    and becomes exceedingly dangerous.
    
    In hitting the accumulated frost on its forelegs, a
hunter risks being afflicted with iceblight, but is
rewarded by the creature being toppled when the
frost is shattered. Areas that appear red when
the creature is angry are the most susceptible,
so focus your efforts there!`,
    videoUrl: "",
  },
  {
    beastName: "Rathalos",
    smallCrownSize: 1533.79,
    largeCrownSize: 2096.19,
    pictureUrl: "",
    description: `Terrible wyverns called "Kings of the Skies."
    Along with Rathian, they stake wide territories
    centered around their nests. Rathalos descend
    on invaders from the sky, attacking with poison
    claws and a breath of fire.
    
    The King of the Skies lives up to its name by
staying airborne for most of its attacks. A well-
aimed Flash Bomb can help to bring a Rathalos
down to earth, however.`,
    videoUrl: "",
  },
  {
    beastName: "Almudron",
    smallCrownSize: 2425.4,
    largeCrownSize: 3314.23,
    pictureUrl: "",
    description: `As its name implies, Almudron spends a great deal
    of time lurking in mud—at least until it emerges
    to smother approaching prey. From its tail oozes
    a strange golden fluid, which Almudron uses to
    dissolve the ground beneath its prey, arresting
    them in a mire so that it can drag them under.
    When enraged, it produces more fluid, turning
    the mud golden. When you see gold, watch out!
    
    The mud-covered tail is what makes this species strong;
    attacking this outer layer will chip away at it, so
    removing this muddy shroud should be your priority.
    The gold-glimmering mud is harmful to the touch, so
    mind the color of your surroundings while hunting
    these beasts. `,
    videoUrl: "",
  },
  {
    beastName: "Zinogre",
    smallCrownSize: 1386.59,
    largeCrownSize: 1895.1,
    pictureUrl: "",
    description: `Fanged wyverns whose bodies are streaked with
    electricity. Sharp claws and strong limbs allow them
    to thrive in mountainous terrain. During hunts, they
    gather numerous Thunderbugs to boost their power
    and enter a supercharged state.
    
    In their supercharged states, Zinogre not only have
    different attack patterns but also become faster,
    hit harder, and gain immunity to Shock Traps.
    Staggering them, however, may knock them
    out of this state. `,
    videoUrl: "",
  },
  {
    beastName: "Tigrex",
    smallCrownSize: 1747.7,
    largeCrownSize: 2388.52,
    pictureUrl: "",
    description: `Flying wyverns whose primitive origins are obvious.
    Prone to violence, they display incredible ferocity
    with their claws, jaws, and developed limbs. They
    inhabit a wide area searching for prey, and have
    even been spotted in regions of harsh cold.
    
    The Tigrex's charge is swift, vicious, and far-
reaching. During the hunt, keep to its side to
stay outside its range; let it keep charging
and eventually it will tire and slow down,
opening itself up to your counterattack.`,
    videoUrl: "",
  },
  {
    beastName: "Diablos",
    smallCrownSize: 1886.62,
    largeCrownSize: 2599.35,
    pictureUrl: "",
    description: `Known as the "Tyrant of the Desert." The Diablos
    is extremely territorial and will use its massive horns
    to charge at invaders. Diablos have the ability to burrow
    underground and use this ability to strike from below,
    however, their sensitive ears make them susceptible
    to Sonic Bombs. Despite their predatory appearance,
    they are herbivorous and mostly feed on cactus.
    
    Diablos can be forcibly brought to the surface by
using loud sounds. And its charging attack, while
devastatingly powerful, can be baited into colliding
with anthills, momentarily getting the Diablos
stuck.
`,
    videoUrl: "",
  },
  {
    beastName: "Rakna-Kadaki",
    smallCrownSize: 771.23,
    largeCrownSize: 1054.2,
    pictureUrl: "",
    description: `A Rakna-Kadaki is usually seen covered in sticky
    webbing. Clinging to its abdomen are its offspring,
    known as Rachnoid, which it controls using the
    flammable gas that builds up there. Rachnoid spit
    fire, capture prey, and support the Rakna-Kadaki's
    massive body. As their numbers dwindle, the beast
    will hatch more, at which point it is extremely
    dangerous.
    
    It moves quickly by tethering webs to its offspring,
but a strike timed well enough to sever these threads
will cause the Rakna-Kadaki to lose its balance and
provide you an opening. If, however, you become
entangled in its web and roasted by its flames,
expect to take a significant amount of damage.`,
    videoUrl: "",
  },
  {
    beastName: "Kushala Daora",
    smallCrownSize: 1855.73,
    largeCrownSize: 2353.14,
    pictureUrl: "",
    description: `It's difficult to even get close to one of these
    metallic elder dragons, but some claim better
    odds if the creature is weakened with poison,
    or has its horn broken, limiting the amount of
    wind pressure it can muster.
    
    Beckons dark dragon wind pressure as the whirlwinds
surrounding its body seethe more wildly, and will
deflect any non-piercing bow or bowgun shots not
aimed at its head. Keep on the attack to quell the
wind's power—reports also tell of an opening in its
stormy barrier after unleashing a giant wind attack.`,
    videoUrl: "",
  },
  {
    beastName: "Chameleos",
    smallCrownSize: 2136.6,
    largeCrownSize: 2766.34,
    pictureUrl: "",
    description: `Precious few sightings of this elder dragon
    have been recorded, leading to claims
    it can vanish into its environment like
    a chameleon—hence its name. Witnesses report
    that, when enraged, it can spew a fog-like breath,
    which seems to come out of nowhere, and enhance its
    strength by licking the pollen from Petalaces.
    
    Chameleos have a meddlesome tendency to vanish
suddenly, but by watching their attacks just before
they do, you can somewhat predict where they'll
reappear. Furthermore, there are eye-witness
reports of a Chameleos not being able to vanish
after its horn on the tip of its nose had been broken.`,
    videoUrl: "",
  },
  {
    beastName: "Teostra",
    smallCrownSize: 1736.44,
    largeCrownSize: 2219.78,
    pictureUrl: "",
    description: `Brutal elder dragons wreathed in flames
    that spew blazing fire. Teostra are of such
    a fierce and deadly nature that the Guild
    closely monitors their movements.
    
    The black scale dust a Teostra scatters will spread
over a wide area until it finally explodes; however,
reports claim that damaging the elder dragon's head
can prevent the larger explosions. Push on the attack
when it's fully enveloped in flames or scale dust to
stun it, suppressing whichever it was accumulating.`,
    videoUrl: "",
  },
  {
    beastName: "Rajang",
    smallCrownSize: 820.53,
    largeCrownSize: 1048.92,
    pictureUrl: "",
    description: `An ultra-aggressive creature that is rarely sighted
    and seldom survived. Those that have survived
    report that it exhibits a strange attack. Rajang
    are said to be loners, and this isolated life has
    made it difficult to pin down its territorial leanings.
    When angered, part of its pelt turns a golden color.
    
    A Rajang is most dangerous when its arms are
powered up, allowing it to even destroy Shock
Traps. Attack its tail to remove this effect. In
its regular state, it will also avoid Pitfall Traps.
It will immediately attack anything that invades
its territory, so watch your step.`,
    videoUrl: "",
  },
  {
    beastName: "Bazelgeuse",
    smallCrownSize: 1735.54,
    largeCrownSize: 2371.9,
    pictureUrl: "",
    description: `A nefarious flying wyvern that travels the
    world in search of prey. It scatters its own
    explosive scales over a wide area to prey
    on whatever gets caught in the blast.
    In some places, this has earned it
    the nickname "Bomber Wyvern."
    
    The formidable scales that the Bazelgeuse scatters
explode after receiving an impact but the time they
take to regenerate can be used as a chance to attack.
When its scales turn red hot, they will explode immediately
and require caution, however, parts of the
body will be soft too—the perfect time to attack.`,
    videoUrl: "",
  },
  {
    beastName: "Apex Arzuros",
    smallCrownSize: 681.88,
    largeCrownSize: 745.81,
    pictureUrl: "",
    description: `An Arzuros so mighty, it was crowned an Apex.
    Its body is covered in scars and wounds as if it
    had been caught in a storm, and it's seemingly
    always dominated by wrath and terror. Its forelegs
    are massive, deft removers of any who'd stand in
    their way. The call of an Apex unleashes its tortured
    anger on nearby beasts, driving them into a frenzy.`,
    videoUrl: "",
  },
  {
    beastName: "Apex Rathian",
    smallCrownSize: 1936.82,
    largeCrownSize: 2299.98,
    pictureUrl: "",
    description: `A Rathian so mighty, it was crowned an Apex. Its
    body is covered in scars and wounds as if it had
    been caught in a storm, and it's seemingly always
    dominated by wrath and terror. Its tail oozes a
    venom far deadlier than any of a normal monster.
    The call of an Apex unleashes its tortured anger
    on nearby beasts, driving them into a frenzy.`,
    videoUrl: "",
  },

  {
    beastName: "Apex Mizu",
    smallCrownSize: 2110.57,
    largeCrownSize: 2506.31,
    pictureUrl: "",
    description: `A Rathalos so mighty, it was crowned an Apex.
    Its body is covered in scars and wounds as if it
    had been caught in a storm, and it's seemingly
    always dominated by wrath and terror. Its every
    breath releases flaming jets that singe the very
    air. The call of an Apex unleashes its tortured
    anger on nearby beasts, driving them into a frenzy.`,
    videoUrl: "",
  },

  {
    beastName: "Apex Ratholos",
    smallCrownSize: 1818.4,
    largeCrownSize: 2305.8,
    pictureUrl: "",
    description: `A Rathalos so mighty, it was crowned an Apex.
    Its body is covered in scars and wounds as if it
    had been caught in a storm, and it's seemingly
    always dominated by wrath and terror. Its every
    breath releases flaming jets that singe the very
    air. The call of an Apex unleashes its tortured
    anger on nearby beasts, driving them into a frenzy.`,
    videoUrl: "",
  },
  {
    beastName: "Apex Diablos ",
    smallCrownSize: 2202.81,
    largeCrownSize: 2793.25,
    pictureUrl: "",
    description: `A Diablos so mighty, it was crowned an Apex.
    Its body is covered in scars and wounds as if it
    had been caught in a storm, and it's seemingly
    always dominated by wrath and terror. Its well-
    developed horns add to the lethality of its charge.
    The call of an Apex unleashes its tortured anger
    on nearby beasts, driving them into a frenzy.`,
    videoUrl: "",
  },
  {
    beastName: "Apex Zinogre ",
    smallCrownSize: 1494.44,
    largeCrownSize: 1895.01,
    pictureUrl: "",
    description:
      "A Zinogre so mighty, it was crowned an Apex. It body is covered in scars and wounds as if it had  been caught in a storm, and its seemingly always dominated by wrath and terror. Its forelegs— and their every strike-brim with ferocious sparks. The call of an Apex unleashes its tortured anger  on nearby beasts, driving them into a frenzy. ",
    videoUrl: "",
  },
];
