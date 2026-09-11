import {
    B as vt,
    a as J,
    b as nt,
    V as E,
    M as Z,
    Q as wt,
    E as xt,
    C as V,
    S as rt,
    c as lt,
    d as ct,
    T as Mt,
    O as W,
    L as kt,
    e as D,
    f as At,
    g as _,
    h as ht,
    i as dt,
    j as Et,
    I,
    P as B,
    k as C,
    R as Y,
    D as j,
    l as Tt,
    m as Q,
    n as F,
    W as St,
    o as Ct,
    A as Lt,
    p as zt,
    q as It,
    H as Rt,
    r as tt,
    s as Pt,
    t as qt,
    u as Ot,
    v as Dt,
    w as Nt
} from "./three-CD3myJm5.js";

(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) a(e);
    new MutationObserver(e => {
        for (const i of e)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && a(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(e) {
        const i = {};
        return e.integrity && (i.integrity = e.integrity), e.referrerPolicy && (i.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? i.credentials = "include" : e.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function a(e) {
        if (e.ep) return;
        e.ep = !0;
        const i = s(e);
        fetch(e.href, i)
    }
})();

// ==========================================
// 15 CARDS DATABASE (5 Original + 10 New)
// ==========================================
const w = {
    lancer: {
        id: "lancer",
        attackDuration: .62,
        impactAt: .23,
        acceleration: 9,
        name: "Lancero",
        role: "ALCANCE · 1 UNIDAD",
        cost: 3,
        hp: 310,
        damage: 66,
        speed: 1.65,
        range: 2.0,
        cooldown: 1.05,
        count: 1,
        radius: .4,
        color: "#76c9ff",
        description: "Su lanza mantiene a raya al enemigo. Despliégalo detrás del caballero."
    },
    arrows: {
        id: "arrows",
        isSpell: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "Lluvia de flechas",
        role: "HECHIZO · ÁREA",
        cost: 3,
        hp: 0,
        damage: 190,
        speed: 0,
        range: 2.5,
        cooldown: 0,
        count: 0,
        radius: 2.5,
        color: "#91d6ff",
        description: "Una descarga sobre cualquier punto de la arena. Excelente contra grupos."
    },
    knight: {
        id: "knight",
        attackDuration: .98,
        impactAt: .46,
        acceleration: 4.6,
        name: "Caballero pesado",
        role: "TANQUE · 1 UNIDAD",
        cost: 5,
        hp: 1040,
        damage: 105,
        speed: .85,
        range: 1.05,
        cooldown: 1.5,
        count: 1,
        radius: .6,
        color: "#c4d6f4",
        description: "Una armadura imponente que absorbe el daño. Lidera con él tu avance."
    },
    imps: {
        id: "imps",
        attackDuration: .46,
        impactAt: .16,
        acceleration: 13,
        name: "Duendes del vacío",
        role: "ENJAMBRE · 5 UNIDADES",
        cost: 2,
        hp: 125,
        damage: 30,
        speed: 2.15,
        range: .78,
        cooldown: .72,
        count: 5,
        radius: .32,
        color: "#c980ff",
        description: "Cinco pequeños duendes morados. Rodean a enemigos solitarios a gran velocidad."
    },
    mage: {
        id: "mage",
        attackDuration: 1.1,
        impactAt: .5,
        acceleration: 5,
        name: "Mago de fuego",
        role: "DISTANCIA · ÁREA",
        cost: 4,
        hp: 260,
        damage: 92,
        speed: .95,
        range: 4.5,
        cooldown: 1.65,
        count: 1,
        radius: .4,
        color: "#ffac5c",
        description: "Lanza orbes ardientes que estallan al impactar. Protégelo tras tus tropas."
    },
    bomb_tower: {
        id: "bomb_tower",
        isBuilding: true,
        attackDuration: 1.2,
        impactAt: .4,
        acceleration: 0,
        name: "Torre de bombas",
        role: "EDIFICIO · DEFENSIVO",
        cost: 4,
        hp: 1120,
        damage: 180,
        splashRadius: 1.8,
        speed: 0,
        range: 5.5,
        cooldown: 1.6,
        count: 1,
        radius: .85,
        lifetime: 40,
        color: "#e67e22",
        description: "Estructura defensiva fija que lanza bombas parabólicas destructivas con daño de área."
    },
    lightning: {
        id: "lightning",
        isSpell: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "Hechizo de rayos",
        role: "HECHIZO · 3 BLANCOS",
        cost: 6,
        hp: 0,
        damage: 650,
        speed: 0,
        range: 3.5,
        cooldown: 0,
        count: 0,
        radius: 3.5,
        targets: 3,
        stunDuration: 0.5,
        color: "#54a0ff",
        description: "Fulmina a los 3 objetivos con más vida en el área con daño masivo y aturdimiento."
    },
    fireball: {
        id: "fireball",
        isSpell: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "Bola de fuego",
        role: "HECHIZO · IMPACTO",
        cost: 4,
        hp: 0,
        damage: 570,
        speed: 0,
        range: 2.5,
        cooldown: 0,
        count: 0,
        radius: 2.5,
        knockback: 1.6,
        color: "#ff4757",
        description: "Devastador meteorito ígneo que provoca gran daño en área y empuja a las tropas enemigas."
    },
    poison: {
        id: "poison",
        isSpell: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "Hechizo de veneno",
        role: "HECHIZO · DURACIÓN 5s",
        cost: 4,
        hp: 0,
        damage: 75,
        speed: 0,
        range: 3.5,
        cooldown: 0,
        count: 0,
        radius: 3.5,
        duration: 5.0,
        slow: 0.35,
        color: "#2ed573",
        description: "Cubre la zona con humo tóxico durante 5s, causando daño continuo y ralentizando."
    },
    freeze: {
        id: "freeze",
        isSpell: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "Hechizo de hielo",
        role: "HECHIZO · CONGELA 5s",
        cost: 4,
        hp: 0,
        damage: 95,
        speed: 0,
        range: 3.0,
        cooldown: 0,
        count: 0,
        radius: 3.0,
        duration: 5.0,
        color: "#70a1ff",
        description: "Congela completamente a las unidades y defensas enemigas durante 5 segundos."
    },
    knight_rider: {
        id: "knight_rider",
        attackDuration: .85,
        impactAt: .35,
        acceleration: 8,
        name: "Caballero a caballo",
        role: "CARGA · IMPACTO",
        cost: 5,
        hp: 1450,
        damage: 160,
        chargeDamage: 320,
        speed: 1.4,
        chargeSpeed: 2.8,
        range: 1.4,
        cooldown: 1.3,
        count: 1,
        radius: .65,
        color: "#ffa502",
        description: "Avanza al trote y tras 2s acelera a galope tendido. Su primer golpe inflige el doble de daño."
    },
    titan: {
        id: "titan",
        targetsBuildings: true,
        attackDuration: 1.25,
        impactAt: .65,
        acceleration: 3.5,
        name: "Titán",
        role: "TANQUE · ESTRUCTURAS",
        cost: 6,
        hp: 2850,
        damage: 210,
        speed: .65,
        range: 1.25,
        cooldown: 1.8,
        count: 1,
        radius: .85,
        color: "#a4b0be",
        description: "Coloso ciclópeo de piedra con una salud gigantesca. Ignora a las tropas y arrasa las puertas."
    },
    archers: {
        id: "archers",
        attackDuration: .75,
        impactAt: .28,
        acceleration: 8,
        name: "Arqueros",
        role: "DISTANCIA · 2 UNIDADES",
        cost: 3,
        hp: 250,
        damage: 75,
        speed: 1.4,
        range: 5.0,
        cooldown: 1.1,
        count: 2,
        radius: .38,
        color: "#1dd1a1",
        description: "Pareja de hábiles arqueros con arcos de precisión. Excelente apoyo a distancia."
    },
    the_log: {
        id: "the_log",
        isSpell: true,
        isRolling: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "El Tronco",
        role: "HECHIZO · ARROLLAR",
        cost: 2,
        hp: 0,
        damage: 240,
        speed: 5.5,
        range: 11.0,
        cooldown: 0,
        count: 0,
        radius: 1.6,
        knockback: 1.8,
        color: "#b33939",
        description: "Rueda por la arena aplastando y empujando a todas las tropas terrestres enemigas."
    },
    xbow: {
        id: "xbow",
        isBuilding: true,
        attackDuration: .28,
        impactAt: .12,
        acceleration: 0,
        name: "Ballestero",
        role: "EDIFICIO · ASEDIO",
        cost: 6,
        hp: 1380,
        damage: 35,
        speed: 0,
        range: 11.5,
        cooldown: .3,
        count: 1,
        radius: .85,
        lifetime: 35,
        color: "#57606f",
        description: "Ballesta de asedio con cadencia ultrarrápida y alcance extremo capaz de llegar a las puertas."
    }
};

const ALL_CARD_KEYS = Object.keys(w);

// 3 Default Decks of 8 cards each
const DEFAULT_DECKS = {
    1: ["knight", "archers", "lancer", "mage", "arrows", "fireball", "bomb_tower", "the_log"],
    2: ["titan", "archers", "knight_rider", "imps", "lightning", "poison", "freeze", "xbow"],
    3: ["knight_rider", "the_log", "fireball", "lancer", "imps", "freeze", "bomb_tower", "mage"]
};

function loadSavedDecks() {
    try {
        const data = localStorage.getItem("ember_gates_decks_v2");
        if (data) {
            const p = JSON.parse(data);
            if (p[1] && p[2] && p[3]) return p;
        }
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_DECKS));
}

function saveDecks(decks) {
    try {
        localStorage.setItem("ember_gates_decks_v2", JSON.stringify(decks));
    } catch (e) {}
}

let CURRENT_DECK_TAB = 1;
let USER_DECKS = loadSavedDecks();

function getActiveBattleDeck() {
    return USER_DECKS[CURRENT_DECK_TAB] || DEFAULT_DECKS[1];
}

function getAverageElixir(deck) {
    if (!deck || !deck.length) return "0.0";
    const sum = deck.reduce((acc, k) => acc + (w[k]?.cost || 0), 0);
    return (sum / deck.length).toFixed(1);
}

const M = {
    gateZ: 13.55,
    gateSegments: 5,
    segmentHp: 640,
    duration: 180,
    overtime: 45,
    maxEnergy: 10,
    startingEnergy: 5,
    energyPerSecond: .43,
    doubleEnergyAt: 60,
    fixedStep: 1 / 30,
    maxUnits: 150,
    maxPerTeam: 75,
    cardCooldown: .8,
    deploymentZ: .25,
    projectileSpeed: 10,
    arrowDelay: .95,
    arrowGateScale: .32,
    seed: 7421
};

const Ut = g => g === 0 ? 1 : 0;
const et = g => g === 0 ? -1 : 1;
const S = (g, t, s) => Math.max(t, Math.min(s, g));

// Player battle state with 8-card cycle (4 in hand + 1 next + 3 in queue)
const st = (deckList) => {
    const fullDeck = [...(deckList || getActiveBattleDeck())];
    const hand = fullDeck.slice(0, 4);
    const next = fullDeck[4];
    const queue = fullDeck.slice(5);
    const cooldowns = {};
    for (const k of ALL_CARD_KEYS) cooldowns[k] = 0;
    return {
        energy: M.startingEnergy,
        deck: fullDeck,
        cooldowns,
        hand,
        next,
        queue,
        played: 0,
        kills: 0,
        damage: 0
    };
};

function it(deck0, deck1) {
    return {
        phase: "menu",
        countdown: 3,
        time: M.duration,
        elapsed: 0,
        overtime: !1,
        winner: null,
        units: [],
        gates: [],
        projectiles: [],
        spells: [],
        poisonClouds: [],
        players: [st(deck0), st(deck1)],
        events: [],
        seed: M.seed
    };
}

class X {
    constructor(t = 1, s = "normal", deck0 = null, deck1 = null) {
        this.botTeam = t;
        this.difficulty = s;
        this.deck0 = deck0 || getActiveBattleDeck();
        this.deck1 = deck1 || DEFAULT_DECKS[2];
    }
    botTeam;
    difficulty;
    deck0;
    deck1;
    state = it();
    id = 1;
    eventId = 1;
    botTimer = 2.1;
    grid = new Map;
    unitPool = [];

    start(t = !0, playerDeck = null) {
        if (playerDeck) this.deck0 = playerDeck;
        this.state = it(this.deck0, this.deck1);
        this.id = 1;
        this.eventId = 1;
        this.botTimer = 2.1;
        this.unitPool.length = 0;
        this.state.phase = t ? "countdown" : "playing";

        for (const s of [0, 1]) {
            for (let a = 0; a < M.gateSegments; a++) {
                this.state.gates.push({
                    id: -1 - s * 5 - a,
                    team: s,
                    segment: a,
                    x: -7.2 + a * 3.6,
                    z: s === 0 ? M.gateZ : -13.55,
                    hp: M.segmentHp,
                    maxHp: M.segmentHp,
                    hurtTime: 0
                });
            }
        }
    }

    random() {
        let t = this.state.seed;
        return t ^= t << 13, t ^= t >>> 17, t ^= t << 5, this.state.seed = t, (t >>> 0) / 4294967296;
    }

    emit(t) {
        this.state.events.push({
            ...t,
            id: this.eventId++
        });
    }

    deploy({ team: t, card: s, x: a, z: e, slot: i }) {
        const o = this.state;
        const c = w[s];
        if (o.phase !== "playing") return { ok: !1, reason: "Espera al comienzo del duelo" };
        if (!c || (t !== 0 && t !== 1) || !Number.isFinite(a) || !Number.isFinite(e)) return { ok: !1, reason: "Despliegue no válido" };
        if (Math.abs(a) > 8.9 || Math.abs(e) > 14.1) return { ok: !1, reason: "Elige un punto dentro de la arena" };

        const isUniversalSpell = c.isSpell && c.id !== "the_log";
        if (!isUniversalSpell && (t === 0 ? e < M.deploymentZ : e > -.25)) {
            return { ok: !1, reason: "Despliega tus tropas en tu mitad de la arena" };
        }

        const l = o.players[t];
        const r = i ?? l.hand.indexOf(s);
        if (!Number.isInteger(r) || r < 0 || r >= 4 || l.hand[r] !== s) {
            return { ok: !1, reason: "Esta carta está esperando su turno" };
        }
        if (l.energy + 1e-6 < c.cost) {
            return { ok: !1, reason: `Necesitas ${c.cost} de energía` };
        }
        if (l.cooldowns[s] > 0) {
            return { ok: !1, reason: "La carta se está preparando" };
        }
        if (o.units.filter(n => n.team === t && n.hp > 0).length + c.count > M.maxPerTeam) {
            return { ok: !1, reason: "Tu ejército está completo" };
        }
        if (o.units.length + c.count > M.maxUnits) {
            return { ok: !1, reason: "La arena está llena. Espera un instante" };
        }

        l.energy -= c.cost;
        l.cooldowns[s] = M.cardCooldown;
        l.played++;

        // 8-Card Hand Cycle: replace hand slot with next, next from queue, queue gets played card
        const playedCard = l.hand[r];
        l.hand[r] = l.next;
        l.next = l.queue.shift();
        l.queue.push(playedCard);

        a = S(a, -8.4, 8.4);
        e = S(e, -12.2, 12.2);

        // Spell resolutions:
        if (s === "arrows") {
            o.spells.push({ id: this.id++, team: t, type: "arrows", x: a, z: e, delay: M.arrowDelay, impacted: !1 });
            this.emit({ type: "arrows", team: t, x: a, z: e, kind: s });
        } else if (s === "lightning") {
            // Strikes top 3 highest HP enemy targets in radius 3.5
            const targets = [];
            for (const u of o.units) {
                if (u.team !== t && u.hp > 0 && Math.hypot(u.x - a, u.z - e) <= 3.5) targets.push(u);
            }
            for (const g of o.gates) {
                if (g.team !== t && g.hp > 0 && Math.hypot(Math.max(0, Math.abs(g.x - a) - 1.8), g.z - e) <= 3.5) targets.push(g);
            }
            targets.sort((x1, x2) => x2.hp - x1.hp);
            const top3 = targets.slice(0, 3);
            for (const trg of top3) {
                this.damage(trg, c.damage, t, "lightning");
                if (trg.id > 0) trg.stunned = c.stunDuration;
            }
            this.emit({ type: "lightning", team: t, x: a, z: e, targets: top3.map(tg => ({ x: tg.x, z: tg.z })) });
        } else if (s === "fireball") {
            o.spells.push({
                id: this.id++,
                team: t,
                type: "fireball",
                x: a,
                z: e,
                startX: a * 0.4,
                startZ: t === 0 ? 14 : -14,
                delay: 0.85,
                impacted: !1
            });
            this.emit({ type: "fireball-launch", team: t, startX: a * 0.4, startZ: t === 0 ? 14 : -14, targetX: a, targetZ: e });
        } else if (s === "poison") {
            o.poisonClouds.push({
                id: this.id++,
                team: t,
                x: a,
                z: e,
                radius: c.radius,
                duration: c.duration,
                tickTimer: 0.5,
                dps: c.damage,
                slow: c.slow
            });
            this.emit({ type: "poison", team: t, x: a, z: e, radius: c.radius, duration: c.duration });
        } else if (s === "freeze") {
            // Freezes all enemy units and gates in radius 3.0 for 5.0 seconds
            for (const u of o.units) {
                if (u.team !== t && u.hp > 0 && Math.hypot(u.x - a, u.z - e) <= c.radius) {
                    u.frozen = c.duration;
                    this.damage(u, c.damage, t, "freeze");
                }
            }
            for (const g of o.gates) {
                if (g.team !== t && g.hp > 0 && Math.hypot(Math.max(0, Math.abs(g.x - a) - 1.8), g.z - e) <= c.radius) {
                    g.frozen = c.duration;
                    this.damage(g, c.damage * M.arrowGateScale, t, "freeze");
                }
            }
            this.emit({ type: "freeze", team: t, x: a, z: e, radius: c.radius });
        } else if (s === "the_log") {
            // Rolls forward across lane
            const logUnit = {
                id: this.id++,
                team: t,
                kind: "the_log",
                isRolling: !0,
                x: a,
                z: e,
                hp: 1,
                maxHp: 1,
                speed: c.speed,
                damage: c.damage,
                knockback: c.knockback,
                distTraveled: 0,
                maxDist: c.range,
                hitIds: new Set(),
                facing: t === 0 ? -Math.PI : 0,
                vx: 0,
                vz: t === 0 ? -c.speed : c.speed,
                age: 0,
                deathTime: 0,
                attackTime: 0,
                cooldown: 0,
                hurtTime: 0,
                state: "walk"
            };
            o.units.push(logUnit);
            this.emit({ type: "log-deploy", team: t, x: a, z: e });
        } else {
            // Troop or Building
            const count = c.count || 1;
            for (let n = 0; n < count; n++) {
                const h = count > 1 ? (n / count) * Math.PI * 2 : 0;
                const p = count > 1 ? (count === 2 ? 0.9 : 0.65) : 0;
                const u = this.unitPool.pop() ?? {};
                Object.assign(u, {
                    id: this.id++,
                    team: t,
                    kind: s,
                    isBuilding: !!c.isBuilding,
                    lifetime: c.lifetime || 0,
                    maxLifetime: c.lifetime || 0,
                    charging: !1,
                    chargeTimer: 0,
                    frozen: 0,
                    stunned: 0,
                    x: S(a + Math.cos(h) * p, -8.5, 8.5),
                    z: S(e + Math.sin(h) * p, -12.4, 12.4),
                    hp: c.hp,
                    maxHp: c.hp,
                    cooldown: .35,
                    age: 0,
                    attackTime: 0,
                    hurtTime: 0,
                    state: "spawn",
                    targetId: 0,
                    facing: t === 0 ? -Math.PI / 2 : Math.PI / 2,
                    deathTime: 0,
                    vx: 0,
                    vz: 0,
                    attackPending: !1,
                    attackTarget: 0,
                    attackX: 0,
                    attackZ: 0,
                    footstep: 0
                });
                o.units.push(u);
            }
            this.emit({ type: "deploy", team: t, x: a, z: e, kind: s });
        }
        return { ok: !0 };
    }

    step(t) {
        const s = this.state;
        if (s.events = [], s.phase === "menu" || s.phase === "deck_builder" || s.phase === "finished") return;

        if (s.phase === "countdown") {
            const e = Math.ceil(s.countdown);
            s.countdown -= t;
            if (Math.ceil(s.countdown) !== e) {
                this.emit({ type: "countdown", team: 0, x: 0, z: 0, amount: Math.ceil(s.countdown) });
            }
            if (s.countdown <= 0) s.phase = "playing";
            return;
        }

        s.elapsed += t;
        s.time -= t;
        const a = s.time <= M.doubleEnergyAt || s.overtime ? 2 : 1;
        for (const e of s.players) {
            e.energy = Math.min(M.maxEnergy, e.energy + t * M.energyPerSecond * a);
            for (const i of ALL_CARD_KEYS) e.cooldowns[i] = Math.max(0, e.cooldowns[i] - t);
        }
        for (const e of s.gates) {
            e.hurtTime = Math.max(0, e.hurtTime - t);
            if (e.frozen > 0) e.frozen = Math.max(0, e.frozen - t);
        }

        // Poison Clouds Update (5s DoT + Slow)
        for (let idx = s.poisonClouds.length - 1; idx >= 0; idx--) {
            const cloud = s.poisonClouds[idx];
            cloud.duration -= t;
            cloud.tickTimer -= t;
            if (cloud.tickTimer <= 0) {
                cloud.tickTimer = 0.5;
                const dmgPerTick = cloud.dps * 0.5;
                for (const u of s.units) {
                    if (u.team !== cloud.team && u.hp > 0 && Math.hypot(u.x - cloud.x, u.z - cloud.z) <= cloud.radius) {
                        this.damage(u, dmgPerTick, cloud.team, "poison");
                        u.poisonSlow = 0.6;
                    }
                }
                for (const g of s.gates) {
                    if (g.team !== cloud.team && g.hp > 0 && Math.hypot(Math.max(0, Math.abs(g.x - cloud.x) - 1.8), g.z - cloud.z) <= cloud.radius) {
                        this.damage(g, dmgPerTick * M.arrowGateScale, cloud.team, "poison");
                    }
                }
            }
            if (cloud.duration <= 0) s.poisonClouds.splice(idx, 1);
        }

        this.rebuildGrid();
        if (this.botTeam !== null) this.updateBot(t, this.botTeam);

        // Units update
        for (const e of s.units) {
            e.age += t;
            e.attackTime = Math.max(0, e.attackTime - t);
            e.hurtTime = Math.max(0, e.hurtTime - t);
            e.cooldown = Math.max(0, e.cooldown - t);
            if (e.poisonSlow > 0) e.poisonSlow = Math.max(0, e.poisonSlow - t);

            // Freeze check (5 seconds complete freeze)
            if (e.frozen > 0) {
                e.frozen = Math.max(0, e.frozen - t);
                e.vx = e.vz = 0;
                continue;
            }
            if (e.stunned > 0) {
                e.stunned = Math.max(0, e.stunned - t);
                e.vx = e.vz = 0;
                continue;
            }

            // Building lifetime decay
            if (e.isBuilding && e.lifetime > 0) {
                const decay = (e.maxHp / e.lifetime) * t;
                e.hp -= decay;
                if (e.hp <= 0) {
                    e.hp = 0;
                    e.state = "dead";
                    e.deathTime += t;
                    continue;
                }
            }

            // The Log rolling forward mechanics
            if (e.isRolling) {
                e.z += e.vz * t;
                e.distTraveled += Math.abs(e.vz * t);
                for (const m of this.nearby(e.x, e.z, 2.0)) {
                    if (m.team !== e.team && m.hp > 0 && !m.isBuilding && !e.hitIds.has(m.id)) {
                        e.hitIds.add(m.id);
                        this.damage(m, e.damage, e.team, "the_log");
                        m.z += (e.vz > 0 ? 1 : -1) * e.knockback;
                        m.stunned = 0.4;
                    }
                }
                if (e.distTraveled >= e.maxDist || Math.abs(e.z) > 13.5) {
                    e.hp = 0;
                    e.state = "dead";
                    e.deathTime = 1.5;
                }
                continue;
            }

            if (e.hp <= 0) {
                e.state = "dead";
                e.deathTime += t;
                continue;
            }
            if (e.age < .3) continue;

            const i = w[e.kind];

            // Resolve pending attack
            if (e.attackPending && e.attackTime <= i.attackDuration - i.impactAt) {
                e.attackPending = !1;
                this.resolveAttack(e);
            }
            if (e.attackTime > 0) {
                e.state = "attack";
                e.vx = e.vz = 0;
                continue;
            }

            // Target search
            let o, c = 1 / 0;
            const searchDist = i.range > 6 ? 12 : 6.8;

            // Titan only targets buildings and gates!
            if (!i.targetsBuildings) {
                const l = this.nearby(e.x, e.z, searchDist);
                for (const m of l) {
                    if (m.team === e.team || m.hp <= 0 || m.isRolling) continue;
                    const v = Math.hypot(e.x - m.x, e.z - m.z);
                    const y = v * (m.id === e.targetId ? .78 : 1);
                    if (y < c && v < searchDist) {
                        c = y;
                        o = m;
                    }
                }
            }

            // Buildings and gates target search
            if (!o) {
                for (const m of s.units) {
                    if (m.team !== e.team && m.hp > 0 && m.isBuilding) {
                        const v = Math.hypot(e.x - m.x, e.z - m.z);
                        if (v < c) { c = v; o = m; }
                    }
                }
            }
            if (!o) {
                for (const m of s.gates) {
                    if (m.team === e.team || m.hp <= 0) continue;
                    const v = Math.max(0, Math.abs(m.x - e.x) - 1.55);
                    const y = Math.hypot(v, m.z - e.z);
                    if (y < c) { c = y; o = m; }
                }
            }

            if (!o) {
                e.state = "idle";
                e.chargeTimer = 0;
                e.charging = !1;
                continue;
            }

            e.targetId = o.id;
            const r = o.id < 0 ? S(e.x, o.x - 1.5, o.x + 1.5) : o.x;
            const n = r - e.x;
            const h = o.z - e.z;
            const p = Math.hypot(n, h);
            e.facing = Math.atan2(n, h);

            const u = o.id > 0 ? (w[o.kind]?.radius || .4) : .12;
            const b = e.kind === "mage" && o.id > 0 && p < 2.35;

            // In range for attack:
            if (p <= i.range + u && !b) {
                e.state = "idle";
                e.vx *= Math.exp(-t * 18);
                e.vz *= Math.exp(-t * 18);
                if (e.cooldown <= 0) {
                    e.cooldown = i.cooldown;
                    e.attackTime = i.attackDuration;
                    e.state = "attack";
                    e.attackPending = !0;
                    e.attackTarget = o.id;
                    e.attackX = r;
                    e.attackZ = o.z;
                    this.emit({
                        type: "attack",
                        team: e.team,
                        x: e.x,
                        z: e.z,
                        kind: e.kind,
                        targetId: o.id,
                        sourceId: e.id,
                        targetX: r,
                        targetZ: o.z,
                        facing: e.facing
                    });
                }
            } else if (!e.isBuilding) {
                // Walk / charge toward target
                e.state = "walk";

                // Knight Rider charge mechanic (after 2s walking, charges at 2x speed)
                if (e.kind === "knight_rider") {
                    e.chargeTimer += t;
                    if (e.chargeTimer >= 2.0) {
                        e.charging = !0;
                    }
                }

                let m = n, v = h;
                if (b && (m = -n, v = -h));
                const y = Math.hypot(m, v) || 1;
                let currentSpeed = (e.charging ? i.chargeSpeed : i.speed);
                if (e.poisonSlow > 0) currentSpeed *= (1 - 0.35);

                const f = currentSpeed * (e.kind === "imps" && p < 5 ? 1.28 : 1) * (b ? .85 : 1) * Math.min(1, Math.max(.12, p - i.range + .4));
                const x = 1 - Math.exp(-i.acceleration * t);
                e.vx += (m / y * f - e.vx) * x;
                e.vz += (v / y * f - e.vz) * x;
                e.x += e.vx * t;
                e.z += e.vz * t;
            }

            // Unit separation / collision avoidance
            if (!e.isBuilding && !e.isRolling) {
                for (const m of this.nearby(e.x, e.z, 1.3)) {
                    if (m.id === e.id || m.hp <= 0) continue;
                    const v = e.x - m.x;
                    const y = e.z - m.z;
                    const f = Math.hypot(v, y);
                    const x = i.radius + (w[m.kind]?.radius || .4);
                    if (f > 0 && f < x) {
                        const L = (x - f) * Math.min(1, t * 5);
                        e.x += v / f * L;
                        e.z += y / f * L;
                    }
                }
            }
            e.x = S(e.x, -8.45, 8.45);
            e.z = S(e.z, -13.2, 13.2);
        }

        // Clean up dead units
        for (let e = s.units.length - 1; e >= 0; e--) {
            if (s.units[e].deathTime > 1.1) this.unitPool.push(s.units.splice(e, 1)[0]);
        }

        // Projectiles update
        for (let e = s.projectiles.length - 1; e >= 0; e--) {
            const i = s.projectiles[e];
            i.progress += t / i.duration;
            const o = i.targetId < 0 ? s.gates.find(c => c.id === i.targetId) : s.units.find(c => c.id === i.targetId);
            if (o && o.hp > 0) {
                i.targetX = o.id < 0 ? i.targetX : o.x;
                i.targetZ = o.z;
            }
            i.x = i.startX + (i.targetX - i.startX) * Math.min(1, i.progress);
            i.z = i.startZ + (i.targetZ - i.startZ) * Math.min(1, i.progress);

            if (i.progress >= 1) {
                if (i.kind === "bomb_tower") {
                    for (const c of s.units) {
                        if (c.team !== i.team && c.hp > 0 && Math.hypot(c.x - i.x, c.z - i.z) <= (i.splashRadius || 1.8)) {
                            this.damage(c, i.damage, i.team, "bomb_tower");
                        }
                    }
                    for (const g of s.gates) {
                        if (g.team !== i.team && g.hp > 0 && Math.hypot(Math.max(0, Math.abs(g.x - i.x) - 1.8), g.z - i.z) <= (i.splashRadius || 1.8)) {
                            this.damage(g, i.damage * M.arrowGateScale, i.team, "bomb_tower");
                        }
                    }
                    this.emit({ type: "explosion", team: i.team, x: i.x, z: i.z, kind: "bomb_tower" });
                } else if (i.kind === "xbow") {
                    if (o && o.hp > 0) this.damage(o, i.damage, i.team, "xbow");
                    this.emit({ type: "hit", team: i.team, x: i.x, z: i.z, kind: "xbow" });
                } else {
                    if (o && o.hp > 0) this.damage(o, i.damage, i.team, "mage");
                    for (const c of s.units) {
                        if (c.team !== i.team && c.hp > 0 && c.id !== i.targetId && Math.hypot(c.x - i.x, c.z - i.z) < 1.35) {
                            this.damage(c, i.damage * .65, i.team, "mage");
                        }
                    }
                    this.emit({ type: "explosion", team: i.team, x: i.x, z: i.z, kind: "mage", targetId: i.targetId });
                }
                s.projectiles.splice(e, 1);
            }
        }

        // Spells delay & impact
        for (let e = s.spells.length - 1; e >= 0; e--) {
            const i = s.spells[e];
            i.delay -= t;
            if (i.delay <= 0 && !i.impacted) {
                i.impacted = !0;
                if (i.type === "fireball") {
                    for (const o of s.units) {
                        if (o.team !== i.team && o.hp > 0) {
                            const d = Math.hypot(o.x - i.x, o.z - i.z);
                            if (d <= 2.5) {
                                this.damage(o, w.fireball.damage, i.team, "fireball");
                                const ang = Math.atan2(o.x - i.x, o.z - i.z);
                                o.x = S(o.x + Math.sin(ang) * 1.5, -8.4, 8.4);
                                o.z = S(o.z + Math.cos(ang) * 1.5, -13.0, 13.0);
                                o.stunned = 0.35;
                            }
                        }
                    }
                    for (const o of s.gates) {
                        if (o.team !== i.team && o.hp > 0 && Math.hypot(Math.max(0, Math.abs(o.x - i.x) - 1.8), o.z - i.z) <= 2.5) {
                            this.damage(o, w.fireball.damage * M.arrowGateScale, i.team, "fireball");
                        }
                    }
                    this.emit({ type: "explosion", team: i.team, x: i.x, z: i.z, kind: "fireball" });
                } else {
                    for (const o of s.units) {
                        if (o.team !== i.team && o.hp > 0 && Math.hypot(o.x - i.x, o.z - i.z) <= w.arrows.radius) {
                            this.damage(o, w.arrows.damage, i.team, "arrows");
                        }
                    }
                    for (const o of s.gates) {
                        if (o.team !== i.team && o.hp > 0 && Math.hypot(Math.max(0, Math.abs(o.x - i.x) - 1.8), o.z - i.z) <= w.arrows.radius) {
                            this.damage(o, w.arrows.damage * M.arrowGateScale, i.team, "arrows");
                        }
                    }
                    this.emit({ type: "arrow-impact", team: i.team, x: i.x, z: i.z });
                }
            }
            if (i.delay < -.45) s.spells.splice(e, 1);
        }

        this.checkEnd();
    }

    rebuildGrid() {
        this.grid.clear();
        for (const t of this.state.units) {
            if (t.hp > 0) {
                const s = `${Math.floor(t.x/2)},${Math.floor(t.z/2)}`;
                let a = this.grid.get(s);
                a || this.grid.set(s, a = []);
                a.push(t);
            }
        }
    }

    nearby(t, s, a) {
        const e = [];
        for (let i = Math.floor((t - a) / 2); i <= Math.floor((t + a) / 2); i++) {
            for (let o = Math.floor((s - a) / 2); o <= Math.floor((s + a) / 2); o++) {
                const c = this.grid.get(`${i},${o}`);
                if (c) e.push(...c);
            }
        }
        return e;
    }

    resolveAttack(t) {
        const s = w[t.kind];
        const a = this.state;
        const e = t.attackTarget < 0 ? a.gates.find(c => c.id === t.attackTarget) : a.units.find(c => c.id === t.attackTarget);
        if (!e || e.hp <= 0) return;

        const i = e.id < 0 ? S(t.x, e.x - 1.5, e.x + 1.5) : e.x;
        const o = Math.hypot(i - t.x, e.z - t.z);

        if (t.kind === "mage") {
            a.projectiles.push({
                id: this.id++,
                team: t.team,
                kind: "mage",
                x: t.x,
                z: t.z,
                startX: t.x,
                startZ: t.z,
                targetId: e.id,
                targetX: i,
                targetZ: e.z,
                progress: 0,
                duration: Math.max(.28, o / M.projectileSpeed),
                damage: s.damage
            });
            this.emit({ type: "fireball", team: t.team, x: t.x, z: t.z, kind: "mage", sourceId: t.id, targetId: e.id, targetX: i, targetZ: e.z, facing: t.facing });
        } else if (t.kind === "bomb_tower") {
            a.projectiles.push({
                id: this.id++,
                team: t.team,
                kind: "bomb_tower",
                x: t.x,
                z: t.z,
                startX: t.x,
                startZ: t.z,
                targetId: e.id,
                targetX: i,
                targetZ: e.z,
                progress: 0,
                duration: Math.max(.4, o / 8.5),
                damage: s.damage,
                splashRadius: s.splashRadius
            });
            this.emit({ type: "mortar-bomb", team: t.team, x: t.x, z: t.z, targetX: i, targetZ: e.z });
        } else if (t.kind === "xbow") {
            a.projectiles.push({
                id: this.id++,
                team: t.team,
                kind: "xbow",
                x: t.x,
                z: t.z,
                startX: t.x,
                startZ: t.z,
                targetId: e.id,
                targetX: i,
                targetZ: e.z,
                progress: 0,
                duration: Math.max(.15, o / 22),
                damage: s.damage
            });
            this.emit({ type: "xbow-bolt", team: t.team, x: t.x, z: t.z, targetX: i, targetZ: e.z });
        } else if (t.kind === "archers") {
            this.damage(e, s.damage, t.team, t.kind, t.id);
            this.emit({ type: "arrow-hit", team: t.team, x: t.x, z: t.z, targetX: i, targetZ: e.z });
        } else {
            let dmg = s.damage;
            if (t.kind === "knight_rider" && t.charging) {
                dmg = s.chargeDamage;
                t.charging = !1;
                t.chargeTimer = 0;
            }
            if (o <= s.range + (e.id > 0 ? (w[e.kind]?.radius || .4) : .12) + .6) {
                this.damage(e, dmg, t.team, t.kind, t.id);
                this.emit({ type: "melee-impact", team: t.team, x: t.x, z: t.z, kind: t.kind, sourceId: t.id, targetId: e.id, targetX: i, targetZ: e.z, facing: t.facing });
            }
        }
    }

    damage(t, s, a, e, i) {
        if (t.hp <= 0) return;
        const o = Math.min(t.hp, s);
        t.hp = Math.max(0, t.hp - s);
        t.hurtTime = .22;
        this.state.players[a].damage += o;
        this.emit({
            type: t.id < 0 ? "gate-hit" : "hit",
            team: a,
            x: t.x,
            z: t.z,
            amount: Math.round(o),
            targetId: t.id,
            kind: e,
            sourceId: i
        });
        if (t.hp <= 0) {
            if (t.id > 0) this.state.players[a].kills++;
            this.emit({
                type: t.id < 0 ? "gate-destroyed" : "death",
                team: a,
                x: t.x,
                z: t.z,
                targetId: t.id,
                kind: t.id > 0 ? t.kind : void 0
            });
        }
    }

    gateHealth(t) {
        return this.state.gates.filter(s => s.team === t).reduce((s, a) => s + a.hp, 0);
    }

    checkEnd() {
        const t = this.state,
            s = this.gateHealth(0),
            a = this.gateHealth(1);
        if (s <= 0 || a <= 0) {
            this.finish(s === a ? "draw" : s > a ? 0 : 1);
            return;
        }
        if (t.time <= 0) {
            if (s === a && !t.overtime) {
                t.overtime = !0;
                t.time = M.overtime;
            } else {
                this.finish(Math.abs(s - a) < .001 ? "draw" : s > a ? 0 : 1);
            }
        }
        if (t.overtime && Math.abs(s - a) > .001) this.finish(s > a ? 0 : 1);
    }

    finish(t) {
        this.state.phase = "finished";
        this.state.winner = t;
        this.emit({
            type: "victory",
            team: t === "draw" ? 0 : t,
            x: 0,
            z: 0
        });
    }

    updateBot(t, s) {
        if (this.botTimer -= t, this.botTimer > 0) return;
        this.botTimer = this.difficulty === "hard" ? .65 + this.random() * .75 : 1.2 + this.random() * 1.1;
        const a = this.state,
            e = a.players[s],
            i = Ut(s),
            o = a.units.filter(n => n.team === i && n.hp > 0 && n.z * et(s) < 1);

        let c, l = -5 + this.random() * 10,
            r = s === 0 ? 8 : -8;

        if (o.length >= 3 && e.energy >= 4) {
            const spellCandidates = ["arrows", "fireball", "poison", "lightning"].filter(sp => e.hand.includes(sp) && w[sp].cost <= e.energy);
            if (spellCandidates.length) {
                c = spellCandidates[0];
                const n = o[Math.floor(this.random() * o.length)];
                l = n.x;
                r = n.z;
                this.deploy({ team: s, card: c, x: l, z: r });
                return;
            }
        }

        const affordable = e.hand.filter(h => w[h].cost <= e.energy && e.cooldowns[h] <= 0);
        if (!affordable.length) return;
        if (e.energy < 4 && !o.length && this.random() > .3) return;

        c = affordable[Math.floor(this.random() * affordable.length)];
        const cardObj = w[c];

        if (cardObj.isSpell && c !== "the_log") {
            if (o.length) {
                l = o[0].x;
                r = o[0].z;
            } else {
                l = 0;
                r = s === 0 ? -13.5 : 13.5;
            }
        } else if (cardObj.isBuilding) {
            l = -2 + this.random() * 4;
            r = s === 0 ? 4 : -4;
        } else if (o.length) {
            l = o[0].x;
            r = s === 0 ? 6.5 : -6.5;
        } else {
            const hasTank = a.units.find(p => p.team === s && (p.kind === "knight" || p.kind === "titan") && p.hp > 0);
            if (hasTank && (c === "mage" || c === "archers")) {
                l = hasTank.x;
                r = S(hasTank.z - et(s) * 2, s === 0 ? 1 : -11, s === 0 ? 11 : -1);
            }
        }

        this.deploy({ team: s, card: c, x: l, z: r });
    }
}
function ut(g, t = !1) {
    const s = g[0].index !== null,
        a = new Set(Object.keys(g[0].attributes)),
        e = new Set(Object.keys(g[0].morphAttributes)),
        i = {},
        o = {},
        c = g[0].morphTargetsRelative,
        l = new vt;
    let r = 0;
    for (let n = 0; n < g.length; ++n) {
        const h = g[n];
        let p = 0;
        if (s !== (h.index !== null)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + n + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
        for (const u in h.attributes) {
            if (!a.has(u)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + n + '. All geometries must have compatible attributes; make sure "' + u + '" attribute exists among all geometries, or in none of them.'), null;
            i[u] === void 0 && (i[u] = []), i[u].push(h.attributes[u]), p++
        }
        if (p !== a.size) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + n + ". Make sure all geometries have the same number of attributes."), null;
        if (c !== h.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + n + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
        for (const u in h.morphAttributes) {
            if (!e.has(u)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + n + ".  .morphAttributes must be consistent throughout all geometries."), null;
            o[u] === void 0 && (o[u] = []), o[u].push(h.morphAttributes[u])
        }
        if (t) {
            let u;
            if (s) u = h.index.count;
            else if (h.attributes.position !== void 0) u = h.attributes.position.count;
            else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + n + ". The geometry must have either an index or a position attribute"), null;
            l.addGroup(r, u, n), r += u
        }
    }
    if (s) {
        let n = 0;
        const h = [];
        for (let p = 0; p < g.length; ++p) {
            const u = g[p].index;
            for (let b = 0; b < u.count; ++b) h.push(u.getX(b) + n);
            n += g[p].attributes.position.count
        }
        l.setIndex(h)
    }
    for (const n in i) {
        const h = at(i[n]);
        if (!h) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + n + " attribute."), null;
        l.setAttribute(n, h)
    }
    for (const n in o) {
        const h = o[n][0].length;
        if (h !== 0) {
            l.morphAttributes = l.morphAttributes || {}, l.morphAttributes[n] = [];
            for (let p = 0; p < h; ++p) {
                const u = [];
                for (let m = 0; m < o[n].length; ++m) u.push(o[n][m][p]);
                const b = at(u);
                if (!b) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + n + " morphAttribute."), null;
                l.morphAttributes[n].push(b)
            }
        }
    }
    return l
}

function at(g) {
    let t, s, a, e = -1,
        i = 0;
    for (let r = 0; r < g.length; ++r) {
        const n = g[r];
        if (t === void 0 && (t = n.array.constructor), t !== n.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
        if (s === void 0 && (s = n.itemSize), s !== n.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
        if (a === void 0 && (a = n.normalized), a !== n.normalized) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
        if (e === -1 && (e = n.gpuType), e !== n.gpuType) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
        i += n.count * s
    }
    const o = new t(i),
        c = new J(o, s, a);
    let l = 0;
    for (let r = 0; r < g.length; ++r) {
        const n = g[r];
        if (n.isInterleavedBufferAttribute) {
            const h = l / s;
            for (let p = 0, u = n.count; p < u; p++)
                for (let b = 0; b < s; b++) {
                    const m = n.getComponent(p, b);
                    c.setComponent(p + h, b, m)
                }
        } else o.set(n.array, l);
        l += n.count * s
    }
    return e !== void 0 && (c.gpuType = e), c
}
const O = new E;

function k(g, t, s, a, e, i) {
    const o = 2 * Math.PI * e / 4,
        c = Math.max(i - 2 * e, 0),
        l = Math.PI / 4;
    O.copy(t), O[a] = 0, O.normalize();
    const r = .5 * o / (o + c),
        n = 1 - O.angleTo(g) / l;
    return Math.sign(O[s]) === 1 ? n * r : c / (o + c) + r + r * (1 - n)
}
class K extends nt {
    constructor(t = 1, s = 1, a = 1, e = 2, i = .1) {
        const o = e * 2 + 1;
        if (i = Math.min(t / 2, s / 2, a / 2, i), super(1, 1, 1, o, o, o), this.type = "RoundedBoxGeometry", this.parameters = {
                width: t,
                height: s,
                depth: a,
                segments: e,
                radius: i
            }, o === 1) return;
        const c = this.toNonIndexed();
        this.index = null, this.attributes.position = c.attributes.position, this.attributes.normal = c.attributes.normal, this.attributes.uv = c.attributes.uv;
        const l = new E,
            r = new E,
            n = new E(t, s, a).divideScalar(2).subScalar(i),
            h = this.attributes.position.array,
            p = this.attributes.normal.array,
            u = this.attributes.uv.array,
            b = h.length / 6,
            m = new E,
            v = .5 / o;
        for (let y = 0, f = 0; y < h.length; y += 3, f += 2) switch (l.fromArray(h, y), r.copy(l), r.x -= Math.sign(r.x) * v, r.y -= Math.sign(r.y) * v, r.z -= Math.sign(r.z) * v, r.normalize(), h[y + 0] = n.x * Math.sign(l.x) + r.x * i, h[y + 1] = n.y * Math.sign(l.y) + r.y * i, h[y + 2] = n.z * Math.sign(l.z) + r.z * i, p[y + 0] = r.x, p[y + 1] = r.y, p[y + 2] = r.z, Math.floor(y / b)) {
            case 0:
                m.set(1, 0, 0), u[f + 0] = k(m, r, "z", "y", i, a), u[f + 1] = 1 - k(m, r, "y", "z", i, s);
                break;
            case 1:
                m.set(-1, 0, 0), u[f + 0] = 1 - k(m, r, "z", "y", i, a), u[f + 1] = 1 - k(m, r, "y", "z", i, s);
                break;
            case 2:
                m.set(0, 1, 0), u[f + 0] = 1 - k(m, r, "x", "z", i, t), u[f + 1] = k(m, r, "z", "x", i, a);
                break;
            case 3:
                m.set(0, -1, 0), u[f + 0] = 1 - k(m, r, "x", "z", i, t), u[f + 1] = 1 - k(m, r, "z", "x", i, a);
                break;
            case 4:
                m.set(0, 0, 1), u[f + 0] = 1 - k(m, r, "x", "y", i, t), u[f + 1] = 1 - k(m, r, "y", "x", i, s);
                break;
            case 5:
                m.set(0, 0, -1), u[f + 0] = k(m, r, "x", "y", i, t), u[f + 1] = 1 - k(m, r, "y", "x", i, s);
                break
        }
    }
    static fromJSON(t) {
        return new K(t.width, t.height, t.depth, t.segments, t.radius)
    }
}

const d = {
    dark: 1382429,
    black: 526344,
    blue: 1983372,
    blueLight: 3436214,
    skin: 15450269,
    shadowSkin: 12224888,
    steel: 12173516,
    edge: 14476008,
    gold: 15710545,
    wood: 8935735,
    purple: 8734159,
    purpleLight: 11364075,
    eye: 16733151,
    red: 9314357,
    orange: 15361309,
    stone: 8421504,
    darkStone: 4342338,
    green: 2332219,
    teal: 1954193,
    ice: 7453695
};

class Gt {
    parts = [];
    add(t, s, a = 0, e = 0, i = 0, o = 1, c = 1, l = 1, r = 0, n = 0, h = 0) {
        const p = new Z().compose(new E(a, e, i), new wt().setFromEuler(new xt(r, n, h)), new E(o, c, l));
        let u = t.index ? t.toNonIndexed() : t;
        u !== t && t.dispose(), u.applyMatrix4(p), u.deleteAttribute("uv");
        const b = u.getAttribute("position").count,
            m = new Float32Array(b * 3),
            v = new V(s);
        for (let y = 0; y < b; y++) m[y * 3] = v.r, m[y * 3 + 1] = v.g, m[y * 3 + 2] = v.b;
        u.setAttribute("color", new J(m, 3)), this.parts.push(u);
    }
    ell(t, s, a, e, i, o, c) {
        this.add(new rt(1, 14, 10), t, s, a, e, i, o, c);
    }
    box(t, s, a, e, i, o, c, l = 0) {
        this.add(new K(1, 1, 1, 2, .08), t, s, a, e, i, o, c, 0, 0, l);
    }
    cyl(t, s, a, e, i, o, c, l = 0, r = 0, n = 12) {
        this.add(new lt(i, o, c, n), t, s, a, e, 1, 1, 1, l, 0, r);
    }
    cone(t, s, a, e, i, o, c = 0, l = 0) {
        this.add(new ct(i, o, 8), t, s, a, e, 1, 1, 1, c, 0, l);
    }
    ring(t, s, a, e, i, o, c = 0, l = 1, r = 1) {
        this.add(new Mt(i, o, 6, 18), t, s, a, e, l, r, 1, c);
    }
    finish() {
        const t = ut(this.parts);
        for (const s of this.parts) s.dispose();
        return t.computeBoundingSphere(), t;
    }
}

function $t(g, t, s, a, e) {
    const i = new At;
    i.moveTo(-.29, .35), i.lineTo(0, .44), i.lineTo(.29, .35), i.lineTo(.25, -.18), i.lineTo(0, -.46), i.lineTo(-.25, -.18), i.closePath();
    const o = new _(i, {
            depth: .1,
            bevelEnabled: !0,
            bevelSize: .025,
            bevelThickness: .025,
            bevelSegments: 1,
            steps: 1
        }),
        c = e ? 1.38 : 1;
    g.add(o, d.edge, t, s, a, c, c, 1);
    const l = new _(i, {
        depth: .025,
        bevelEnabled: !1
    });
    g.add(l, e ? d.dark : d.blue, t, s, a + .125, c * .87, c * .86, 1);
    for (const [r, n] of [
            [-.22, .29],
            [.22, .29],
            [0, -.33]
        ]) g.ell(d.steel, t + r * c, s + n * c, a + .16, .034, .034, .021);
    e ? (g.box(d.steel, t, s + .1, a + .17, .36, .035, .027), g.box(d.steel, t, s, a + .17, .035, .5, .027)) : g.add(new W(.13), d.edge, t, s, a + .17, .65, 1.8, .3);
}

// Procedural 3D Unit Models for all 10 unit kinds:
function ot(g, t = !1) {
    const s = [],
        a = (l, r, n) => {
            const h = new Gt;
            n(h), s.push({
                name: l,
                pivot: new E(...r),
                geometry: h.finish()
            });
        };

    if (g === "bomb_tower") {
        a("body", [0, 0, 0], l => {
            l.cyl(d.stone, 0, .45, 0, 1.25, 1.45, .9, 0, 0, 8);
            l.cyl(d.stone, 0, 1.35, 0, 1.0, 1.2, 1.1, 0, 0, 8);
            l.cyl(d.wood, 0, 1.95, 0, 1.35, 1.35, .15, 0, 0, 8);
            for (let r = 0; r < 6; r++) {
                const ang = (r / 6) * Math.PI * 2;
                l.box(d.stone, Math.sin(ang) * 1.2, 2.15, Math.cos(ang) * 1.2, .32, .35, .18, ang);
            }
        });
        a("head", [0, 2.1, 0], l => {
            l.cyl(d.steel, 0, .25, .08, .32, .42, .75, .55, 0, 8);
            l.cyl(d.black, 0, .48, .22, .24, .24, .12, .55, 0, 8);
            l.box(d.gold, 0, .25, .08, .68, .08, .08);
            l.ell(d.black, -.42, .05, -.15, .22, .22, .22);
            l.cyl(d.red, -.42, .25, -.15, .04, .04, .15);
        });
        return { bones: s, height: 2.8, scale: 1.1 };
    }

    if (g === "xbow") {
        a("body", [0, 0, 0], l => {
            l.box(d.wood, 0, .2, 0, 1.5, .25, 1.7);
            l.box(d.steel, 0, .12, 0, 1.65, .1, .25);
            l.box(d.steel, 0, .12, 0, .25, .1, 1.85);
            l.cyl(d.steel, 0, .45, 0, .45, .45, .25, 0, 0, 12);
        });
        a("head", [0, .58, 0], l => {
            l.box(d.wood, 0, .2, 0, .36, .32, 1.4);
            l.box(d.steel, 0, .35, 0, .18, .12, 1.2);
            l.cyl(d.wood, 0, .22, .52, .055, .055, 2.2, 0, Math.PI / 2, 8);
            l.cyl(d.steel, 0, .32, .15, .028, .028, 1.1, Math.PI / 2, 0);
        });
        return { bones: s, height: 1.7, scale: 1.05 };
    }

    if (g === "the_log") {
        a("body", [0, 0, 0], l => {
            l.cyl(d.wood, 0, .38, 0, .42, .42, 2.6, 0, Math.PI / 2, 14);
            l.cyl(d.steel, 0, .38, -1.05, .44, .44, .16, 0, Math.PI / 2, 14);
            l.cyl(d.steel, 0, .38, 1.05, .44, .44, .16, 0, Math.PI / 2, 14);
            for (let r = 0; r < 8; r++) {
                const ang = (r / 8) * Math.PI * 2;
                l.cone(d.gold, Math.sin(ang) * .48, .38 + Math.cos(ang) * .48, -.55, .09, .28, ang, 0);
                l.cone(d.gold, Math.sin(ang + .4) * .48, .38 + Math.cos(ang + .4) * .48, .55, .09, .28, ang + .4, 0);
            }
        });
        return { bones: s, height: .9, scale: 1.0 };
    }

    if (g === "titan") {
        a("body", [0, 0, 0], l => {
            l.box(d.darkStone, 0, 1.65, 0, 1.55, 1.35, 1.15);
            l.box(d.orange, 0, 1.6, .58, .45, .45, .06);
            l.box(d.red, 0, 1.35, .58, .28, .65, .05);
            l.ell(d.stone, -1.05, 2.15, 0, .52, .48, .52);
            l.ell(d.stone, 1.05, 2.15, 0, .52, .48, .52);
        });
        a("head", [0, 2.45, 0], l => {
            l.box(d.darkStone, 0, .15, .15, .68, .52, .62);
            l.box(d.orange, -.16, .18, .46, .14, .06, .05);
            l.box(d.orange, .16, .18, .46, .14, .06, .05);
            l.cone(d.stone, -.28, .55, .1, .14, .32, -.2, -.2);
            l.cone(d.stone, .28, .55, .1, .14, .32, -.2, .2);
        });
        for (const l of [-1, 1]) {
            a(l === -1 ? "leftArm" : "rightArm", [l * 1.05, 1.95, 0], r => {
                r.cyl(d.stone, l * .05, -.5, 0, .28, .36, 1.15);
                r.ell(d.darkStone, l * .05, -1.15, .08, .35, .38, .35);
            });
            a(l === -1 ? "leftLeg" : "rightLeg", [l * .46, .75, 0], r => {
                r.box(d.darkStone, 0, -.38, 0, .48, .85, .58);
                r.box(d.stone, 0, -.78, .12, .54, .25, .72);
            });
        }
        return { bones: s, height: 3.2, scale: 1.35 };
    }

    if (g === "archers") {
        a("body", [0, 0, 0], l => {
            l.cyl(d.teal, 0, .78, 0, .24, .32, .72, 0, 0, 10);
            l.box(d.leather, 0, .55, 0, .52, .1, .42);
            l.box(d.gold, 0, .55, .22, .12, .08, .04);
            l.cyl(d.leather, .15, .82, -.24, .1, .09, .65, .35, 0, 8);
            l.cyl(d.wood, .15, 1.18, -.34, .025, .025, .35);
        });
        a("head", [0, 1.22, 0], l => {
            l.ell(d.skin, 0, .05, 0, .21, .23, .19);
            l.ell(d.purple, 0, .15, -.06, .24, .24, .22);
            l.box(d.purple, 0, .28, .02, .32, .15, .24);
            for (const r of [-1, 1]) {
                l.ell(d.eye, r * .085, .055, .185, .04, .04, .02);
            }
        });
        for (const l of [-1, 1]) {
            a(l === -1 ? "leftArm" : "rightArm", [l * .34, 1.0, 0], r => {
                r.cyl(d.teal, l * .02, -.18, 0, .1, .12, .36);
                r.ell(d.skin, l * .04, -.38, .05, .09, .1, .09);
                if (l === -1) {
                    r.cyl(d.wood, .02, -.35, .25, .035, .035, 1.35, .2, 0);
                    r.ring(d.gold, .02, -.35, .25, .45, .03, 0);
                } else {
                    r.cyl(d.wood, .02, -.35, 0, .02, .02, .85, Math.PI / 2, 0);
                }
            });
            a(l === -1 ? "leftLeg" : "rightLeg", [l * .16, .45, 0], r => {
                r.cyl(d.dark, 0, -.18, 0, .11, .11, .42);
                r.box(d.leather, 0, -.38, .05, .18, .2, .3);
            });
        }
        return { bones: s, height: 1.85, scale: .92 };
    }

    if (g === "knight_rider") {
        a("body", [0, 0, 0], l => {
            l.box(d.leather, 0, .95, 0, .75, .68, 1.5);
            l.box(d.blue, 0, 1.12, .02, .82, .24, .95);
            l.box(d.leather, 0, 1.4, .65, .32, .58, .48, .38);
            l.cone(d.steel, 0, 1.62, .96, .22, .48, 1.1);
            l.box(d.steel, 0, 1.76, -.05, .62, .56, .44);
            l.box(d.gold, 0, 1.95, -.05, .68, .08, .46);
        });
        a("head", [0, 2.22, -.05], l => {
            l.ell(d.steel, 0, .05, 0, .24, .26, .24);
            l.box(d.edge, 0, .06, .21, .36, .05, .06);
            l.cone(d.gold, 0, .42, -.05, .12, .42, -.15);
        });
        for (const l of [-1, 1]) {
            a(l === -1 ? "leftArm" : "rightArm", [l * .42, 1.72, -.05], r => {
                r.cyl(d.steel, l * .04, -.22, 0, .14, .12, .38);
                if (l === -1) {
                    $t(r, -.08, -.35, .25, !1);
                } else {
                    r.cyl(d.wood, .08, -.15, .8, .055, .035, 2.8, 1.45, 0);
                    r.cone(d.steel, .08, -.15, 2.4, .14, .45, 1.45, 0);
                    r.ring(d.gold, .08, -.15, -.2, .18, .04, 1.45);
                }
            });
            a(l === -1 ? "leftLeg" : "rightLeg", [l * .28, .55, 0], r => {
                r.cyl(d.leather, 0, -.25, .4, .11, .095, .65);
                r.cyl(d.leather, 0, -.25, -.4, .11, .095, .65);
                r.box(d.dark, 0, -.58, .4, .18, .12, .24);
                r.box(d.dark, 0, -.58, -.4, .18, .12, .24);
            });
        }
        return { bones: s, height: 2.6, scale: 1.1 };
    }

    const e = g === "imps",
        i = g === "knight",
        o = g === "mage",
        c = i ? 1.24 : 1;

    a("body", [0, 0, 0], l => {
        if (e) l.ell(d.purple, 0, .61, 0, .3, .34, .2), l.ell(d.purpleLight, 0, .68, .14, .22, .23, .08), l.cyl(d.leather, 0, .37, 0, .27, .28, .18), l.box(d.gold, 0, .4, .265, .12, .095, .055), l.box(d.dark, 0, .39, -.22, .45, .06, .04);
        else if (o) {
            l.cyl(d.red, 0, .62, 0, .27, .47, .95, 0, 0, 16);
            l.cyl(d.orange, 0, .16, 0, .46, .48, .065, 0, 0, 16);
            l.ell(d.red, 0, 1.06, 0, .38, .37, .25);
            l.box(d.gold, 0, .72, .27, .62, .07, .045);
            l.ell(d.gold, 0, 1.23, .265, .065, .065, .025);
            l.box(d.orange, -.15, .87, .255, .055, .5, .03, -.13);
            l.box(d.orange, .15, .87, .255, .055, .5, .03, .13);
        } else {
            l.ell(d.black, 0, .97, 0, .34 * c, .44, .24);
            l.box(d.blue, 0, .85, .01, .64 * c, .57, .42);
            l.box(i ? d.steel : d.dark, 0, 1.04, .02, .67 * c, .47, .5);
            l.box(d.steel, 0, 1.1, .285, .54 * c, .33, .065);
            l.box(d.edge, 0, 1.26, .27, .58 * c, .038, .04);
            l.box(d.leather, 0, .71, .04, .69 * c, .115, .48);
            l.box(d.edge, 0, .71, .31, .13, .105, .065);
            for (const r of [-1, 1]) {
                l.box(d.dark, r * .21, .55, .03, .24, .3, .35, r * .11);
                l.box(d.steel, r * .21, .58, .23, .21, .23, .045, r * .11);
            }
            i && (l.box(d.blue, 0, 1.25, -.08, .75, .17, .46), l.add(new W(.085), d.edge, 0, 1.08, .337, 1, 1.3, .3));
        }
    });

    a("head", [0, e ? .97 : 1.48, 0], l => {
        if (e) {
            l.ell(d.purple, 0, .06, 0, .37, .31, .28);
            l.ell(d.purpleLight, 0, -.04, .19, .25, .16, .15);
            for (const r of [-1, 1]) {
                l.ell(d.purple, r * .31, .06, 0, .22, .12, .075);
                l.cone(d.purpleLight, r * .39, .15, -.01, .12, .34, 0, -r * .96);
                l.ell(d.black, r * .14, .065, .242, .112, .078, .055);
                l.ell(d.eye, r * .14, .068, .285, .074, .047, .024);
            }
        } else {
            l.ell(d.skin, 0, .025, .025, .225, .245, .2);
            for (const r of [-1, 1]) {
                l.ell(16379607, r * .089, .07, .202, .073, .046, .019);
                l.ell(o ? 16755991 : 2438731, r * .075, .07, .221, .03, .033, .012);
                l.box(o ? 3416865 : d.black, r * .09, .135, .207, .15, .048, .046, -r * .18);
            }
            if (o) {
                l.ell(d.red, 0, .16, -.08, .34, .4, .26);
                l.cone(d.red, 0, .43, -.085, .22, .32, 0, -.13);
            } else {
                l.add(new rt(1, 18, 12, 0, Math.PI * 2, 0, Math.PI * .48), i ? d.steel : d.blue, 0, .085, 0, .3, .32, .275);
                l.box(d.edge, 0, .15, .263, .56, .055, .06);
                l.box(d.steel, 0, .3, -.005, .065, .2, .545);
            }
        }
    });

    for (const l of [-1, 1]) {
        a(l === -1 ? "leftArm" : "rightArm", [l * (e ? .31 : .4 * c), e ? .8 : 1.17, 0], r => {
            if (e) {
                r.ell(d.purple, l * .035, -.14, 0, .115, .21, .13);
                r.ell(d.purpleLight, l * .06, -.32, .055, .12, .16, .1);
            } else if (o) {
                r.cyl(d.red, l * .03, -.15, 0, .17, .2, .41, 0, l * .14);
                r.ell(d.skin, l * .065, -.43, .02, .12, .135, .105);
                if (l === 1) r.ell(16760114, .08, -.34, .18, .11, .16, .11);
            } else {
                r.ell(d.black, l * .02, -.14, 0, .135, .28, .15);
                r.ell(i ? d.steel : d.blue, l * .03, .015, 0, i ? .255 : .19, .2, .23);
                r.cyl(d.steel, l * .04, -.325, 0, .14, .12, .22);
                if (l === -1) {
                    $t(r, -.08, -.36, .2, i);
                } else if (i) {
                    r.cyl(d.leather, .055, -.43, .1, .048, .048, .34);
                    r.box(d.gold, .055, -.19, .1, .35, .065, .08);
                    r.box(d.edge, .055, .32, .1, .145, .95, .075);
                } else {
                    r.cyl(d.wood, .065, -.1, .14, .04, .037, 2.25);
                    r.cyl(d.edge, .065, .88, .14, .059, .059, .14);
                }
            }
        });
        a(l === -1 ? "leftLeg" : "rightLeg", [l * (e ? .17 : .19 * c), e ? .37 : .56, 0], r => {
            r.ell(e ? d.purple : o ? d.red : d.dark, 0, -.13, 0, e ? .12 : .135, .22, .135);
            r.ell(e ? d.purpleLight : o ? d.leather : d.steel, 0, -.27, .035, .14, .13, .14);
            r.box(e ? d.purple : o ? d.leather : d.dark, 0, -.42, .06, .25, .21, .37);
        });
    }

    if (!e) {
        a("cape", [0, 1.25, -.24], l => {
            const r = [new D(.24, 0), new D(.28, -.2), new D(.36, -.68), new D(.4, -.94)];
            l.add(new kt(r, 10, Math.PI * .55, Math.PI * .9), o ? d.red : d.blue, 0, 0, 0);
        });
    }

    return {
        bones: s,
        height: e ? 1.48 : i ? 2.08 : 2.2,
        scale: e ? .92 : i ? 1.16 : 1
    };
}

class Ht {
    batches = new Map;
    material = new ht({
        vertexColors: !0,
        metalness: .4,
        roughness: .62
    });
    shadow;
    healthBack;
    healthFront;
    teamRing;
    transform = new dt;
    root = new Z;
    local = new Z;
    color = new V;
    smooth = new Map;
    cameraQuaternion;

    constructor(t, s) {
        this.cameraQuaternion = s.quaternion.clone();
        this.material.onBeforeCompile = c => {
            c.fragmentShader = c.fragmentShader.replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
        #ifdef USE_COLOR
          float eyes = step(0.94, vColor.r) * (1.0 - step(0.22, vColor.g)) * step(0.4, vColor.b);
          float fire = step(0.95, vColor.r) * step(0.35, vColor.g) * (1.0 - step(0.06, vColor.b));
          totalEmissiveRadiance += vColor.rgb * (eyes * 1.5 + fire * 0.8);
        #endif`);
        };

        const unitKinds = ["lancer", "knight", "imps", "mage", "bomb_tower", "knight_rider", "titan", "archers", "the_log", "xbow"];
        for (const c of unitKinds) {
            const l = ot(c);
            const r = ot(c, !0);
            const n = h => h.bones.map(p => {
                const u = new I(p.geometry, this.material, 120);
                u.instanceMatrix.setUsage(Tt);
                u.count = 0;
                u.castShadow = !0;
                u.receiveShadow = !0;
                u.frustumCulled = !1;
                t.add(u);
                return u;
            });
            this.batches.set(c, {
                template: l,
                lowTemplate: r,
                meshes: n(l),
                low: n(r)
            });
        }

        const a = document.createElement("canvas");
        a.width = 64;
        a.height = 64;
        const e = a.getContext("2d");
        const i = e.createRadialGradient(32, 32, 4, 32, 32, 32);
        i.addColorStop(0, "rgba(13,27,17,.55)");
        i.addColorStop(.5, "rgba(13,27,17,.3)");
        i.addColorStop(1, "rgba(13,27,17,0)");
        e.fillStyle = i;
        e.fillRect(0, 0, 64, 64);
        const o = new Et(a);

        this.shadow = new I(new B(1, 1), new C({
            map: o,
            transparent: !0,
            depthWrite: !1
        }), 150);
        this.shadow.frustumCulled = !1;
        t.add(this.shadow);

        this.teamRing = new I(new Y(.36, .405, 28), new C({
            transparent: !0,
            opacity: .8,
            depthWrite: !1,
            side: j
        }), 150);
        this.teamRing.frustumCulled = !1;
        t.add(this.teamRing);

        this.healthBack = new I(new B(1, .105), new C({
            color: 1319465,
            depthTest: !1,
            transparent: !0,
            opacity: .9
        }), 150);
        this.healthFront = new I(new B(1, .065), new C({
            depthTest: !1,
            transparent: !0
        }), 150);
        this.healthBack.renderOrder = 20;
        this.healthFront.renderOrder = 21;
        this.healthBack.frustumCulled = this.healthFront.frustumCulled = !1;
        t.add(this.healthBack, this.healthFront);
    }

    update(t, s, a, e, i) {
        const o = new Map;
        const c = new Set;
        for (const h of t.units) {
            o.has(h.kind) || o.set(h.kind, []);
            o.get(h.kind).push(h);
            c.add(h.id);
        }
        for (const h of this.smooth.keys()) {
            c.has(h) || this.smooth.delete(h);
        }
        const l = e === 0 ? 1 : -1;
        let r = 0, n = 0;

        for (const [h, p] of this.batches) {
            const u = o.get(h) ?? [];
            const b = i || u.length > 35;
            const m = b ? p.low : p.meshes;
            const v = b ? p.lowTemplate : p.template;

            for (const y of p.meshes) y.count = b ? 0 : u.length;
            for (const y of p.low) y.count = b ? u.length : 0;

            for (let y = 0; y < u.length; y++) {
                const f = u[y];
                let x = this.smooth.get(f.id);
                if (!x) {
                    x = { x: f.x, z: f.z, angle: f.facing };
                    this.smooth.set(f.id, x);
                }
                const L = 1 - Math.exp(-s * 22);
                x.x += (f.x - x.x) * L;
                x.z += (f.z - x.z) * L;
                const N = Math.atan2(Math.sin(f.facing - x.angle), Math.cos(f.facing - x.angle));
                x.angle += N * Math.min(1, s * 18);

                const R = f.state === "walk";
                const mt = f.attackTime > 0;
                const q = f.hp <= 0;
                const U = h === "imps";
                const isTitan = h === "titan";
                const isRider = h === "knight_rider";
                const isLog = h === "the_log";
                const isBuilding = !!f.isBuilding;

                const stepSpeed = isRider && f.charging ? 22 : U ? 16 : isTitan ? 6 : 9;
                const P = Math.sin(f.age * stepSpeed);
                const pt = R ? Math.abs(P) * .055 : Math.sin(a * 2.5 + f.id) * .012;
                const ft = Math.min(1, f.age / .25);
                const gt = q ? Math.max(0, 1 - f.deathTime / .8) : 1;
                const yt = v.scale * (.2 + .8 * Math.sin(ft * Math.PI / 2)) * gt;

                const pitchRot = isLog ? (f.age * 14) : (q ? f.deathTime * 1.6 : 0);

                this.transform.position.set(x.x * l, pt + (q ? -f.deathTime * .4 : 0), x.z * l);
                this.transform.rotation.set(pitchRot, x.angle + (l === -1 ? Math.PI : 0), q ? f.deathTime * 1.2 : 0);
                this.transform.scale.setScalar(yt);
                this.transform.updateMatrix();
                this.root.copy(this.transform.matrix);

                const G = mt ? Math.sin((1 - f.attackTime / .42) * Math.PI) : 0;

                let bt = f.team === e ? 16777215 : 16757933;
                if (f.frozen > 0) bt = 6675199;
                this.color.setHex(bt);
                if (f.hurtTime > 0) this.color.multiplyScalar(1 + f.hurtTime * 4);

                for (let T = 0; T < v.bones.length; T++) {
                    const z = v.bones[T];
                    this.transform.position.copy(z.pivot);
                    this.transform.rotation.set(0, 0, 0);
                    this.transform.scale.setScalar(1);

                    if (z.name === "leftLeg") this.transform.rotation.x = R ? P * .52 : 0;
                    if (z.name === "rightLeg") this.transform.rotation.x = R ? -P * .52 : 0;
                    if (z.name === "leftArm") {
                        this.transform.rotation.x = (R ? -P * .3 : 0) - G * .3;
                        this.transform.rotation.z = U ? .2 : .06;
                    }
                    if (z.name === "rightArm") {
                        const attackSwing = isRider ? (f.charging ? 1.2 : 1.6) : (h === "mage" ? 1.35 : 1.7);
                        this.transform.rotation.x = (R ? P * .3 : 0) - G * attackSwing;
                        if (isRider && f.charging) {
                            this.transform.rotation.x += 1.1;
                        }
                        this.transform.rotation.z = U ? -.2 : -.06;
                        this.transform.position.z += G * .25;
                    }
                    if (z.name === "head") {
                        this.transform.rotation.y = Math.sin(a * 1.3 + f.id) * .055;
                        this.transform.rotation.x = -G * .09;
                    }
                    if (z.name === "body") this.transform.rotation.z = R ? P * .035 : 0;
                    if (z.name === "cape") this.transform.rotation.x = .12 + (R ? Math.sin(f.age * 7) * .17 : .04 * Math.sin(a * 2 + f.id));

                    this.transform.updateMatrix();
                    this.local.multiplyMatrices(this.root, this.transform.matrix);
                    m[T].setMatrixAt(y, this.local);
                    m[T].setColorAt(y, this.color);
                }

                if (!q && !isLog) {
                    const ringSize = isTitan ? 1.7 : isBuilding ? 1.6 : isRider ? 1.4 : h === "knight" ? 1.35 : U ? .72 : 1.02;
                    this.transform.position.set(x.x * l, .018, x.z * l);
                    this.transform.rotation.set(-Math.PI / 2, 0, 0);
                    this.transform.scale.set(ringSize * 1.4, ringSize, 1);
                    this.transform.updateMatrix();
                    this.shadow.setMatrixAt(n, this.transform.matrix);

                    this.transform.scale.setScalar(ringSize);
                    this.transform.position.y = .025;
                    this.transform.updateMatrix();
                    this.teamRing.setMatrixAt(n, this.transform.matrix);
                    this.teamRing.setColorAt(n, this.color.setHex(f.team === e ? 7723007 : 16740963));
                    n++;

                    this.transform.position.set(x.x * l, v.height * v.scale + .12, x.z * l);
                    this.transform.quaternion.copy(this.cameraQuaternion);
                    this.transform.scale.set(.82, 1, 1);
                    this.transform.updateMatrix();
                    this.healthBack.setMatrixAt(r, this.transform.matrix);

                    this.transform.position.x -= (1 - f.hp / f.maxHp) * .39;
                    this.transform.position.y += .006;
                    this.transform.scale.set(.78 * (f.hp / f.maxHp), 1, 1);
                    this.transform.updateMatrix();
                    this.healthFront.setMatrixAt(r, this.transform.matrix);
                    this.healthFront.setColorAt(r, this.color.setHex(f.team === e ? 7198207 : 16739171));
                    r++;
                }
            }

            for (const y of m) {
                y.instanceMatrix.needsUpdate = !0;
                if (y.instanceColor) y.instanceColor.needsUpdate = !0;
            }
        }

        this.shadow.count = this.teamRing.count = n;
        this.healthBack.count = this.healthFront.count = r;
        for (const h of [this.shadow, this.teamRing, this.healthBack, this.healthFront]) {
            h.instanceMatrix.needsUpdate = !0;
            if (h.instanceColor) h.instanceColor.needsUpdate = !0;
        }
    }

    dispose() {
        this.material.dispose();
        for (const t of this.batches.values()) {
            for (const s of [...t.meshes, ...t.low]) s.geometry.dispose(), s.dispose();
        }
        for (const t of [this.shadow, this.teamRing, this.healthBack, this.healthFront]) {
            t.geometry.dispose(), t.material.dispose(), t.dispose();
        }
    }
}

function Bt() {
    const g = [];
    const t = (a, e, i, o = 0) => {
        let c = a.index ? a.toNonIndexed() : a;
        c !== a && a.dispose();
        c.rotateY(o);
        c.translate(0, i, 0);
        c.deleteAttribute("uv");
        const l = new V(e);
        const r = new Float32Array(c.getAttribute("position").count * 3);
        for (let n = 0; n < r.length; n += 3) {
            r[n] = l.r; r[n + 1] = l.g; r[n + 2] = l.b;
        }
        c.setAttribute("color", new J(r, 3));
        g.push(c);
    };
    t(new lt(.024, .024, .95, 6), 9854774, 0);
    t(new ct(.077, .25, 4), 12571618, .59);
    for (let a = 0; a < 2; a++) t(new nt(.18, .27, .018), 14175032, -.32, a * Math.PI / 2);
    const s = ut(g);
    g.forEach(a => a.dispose());
    return s;
}

class Ft {
    constructor(t) {
        this.scene = t;
        this.mesh = new I(new Q(1, 0), new C({
            transparent: !0,
            opacity: .92,
            depthWrite: !1
        }), 1200);
        this.mesh.frustumCulled = !1;
        this.mesh.count = 0;
        t.add(this.mesh);

        this.arrows = new I(Bt(), new ht({
            vertexColors: !0,
            metalness: .35,
            roughness: .5
        }), 200);
        this.arrows.count = 0;
        this.arrows.frustumCulled = !1;
        t.add(this.arrows);

        this.fireballs = new I(new Q(.22, 1), new C({
            color: 16768118
        }), 120);
        this.fireballs.count = 0;
        this.fireballs.frustumCulled = !1;
        t.add(this.fireballs);

        for (let s = 0; s < 32; s++) {
            const a = new F(new Y(.88, 1, 48), new C({
                transparent: !0,
                opacity: 0,
                depthWrite: !1,
                side: j
            }));
            a.rotation.x = -Math.PI / 2;
            a.visible = !1;
            t.add(a);
            this.rings.push({
                mesh: a,
                life: 0,
                duration: 1,
                radius: 1
            });
        }
    }

    scene;
    particles = Array.from({ length: 1200 }, () => ({
        active: !1,
        x: 0, y: 0, z: 0,
        vx: 0, vy: 0, vz: 0,
        life: 0, maxLife: 1,
        size: 0, color: 16777215,
        gravity: 0
    }));
    mesh;
    rings = [];
    arrows;
    fireballs;
    dummy = new dt;
    color = new V;
    cursor = 0;
    lastEvent = 0;
    shake = 0;

    reset() {
        this.lastEvent = 0;
        this.shake = 0;
        for (const t of this.particles) t.active = !1;
        for (const t of this.rings) t.life = 0, t.mesh.visible = !1;
    }

    particle(t, s, a, e, i, o, c, l, r, n = 0) {
        const h = this.particles[this.cursor++ % this.particles.length];
        Object.assign(h, {
            active: !0,
            x: t, y: s, z: a,
            color: e, size: i,
            life: o, maxLife: o,
            vx: c, vy: l, vz: r,
            gravity: n
        });
    }

    burst(t, s, a, e, i, o = .5) {
        for (let c = 0; c < a; c++) {
            const l = Math.random() * Math.PI * 2,
                r = Math.random() * i;
            this.particle(t, o, s, e, .035 + Math.random() * .065, .3 + Math.random() * .6, Math.cos(l) * r, .6 + Math.random() * i, Math.sin(l) * r, -5);
        }
    }

    ring(t, s, a, e, i = .55) {
        const o = this.rings.find(c => c.life <= 0) ?? this.rings[0];
        o.life = o.duration = i;
        o.radius = e;
        o.mesh.position.set(t, .04, s);
        o.mesh.visible = !0;
        o.mesh.material.color.setHex(a);
    }

    events(t, s) {
        const a = s === 0 ? 1 : -1;
        for (const e of t) {
            if (e.id <= this.lastEvent) continue;
            this.lastEvent = e.id;
            const i = e.x * a;
            const o = e.z * a;

            if (e.type === "deploy") {
                this.ring(i, o, e.team === s ? 8642047 : 16749696, 1.2);
                this.burst(i, o, 20, e.team === s ? 11069439 : 16753533, 1.2, .1);
            }
            if (e.type === "hit") this.burst(i, o, 6, 16769952, 1.5);
            if (e.type === "death") this.burst(i, o, 18, e.kind === "imps" ? 12089334 : 13415578, 2);
            if (e.type === "explosion") {
                this.burst(i, o, 52, 16750641, 3.8);
                this.burst(i, o, 26, 16770968, 2.4);
                this.ring(i, o, 16758348, e.kind === "fireball" ? 2.6 : 1.8, .45);
                this.shake = Math.max(this.shake, .2);
            }
            if (e.type === "arrows") this.ring(i, o, 16766106, 2.5, .68);
            if (e.type === "arrow-impact") {
                this.burst(i, o, 40, 15125649, 3, .1);
                this.shake = Math.max(this.shake, .075);
            }
            if (e.type === "lightning") {
                this.ring(i, o, 5546239, 3.5, .7);
                for (let k = 0; k < 60; k++) {
                    const l = Math.random() * Math.PI * 2, r = Math.random() * 3.2;
                    this.particle(i + Math.cos(l) * r, .2 + Math.random() * 5.0, o + Math.sin(l) * r, 5546239, .06 + Math.random() * .08, .3 + Math.random() * .4, (Math.random() - .5) * 3, -8, (Math.random() - .5) * 3);
                }
                this.shake = .28;
            }
            if (e.type === "freeze") {
                this.ring(i, o, 7381503, 3.0, 1.2);
                for (let k = 0; k < 50; k++) {
                    const l = Math.random() * Math.PI * 2, r = Math.random() * 2.8;
                    this.particle(i + Math.cos(l) * r, .1 + Math.random() * 1.5, o + Math.sin(l) * r, 12644351, .05 + Math.random() * .06, .8 + Math.random() * .8, (Math.random() - .5) * .8, .8 + Math.random() * 1.2, (Math.random() - .5) * .8, -1);
                }
            }
            if (e.type === "poison") {
                this.ring(i, o, 3069299, 3.5, 2.5);
                this.burst(i, o, 30, 3069299, 2.5, .2);
            }
            if (e.type === "gate-hit") this.burst(i, o, 12, 14066537, 2, .5);
            if (e.type === "gate-destroyed") {
                this.burst(i, o, 80, 9595715, 5);
                this.burst(i, o, 35, 10204613, 4);
                this.ring(i, o, 16767134, 3, .6);
                this.shake = .25;
            }
            if (e.type === "victory") this.burst(0, 0, 110, 16766325, 6, 4);
        }
    }

    update(t, s, a, e, i) {
        const o = e === 0 ? 1 : -1;
        this.shake = Math.max(0, this.shake - t * .8);

        if (Math.random() < t * 18 * i) {
            const n = [
                [-9.25, -9.8], [9.25, -9.8],
                [-9.5, -.1], [9.5, -.1],
                [-8.55, 14], [8.55, 14]
            ];
            const [h, p] = n[Math.floor(Math.random() * n.length)];
            this.particle(h, .25, p, 16758841, .025 + Math.random() * .035, .5 + Math.random(), (Math.random() - .5) * .15, .55, (Math.random() - .5) * .15);
        }

        if (a.poisonClouds && a.poisonClouds.length) {
            for (const pc of a.poisonClouds) {
                if (Math.random() < t * 35) {
                    const ang = Math.random() * Math.PI * 2;
                    const rad = Math.random() * pc.radius;
                    this.particle(pc.x * o + Math.cos(ang) * rad, .1 + Math.random() * .8, pc.z * o + Math.sin(ang) * rad, 3069299, .05 + Math.random() * .06, .6 + Math.random() * .8, (Math.random() - .5) * .4, .8 + Math.random() * 1.1, (Math.random() - .5) * .4, .5);
                }
            }
        }

        let c = 0;
        for (const n of a.projectiles) {
            const isBomb = n.kind === "bomb_tower";
            const h = isBomb ? (.8 + Math.sin(n.progress * Math.PI) * 2.2) : (.9 + Math.sin(n.progress * Math.PI) * .6);
            this.dummy.position.set(n.x * o, h, n.z * o);
            this.dummy.rotation.set(s * 4, s * 3, 0);
            this.dummy.scale.setScalar(isBomb ? 1.4 : 1);
            this.dummy.updateMatrix();
            this.fireballs.setMatrixAt(c++, this.dummy.matrix);
            this.particle(n.x * o, h, n.z * o, isBomb ? 526344 : (Math.random() > .5 ? 16746031 : 16763464), .09, .23, (Math.random() - .5) * .8, .5, (Math.random() - .5) * .8);
        }
        this.fireballs.count = c;
        this.fireballs.instanceMatrix.needsUpdate = !0;

        let l = 0;
        for (const n of a.spells) {
            if (n.type === "arrows") {
                for (let h = 0; h < 24; h++) {
                    const p = h * 2.39996;
                    const u = Math.sqrt(h / 24) * 2.35;
                    const b = Math.max(0, n.delay * 14 - (h % 5) * .25);
                    this.dummy.position.set(n.x * o + Math.cos(p) * u + b * .18, b, n.z * o + Math.sin(p) * u);
                    this.dummy.rotation.set(0, 0, Math.PI - .2);
                    this.dummy.scale.setScalar(1);
                    this.dummy.updateMatrix();
                    this.arrows.setMatrixAt(l++, this.dummy.matrix);
                }
            }
        }
        this.arrows.count = l;
        this.arrows.instanceMatrix.needsUpdate = !0;

        let r = 0;
        for (const n of this.particles) {
            if (n.active) {
                n.life -= t;
                if (n.life <= 0) {
                    n.active = !1;
                    continue;
                }
                n.vy += n.gravity * t;
                n.x += n.vx * t;
                n.y += n.vy * t;
                n.z += n.vz * t;
                if (n.y < .03) {
                    n.y = .03;
                    n.vy = Math.abs(n.vy) * .2;
                    n.vx *= .9;
                    n.vz *= .9;
                }
                this.dummy.position.set(n.x, n.y, n.z);
                this.dummy.rotation.set(n.life * 4, n.life * 6, 0);
                this.dummy.scale.setScalar(n.size * Math.min(1, n.life * 4));
                this.dummy.updateMatrix();
                this.mesh.setMatrixAt(r, this.dummy.matrix);
                this.mesh.setColorAt(r, this.color.setHex(n.color).multiplyScalar(.4 + .6 * n.life / n.maxLife));
                r++;
            }
        }
        this.mesh.count = r;
        this.mesh.instanceMatrix.needsUpdate = !0;
        if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = !0;

        for (const n of this.rings) {
            if (n.life <= 0) continue;
            n.life -= t;
            const h = 1 - n.life / n.duration;
            n.mesh.scale.setScalar(n.radius * (.45 + .55 * h));
            n.mesh.material.opacity = Math.max(0, (1 - h) * .65);
            n.mesh.visible = n.life > 0;
        }
    }

    dispose() {
        for (const t of [this.mesh, this.arrows, this.fireballs, ...this.rings.map(s => s.mesh)]) {
            t.geometry.dispose(), t.material.dispose();
        }
    }
}
class jt {
    constructor(t, s) {
        this.canvas = t, this.stage = s, this.renderer = new St({
            canvas: t,
            alpha: !0,
            antialias: !0,
            powerPreference: "high-performance",
            premultipliedAlpha: !0
        }), this.renderer.setClearColor(0, 0), this.renderer.outputColorSpace = Ct, this.renderer.toneMapping = Lt, this.renderer.toneMappingExposure = 1.05, this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = zt;
        const a = 796 / 18,
            e = 711;
        this.camera = new It(-940 / a / 2, 940 / a / 2, e / a, -961 / a, .1, 150), this.camera.position.set(0, 40, 18), this.camera.lookAt(0, 0, 0), this.camera.updateMatrixWorld(), this.scene.add(new Rt(14938111, 5729075, 1.2));
        const i = new tt(16773074, 2.8);
        i.position.set(-6, 18, 10), i.castShadow = !0, i.shadow.mapSize.set(1024, 1024), i.shadow.camera.left = -15, i.shadow.camera.right = 15, i.shadow.camera.top = 20, i.shadow.camera.bottom = -20, i.shadow.camera.near = .5, i.shadow.camera.far = 65, i.shadow.normalBias = .035, i.shadow.bias = -2e-4, this.scene.add(i);
        const o = new tt(9224191, 1.5);
        o.position.set(4, 10, -12), this.scene.add(o);
        const c = new F(new B(21, 32), new Pt({
            color: 1188115,
            opacity: .24
        }));
        c.rotation.x = -Math.PI / 2, c.position.y = .004, c.receiveShadow = !0, this.scene.add(c), this.units = new Ht(this.scene, this.camera), this.effects = new Ft(this.scene), this.ghost = new F(new Y(.85, 1, 64), new C({
            color: 10872063,
            transparent: !0,
            opacity: .85,
            depthWrite: !1,
            side: j
        })), this.ghost.rotation.x = -Math.PI / 2, this.ghost.visible = !1, this.scene.add(this.ghost), this.aim = new F(new qt(1, 64), new C({
            color: 10413055,
            transparent: !0,
            opacity: .13,
            depthWrite: !1,
            side: j
        })), this.aim.rotation.x = -Math.PI / 2, this.aim.visible = !1, this.scene.add(this.aim), this.resize()
    }
    canvas;
    stage;
    renderer;
    scene = new Ot;
    camera;
    effects;
    units;
    raycaster = new Dt;
    ground = new Nt(new E(0, 1, 0), 0);
    pointer = new D;
    point = new E;
    ghost;
    aim;
    average = 1 / 60;
    slowFor = 0;
    fastFor = 0;
    quality = 1;
    drawCalls = 0;
    fps = 60;
    time = 0;
    resize() {
        const t = this.stage.getBoundingClientRect();
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2) * this.quality), this.renderer.setSize(t.width, t.height, !1)
    }
    project(t, s, a, e = 0) {
        const i = e === 0 ? 1 : -1;
        return this.point.set(t * i, s, a * i).project(this.camera), {
            x: (this.point.x + 1) * 470,
            y: (1 - this.point.y) * 836
        }
    }
    screenToWorld(t, s, a) {
        const e = this.stage.getBoundingClientRect();
        this.pointer.set((t - e.left) / e.width * 2 - 1, -(s - e.top) / e.height * 2 + 1), this.raycaster.setFromCamera(this.pointer, this.camera);
        const i = this.raycaster.ray.intersectPlane(this.ground, this.point);
        if (!i) return null;
        const o = a === 0 ? 1 : -1;
        return {
            x: i.x * o,
            z: i.z * o
        }
    }
    setPreview(t, s, a, e, i) {
        const o = i === 0 ? 1 : -1;
        this.ghost.visible = this.aim.visible = !0, this.ghost.position.set(t * o, .065, s * o), this.aim.position.set(t * o, .055, s * o), this.ghost.scale.setScalar(a), this.aim.scale.setScalar(a), this.ghost.material.color.setHex(e ? 10873855 : 16742256), this.aim.material.color.setHex(e ? 8641023 : 16734802)
    }
    clearPreview() {
        this.ghost.visible = this.aim.visible = !1
    }
    render(t, s, a) {
        this.time += s, this.average += (s - this.average) * .04, this.fps = Math.round(1 / Math.max(.001, this.average)), this.average > .024 ? (this.slowFor += s, this.fastFor = 0) : (this.fastFor += s, this.slowFor = Math.max(0, this.slowFor - s)), this.slowFor > 3 && this.quality > .6 && (this.quality = Math.max(.6, this.quality - .2), this.renderer.shadowMap.enabled = this.quality >= .8, this.slowFor = 0, this.resize()), this.fastFor > 15 && this.quality < 1 && (this.quality = Math.min(1, this.quality + .1), this.renderer.shadowMap.enabled = this.quality >= .8, this.fastFor = 0, this.resize()), this.units.update(t, s, this.time, a, this.quality < .8), this.effects.events(t.events, a), this.effects.update(s, this.time, t, a, this.quality), this.renderer.render(this.scene, this.camera), this.drawCalls = this.renderer.info.render.calls, this.effects.shake > 0 ? this.canvas.style.translate = `${Math.sin(this.time*80)*this.effects.shake*4}px ${Math.cos(this.time*73)*this.effects.shake*4}px` : this.canvas.style.translate = ""
    }
    async warmup() {
        await this.renderer.compileAsync(this.scene, this.camera)
    }
    dispose() {
        this.units.dispose(), this.effects.dispose(), this.renderer.dispose()
    }
}

const $ = '<svg viewBox="0 0 64 72" aria-hidden="true"><path d="M32 3 57 21 49 53 32 68 15 53 7 21Z"/><path class="inner" d="m32 17 13 16-13 20-13-20Z"/><path class="gem" d="m32 26 6 8-6 10-6-10Z"/></svg>',
    Vt = '<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',
    Xt = '<svg viewBox="0 0 24 24"><path d="m11 4-5 5H3v6h3l5 5ZM15 8q6 4 0 8M18 4q10 8 0 16"/></svg>',
    Zt = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/></svg>';

class Wt {
    constructor(t, s) {
        this.actions = s;
        t.innerHTML = `
      <div class="ambient-backdrop" aria-hidden="true"></div>
      <div class="desktop-wordmark" aria-hidden="true"><span class="mini-sigil">${$}</span><span>EMBER<br>GATES</span><small>EL ARTE DEL DUELO</small></div>
      <div id="stage"><div id="game">
        <div class="arena-art" aria-hidden="true"></div>
        <div id="walls" aria-hidden="true"></div>
        <canvas id="battlefield" aria-label="Arena de combate. Selecciona una carta y toca tu mitad para desplegar."></canvas>
        <div class="zone" id="deploy-zone"><div class="zone-line"></div><span>TU ZONA DE DESPLIEGUE</span></div>
        <div class="battle-top">
          <div class="rival-tag"><span class="rival-gem">◇</span><div><small id="rival-mode">DUELO DE ENTRENAMIENTO</small><b id="rival-name">Guardia Carmesí</b></div></div>
          <div class="timer-box"><span>Tiempo restante:</span><strong id="timer">3:00</strong><small id="overtime"></small></div>
        </div>
        <div class="fort-orb enemy-orb" id="enemy-fort-status" role="img" aria-label="Fortaleza rival, vida completa" title="Fortaleza rival: 3.200 de vida"><svg viewBox="0 0 64 64"><circle class="fort-orb-base" cx="32" cy="32" r="26"/><circle class="fort-orb-meter" id="enemy-health-fill" cx="32" cy="32" r="26"/><path class="fort-orb-shield" d="m32 17 9 4-2 12-7 5-7-5-2-12z"/></svg><b id="enemy-hp">100</b></div>
        <div class="fort-orb own-orb" id="own-fort-status" role="img" aria-label="Tu fortaleza, vida completa" title="Tu fortaleza: 3.200 de vida"><svg viewBox="0 0 64 64"><circle class="fort-orb-base" cx="32" cy="32" r="26"/><circle class="fort-orb-meter" id="own-health-fill" cx="32" cy="32" r="26"/><path class="fort-orb-shield" d="m32 17 9 4-2 12-7 5-7-5-2-12z"/></svg><b id="own-hp">100</b></div>
        <div id="countdown" aria-live="polite"></div>
        <div id="battle-announcement"></div>
        <div id="floating-feedback" aria-hidden="true"></div>
        <div id="toast" role="status" aria-live="polite"></div>
        <section class="battle-deck" aria-label="Cartas y energía">
          <div class="deck-shine"></div>
          <div class="next-card"><span>SIGUIENTE</span><div class="next-art" id="next-art"></div></div>
          <div class="deck-cards" id="deck-cards"></div>
          <div class="energy-orb"><div class="orb-frame"></div><div class="orb-drop"></div><strong id="energy-count">5</strong></div>
          <div class="energy-track"><div id="energy-fill"></div><div class="energy-divisions">${"<i></i>".repeat(10)}</div></div>
          <span class="energy-caption">ENERGÍA <b id="energy-rate">+1 / 2,3 s</b></span>
          <div class="deck-controls"><button id="sound-btn" class="icon-button" aria-label="Silenciar sonido">${Xt}</button><button id="help-btn" class="icon-button" aria-label="Cómo jugar">${Zt}</button><button id="pause-btn" class="icon-button" aria-label="Pausar partida">${Vt}</button></div>
          <span id="selected-caption">ELIGE UNA CARTA · DESPLIÉGALA EN LA ARENA</span>
        </section>
        <div id="modal" class="modal-backdrop"><section id="modal-content" class="modal-panel" role="dialog" aria-modal="true" aria-label="Menú de Ember Gates"></section></div>
        <div id="deck-builder-container"></div>
        <div id="connection-status" role="status"></div>
        <div id="performance" hidden></div>
      </div></div>
      <p class="desktop-hint">15 CARTAS. TU MAZO DE 8. TU ESTRATEGIA.<span>Ratón o táctil · 1–4 para elegir · Esc para pausar</span></p>
    `;

        this.stage = t.querySelector("#stage");
        this.game = t.querySelector("#game");
        this.canvas = t.querySelector("canvas");
        this.timer = t.querySelector("#timer");
        this.energy = t.querySelector("#energy-count");
        this.energyFill = t.querySelector("#energy-fill");
        this.modal = t.querySelector("#modal");
        this.modalContent = t.querySelector("#modal-content");
        this.toastEl = t.querySelector("#toast");
        this.deckBuilderContainer = t.querySelector("#deck-builder-container");

        const a = t.querySelector("#deck-cards");
        for (let idx = 0; idx < 4; idx++) {
            const c = document.createElement("button");
            c.className = "battle-card";
            c.dataset.slot = String(idx);
            c.setAttribute("aria-pressed", "false");
            c.innerHTML = `<div class="card-art"></div><div class="card-gloss"></div><div class="card-name"></div><span class="card-cost"></span><div class="card-cooldown"></div><span class="card-key">${idx + 1}</span>`;
            c.addEventListener("click", () => {
                const cardId = c.dataset.card;
                if (cardId) this.actions.select(cardId, idx);
            });
            a.append(c);
            this.handSlotElements[idx] = c;
        }

        const e = t.querySelector("#walls");
        for (let i = 0; i < 2; i++) {
            const o = i === 0 ? 1263 : 29;
            const c = i === 0 ? 115 : 125;
            const l = document.createElement("div");
            l.className = "gate-underlay";
            l.style.cssText = `left:109px;top:${o}px;width:726px;height:${c}px;background-position:-109px -590px;`;
            e.append(l);
            for (let r = 0; r < 5; r++) {
                const n = 109 + r * 145.2;
                const h = document.createElement("div");
                h.className = "gate-piece";
                h.dataset.side = String(i);
                h.dataset.segment = String(r);
                h.style.cssText = `left:${n}px;top:${o}px;width:146px;height:${c}px;background-position:-${n}px -${o}px;--fall-rotation:${r % 2 ? 12 : -14}deg;`;
                h.innerHTML = '<svg class="gate-cracks" viewBox="0 0 145 125"><path d="m38 0 12 24-9 13 20 13-8 26 15 12-6 37M50 24l29 4 13 23 24 4M53 76l-25 7-7 22M92 51l-7 18 17 17 5 39"/></svg><div class="gate-damage"></div>';
                e.append(h);
                this.gatePieces.push(h);
            }
        }

        t.querySelector("#sound-btn").addEventListener("click", () => this.actions.sound());
        t.querySelector("#pause-btn").addEventListener("click", () => this.actions.pause());
        t.querySelector("#help-btn").addEventListener("click", () => {
            this.wasHelpPaused = this.modalKind === "pause";
            this.actions.pause();
            this.showHelp();
        });

        this.showHome();
        this.resize();
        new ResizeObserver(() => this.resize()).observe(this.stage);
    }

    actions;
    stage;
    game;
    canvas;
    handSlotElements = [];
    timer;
    energy;
    energyFill;
    modal;
    modalContent;
    deckBuilderContainer;
    toastEl;
    toastTimer = 0;
    gatePieces = [];
    selected = null;
    selectedSlot = null;
    lastEnergy = -1;
    lastTime = "";
    lastPhase = "";
    lastGateHealth = [-1, -1];
    eventId = 0;
    modalKind = "home";
    isOnline = !1;
    lastResult = null;
    lastView = 0;
    wasHelpPaused = !1;
    damagePool = [];
    lastHitAt = 0;
    resultTimer = 0;
    swapPendingCard = null;

    artStyle(t) {
        return `background-image: url('./assets/cards/${t}.png'); background-size: cover; background-position: center; border-radius: 8px;`;
    }

    resize() {
        this.game.style.transform = `scale(${this.stage.getBoundingClientRect().width / 940})`;
    }

    get currentModal() {
        return this.modalKind;
    }

    show(t, s = "") {
        this.modalKind = t;
        this.modal.classList.toggle("hidden", t === null);
        if (s) this.modalContent.innerHTML = s;
        this.game.classList.toggle("in-menu", t === "home" || t === "deck_builder");
        if (t !== null) {
            window.setTimeout(() => this.modalContent.querySelector("button,input")?.focus({ preventScroll: !0 }), 50);
        }
    }

    hide() {
        this.show(null);
    }

    showHome() {
        this.isOnline = !1;
        this.deckBuilderContainer.innerHTML = "";
        this.show("home", `
      <div class="brand-sigil">${$}</div>
      <p class="eyebrow">ESTRATEGIA EN TIEMPO REAL</p>
      <h1>EMBER<span>GATES</span></h1>
      <div class="title-rule"><i></i><span>◇</span><i></i></div>
      <p class="home-description">15 cartas. 3 mazos guardados.<br>Elige tu baraja y conquista la fortaleza.</p>
      <button class="primary-button" id="start-battle"><span class="crossed">⚔</span> ¡A LA BATALLA! <small>DUELO 1v1 CON TU MAZO</small></button>
      <button class="secondary-button" id="open-deck-builder" style="margin-top:10px;">🛡️ MAZO BÉLICO (${getActiveBattleDeck().length} CARTAS)</button>
      <div class="difficulty-picker" style="margin-top:14px;"><span>DIFICULTAD IA</span><button data-difficulty="normal" class="active">Normal</button><button data-difficulty="hard">Veterano</button></div>
      <button class="text-button" id="online-battle" style="margin-top:10px;">Duelo con un amigo <span>↗</span></button>
      <button class="text-button" id="home-help">Colección de cartas y ayuda <span>→</span></button>
    `);

        this.modalContent.querySelector("#start-battle").addEventListener("click", () => this.showDeckBuilder());
        this.modalContent.querySelector("#open-deck-builder").addEventListener("click", () => this.showDeckBuilder());
        this.modalContent.querySelector("#online-battle").addEventListener("click", () => this.showRoom());
        this.modalContent.querySelector("#home-help").addEventListener("click", () => this.showHelp());

        for (const t of this.modalContent.querySelectorAll("[data-difficulty]")) {
            t.addEventListener("click", () => {
                this.modalContent.querySelector(".difficulty-picker .active")?.classList.remove("active");
                t.classList.add("active");
                this.actions.difficulty(t.dataset.difficulty);
            });
        }
    }

    // Clash Royale Deck Builder screen
    showDeckBuilder() {
        this.hide();
        this.modalKind = "deck_builder";
        this.game.classList.add("in-menu");
        this.renderDeckBuilder();
    }

    renderDeckBuilder() {
        const activeDeck = getActiveBattleDeck();
        const avgElixir = getAverageElixir(activeDeck);

        this.deckBuilderContainer.innerHTML = `
      <div class="deck-builder-overlay">
        <header class="deck-builder-header">
          <div class="deck-builder-title">
            <h2>⚔️ MAZO BÉLICO</h2>
            <div class="deck-tabs">
              <button class="deck-tab-btn ${CURRENT_DECK_TAB === 1 ? 'active' : ''}" data-tab="1">1</button>
              <button class="deck-tab-btn ${CURRENT_DECK_TAB === 2 ? 'active' : ''}" data-tab="2">2</button>
              <button class="deck-tab-btn ${CURRENT_DECK_TAB === 3 ? 'active' : ''}" data-tab="3">3</button>
            </div>
          </div>
          <div class="deck-stats-badge">
            <span class="elixir-drop-icon"></span>
            <span>Coste medio: <strong>${avgElixir}</strong></span>
          </div>
        </header>

        <div class="deck-builder-content">
          ${this.swapPendingCard ? `
            <div class="swap-instruction-banner">
              ⚠️ Toca una de las 8 cartas de tu mazo arriba para reemplazarla por: <strong>${w[this.swapPendingCard].name.toUpperCase()}</strong>
              <button id="cancel-swap-btn" style="margin-left:12px;padding:4px 10px;border-radius:6px;border:none;background:#222;color:#fff;cursor:pointer;font-weight:700;">Cancelar</button>
            </div>
          ` : ''}

          <!-- Active 8-Card Deck Grid -->
          <section class="active-deck-section">
            <div class="section-title-bar">
              <h3 class="section-title">BARAJA ACTIVA (${activeDeck.length}/8)</h3>
              <small style="color:#8da7cc;">${this.swapPendingCard ? 'TOCA PARA REEMPLAZAR' : 'Toca para ver estadísticas'}</small>
            </div>
            <div class="active-deck-grid" id="active-deck-grid">
              ${activeDeck.map((k, idx) => `
                <div class="db-card-item ${this.swapPendingCard ? 'selected-swap' : ''}" data-slot="${idx}" data-card="${k}">
                  <div class="db-card-elixir"><span>${w[k].cost}</span></div>
                  <div class="db-card-img" style="${this.artStyle(k)}"></div>
                  <div class="db-card-name-banner">
                    <span>${w[k].name}</span>
                    <span class="db-card-type-badge">${w[k].role.split('·')[0]}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Collection Section: All 15 cards -->
          <section class="collection-section">
            <div class="section-title-bar">
              <h3 class="section-title">COLECCIÓN DE CARTAS (${ALL_CARD_KEYS.length}/15)</h3>
              <small style="color:#8da7cc;">Toca cualquier carta para examinar o USAR</small>
            </div>
            <div class="collection-grid" id="collection-grid">
              ${ALL_CARD_KEYS.map(k => {
                const inDeck = activeDeck.includes(k);
                return `
                  <div class="db-card-item ${inDeck ? 'in-deck' : ''}" data-card="${k}">
                    <div class="db-card-elixir"><span>${w[k].cost}</span></div>
                    <div class="db-card-img" style="${this.artStyle(k)}"></div>
                    <div class="db-card-name-banner">
                      <span>${w[k].name}</span>
                      <span class="db-card-type-badge">${w[k].role.split('·')[0]}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </section>

          <!-- Launch Battle Button -->
          <footer class="deck-builder-footer">
            <button class="btn-back-home" id="btn-back-home">VOLVER AL MENÚ</button>
            <button class="btn-battle-play" id="btn-battle-play"><span>⚔️</span> ¡A LA BATALLA!</button>
          </footer>
        </div>
      </div>
    `;

        for (const btn of this.deckBuilderContainer.querySelectorAll(".deck-tab-btn")) {
            btn.addEventListener("click", () => {
                CURRENT_DECK_TAB = parseInt(btn.dataset.tab, 10);
                this.swapPendingCard = null;
                this.renderDeckBuilder();
            });
        }

        for (const slotEl of this.deckBuilderContainer.querySelectorAll("#active-deck-grid .db-card-item")) {
            slotEl.addEventListener("click", () => {
                const slotIdx = parseInt(slotEl.dataset.slot, 10);
                const cardId = slotEl.dataset.card;
                if (this.swapPendingCard) {
                    const currentDeck = [...getActiveBattleDeck()];
                    const oldIndex = currentDeck.indexOf(this.swapPendingCard);
                    if (oldIndex !== -1) {
                        const temp = currentDeck[slotIdx];
                        currentDeck[slotIdx] = this.swapPendingCard;
                        currentDeck[oldIndex] = temp;
                    } else {
                        currentDeck[slotIdx] = this.swapPendingCard;
                    }
                    USER_DECKS[CURRENT_DECK_TAB] = currentDeck;
                    saveDecks(USER_DECKS);
                    this.swapPendingCard = null;
                    this.toast("¡Mazo actualizado!");
                    this.renderDeckBuilder();
                } else {
                    this.showCardDetailModal(cardId, !0, slotIdx);
                }
            });
        }

        for (const cardEl of this.deckBuilderContainer.querySelectorAll("#collection-grid .db-card-item")) {
            cardEl.addEventListener("click", () => {
                const cardId = cardEl.dataset.card;
                this.showCardDetailModal(cardId, !1);
            });
        }

        const cancelSwap = this.deckBuilderContainer.querySelector("#cancel-swap-btn");
        if (cancelSwap) {
            cancelSwap.addEventListener("click", () => {
                this.swapPendingCard = null;
                this.renderDeckBuilder();
            });
        }

        this.deckBuilderContainer.querySelector("#btn-back-home").addEventListener("click", () => {
            this.deckBuilderContainer.innerHTML = "";
            this.showHome();
        });

        this.deckBuilderContainer.querySelector("#btn-battle-play").addEventListener("click", () => {
            this.deckBuilderContainer.innerHTML = "";
            this.actions.start(getActiveBattleDeck());
        });
    }

    showCardDetailModal(cardId, isInActiveDeck = !1, activeSlot = null) {
        const c = w[cardId];
        const modalEl = document.createElement("div");
        modalEl.className = "card-detail-modal-backdrop";
        modalEl.innerHTML = `
      <div class="card-detail-card">
        <button class="modal-close-btn" id="modal-close-x">✕</button>
        <div class="card-detail-body">
          <div class="card-detail-preview" style="${this.artStyle(cardId)}"></div>
          <div class="card-detail-info">
            <h3 class="card-detail-title">${c.name}</h3>
            <div class="card-detail-role">${c.role} · COSTE: ${c.cost} ENERGÍA</div>
            <p class="card-detail-desc">${c.description}</p>
            <div class="card-stats-grid">
              <div class="card-stat-box"><span class="card-stat-label">Daño</span><span class="card-stat-val">${c.damage || 'N/A'}</span></div>
              <div class="card-stat-box"><span class="card-stat-label">Puntos de vida</span><span class="card-stat-val">${c.hp || 'Hechizo'}</span></div>
              <div class="card-stat-box"><span class="card-stat-label">Velocidad</span><span class="card-stat-val">${c.speed ? c.speed.toFixed(2) : '0'}</span></div>
              <div class="card-stat-box"><span class="card-stat-label">Alcance</span><span class="card-stat-val">${c.range ? c.range + 'm' : 'Área'}</span></div>
              <div class="card-stat-box"><span class="card-stat-label">Cadencia</span><span class="card-stat-val">${c.cooldown ? c.cooldown + 's' : 'Instantáneo'}</span></div>
              <div class="card-stat-box"><span class="card-stat-label">Unidades</span><span class="card-stat-val">${c.count || 'Área'}</span></div>
            </div>
            <div class="card-detail-actions">
              <button class="btn-use-card" id="btn-use-card">USAR EN EL MAZO</button>
            </div>
          </div>
        </div>
      </div>
    `;

        document.body.appendChild(modalEl);

        const closeModal = () => modalEl.remove();
        modalEl.querySelector("#modal-close-x").addEventListener("click", closeModal);
        modalEl.addEventListener("click", e => {
            if (e.target === modalEl) closeModal();
        });

        modalEl.querySelector("#btn-use-card").addEventListener("click", () => {
            closeModal();
            this.swapPendingCard = cardId;
            this.renderDeckBuilder();
        });
    }

    showPause(t = !1) {
        this.show("pause", `
      <p class="eyebrow">EMBER GATES</p>
      <h2>${t ? "Duelo en curso" : "Toma un respiro"}</h2>
      <p>${t ? "La partida continúa para ambos jugadores." : "Tu ejército espera tus órdenes."}</p>
      <button class="primary-button" id="resume">VOLVER A LA ARENA</button>
      <button class="secondary-button" id="pause-help">CÓMO JUGAR</button>
      <button class="text-button" id="leave">${t ? "Abandonar duelo" : "Volver al inicio"}</button>
    `);
        this.modalContent.querySelector("#resume").addEventListener("click", () => this.actions.resume());
        this.modalContent.querySelector("#leave").addEventListener("click", () => this.actions.home());
        this.modalContent.querySelector("#pause-help").addEventListener("click", () => {
            this.wasHelpPaused = !0;
            this.showHelp();
        });
    }

    showHelp() {
        const t = this.modalKind === "home";
        this.show("help", `
      <p class="eyebrow">EL ARTE DEL DUELO</p>
      <h2>Tu primera batalla</h2>
      <div class="help-steps">
        <p><b>01</b><span><strong>Elige tus 8 cartas</strong>Configura tu mazo con 8 cartas en el Mazo Bélico. Durante la partida dispondrás de 4 en mano + 1 siguiente.</span></p>
        <p><b>02</b><span><strong>Despliega con intención</strong>Toca una carta y luego toca tu mitad de la arena. Los hechizos alcanzan cualquier punto.</span></p>
        <p><b>03</b><span><strong>Abre una brecha</strong>Protege a tus tropas y destruye la fortaleza rival antes de que se agote el tiempo.</span></p>
      </div>
      <div class="help-cards" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;">
        ${ALL_CARD_KEYS.map(s => `
          <div style="width:72px;text-align:center;">
            <div style="width:64px;height:86px;${this.artStyle(s)}margin:auto;"></div>
            <b>${w[s].cost}</b> <span style="font-size:11px;font-weight:700;">${w[s].name}</span>
          </div>
        `).join("")}
      </div>
      <button class="primary-button" id="help-back" style="margin-top:16px;">ENTENDIDO</button>
    `);
        this.modalContent.querySelector("#help-back").addEventListener("click", () => {
            t ? this.showHome() : this.wasHelpPaused ? (this.wasHelpPaused = !1, this.showPause(this.isOnline)) : this.actions.resume();
        });
    }

    showRoom() {
        this.show("room", '<p class="eyebrow">JUEGA CON UN AMIGO</p><h2>Un duelo. Dos estrategas.</h2><p>Crea una sala o introduce el código de tu rival.<br>Ambos debéis abrir la misma dirección del juego.</p><button class="primary-button" id="create-room">CREAR SALA PRIVADA</button><div class="room-divider"><span>O ÚNETE A UNA SALA</span></div><form id="join-form"><label class="sr-only" for="room-code">Código de sala</label><input id="room-code" placeholder="CÓDIGO" autocomplete="off" maxlength="5" minlength="5" pattern="[A-Za-z0-9]{5}" required /><button class="secondary-button" type="submit">UNIRME AL DUELO</button></form><p class="room-feedback" id="room-feedback" role="status"></p><button class="text-button" id="room-back">Volver al inicio</button>');
        this.modalContent.querySelector("#create-room").addEventListener("click", () => {
            this.roomFeedback("Conectando con la arena…");
            this.actions.createRoom();
        });
        this.modalContent.querySelector("#join-form").addEventListener("submit", t => {
            t.preventDefault();
            const s = this.modalContent.querySelector("#room-code");
            this.roomFeedback("Buscando a tu rival…");
            this.actions.joinRoom(s.value.trim().toUpperCase());
        });
        this.modalContent.querySelector("#room-back").addEventListener("click", () => this.actions.home());
    }

    roomFeedback(t) {
        const s = this.modalContent.querySelector("#room-feedback");
        if (s) s.textContent = t;
    }

    waiting(t) {
        this.show("room", `<div class="brand-sigil small">${$}</div><p class="eyebrow">TU ARENA ESTÁ PREPARADA</p><h2>Invita a tu rival</h2><p>Comparte este código con tu amigo.</p><div class="room-code-display">${t}</div><button class="secondary-button" id="copy-code">COPIAR INVITACIÓN</button><p class="waiting-dots"><i></i><i></i><i></i> Esperando al segundo jugador</p><p class="help-note">El duelo empezará cuando entre tu rival.</p><button class="text-button" id="cancel-room">Cancelar</button>`);
        this.modalContent.querySelector("#copy-code").addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(`${location.origin}/?room=${t}`);
                this.toast("Invitación copiada");
            } catch {
                this.toast(`Código de sala: ${t}`);
            }
        });
        this.modalContent.querySelector("#cancel-room").addEventListener("click", () => this.actions.home());
    }

    connected() {
        this.isOnline = !0;
        this.game.querySelector("#rival-mode").textContent = "SALA PRIVADA · 1v1";
        this.game.querySelector("#rival-name").textContent = "Estratega rival";
        this.hide();
    }

    showResult(t, s) {
        this.lastResult = t;
        this.lastView = s;
        const a = t.winner === s;
        const e = t.winner === "draw";
        const i = t.players[s];
        this.show("result", `
      <div class="brand-sigil result-sigil ${a ? "win" : ""}">${$}</div>
      <p class="eyebrow">${e ? "UN DUELO A LA ALTURA" : a ? "LA ARENA ES TUYA" : "CADA DUELO TE HACE MEJOR"}</p>
      <h2 class="result-title">${e ? "EMPATE" : a ? "VICTORIA" : "DERROTA"}</h2>
      <p>${e ? "Ambas fortalezas han resistido." : a ? "Tu estrategia ha abierto las puertas." : "La próxima decisión puede cambiarlo todo."}</p>
      <div class="result-stats">
        <div><strong>${i.played}</strong><span>CARTAS</span></div>
        <div><strong>${i.kills}</strong><span>BAJAS</span></div>
        <div><strong>${Math.round(i.damage).toLocaleString("es")}</strong><span>DAÑO</span></div>
      </div>
      <button class="primary-button" id="again">${this.isOnline ? "VOLVER AL INICIO" : "OTRA BATALLA"}</button>
      <button class="secondary-button" id="result-deck-builder" style="margin-top:10px;">CAMBIAR MAZO</button>
      <button class="text-button" id="result-home">Volver al inicio</button>
    `);
        this.modalContent.querySelector("#again").addEventListener("click", () => this.isOnline ? this.actions.home() : this.actions.start());
        this.modalContent.querySelector("#result-deck-builder").addEventListener("click", () => this.showDeckBuilder());
        this.modalContent.querySelector("#result-home").addEventListener("click", () => this.actions.home());
    }

    reset() {
        window.clearTimeout(this.resultTimer);
        this.lastEnergy = -1;
        this.lastTime = "";
        this.lastPhase = "";
        this.lastGateHealth = [-1, -1];
        this.eventId = 0;
        this.select(null);
        this.game.querySelector("#battle-announcement").textContent = "";
        for (const t of this.gatePieces) {
            t.classList.remove("destroyed");
            t.style.setProperty("--damage", "0");
        }
        this.game.querySelector("#rival-mode").textContent = this.isOnline ? "SALA PRIVADA · 1v1" : "DUELO DE ENTRENAMIENTO";
        this.game.querySelector("#rival-name").textContent = this.isOnline ? "Estratega rival" : "Guardia Carmesí";
    }

    select(t, s = null) {
        this.selected = t;
        this.selectedSlot = s;
        for (let idx = 0; idx < 4; idx++) {
            const el = this.handSlotElements[idx];
            const isSel = idx === s;
            el.classList.toggle("selected", isSel);
            el.setAttribute("aria-pressed", String(isSel));
        }
        const a = this.game.querySelector("#deploy-zone");
        a.classList.toggle("visible", t !== null);
        const isSpell = t && w[t] && w[t].isSpell && t !== "the_log";
        a.classList.toggle("spell-zone", !!isSpell);
        this.game.querySelector("#selected-caption").textContent = t ? `${w[t].name.toUpperCase()} · ${isSpell ? "TOCA CUALQUIER PUNTO" : "TOCA TU MITAD DE LA ARENA"}` : "ELIGE UNA CARTA · DESPLIÉGALA EN LA ARENA";
    }

    toast(t) {
        window.clearTimeout(this.toastTimer);
        this.toastEl.textContent = t;
        this.toastEl.classList.add("show");
        this.toastTimer = window.setTimeout(() => this.toastEl.classList.remove("show"), 2500);
    }

    muted(t) {
        const s = this.game.querySelector("#sound-btn");
        s.classList.toggle("muted", t);
        s.setAttribute("aria-label", t ? "Activar sonido" : "Silenciar sonido");
    }

    connection(t) {
        const s = this.game.querySelector("#connection-status");
        s.textContent = t;
        s.classList.toggle("visible", !!t);
    }

    update(t, s) {
        const a = t.players[s];
        const e = Math.floor(a.energy);

        if (this.lastEnergy !== e) {
            this.energy.textContent = String(e);
            this.energy.classList.remove("bump");
            this.energy.offsetWidth;
            this.energy.classList.add("bump");
            this.lastEnergy = e;
        }
        this.energyFill.style.width = `${a.energy * 10}%`;
        this.energyFill.classList.toggle("full", a.energy >= 9.99);

        const i = Math.max(0, Math.ceil(t.time));
        const o = `${Math.floor(i / 60)}:${String(i % 60).padStart(2, "0")}`;
        if (o !== this.lastTime) {
            this.timer.textContent = o;
            this.lastTime = o;
        }
        this.timer.parentElement.classList.toggle("urgent", i <= 30 && t.phase === "playing");
        this.game.querySelector("#overtime").textContent = t.overtime ? "MUERTE SÚBITA" : "";
        this.game.querySelector("#energy-rate").textContent = t.time <= 60 || t.overtime ? "×2 ENERGÍA" : "+1 / 2,3 s";

        for (let idx = 0; idx < 4; idx++) {
            const h = this.handSlotElements[idx];
            const p = a.hand[idx];
            if (!p) continue;
            if (h.dataset.card !== p) {
                h.dataset.card = p;
                h.setAttribute("aria-label", `${w[p].name}, ${w[p].cost} de energía`);
                h.querySelector(".card-art").style.cssText = this.artStyle(p);
                h.querySelector(".card-name").textContent = w[p].name;
                h.querySelector(".card-cost").textContent = String(w[p].cost);
                h.style.setProperty("--accent", w[p].color);
                h.classList.remove("card-return");
                h.offsetWidth;
                h.classList.add("card-return");
            }
            h.classList.toggle("unaffordable", a.energy < w[p].cost);
            h.classList.toggle("recharging", a.cooldowns[p] > 0);
            h.style.setProperty("--cooldown", String(a.cooldowns[p] / M.cardCooldown));
        }

        const c = a.next;
        const l = this.game.querySelector("#next-art");
        if (c && l.dataset.card !== c) {
            l.style.cssText = this.artStyle(c);
            l.dataset.card = c;
        }

        for (const n of [0, 1]) {
            const h = n === 0 ? s : 1 - s;
            const p = t.gates.filter(b => b.team === h);
            const u = p.reduce((b, m) => b + m.hp, 0);
            if (u !== this.lastGateHealth[n]) {
                const b = n === 0 ? "own" : "enemy";
                const m = u / (M.segmentHp * 5);
                this.game.querySelector(`#${b}-hp`).textContent = String(Math.ceil(m * 100));
                this.game.querySelector(`#${b}-health-fill`).style.strokeDashoffset = String(163.363 * (1 - m));
                const v = this.game.querySelector(`#${b}-fort-status`);
                const y = `${n === 0 ? "Tu fortaleza" : "Fortaleza rival"}: ${Math.ceil(u).toLocaleString("es")} de vida`;
                v.title = y;
                v.setAttribute("aria-label", y);
                v.classList.toggle("critical", m < .25);
                this.lastGateHealth[n] = u;
            }
            for (const b of p) {
                const m = n * 5 + (s === 0 ? b.segment : 4 - b.segment);
                const v = this.gatePieces[m];
                v.classList.toggle("destroyed", b.hp <= 0);
                v.classList.toggle("struck", b.hurtTime > 0);
                v.style.setProperty("--damage", String(1 - b.hp / b.maxHp));
            }
        }

        const r = this.game.querySelector("#countdown");
        if (t.phase === "countdown") {
            const n = String(Math.ceil(t.countdown));
            if (r.textContent !== n) {
                r.textContent = n;
                r.classList.remove("tick");
                r.offsetWidth;
                r.classList.add("tick");
            }
            r.classList.add("visible");
        } else {
            r.classList.remove("visible", "tick");
            r.textContent = "";
        }

        if (t.phase === "playing" && this.lastPhase === "countdown") {
            this.toast("¡A la batalla!");
        }
        if (t.phase === "finished" && this.lastPhase !== "finished") {
            this.resultTimer = window.setTimeout(() => this.showResult(t, s), 950);
        }
        if (t.phase === "playing" && t.time <= 60 && t.time > 59.8) {
            const n = this.game.querySelector("#battle-announcement");
            if (!n.textContent) {
                n.textContent = "×2 ENERGÍA";
                n.classList.add("show");
                setTimeout(() => n.classList.remove("show"), 2200);
            }
        }
        this.lastPhase = t.phase;
    }

    feedback(t, s, a) {
        for (const e of t.events) {
            if (!(e.id <= this.eventId)) {
                this.eventId = e.id;
                if ((e.type === "gate-hit" || e.type === "hit") && e.amount && performance.now() - this.lastHitAt > 80) {
                    this.lastHitAt = performance.now();
                    const i = a(e.x, 2.6, e.z, s);
                    const o = this.damagePool.pop() ?? document.createElement("span");
                    o.className = `damage-number ${e.type === "gate-hit" ? "gate-number" : ""}`;
                    o.textContent = `−${e.amount}`;
                    o.style.left = `${i.x}px`;
                    o.style.top = `${i.y}px`;
                    this.game.querySelector("#floating-feedback").append(o);
                    window.setTimeout(() => {
                        o.remove();
                        this.damagePool.push(o);
                    }, 850);
                }
            }
        }
    }

    stats(t, s, a) {
        const e = this.game.querySelector("#performance");
        if (!e.hidden) e.textContent = `${t} FPS · ${s} DRAW · ${Math.round(a * 100)}%`;
    }

    toggleStats() {
        const t = this.game.querySelector("#performance");
        t.hidden = !t.hidden;
    }
}

class Jt {
    context = null;
    master = null;
    lastId = 0;
    lastHit = 0;
    muted = !1;

    async unlock() {
        if (!this.context) {
            this.context = new AudioContext;
            this.master = this.context.createGain();
            this.master.gain.value = this.muted ? 0 : .26;
            this.master.connect(this.context.destination);
        }
        if (this.context.state === "suspended") await this.context.resume();
    }

    toggle() {
        this.muted = !this.muted;
        if (this.master) this.master.gain.setTargetAtTime(this.muted ? 0 : .26, this.context.currentTime, .04);
        return this.muted;
    }

    reset() {
        this.lastId = 0;
    }

    tone(t, s, a = "sine", e = .25, i, o = 0) {
        if (!this.context || !this.master || this.muted) return;
        const c = this.context.currentTime + o;
        const l = this.context.createOscillator();
        const r = this.context.createGain();
        l.type = a;
        l.frequency.setValueAtTime(t, c);
        if (i) l.frequency.exponentialRampToValueAtTime(i, c + s);
        r.gain.setValueAtTime(.001, c);
        r.gain.exponentialRampToValueAtTime(e, c + .012);
        r.gain.exponentialRampToValueAtTime(.001, c + s);
        l.connect(r);
        r.connect(this.master);
        l.start(c);
        l.stop(c + s + .02);
        l.onended = () => {
            l.disconnect();
            r.disconnect();
        };
    }

    noise(t, s, a) {
        if (!this.context || !this.master || this.muted) return;
        const e = this.context;
        const i = e.currentTime;
        const o = e.createBuffer(1, Math.ceil(e.sampleRate * t), e.sampleRate);
        const c = o.getChannelData(0);
        for (let h = 0; h < c.length; h++) c[h] = (Math.random() * 2 - 1) * (1 - h / c.length);
        const l = e.createBufferSource();
        const r = e.createBiquadFilter();
        const n = e.createGain();
        l.buffer = o;
        r.type = "lowpass";
        r.frequency.value = a;
        n.gain.setValueAtTime(s, i);
        n.gain.exponentialRampToValueAtTime(.001, i + t);
        l.connect(r);
        r.connect(n);
        n.connect(this.master);
        l.start();
        l.onended = () => {
            l.disconnect();
            r.disconnect();
            n.disconnect();
        };
    }

    select() {
        this.tone(680, .09, "sine", .18, 1e3);
    }

    error() {
        this.tone(130, .13, "triangle", .2, 90);
    }

    events(t) {
        for (const s of t) {
            if (!(s.id <= this.lastId)) {
                this.lastId = s.id;
                if (s.type === "deploy") {
                    this.tone(240, .22, "sine", .3, 680);
                    this.noise(.14, .12, 1300);
                }
                if (s.type === "attack" && s.kind !== "mage" && performance.now() - this.lastHit > 70) {
                    this.tone(s.kind === "knight" ? 170 : s.kind === "titan" ? 95 : 460, .09, "triangle", .12, 100);
                    this.lastHit = performance.now();
                }
                if (s.type === "hit" && performance.now() - this.lastHit > 60) {
                    this.noise(.07, .12, 3e3);
                    this.lastHit = performance.now();
                }
                if (s.type === "fireball") this.tone(120, .3, "sawtooth", .055, 500);
                if (s.type === "lightning") {
                    this.tone(60, .45, "sawtooth", .45, 30);
                    this.noise(.35, .4, 7500);
                }
                if (s.type === "freeze") {
                    this.tone(1200, .35, "sine", .25, 1800);
                }
                if (s.type === "poison") {
                    this.noise(.5, .2, 2200);
                }
                if (s.type === "log-deploy") {
                    this.tone(90, .6, "triangle", .35, 40);
                    this.noise(.4, .25, 1200);
                }
                if (s.type === "explosion") {
                    this.noise(.4, .35, 700);
                    this.tone(80, .3, "sine", .4, 35);
                }
                if (s.type === "arrows") this.noise(.4, .17, 4700);
                if (s.type === "arrow-impact") this.noise(.2, .23, 1700);
                if (s.type === "gate-destroyed") {
                    this.noise(.8, .5, 750);
                    this.tone(55, .5, "triangle", .45, 25);
                }
                if (s.type === "countdown") this.tone(s.amount === 0 ? 880 : 440, .18, "sine", .24);
                if (s.type === "victory") {
                    for (const [a, e] of [392, 494, 587, 784].entries()) {
                        this.tone(e, .7, "triangle", .22, void 0, a * .16);
                    }
                }
            }
        }
    }
}

class Yt {
    socket = null;
    closedIntentionally = !1;
    connecting = null;
    onMessage = () => {};
    onDisconnect = () => {};

    async connect() {
        if (this.socket?.readyState !== WebSocket.OPEN) {
            if (this.connecting) return this.connecting;
            this.closedIntentionally = !1;
            this.connecting = new Promise((t, s) => {
                const a = new URL("/duel", location.href);
                a.protocol = location.protocol === "https:" ? "wss:" : "ws:";
                const e = new WebSocket(a);
                this.socket = e;
                const i = window.setTimeout(() => {
                    e.close();
                    s(new Error("El servidor de duelos no responde."));
                }, 6e3);
                e.addEventListener("open", () => {
                    clearTimeout(i);
                    t();
                });
                e.addEventListener("error", () => {
                    clearTimeout(i);
                    s(new Error("No se pudo conectar con la arena."));
                });
                e.addEventListener("message", o => {
                    try {
                        this.onMessage(JSON.parse(o.data));
                    } catch {
                        console.warn("Mensaje no válido");
                    }
                });
                e.addEventListener("close", () => {
                    clearTimeout(i);
                    this.connecting = null;
                    if (!this.closedIntentionally) this.onDisconnect();
                });
            });
            try {
                await this.connecting;
            } finally {
                this.connecting = null;
            }
        }
    }

    send(t) {
        if (this.socket?.readyState === WebSocket.OPEN) this.socket.send(JSON.stringify(t));
    }

    async create() {
        await this.connect();
        this.send({ type: "create" });
    }

    async join(t) {
        await this.connect();
        this.send({ type: "join", code: t });
    }

    deploy(t, s, a, e) {
        this.send({ type: "deploy", card: t, x: s, z: a, slot: e });
    }

    close() {
        this.closedIntentionally = !0;
        this.socket?.close();
        this.socket = null;
        this.connecting = null;
    }
}

class Kt {
    sim = new X;
    state;
    viewTeam = 0;
    hud;
    render;
    audio = new Jt;
    network = new Yt;
    online = !1;
    paused = !0;
    selected = null;
    selectedSlot = null;
    difficulty = "normal";
    accumulator = 0;
    last = performance.now();
    uiAccumulator = 0;
    ready = !1;
    suppressClick = !1;
    haptics = !0;
    networkTick = 0;

    constructor() {
        this.sim.start(!1);
        this.sim.state.phase = "menu";
        this.state = this.sim.state;
        this.hud = new Wt(document.querySelector("#app"), {
            start: (deck) => this.start(deck),
            resume: () => this.resume(),
            pause: () => this.pause(),
            home: () => this.home(),
            sound: () => {
                this.audio.unlock();
                this.hud.muted(this.audio.toggle());
                this.savePreferences();
            },
            createRoom: () => this.createRoom(),
            joinRoom: s => this.joinRoom(s),
            select: (s, slot) => {
                if (!this.suppressClick) this.select(s, slot);
            },
            difficulty: s => {
                this.difficulty = s;
                this.sim.difficulty = s;
            }
        });
        this.loadPreferences();

        try {
            this.render = new jt(this.hud.canvas, this.hud.stage);
        } catch (s) {
            this.hud.connection("No se ha podido iniciar WebGL 2. Activa la aceleración gráfica del navegador.");
            console.error(s);
            return;
        }

        this.ready = !0;
        this.hud.canvas.addEventListener("webglcontextlost", s => {
            s.preventDefault();
            this.paused = !0;
            this.hud.connection("Recuperando el contexto gráfico…");
        });
        this.hud.canvas.addEventListener("webglcontextrestored", () => {
            this.hud.connection("");
            this.online ? (this.paused = !1) : this.pause();
        });

        new ResizeObserver(() => this.render.resize()).observe(this.hud.stage);
        this.bindInput();
        this.bindNetwork();
        this.hud.update(this.state, 0);

        document.addEventListener("visibilitychange", () => {
            this.last = performance.now();
            this.accumulator = 0;
            if (document.hidden && !this.online && this.state.phase === "playing") this.pause();
        });

        window.addEventListener("pagehide", () => this.network.close());
        requestAnimationFrame(s => this.frame(s));
        this.render.warmup();

        const t = new URLSearchParams(location.search).get("room");
        if (t && /^[A-Z2-9]{5}$/.test(t)) {
            this.hud.showRoom();
            const s = document.querySelector("#room-code");
            if (s) s.value = t;
        }

        Object.defineProperty(window, "__EMBER__", {
            value: {
                get state() { return H.state; },
                get metrics() {
                    return {
                        fps: H.render.fps,
                        drawCalls: H.render.drawCalls,
                        quality: H.render.quality
                    };
                }
            },
            configurable: !0
        });
    }

    start(playerDeck = null) {
        this.online = !1;
        this.viewTeam = 0;
        this.network.close();
        this.audio.unlock();
        this.audio.reset();
        this.hud.reset();
        this.hud.hide();
        this.select(null);
        this.sim.start(!0, playerDeck || getActiveBattleDeck());
        this.state = this.sim.state;
        this.paused = !1;
        this.accumulator = 0;
        this.last = performance.now();
    }

    resume() {
        this.audio.unlock();
        this.paused = !1;
        this.hud.hide();
        this.last = performance.now();
    }

    pause() {
        if (!this.online && this.state.phase === "playing") {
            this.paused = !0;
            this.hud.showPause(!1);
        }
    }

    home() {
        this.online = !1;
        this.network.close();
        this.paused = !0;
        this.sim.start(!1);
        this.state = this.sim.state;
        this.hud.reset();
        this.hud.showHome();
    }

    select(t, slot = null) {
        if (this.selected === t && this.selectedSlot === slot) {
            this.selected = null;
            this.selectedSlot = null;
        } else {
            this.selected = t;
            this.selectedSlot = slot;
            if (t) this.audio.select();
        }
        this.hud.select(this.selected, this.selectedSlot);
    }

    deploy(t, s, a, e = null) {
        if (!this.selected) return;
        const i = this.selected;
        const o = this.selectedSlot;

        if (this.online) {
            this.network.deploy(i, s, a, o);
            this.select(null);
            return;
        }

        const c = this.sim.deploy({
            team: t,
            card: i,
            x: s,
            z: a,
            slot: o
        });

        if (!c.ok) {
            this.hud.toast(c.reason);
            this.audio.error();
            return;
        }
        this.select(null);
    }

    bindInput() {
        window.addEventListener("keydown", t => {
            if (t.code === "Escape") {
                this.hud.currentModal === "pause" ? this.resume() : this.pause();
            }
            if (t.key >= "1" && t.key <= "4") {
                const idx = parseInt(t.key, 10) - 1;
                const c = this.state.players[this.viewTeam].hand[idx];
                if (c) this.select(c, idx);
            }
        });

        this.hud.canvas.addEventListener("click", t => {
            if (!this.selected) return;
            const s = this.render.pointer(t, this.viewTeam);
            if (s) this.deploy(this.viewTeam, s.x, s.z, this.selectedSlot);
        });
    }

    bindNetwork() {
        this.network.onMessage = t => {
            if (t.type === "waiting") this.hud.waiting(t.code);
            if (t.type === "start") {
                this.online = !0;
                this.viewTeam = t.team;
                this.state = t.state;
                this.hud.connected();
                this.paused = !1;
                this.last = performance.now();
            }
            if (t.type === "sync") this.state = t.state;
        };
        this.network.onDisconnect = () => {
            if (this.online) {
                this.hud.toast("Conexión perdida");
                this.home();
            }
        };
    }

    async createRoom() {
        try {
            await this.network.create();
        } catch (t) {
            this.hud.roomFeedback(t.message);
        }
    }

    async joinRoom(t) {
        try {
            await this.network.join(t);
        } catch (s) {
            this.hud.roomFeedback(s.message);
        }
    }

    loadPreferences() {
        try {
            const t = JSON.parse(localStorage.getItem("ember-preferences") ?? "{}");
            if (t.muted) {
                this.audio.muted = !0;
                this.hud.muted(!0);
            }
            if (t.difficulty) {
                this.difficulty = t.difficulty;
                this.sim.difficulty = t.difficulty;
            }
        } catch (t) {}
    }

    savePreferences() {
        try {
            localStorage.setItem("ember-preferences", JSON.stringify({
                muted: this.audio.muted,
                difficulty: this.difficulty
            }));
        } catch (t) {}
    }

    frame(t) {
        requestAnimationFrame(s => this.frame(s));
        const s = Math.min(.1, (t - this.last) / 1e3);
        this.last = t;

        if (!this.paused && !this.online) {
            this.accumulator += s;
            while (this.accumulator >= M.fixedStep) {
                this.sim.step(M.fixedStep);
                this.accumulator -= M.fixedStep;
            }
        }

        if (this.ready) {
            this.render.render(this.state, s, this.viewTeam, this.paused);
            this.audio.events(this.state.events);
            this.hud.feedback(this.state, this.viewTeam, (a, e, i, o) => this.render.project(a, e, i, o));
        }

        this.uiAccumulator += s;
        if (this.uiAccumulator >= .033) {
            this.hud.update(this.state, this.viewTeam);
            this.hud.stats(this.render?.fps ?? 60, this.render?.drawCalls ?? 0, this.render?.quality ?? 1);
            this.uiAccumulator = 0;
        }
    }
}

const H = new Kt;
export { H };
