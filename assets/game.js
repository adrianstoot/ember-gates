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
        damage: 135,
        speed: 0,
        range: 0,
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
        color: "#ff8452",
        description: "Conjura orbes ardientes a distancia que dañan en un área circular."
    },
    // 10 NUEVAS CARTAS:
    bomb_tower: {
        id: "bomb_tower",
        isBuilding: true,
        attackDuration: 1.2,
        impactAt: .6,
        acceleration: 0,
        name: "Torre de Bombas",
        role: "ESTRUCTURA · DEFENSA",
        cost: 4,
        hp: 1120,
        damage: 184,
        speed: 0,
        range: 6.0,
        cooldown: 1.8,
        count: 1,
        radius: .85,
        splashRadius: 2.2,
        color: "#e67e22",
        description: "Estructura defensiva que dispara bombas explosivas causando gran daño de área."
    },
    lightning: {
        id: "lightning",
        isSpell: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "Hechizo de Rayos",
        role: "HECHIZO · IMPACTO",
        cost: 6,
        hp: 0,
        damage: 650,
        speed: 0,
        range: 0,
        cooldown: 0,
        count: 0,
        radius: 3.5,
        color: "#3498db",
        description: "Descarga 3 rayos letales sobre las unidades o fortalezas con mayor vida del área."
    },
    fireball: {
        id: "fireball",
        isSpell: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "Bola de Fuego",
        role: "HECHIZO · EXPLOSIÓN",
        cost: 4,
        hp: 0,
        damage: 325,
        speed: 0,
        range: 0,
        cooldown: 0,
        count: 0,
        radius: 2.5,
        splashRadius: 2.5,
        color: "#e74c3c",
        description: "Meteoro incandescente que causa alto daño y empuje en el punto de impacto."
    },
    poison: {
        id: "poison",
        isSpell: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "Hechizo de Veneno",
        role: "HECHIZO · CONTINUO",
        cost: 4,
        hp: 0,
        damage: 75, // por segundo
        duration: 5.0,
        speed: 0,
        range: 0,
        cooldown: 0,
        count: 0,
        radius: 3.2,
        color: "#2ecc71",
        description: "Cubre una zona tóxica durante 5 segundos, ralentizando y dañando a todos los enemigos."
    },
    freeze: {
        id: "freeze",
        isSpell: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "Hechizo de Hielo",
        role: "HECHIZO · CONTROL",
        cost: 4,
        hp: 0,
        damage: 95,
        duration: 5.0,
        speed: 0,
        range: 0,
        cooldown: 0,
        count: 0,
        radius: 3.0,
        color: "#00d2d3",
        description: "Congela completamente las unidades y defensas enemigas durante 5 segundos."
    },
    knight_rider: {
        id: "knight_rider",
        attackDuration: .75,
        impactAt: .3,
        acceleration: 14,
        name: "Caballero a Caballo",
        role: "CABALLERÍA · CARGA",
        cost: 5,
        hp: 1200,
        damage: 165,
        chargeDamage: 330,
        speed: 2.3,
        range: 1.25,
        cooldown: 1.2,
        count: 1,
        radius: .6,
        color: "#f39c12",
        description: "Cabalga a toda velocidad. Al recorrer distancia entra en carga infligiendo el doble de daño."
    },
    titan: {
        id: "titan",
        attackDuration: 1.4,
        impactAt: .65,
        acceleration: 3.5,
        name: "Titán",
        role: "TANQUE COLOSAL",
        cost: 7,
        hp: 3100,
        damage: 240,
        speed: .65,
        range: 1.2,
        cooldown: 1.8,
        count: 1,
        radius: .95,
        color: "#95a5a6",
        description: "Coloso imparable de roca y magma. Ignora distracciones y avanza directo a la fortaleza rival."
    },
    archers: {
        id: "archers",
        attackDuration: .68,
        impactAt: .28,
        acceleration: 8,
        name: "Arqueras",
        role: "DISTANCIA · 2 UNIDADES",
        cost: 3,
        hp: 216,
        damage: 64,
        speed: 1.45,
        range: 5.0,
        cooldown: 1.0,
        count: 2,
        radius: .35,
        color: "#1abc9c",
        description: "Pareja de hábiles arqueras que atacan tanto objetivos terrestres como aéreos a gran distancia."
    },
    the_log: {
        id: "the_log",
        isSpell: true,
        attackDuration: 0,
        impactAt: 0,
        acceleration: 0,
        name: "El Tronco",
        role: "HECHIZO · BARRIDO",
        cost: 2,
        hp: 0,
        damage: 240,
        speed: 4.2,
        range: 9.0,
        cooldown: 0,
        count: 0,
        radius: 1.6,
        color: "#8e44ad",
        description: "Rueda por la arena aplastando a todos los enemigos terrestres con sus afilados pinchos."
    },
    xbow: {
        id: "xbow",
        isBuilding: true,
        attackDuration: .28,
        impactAt: .12,
        acceleration: 0,
        name: "Ballesta",
        role: "ESTRUCTURA · ASEDIO",
        cost: 6,
        hp: 1330,
        damage: 38,
        speed: 0,
        range: 10.5,
        cooldown: .28,
        count: 1,
        radius: .85,
        color: "#d35400",
        description: "Arma de asedio de cadencia ultrarrápida. Capaz de alcanzar la fortaleza enemiga desde tu campo."
    }
};

const A = ["knight", "archers", "fireball", "knight_rider", "the_log", "mage", "lancer", "bomb_tower"];
const ALL_CARDS = Object.keys(w);

// Game constants
const M = {
    fixedStep: 1 / 60,
    matchDuration: 180,
    overtimeDuration: 60,
    segmentHp: 640,
    maxEnergy: 10,
    baseEnergyRate: 1 / 2.3,
    doubleEnergyRate: 2 / 2.3,
    cardCooldown: 1.0
};

// Deck Management Class
class DeckManager {
    constructor() {
        this.activeSlot = 0;
        this.decks = [
            ["knight", "archers", "fireball", "knight_rider", "the_log", "mage", "lancer", "bomb_tower"],
            ["titan", "xbow", "lightning", "poison", "knight", "archers", "imps", "the_log"],
            ["freeze", "fireball", "knight_rider", "lancer", "mage", "bomb_tower", "archers", "imps"]
        ];
        this.load();
    }
    load() {
        try {
            const saved = localStorage.getItem("ember_decks");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length === 3) {
                    this.decks = parsed;
                }
            }
            const slot = localStorage.getItem("ember_active_deck_slot");
            if (slot !== null) this.activeSlot = parseInt(slot, 10);
        } catch(e) {}
    }
    save() {
        try {
            localStorage.setItem("ember_decks", JSON.stringify(this.decks));
            localStorage.setItem("ember_active_deck_slot", String(this.activeSlot));
        } catch(e) {}
    }
    getActiveDeck() {
        return this.decks[this.activeSlot] || this.decks[0];
    }
    setCard(slotIndex, cardId) {
        if (slotIndex >= 0 && slotIndex < 8 && w[cardId]) {
            const currentDeck = [...this.getActiveDeck()];
            const existingIdx = currentDeck.indexOf(cardId);
            if (existingIdx !== -1) {
                currentDeck[existingIdx] = currentDeck[slotIndex];
            }
            currentDeck[slotIndex] = cardId;
            this.decks[this.activeSlot] = currentDeck;
            this.save();
        }
    }
    getAverageElixir() {
        const deck = this.getActiveDeck();
        const sum = deck.reduce((acc, c) => acc + (w[c] ? w[c].cost : 0), 0);
        return (sum / 8).toFixed(1);
    }
}
const DeckState = new DeckManager();

// ==========================================
// AUDIO MANAGER (Real 1-Second WAV Audio Pack)
// ==========================================
class Jt {
    constructor() {
        this.muted = !1;
        this.context = null;
        this.master = null;
        this.lastId = 0;
        this.lastHit = 0;
        this.audioElements = new Map();
        this.initSounds();
    }

    initSounds() {
        const soundList = [
            "sword", "lightning", "fireball", "poison", "freeze",
            "charge", "titan", "arrow", "the_log", "bomb_tower",
            "xbow", "deploy", "gate_hit", "gate_destroyed", "ui_click"
        ];
        for (const name of soundList) {
            try {
                const a = new Audio(`./assets/sounds/${name}.wav`);
                a.preload = "auto";
                this.audioElements.set(name, a);
            } catch (e) {}
        }
    }

    async unlock() {
        if (!this.context) {
            try {
                this.context = new (window.AudioContext || window.webkitAudioContext)();
                this.master = this.context.createGain();
                this.master.gain.value = this.muted ? 0 : 0.45;
                this.master.connect(this.context.destination);
            } catch (e) {}
        }
        if (this.context && this.context.state === "suspended") {
            try { await this.context.resume(); } catch (e) {}
        }
    }

    toggle() {
        this.muted = !this.muted;
        if (this.master && this.context) {
            this.master.gain.setTargetAtTime(this.muted ? 0 : 0.45, this.context.currentTime, 0.05);
        }
        return this.muted;
    }

    reset() {
        this.lastId = 0;
    }

    play(name, volume = 1.0) {
        if (this.muted) return;
        this.unlock();
        try {
            const original = this.audioElements.get(name);
            if (original) {
                const clone = original.cloneNode();
                clone.volume = Math.min(1.0, Math.max(0, volume));
                clone.play().catch(() => {});
            }
        } catch (e) {}
    }

    select() {
        this.play("ui_click", 0.6);
    }

    error() {
        this.play("ui_click", 0.3);
    }

    events(evList) {
        for (const s of evList) {
            if (s.id <= this.lastId) continue;
            this.lastId = s.id;

            if (s.type === "deploy") {
                const card = s.card;
                if (card === "lightning") this.play("lightning", 0.95);
                else if (card === "fireball") this.play("fireball", 0.9);
                else if (card === "poison") this.play("poison", 0.85);
                else if (card === "freeze") this.play("freeze", 0.9);
                else if (card === "the_log") this.play("the_log", 0.9);
                else if (card === "bomb_tower") this.play("bomb_tower", 0.85);
                else if (card === "xbow") this.play("xbow", 0.8);
                else if (card === "knight_rider") this.play("charge", 0.85);
                else if (card === "titan") this.play("titan", 0.95);
                else this.play("deploy", 0.7);
            }

            if (s.type === "attack") {
                if (s.kind === "knight" || s.kind === "imps") {
                    if (performance.now() - this.lastHit > 90) {
                        this.play("sword", 0.75);
                        this.lastHit = performance.now();
                    }
                } else if (s.kind === "lancer" || s.kind === "knight_rider") {
                    this.play("charge", 0.8);
                } else if (s.kind === "titan") {
                    this.play("titan", 0.9);
                } else if (s.kind === "archers" || s.kind === "arrows") {
                    this.play("arrow", 0.75);
                } else if (s.kind === "bomb_tower") {
                    this.play("bomb_tower", 0.85);
                } else if (s.kind === "xbow") {
                    this.play("xbow", 0.65);
                } else if (s.kind === "mage") {
                    this.play("fireball", 0.7);
                }
            }

            if (s.type === "hit" && performance.now() - this.lastHit > 80) {
                this.play("gate_hit", 0.7);
                this.lastHit = performance.now();
            }

            if (s.type === "fireball") this.play("fireball", 0.85);
            if (s.type === "lightning") this.play("lightning", 0.95);
            if (s.type === "gate-destroyed") this.play("gate_destroyed", 1.0);
        }
    }
}

// ==========================================
// GAME SIMULATION (X) - 15 CARDS FULL LOGIC
// ==========================================
class X {
    constructor(seed = 1, difficulty = "normal") {
        this.difficulty = difficulty;
        this.rngSeed = seed;
        this.state = this.createState();
        this.botTeam = 1;
        this.lastBotPlay = 0;
        this.activePoisonClouds = [];
    }

    rnd() {
        this.rngSeed = (this.rngSeed * 9301 + 49297) % 233280;
        return this.rngSeed / 233280;
    }

    createState() {
        const createPlayer = (team) => {
            const deck = team === 0 ? DeckState.getActiveDeck() : ["knight", "archers", "fireball", "knight_rider", "the_log", "mage", "lancer", "bomb_tower"];
            const shuffled = [...deck].sort(() => this.rnd() - 0.5);
            const hand = shuffled.slice(0, 4);
            const queue = shuffled.slice(4);
            const next = queue.shift();
            return {
                team,
                energy: 5.0,
                deck: [...deck],
                queue: [...queue, hand[0]],
                hand: [...hand],
                next,
                cooldowns: Object.fromEntries(ALL_CARDS.map(k => [k, 0]))
            };
        };

        const gates = [];
        for (let team = 0; team <= 1; team++) {
            const z = team === 0 ? 14.5 : -14.5;
            for (let seg = 0; seg < 5; seg++) {
                const x = (seg - 2) * 3.6;
                gates.push({
                    id: team * 5 + seg,
                    team,
                    segment: seg,
                    x,
                    z,
                    hp: M.segmentHp,
                    maxHp: M.segmentHp,
                    hurtTime: 0
                });
            }
        }

        return {
            phase: "menu",
            time: M.matchDuration,
            countdown: 3.0,
            overtime: !1,
            nextEntityId: 1,
            nextEventId: 1,
            players: [createPlayer(0), createPlayer(1)],
            units: [],
            projectiles: [],
            events: [],
            gates
        };
    }

    start(withCountdown = !0) {
        this.state.phase = withCountdown ? "countdown" : "playing";
        this.state.countdown = withCountdown ? 3.0 : 0;
    }

    emit(ev) {
        ev.id = this.state.nextEventId++;
        this.state.events.push(ev);
    }

    deploy({ team, card, x, z, slot }) {
        if (this.state.phase !== "playing") return { ok: !1, reason: "Partida no activa" };
        const player = this.state.players[team];
        const cardData = w[card];
        if (!cardData) return { ok: !1, reason: "Carta desconocida" };
        if (player.energy < cardData.cost) return { ok: !1, reason: "Energía insuficiente" };

        const isSpell = !!cardData.isSpell;
        const isOwnHalf = team === 0 ? z >= 0.1 : z <= -0.1;
        if (!isSpell && !isOwnHalf) return { ok: !1, reason: "Despliega tus tropas en tu mitad de arena" };

        player.energy -= cardData.cost;
        player.cooldowns[card] = M.cardCooldown;

        // Cycle card from deck
        if (slot !== null && slot >= 0 && slot < 4) {
            const nextCard = player.next;
            player.queue.push(player.hand[slot]);
            player.hand[slot] = nextCard;
            player.next = player.queue.shift();
        }

        this.emit({ type: "deploy", team, card, x, z });

        // Spell executions
        if (card === "arrows") {
            this.state.projectiles.push({
                id: this.state.nextEntityId++,
                type: "arrows",
                team,
                x,
                z,
                age: 0,
                duration: 0.45
            });
            return { ok: !0 };
        }

        if (card === "fireball") {
            this.state.projectiles.push({
                id: this.state.nextEntityId++,
                type: "fireball",
                team,
                startX: team === 0 ? 0 : 0,
                startZ: team === 0 ? 14 : -14,
                targetX: x,
                targetZ: z,
                x,
                z,
                age: 0,
                duration: 0.65
            });
            return { ok: !0 };
        }

        if (card === "lightning") {
            this.emit({ type: "lightning", team, x, z });
            // Damage 3 highest HP targets in radius
            const targets = [];
            for (const u of this.state.units) {
                if (u.team !== team && u.hp > 0 && Math.hypot(u.x - x, u.z - z) <= 3.5) targets.push(u);
            }
            for (const g of this.state.gates) {
                if (g.team !== team && g.hp > 0 && Math.hypot(Math.max(0, Math.abs(g.x - x) - 1.8), g.z - z) <= 3.5) targets.push(g);
            }
            targets.sort((a, b) => b.hp - a.hp);
            for (let i = 0; i < Math.min(3, targets.length); i++) {
                const t = targets[i];
                t.hp -= cardData.damage;
                t.hurtTime = 0.35;
                this.emit({ type: "hit", target: t.id, amount: cardData.damage, x: t.x, z: t.z });
            }
            return { ok: !0 };
        }

        if (card === "poison") {
            this.state.projectiles.push({
                id: this.state.nextEntityId++,
                type: "poison_cloud",
                team,
                x,
                z,
                age: 0,
                radius: cardData.radius,
                duration: cardData.duration
            });
            return { ok: !0 };
        }

        if (card === "freeze") {
            this.emit({ type: "freeze", team, x, z });
            for (const u of this.state.units) {
                if (u.team !== team && u.hp > 0 && Math.hypot(u.x - x, u.z - z) <= cardData.radius) {
                    u.frozen = cardData.duration;
                    u.hurtTime = 0.2;
                }
            }
            for (const g of this.state.gates) {
                if (g.team !== team && g.hp > 0 && Math.hypot(Math.max(0, Math.abs(g.x - x) - 1.8), g.z - z) <= cardData.radius) {
                    g.frozen = cardData.duration;
                }
            }
            return { ok: !0 };
        }

        if (card === "the_log") {
            this.state.units.push({
                id: this.state.nextEntityId++,
                kind: "the_log",
                team,
                x,
                z,
                vx: 0,
                vz: team === 0 ? -cardData.speed : cardData.speed,
                facing: team === 0 ? Math.PI : 0,
                hp: 9999,
                maxHp: 9999,
                state: "walk",
                age: 0,
                deathTime: 0,
                attackTime: 0,
                targetId: null,
                isLog: true,
                distanceRemaining: cardData.range
            });
            return { ok: !0 };
        }

        // Units and Buildings
        const count = cardData.count || 1;
        for (let i = 0; i < count; i++) {
            let ox = 0, oz = 0;
            if (count > 1) {
                const angle = (i / count) * Math.PI * 2;
                ox = Math.cos(angle) * 0.7;
                oz = Math.sin(angle) * 0.7;
            }
            this.state.units.push({
                id: this.state.nextEntityId++,
                kind: card,
                team,
                x: x + ox,
                z: z + oz,
                vx: 0,
                vz: 0,
                facing: team === 0 ? Math.PI : 0,
                hp: cardData.hp,
                maxHp: cardData.hp,
                state: "walk",
                age: 0,
                deathTime: 0,
                attackTime: 0,
                footstep: 0,
                hurtTime: 0,
                frozen: 0,
                charging: false,
                chargeTimer: 0,
                targetId: null,
                isBuilding: !!cardData.isBuilding,
                splashRadius: cardData.splashRadius || 0
            });
        }
        return { ok: !0 };
    }

    step(dt) {
        if (this.state.phase === "countdown") {
            this.state.countdown -= dt;
            if (this.state.countdown <= 0) {
                this.state.phase = "playing";
                this.emit({ type: "start" });
            }
            return;
        }

        if (this.state.phase !== "playing") return;

        this.state.events = [];
        this.state.time -= dt;

        // Overtime check
        if (this.state.time <= 0 && !this.state.overtime) {
            this.state.overtime = !0;
            this.state.time = M.overtimeDuration;
            this.emit({ type: "overtime" });
        } else if (this.state.time <= 0 && this.state.overtime) {
            this.state.phase = "finished";
            this.emit({ type: "victory" });
            return;
        }

        const energyRate = (this.state.time <= 60 || this.state.overtime) ? M.doubleEnergyRate : M.baseEnergyRate;
        for (const p of this.state.players) {
            p.energy = Math.min(M.maxEnergy, p.energy + energyRate * dt);
            for (const k in p.cooldowns) {
                p.cooldowns[k] = Math.max(0, p.cooldowns[k] - dt);
            }
        }

        // Update Poison clouds
        for (let i = this.state.projectiles.length - 1; i >= 0; i--) {
            const p = this.state.projectiles[i];
            p.age += dt;
            if (p.type === "poison_cloud") {
                const tickDamage = w.poison.damage * dt;
                for (const u of this.state.units) {
                    if (u.team !== p.team && u.hp > 0 && Math.hypot(u.x - p.x, u.z - p.z) <= p.radius) {
                        u.hp -= tickDamage;
                        u.hurtTime = 0.15;
                    }
                }
                for (const g of this.state.gates) {
                    if (g.team !== p.team && g.hp > 0 && Math.hypot(Math.max(0, Math.abs(g.x - p.x) - 1.8), g.z - p.z) <= p.radius) {
                        g.hp -= tickDamage;
                        g.hurtTime = 0.15;
                    }
                }
                if (p.age >= p.duration) this.state.projectiles.splice(i, 1);
            } else if (p.type === "arrows" && p.age >= p.duration) {
                for (const u of this.state.units) {
                    if (u.team !== p.team && u.hp > 0 && Math.hypot(u.x - p.x, u.z - p.z) <= w.arrows.radius) {
                        u.hp -= w.arrows.damage;
                        u.hurtTime = 0.3;
                    }
                }
                this.state.projectiles.splice(i, 1);
            } else if (p.type === "fireball" && p.age >= p.duration) {
                this.emit({ type: "explosion", x: p.targetX, z: p.targetZ });
                for (const u of this.state.units) {
                    if (u.team !== p.team && u.hp > 0 && Math.hypot(u.x - p.targetX, u.z - p.targetZ) <= w.fireball.radius) {
                        u.hp -= w.fireball.damage;
                        u.hurtTime = 0.4;
                    }
                }
                for (const g of this.state.gates) {
                    if (g.team !== p.team && g.hp > 0 && Math.hypot(Math.max(0, Math.abs(g.x - p.targetX) - 1.8), g.z - p.targetZ) <= w.fireball.radius) {
                        g.hp -= w.fireball.damage;
                        g.hurtTime = 0.4;
                    }
                }
                this.state.projectiles.splice(i, 1);
            }
        }

        // Update Units
        this.updateUnits(dt);

        // Update Bot AI
        if (this.botTeam !== null) this.updateBot(dt, this.botTeam);

        // Check Gates destruction
        for (const g of this.state.gates) {
            g.hurtTime = Math.max(0, g.hurtTime - dt);
            if (g.hp <= 0 && !g.destroyed) {
                g.destroyed = !0;
                this.emit({ type: "gate-destroyed", gate: g.id });
            }
        }

        const team0GatesAlive = this.state.gates.filter(g => g.team === 0 && g.hp > 0).length;
        const team1GatesAlive = this.state.gates.filter(g => g.team === 1 && g.hp > 0).length;
        if (team0GatesAlive === 0 || team1GatesAlive === 0) {
            this.state.phase = "finished";
            this.emit({ type: "victory" });
        }
    }

    updateUnits(dt) {
        for (let i = this.state.units.length - 1; i >= 0; i--) {
            const u = this.state.units[i];
            u.age += dt;
            u.hurtTime = Math.max(0, u.hurtTime - dt);

            if (u.frozen > 0) {
                u.frozen = Math.max(0, u.frozen - dt);
                continue;
            }

            if (u.hp <= 0) {
                u.deathTime += dt;
                if (u.deathTime >= 0.8) this.state.units.splice(i, 1);
                continue;
            }

            // Log rolling
            if (u.isLog) {
                const dist = Math.abs(u.vz * dt);
                u.z += u.vz * dt;
                u.distanceRemaining -= dist;
                for (const enemy of this.state.units) {
                    if (enemy.team !== u.team && enemy.hp > 0 && !enemy.isLog && Math.hypot(enemy.x - u.x, enemy.z - u.z) <= 1.6) {
                        enemy.hp -= w.the_log.damage;
                        enemy.hurtTime = 0.35;
                        enemy.z += (u.vz > 0 ? 0.8 : -0.8);
                        this.emit({ type: "hit", target: enemy.id, amount: w.the_log.damage, x: enemy.x, z: enemy.z });
                    }
                }
                if (u.distanceRemaining <= 0 || Math.abs(u.z) > 15) this.state.units.splice(i, 1);
                continue;
            }

            // Buildings don't walk
            if (u.isBuilding) {
                u.attackTime = Math.max(0, u.attackTime - dt);
                let target = null;
                let minDst = w[u.kind].range;
                for (const enemy of this.state.units) {
                    if (enemy.team !== u.team && enemy.hp > 0) {
                        const dst = Math.hypot(enemy.x - u.x, enemy.z - u.z);
                        if (dst <= minDst) { minDst = dst; target = enemy; }
                    }
                }
                if (u.kind === "xbow" && !target) {
                    for (const g of this.state.gates) {
                        if (g.team !== u.team && g.hp > 0) {
                            const dst = Math.hypot(g.x - u.x, g.z - u.z);
                            if (dst <= minDst) { minDst = dst; target = g; }
                        }
                    }
                }
                if (target && u.attackTime <= 0) {
                    u.attackTime = w[u.kind].cooldown;
                    target.hp -= w[u.kind].damage;
                    target.hurtTime = 0.25;
                    this.emit({ type: "attack", kind: u.kind, x: u.x, z: u.z });
                    this.emit({ type: "hit", target: target.id, amount: w[u.kind].damage, x: target.x, z: target.z });
                }
                continue;
            }

            // Mobile units pathfinding and combat
            const cData = w[u.kind];
            const isTitan = u.kind === "titan";
            const isRider = u.kind === "knight_rider";

            if (isRider) {
                u.chargeTimer += dt;
                u.charging = u.chargeTimer >= 1.5;
            }

            // Find closest enemy target
            let target = null;
            let targetDst = Infinity;

            if (!isTitan) {
                for (const enemy of this.state.units) {
                    if (enemy.team !== u.team && enemy.hp > 0 && !enemy.isLog) {
                        const dst = Math.hypot(enemy.x - u.x, enemy.z - u.z);
                        if (dst < targetDst) { targetDst = dst; target = enemy; }
                    }
                }
            }

            // If no enemy unit or titan targeting buildings, target nearest gate
            if (!target || targetDst > 6.0 || isTitan) {
                for (const g of this.state.gates) {
                    if (g.team !== u.team && g.hp > 0) {
                        const dst = Math.hypot(g.x - u.x, g.z - u.z);
                        if (dst < targetDst) { targetDst = dst; target = g; }
                    }
                }
            }

            const attackRange = cData.range || 1.1;
            if (target && targetDst <= attackRange) {
                // In attack range
                u.state = "attack";
                u.attackTime = Math.max(0, u.attackTime - dt);
                u.facing = Math.atan2(target.x - u.x, target.z - u.z);

                if (u.attackTime <= 0) {
                    u.attackTime = cData.cooldown;
                    const dmg = isRider && u.charging ? cData.chargeDamage : cData.damage;
                    target.hp -= dmg;
                    target.hurtTime = 0.3;
                    this.emit({ type: "attack", kind: u.kind, x: u.x, z: u.z });
                    this.emit({ type: "hit", target: target.id, amount: dmg, x: target.x, z: target.z });
                    if (isRider && u.charging) {
                        u.charging = false;
                        u.chargeTimer = 0;
                    }
                }
            } else if (target) {
                // Walk towards target
                u.state = "walk";
                const moveSpeed = (isRider && u.charging) ? cData.speed * 1.8 : cData.speed;
                const dx = target.x - u.x;
                const dz = target.z - u.z;
                const angle = Math.atan2(dx, dz);
                u.facing = angle;
                u.vx = Math.sin(angle) * moveSpeed;
                u.vz = Math.cos(angle) * moveSpeed;
                u.x += u.vx * dt;
                u.z += u.vz * dt;
                u.footstep += moveSpeed * dt;
            }
        }
    }

    updateBot(dt, botTeam) {
        const player = this.state.players[botTeam];
        this.lastBotPlay += dt;
        if (this.lastBotPlay < 2.8) return;

        const affordable = player.hand.filter(c => w[c] && player.energy >= w[c].cost);
        if (affordable.length > 0) {
            const card = affordable[Math.floor(this.rnd() * affordable.length)];
            const slot = player.hand.indexOf(card);
            const targetZ = botTeam === 1 ? -6.0 + this.rnd() * 4.0 : 6.0 - this.rnd() * 4.0;
            const targetX = (this.rnd() - 0.5) * 8.0;
            this.deploy({ team: botTeam, card, x: targetX, z: targetZ, slot });
            this.lastBotPlay = 0;
        }
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

// ==========================================
// PROCEDURAL 3D UNIT MODELS (ot) - PRO QUALITY
// ==========================================
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

    // 1. BOMB TOWER (Torre de Bombas)
    if (g === "bomb_tower") {
        a("body", [0, 0, 0], l => {
            // Hexagonal stone base & tower shaft
            l.cyl(d.stone, 0, .45, 0, 1.35, 1.55, .9, 0, 0, 8);
            l.cyl(d.stone, 0, 1.35, 0, 1.15, 1.35, 1.1, 0, 0, 8);
            // Wooden roof platform
            l.cyl(d.wood, 0, 1.95, 0, 1.45, 1.45, .15, 0, 0, 8);
            // Crenelated stone battlements
            for (let r = 0; r < 6; r++) {
                const ang = (r / 6) * Math.PI * 2;
                l.box(d.stone, Math.sin(ang) * 1.25, 2.15, Math.cos(ang) * 1.25, .35, .35, .18, ang);
            }
        });
        a("head", [0, 2.15, 0], l => {
            // Heavy iron mortar cannon pointing forward
            l.cyl(d.steel, 0, .32, .1, .36, .46, .85, .55, 0, 8);
            l.cyl(d.black, 0, .58, .26, .26, .26, .15, .55, 0, 8);
            l.box(d.gold, 0, .32, .1, .75, .08, .08);
            // Stack of cannonballs on the wooden deck
            l.ell(d.black, -.42, .08, -.18, .22, .22, .22);
            l.ell(d.black, -.22, .08, -.35, .20, .20, .20);
            l.ell(d.black, -.32, .24, -.26, .18, .18, .18);
            // Burning powder fuse with spark
            l.cyl(d.red, 0, .15, -.45, .04, .04, .25);
            l.ell(d.orange, 0, .28, -.52, .08, .08, .08);
        });
        return { bones: s, height: 2.8, scale: 1.1 };
    }

    // 2. XBOW (Ballesta de Asedio)
    if (g === "xbow") {
        a("body", [0, 0, 0], l => {
            // Heavy dark oak tripod swivel base
            l.box(d.wood, 0, .2, 0, 1.5, .25, 1.7);
            l.box(d.steel, 0, .12, 0, 1.65, .1, .25);
            l.box(d.steel, 0, .12, 0, .25, .1, 1.85);
            // Brass gear and rotation turntable
            l.cyl(d.steel, 0, .42, 0, .45, .45, .25, 0, 0, 12);
            l.ring(d.gold, 0, .44, 0, .46, .05, Math.PI / 2);
        });
        a("head", [0, .58, 0], l => {
            // Ballista frame & bolt launch track
            l.box(d.wood, 0, .2, 0, .38, .32, 1.45);
            l.box(d.steel, 0, .35, 0, .18, .12, 1.2);
            // Double curved steel bow limbs
            l.cyl(d.wood, 0, .22, .55, .06, .06, 2.3, 0, Math.PI / 2, 8);
            l.cyl(d.steel, 0, .34, .18, .03, .03, 1.15, Math.PI / 2, 0);
            // Tensioned cable and loaded heavy bolt
            l.line && l.line(d.gold, -1.1, .22, .55, 0, .34, -.45);
            l.line && l.line(d.gold, 1.1, .22, .55, 0, .34, -.45);
            l.box(d.gold, 0, .38, .2, .08, .08, .9);
        });
        return { bones: s, height: 1.7, scale: 1.05 };
    }

    // 3. THE LOG (El Tronco con pinchos)
    if (g === "the_log") {
        a("body", [0, 0, 0], l => {
            // Thick rolling timber trunk
            l.cyl(d.wood, 0, .42, 0, .48, .48, 2.8, 0, Math.PI / 2, 14);
            // 3 Heavy riveted iron bands
            l.cyl(d.steel, 0, .42, -1.1, .51, .51, .18, 0, Math.PI / 2, 14);
            l.cyl(d.steel, 0, .42, 0, .51, .51, .18, 0, Math.PI / 2, 14);
            l.cyl(d.steel, 0, .42, 1.1, .51, .51, .18, 0, Math.PI / 2, 14);
            // 12 Sharp protruding iron spikes radiating around
            for (let r = 0; r < 8; r++) {
                const ang = (r / 8) * Math.PI * 2;
                l.cone(d.gold, Math.sin(ang) * .55, .42 + Math.cos(ang) * .55, -.55, .1, .32, ang, 0);
                l.cone(d.gold, Math.sin(ang + .4) * .55, .42 + Math.cos(ang + .4) * .55, .55, .1, .32, ang + .4, 0);
            }
        });
        return { bones: s, height: .9, scale: 1.0 };
    }

    // 4. TITAN (Coloso Tanque de Piedra y Lava)
    if (g === "titan") {
        a("body", [0, 0, 0], l => {
            // Massive granite torso
            l.box(d.darkStone, 0, 1.65, 0, 1.65, 1.45, 1.25);
            // Molten lava core on chest
            l.box(d.orange, 0, 1.6, .62, .5, .5, .08);
            l.box(d.red, 0, 1.35, .62, .32, .68, .06);
            // Spiked shoulder boulder pauldrons
            l.ell(d.stone, -1.15, 2.2, 0, .58, .52, .58);
            l.ell(d.stone, 1.15, 2.2, 0, .58, .52, .58);
        });
        a("head", [0, 2.45, 0], l => {
            // Chiseled rock head & glowing eyes
            l.box(d.darkStone, 0, .18, .18, .75, .58, .68);
            l.box(d.orange, -.18, .22, .52, .16, .08, .06);
            l.box(d.orange, .18, .22, .52, .16, .08, .06);
            // Obsidian horn crests
            l.cone(d.stone, -.32, .6, .1, .16, .38, -.2, -.2);
            l.cone(d.stone, .32, .6, .1, .16, .38, -.2, .2);
        });
        for (const l of [-1, 1]) {
            a(l === -1 ? "leftArm" : "rightArm", [l * 1.15, 2.0, 0], r => {
                r.cyl(d.stone, l * .06, -.55, 0, .32, .42, 1.25);
                r.ell(d.darkStone, l * .06, -1.25, .1, .42, .45, .42);
            });
            a(l === -1 ? "leftLeg" : "rightLeg", [l * .52, .8, 0], r => {
                r.box(d.darkStone, 0, -.42, 0, .55, .95, .65);
                r.box(d.stone, 0, -.85, .14, .62, .28, .8);
            });
        }
        return { bones: s, height: 3.4, scale: 1.45 };
    }

    // 5. ARCHERS (Arqueras)
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

    // 6. KNIGHT RIDER (Caballero a Caballo)
    if (g === "knight_rider") {
        a("body", [0, 0, 0], l => {
            // Horse body & armor barding
            l.box(d.leather, 0, .95, 0, .85, .75, 1.6);
            l.box(d.blue, 0, 1.15, .02, .92, .26, 1.05);
            l.box(d.leather, 0, 1.45, .7, .36, .65, .52, .38);
            l.cone(d.steel, 0, 1.68, 1.02, .25, .52, 1.1);
            // Knight Torso mounted
            l.box(d.steel, 0, 1.85, -.05, .68, .62, .48);
            l.box(d.gold, 0, 2.05, -.05, .72, .09, .5);
        });
        a("head", [0, 2.32, -.05], l => {
            // Knight helmet & golden plume
            l.ell(d.steel, 0, .05, 0, .26, .28, .26);
            l.box(d.edge, 0, .06, .22, .38, .06, .06);
            l.cone(d.gold, 0, .45, -.05, .14, .45, -.15);
        });
        for (const l of [-1, 1]) {
            a(l === -1 ? "leftArm" : "rightArm", [l * .45, 1.82, -.05], r => {
                r.cyl(d.steel, l * .04, -.22, 0, .15, .13, .42);
                if (l === -1) {
                    $t(r, -.08, -.35, .25, !1);
                } else {
                    // Tournament jousting lance with team pennant
                    r.cyl(d.wood, .08, -.15, .8, .06, .04, 3.1, 1.45, 0);
                    r.cone(d.steel, .08, -.15, 2.6, .16, .5, 1.45, 0);
                    r.ring(d.gold, .08, -.15, -.2, .2, .05, 1.45);
                }
            });
            a(l === -1 ? "leftLeg" : "rightLeg", [l * .32, .55, 0], r => {
                r.cyl(d.leather, 0, -.25, .45, .12, .1, .7);
                r.cyl(d.leather, 0, -.25, -.45, .12, .1, .7);
                r.box(d.dark, 0, -.62, .45, .2, .14, .26);
                r.box(d.dark, 0, -.62, -.45, .2, .14, .26);
            });
        }
        return { bones: s, height: 2.85, scale: 1.15 };
    }

    // ORIGINAL 4 UNITS (imps, knight, mage, lancer)
    const e = g === "imps",
        i = g === "knight",
        o = g === "mage",
        c = i ? 1.24 : 1;

    a("body", [0, 0, 0], l => {
        if (e) l.ell(d.purple, 0, .61, 0, .3, .34, .2), l.ell(d.purpleLight, 0, .68, .14, .22, .23, .08), l.cyl(d.leather, 0, .37, 0, .27, .28, .18), l.box(d.gold, 0, .4, .265, .12, .095, .055), l.box(d.dark, 0, .39, -.22, .45, .06, .04);
        else if (o) {
            if (l.cyl(d.red, 0, .62, 0, .27, .47, .95, 0, 0, 16), l.cyl(d.orange, 0, .16, 0, .46, .48, .065, 0, 0, 16), l.ell(d.red, 0, 1.06, 0, .38, .37, .25), l.box(d.gold, 0, .72, .27, .62, .07, .045), l.ell(d.gold, 0, 1.23, .265, .065, .065, .025), l.box(d.orange, -.15, .87, .255, .055, .5, .03, -.13), l.box(d.orange, .15, .87, .255, .055, .5, .03, .13), !t)
                for (let r = 0; r < 8; r++) {
                    const n = r / 8 * Math.PI * 2;
                    l.cyl(d.red, Math.sin(n) * .29, .43, Math.cos(n) * .29, .035, .055, .48, 0, 0, 5)
                }
        } else {
            l.ell(d.black, 0, .97, 0, .34 * c, .44, .24), l.box(d.blue, 0, .85, .01, .64 * c, .57, .42), l.box(i ? d.steel : d.dark, 0, 1.04, .02, .67 * c, .47, .5), l.box(d.steel, 0, 1.1, .285, .54 * c, .33, .065), l.box(d.edge, 0, 1.26, .27, .58 * c, .038, .04), l.box(d.leather, 0, .71, .04, .69 * c, .115, .48), l.box(d.edge, 0, .71, .31, .13, .105, .065);
            for (const r of [-1, 1])
                if (l.box(d.dark, r * .21, .55, .03, .24, .3, .35, r * .11), l.box(d.steel, r * .21, .58, .23, .21, .23, .045, r * .11), !t)
                    for (let n = 0; n < 3; n++) l.ell(d.edge, r * (.11 + n * .075), 1.12, .325, .018, .018, .013);
            i && (l.box(d.blue, 0, 1.25, -.08, .75, .17, .46), l.add(new W(.085), d.edge, 0, 1.08, .337, 1, 1.3, .3))
        }
    }), a("head", [0, e ? .97 : 1.48, 0], l => {
        if (e) {
            l.ell(d.purple, 0, .06, 0, .37, .31, .28), l.ell(d.purpleLight, 0, -.04, .19, .25, .16, .15);
            for (const r of [-1, 1]) l.ell(d.purple, r * .31, .06, 0, .22, .12, .075), l.cone(d.purpleLight, r * .39, .15, -.01, .12, .34, 0, -r * .96), l.ell(d.black, r * .14, .065, .242, .112, .078, .055), l.ell(d.eye, r * .14, .068, .285, .074, .047, .024), l.ell(16767487, r * .126, .067, .305, .027, .03, .012), l.box(d.purpleLight, r * .14, .15, .259, .22, .067, .08, -r * .25), l.cone(d.purpleLight, r * .21, .33, -.09, .083, .29, -.32, r * .35), l.cone(16772552, r * .15, -.135, .31, .03, .1, Math.PI);
            if (l.ell(d.black, 0, -.135, .284, .15, .047, .055), l.ell(d.purpleLight, 0, -.015, .322, .045, .037, .04), !t)
                for (let r = -2; r <= 2; r++) l.box(16112561, r * .039, -.12, .333, .029, .034, .018)
        } else {
            l.ell(d.skin, 0, .025, .025, .225, .245, .2);
            for (const r of [-1, 1]) l.ell(16379607, r * .089, .07, .202, .073, .046, .019), l.ell(o ? 16755991 : 2438731, r * .075, .07, .221, .03, .033, .012), l.box(o ? 3416865 : d.black, r * .09, .135, .207, .15, .048, .046, -r * .18), t || l.ell(d.shadowSkin, r * .14, -.028, .17, .058, .033, .022);
            if (l.ell(d.skin, 0, .01, .22, .042, .066, .044), o) l.ell(4335657, 0, -.16, .13, .17, .13, .12), l.cone(3482408, 0, -.285, .16, .105, .21, Math.PI), l.box(d.shadowSkin, 0, -.1, .246, .13, .025, .024), l.ell(d.red, 0, .16, -.08, .34, .4, .26), l.ring(d.orange, 0, .025, .14, .276, .059, 0, .95, 1.25), l.cone(d.red, 0, .43, -.085, .22, .32, 0, -.13), l.box(3745063, 0, .205, .19, .19, .095, .05, -.2);
            else {
                l.add(new rt(1, 18, 12, 0, Math.PI * 2, 0, Math.PI * .48), i ? d.steel : d.blue, 0, .085, 0, .3, .32, .275), l.box(d.edge, 0, .15, .263, .56, .055, .06), l.box(d.steel, 0, .3, -.005, .065, .2, .545), l.box(d.dark, 0, .015, -.195, .48, .31, .16);
                for (const r of [-1, 1]) l.box(d.steel, r * .252, -.04, .025, .075, .36, .37, r * .07), l.ell(d.edge, r * .29, .07, .015, .025, .028, .026);
                if (l.box(i ? d.steel : d.blue, 0, -.15, .218, .44, .2, .11), i) {
                    l.box(d.edge, 0, -.14, .283, .04, .18, .025);
                    for (const r of [-1, 1])
                        for (let n = 0; n < 3; n++) l.box(d.dark, r * (.073 + n * .05), -.145, .282, .018, .079, .021)
                } else l.box(d.blue, 0, -.29, .035, .55, .13, .45), l.box(d.blueLight, -.12, -.295, .24, .25, .08, .055)
            }
        }
    });
    for (const l of [-1, 1]) a(l === -1 ? "leftArm" : "rightArm", [l * (e ? .31 : .4 * c), e ? .8 : 1.17, 0], r => {
        if (e) {
            r.ell(d.purple, l * .035, -.14, 0, .115, .21, .13), r.ell(d.purpleLight, l * .06, -.32, .055, .12, .16, .1), r.ell(d.purple, l * .065, -.46, .095, .12, .12, .1);
            for (let n = 0; n < 3; n++) r.cone(14731759, l * .065 + (n - 1) * .055, -.5, .18, .018, .09, .7)
        } else o ? (r.cyl(d.red, l * .03, -.15, 0, .17, .2, .41, 0, l * .14), r.cyl(d.orange, l * .06, -.345, 0, .2, .2, .055), r.ell(d.skin, l * .065, -.43, .02, .12, .135, .105), l === 1 && (r.ell(16760114, .08, -.34, .18, .11, .16, .11), r.cone(16766822, .08, -.15, .18, .083, .26, .12, .12))) : (r.ell(d.black, l * .02, -.14, 0, .135, .28, .15), r.ell(i ? d.steel : d.blue, l * .03, .015, 0, i ? .255 : .19, .2, .23), r.box(d.edge, l * .04, -.055, .155, .31, .07, .07), r.cyl(d.steel, l * .04, -.325, 0, .14, .12, .22), r.ring(d.edge, l * .04, -.22, 0, .13, .027, Math.PI / 2), r.ell(i ? d.dark : d.skin, l * .04, -.48, .035, .13, .135, .12), l === -1 ? $t(r, -.08, -.36, .2, i) : i ? (r.cyl(d.leather, .055, -.43, .1, .048, .048, .34), r.box(d.gold, .055, -.19, .1, .35, .065, .08), r.box(d.edge, .055, .32, .1, .145, .95, .075), r.cone(d.edge, .055, .91, .1, .1, .26), r.box(d.steel, .055, .32, .145, .026, .88, .015)) : (r.cyl(d.wood, .065, -.1, .14, .04, .037, 2.25), r.cyl(d.edge, .065, .88, .14, .059, .059, .14), r.add(new W(1), d.edge, .065, 1.17, .14, .13, .36, .065), r.cyl(d.dark, .065, .79, .14, .05, .05, .065)))
    }), a(l === -1 ? "leftLeg" : "rightLeg", [l * (e ? .17 : .19 * c), e ? .37 : .56, 0], r => {
        if (r.ell(e ? d.purple : o ? d.red : d.dark, 0, -.13, 0, e ? .12 : .135, .22, .135), r.ell(e ? d.purpleLight : o ? d.leather : d.steel, 0, -.27, .035, .14, .13, .14), r.box(e ? d.purple : o ? d.leather : d.dark, 0, -.42, .06, .25, .21, .37), !e && !o && (r.box(d.steel, 0, -.36, .2, .2, .15, .06), r.box(d.steel, 0, -.45, .23, .23, .055, .08)), e)
            for (let n = 0; n < 3; n++) r.cone(14271727, (n - 1) * .075, -.46, .265, .024, .095, Math.PI / 2)
    });
    if (e || a("cape", [0, 1.25, -.24], l => {
            const r = [new D(.24, 0), new D(.28, -.2), new D(.36, -.68), new D(.4, -.94)];
            if (l.add(new kt(r, 10, Math.PI * .55, Math.PI * .9), o ? d.red : d.blue, 0, 0, 0), !t)
                for (const n of [-1, 1]) l.box(o ? d.orange : d.blueLight, n * .21, -.49, -.22, .045, .8, .025, n * -.1)
        }), t)
        for (const l of s) l.geometry.computeBoundingBox();
    return {
        bones: s,
        height: e ? 1.48 : i ? 2.08 : 2.2,
        scale: e ? .92 : i ? 1.16 : 1
    }
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
                if (f.frozen > 0) bt = 6675199; // Cyan frost tint
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

                if (!q) {
                    const T = h === "knight" ? 1.35 : isTitan ? 1.8 : isRider ? 1.4 : U ? .72 : 1.02;
                    this.transform.position.set(x.x * l, .025, x.z * l);
                    this.transform.rotation.set(Math.PI * -.5, 0, 0);
                    this.transform.scale.set(T * 1.3, T * 1.3, 1);
                    this.transform.updateMatrix();
                    this.shadow.setMatrixAt(r, this.transform.matrix);

                    const z = (w[h]?.radius ?? .45) * (isTitan ? 1.8 : 1.25);
                    this.transform.scale.set(z * 2.3, z * 2.3, 1);
                    this.transform.updateMatrix();
                    this.teamRing.setMatrixAt(r, this.transform.matrix);
                    this.teamRing.setColorAt(r, this.color.setHex(f.team === e ? 4692479 : 16733286));
                    r++;

                    const K = v.height * yt * .98;
                    const tt2 = Math.max(0, f.hp / f.maxHp);
                    this.transform.position.set(x.x * l, K, x.z * l);
                    this.transform.quaternion.copy(this.cameraQuaternion);
                    this.transform.scale.set(1.05 * T, 1, 1);
                    this.transform.updateMatrix();
                    this.healthBack.setMatrixAt(n, this.transform.matrix);

                    this.transform.position.set(x.x * l - (1 - tt2) * .48 * T, K, x.z * l);
                    this.transform.scale.set(Math.max(.001, tt2) * T, 1, 1);
                    this.transform.updateMatrix();
                    this.healthFront.setMatrixAt(n, this.transform.matrix);
                    this.healthFront.setColorAt(n, this.color.setHex(f.team === e ? 4692479 : 16733286));
                    n++;
                }
            }

            for (const y of m) {
                y.instanceMatrix.needsUpdate = !0;
                y.instanceColor && (y.instanceColor.needsUpdate = !0);
            }
        }

        this.shadow.count = r;
        this.teamRing.count = r;
        this.healthBack.count = n;
        this.healthFront.count = n;
        this.shadow.instanceMatrix.needsUpdate = !0;
        this.teamRing.instanceMatrix.needsUpdate = !0;
        this.teamRing.instanceColor && (this.teamRing.instanceColor.needsUpdate = !0);
        this.healthBack.instanceMatrix.needsUpdate = !0;
        this.healthFront.instanceMatrix.needsUpdate = !0;
        this.healthFront.instanceColor && (this.healthFront.instanceColor.needsUpdate = !0);
    }

    dispose() {
        for (const [, t] of this.batches) {
            for (const s of t.meshes) s.geometry.dispose();
            for (const s of t.low) s.geometry.dispose();
        }
        this.material.dispose();
        this.shadow.geometry.dispose();
        this.teamRing.geometry.dispose();
        this.healthBack.geometry.dispose();
        this.healthFront.geometry.dispose();
    }
}

class Ft {
    particles;
    rings;
    projectiles;
    shake = 0;
    activeProjectiles = new Map;
    nextParticle = 0;
    nextRing = 0;
    cameraQuaternion;

    constructor(t, s) {
        this.cameraQuaternion = s.quaternion.clone();

        const a = new Gt;
        a.ell(16777215, 0, 0, 0, .09, .09, .09);
        const e = a.finish();
        this.particles = new I(e, new ht({
            vertexColors: !0,
            roughness: .3,
            metalness: .1
        }), 240);
        this.particles.instanceMatrix.setUsage(Tt);
        this.particles.count = 0;
        this.particles.frustumCulled = !1;
        t.add(this.particles);

        this.rings = new I(new Y(.8, 1, 24), new C({
            transparent: !0,
            opacity: .85,
            depthWrite: !1,
            side: j
        }), 40);
        this.rings.frustumCulled = !1;
        t.add(this.rings);

        this.projectiles = new I(new B(.25, .25), new C({
            transparent: !0,
            opacity: .9,
            depthWrite: !1
        }), 60);
        this.projectiles.frustumCulled = !1;
        t.add(this.projectiles);
    }

    events(evList, viewTeam) {
        for (const ev of evList) {
            if (ev.type === "explosion" || ev.type === "gate-destroyed") {
                this.shake = Math.min(1.2, this.shake + .6);
            }
            if (ev.type === "lightning") {
                this.shake = Math.min(1.0, this.shake + .4);
            }
        }
    }

    update(dt, time, state, viewTeam, quality) {
        this.shake = Math.max(0, this.shake - dt * 3.5);
    }

    reset() {
        this.shake = 0;
        this.particles.count = 0;
        this.rings.count = 0;
        this.projectiles.count = 0;
    }

    dispose() {
        this.particles.geometry.dispose();
        this.rings.geometry.dispose();
        this.projectiles.geometry.dispose();
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
    constructor(t, actions) {
        this.actions = actions;
        this.currentTab = "battle";
        this.cardElements = new Map();
        this.damagePool = [];
        this.lastHitAt = 0;
        this.lastEnergy = -1;
        this.lastTime = "";
        this.lastPhase = "";
        this.lastGateHealth = [-1, -1];
        this.eventId = 0;
        this.toastTimer = null;
        this.resultTimer = null;
        this.selectedCardSlot = null;
        this.activeSwapSlot = null;

        t.innerHTML = `
        <div class="ambient-backdrop" aria-hidden="true"></div>
        <div class="desktop-wordmark" aria-hidden="true"><span class="mini-sigil">${$}</span><span>EMBER<br>GATES</span><small>EL ARTE DEL DUELO</small></div>
        
        <div id="stage">
          <div id="game">
            <!-- 3D Arena & Battlefield -->
            <div class="arena-art" aria-hidden="true"></div>
            <div id="walls" aria-hidden="true"></div>
            <canvas id="battlefield" aria-label="Arena de combate. Selecciona una carta y toca tu mitad para desplegar."></canvas>
            <div class="zone" id="deploy-zone"><div class="zone-line"></div><span>TU ZONA DE DESPLIEGUE</span></div>
            
            <div class="battle-top">
              <div class="rival-tag"><span class="rival-gem">◇</span><div><small id="rival-mode">DUELO 1v1</small><b id="rival-name">Guardia Carmesí</b></div></div>
              <div class="timer-box"><span>Tiempo:</span><strong id="timer">3:00</strong><small id="overtime"></small></div>
            </div>
            
            <div class="fort-orb enemy-orb" id="enemy-fort-status"><b id="enemy-hp">100</b></div>
            <div class="fort-orb own-orb" id="own-fort-status"><b id="own-hp">100</b></div>
            
            <div id="countdown" aria-live="polite"></div>
            <div id="battle-announcement"></div>
            <div id="floating-feedback" aria-hidden="true"></div>
            <div id="toast" role="status" aria-live="polite"></div>

            <!-- In-Game Battle Deck HUD (Square Cards) -->
            <section class="battle-deck" id="battle-deck" aria-label="Cartas y energía">
              <div class="deck-shine"></div>
              <div class="next-card"><span>SIGUIENTE</span><div class="next-art" id="next-art"></div></div>
              <div class="deck-cards" id="deck-cards"></div>
              <div class="energy-orb"><div class="orb-frame"></div><div class="orb-drop"></div><strong id="energy-count">5</strong></div>
              <div class="energy-track"><div id="energy-fill"></div><div class="energy-divisions">${"<i></i>".repeat(10)}</div></div>
              <span class="energy-caption">ENERGÍA <b id="energy-rate">+1 / 2,3 s</b></span>
              <div class="deck-controls">
                <button id="sound-btn" class="icon-button" aria-label="Silenciar sonido">${Xt}</button>
                <button id="help-btn" class="icon-button" aria-label="Cómo jugar">${Zt}</button>
                <button id="home-btn-battle" class="icon-button" aria-label="Salir al menú">${Vt}</button>
              </div>
              <span id="selected-caption">ELIGE UNA CARTA · DESPLIÉGALA EN LA ARENA</span>
            </section>

            <!-- 1. FULL-VERTICAL INITIAL SPLASH SCREEN -->
            <div id="splash-screen">
              <div class="splash-top">
                <div class="splash-sigil">${$}</div>
                <h1 class="splash-title">EMBER<span>GATES</span></h1>
                <div class="splash-subtitle">ARENA DE DUELOS</div>
              </div>
              <div class="splash-bottom">
                <button class="splash-play-btn" id="splash-play-btn">⚔ ¡JUGAR!</button>
                <p class="splash-hint">Toca para entrar al coliseo y abrir tus cofres</p>
              </div>
            </div>

            <!-- 2. MAIN HUB (5-TAB CLASH ROYALE STYLE NAVIGATION) -->
            <div id="main-hub" class="hidden">
              <div class="hub-views-container">
                
                <!-- TAB 1: TIENDA (SHOP) -->
                <div id="view-shop" class="hub-view">
                  <div class="hub-header">
                    <div class="user-profile-badge">
                      <div class="user-avatar">🪙</div>
                      <div class="user-info"><span class="user-name">Tienda Real</span><span class="user-clan-tag">Ofertas del día</span></div>
                    </div>
                    <div class="currency-bar">
                      <div class="currency-pill currency-gold">🪙 2.450</div>
                      <div class="currency-pill currency-gems">💎 180</div>
                    </div>
                  </div>
                  <div class="shop-section-title">Cofres del Tesoro</div>
                  <div class="shop-chests-row">
                    <div class="shop-chest-card">
                      <div class="shop-chest-icon">📦</div>
                      <div class="shop-chest-name">Cofre de Madera</div>
                      <div class="shop-chest-desc">Gratis cada 4 horas</div>
                      <button class="shop-buy-btn" id="claim-free-chest">ABRIR GRATIS</button>
                    </div>
                    <div class="shop-chest-card">
                      <div class="shop-chest-icon">🔮</div>
                      <div class="shop-chest-name">Cofre Mágico</div>
                      <div class="shop-chest-desc">Cartas épicas aseguradas</div>
                      <button class="shop-buy-btn">💎 80 GEMAS</button>
                    </div>
                  </div>
                  <div class="shop-section-title">Cartas del Día (Mejoras)</div>
                  <div class="shop-grid" id="shop-cards-grid"></div>
                </div>

                <!-- TAB 2: BATALLA (HOME / BATTLE SCREEN) -->
                <div id="view-battle" class="hub-view active">
                  <div class="hub-header">
                    <div class="user-profile-badge">
                      <div class="user-avatar">👑</div>
                      <div class="user-info"><span class="user-name">Comandante Adrian</span><span class="user-clan-tag">Nivel 10 · Clan #EG88</span></div>
                    </div>
                    <div class="currency-bar">
                      <div class="currency-pill currency-gold">🪙 2.450</div>
                      <div class="currency-pill currency-gems">💎 180</div>
                    </div>
                  </div>
                  <div class="battle-view-content">
                    <div class="arena-trophy-banner">
                      <div class="arena-badge-title">Arena Actual</div>
                      <div class="arena-name">Picos Nevados · Arena 8</div>
                      <div class="arena-trophies">🏆 4.320 Copas</div>
                    </div>
                    <div class="battle-deck-preview">
                      <div class="battle-deck-preview-header">
                        <span class="battle-deck-preview-title">Mazo de Batalla Activo</span>
                        <span class="avg-elixir-badge" id="hub-avg-elixir">⚡ 3.8</span>
                      </div>
                      <div class="battle-deck-grid-mini" id="mini-deck-grid"></div>
                    </div>
                    <div class="chest-slots-row">
                      <div class="chest-slot filled"><span class="chest-slot-icon">📦</span><span class="chest-slot-label">Cofre de Oro</span></div>
                      <div class="chest-slot filled"><span class="chest-slot-icon">🥈</span><span class="chest-slot-label">Cofre Plata</span></div>
                      <div class="chest-slot"><span class="chest-slot-icon">🔒</span><span class="chest-slot-label">Vacío</span></div>
                      <div class="chest-slot"><span class="chest-slot-icon">🔒</span><span class="chest-slot-label">Vacío</span></div>
                    </div>
                    <div class="battle-actions-group">
                      <button class="main-battle-btn" id="btn-enter-battle">
                        ⚔ BATALLA 1v1
                        <small>DUELO CONTRA LA IA</small>
                      </button>
                      <div class="sub-battle-actions">
                        <button class="hub-btn" id="btn-online-room">🌐 Sala Amiga</button>
                        <button class="hub-btn" id="btn-toggle-difficulty">Dificultad: <b id="lbl-difficulty">Normal</b></button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- TAB 3: MAZO (DECK BUILDER - 8 ACTIVE + 15 COLLECTION) -->
                <div id="view-deck" class="hub-view">
                  <div class="hub-header">
                    <div class="user-profile-badge">
                      <div class="user-avatar">🃏</div>
                      <div class="user-info"><span class="user-name">Editor de Mazos</span><span class="user-clan-tag">8 Cartas Activas</span></div>
                    </div>
                    <div class="currency-bar">
                      <span class="avg-elixir-badge" id="deck-avg-elixir">⚡ 3.8 Elixir</span>
                    </div>
                  </div>
                  <div class="deck-view-content">
                    <div class="deck-selector-row">
                      <div class="deck-slot-tabs">
                        <button class="deck-slot-btn active" data-deck-slot="0">Mazo 1</button>
                        <button class="deck-slot-btn" data-deck-slot="1">Mazo 2</button>
                        <button class="deck-slot-btn" data-deck-slot="2">Mazo 3</button>
                      </div>
                      <span style="font-size:12px;color:#8da7cc;font-weight:800;">Toca para info/usar</span>
                    </div>
                    <div class="active-deck-card-grid" id="deck-active-grid"></div>
                    <div class="collection-section-header">
                      <span class="collection-title">Colección de Cartas</span>
                      <span class="collection-count">15 / 15 Descubiertas</span>
                    </div>
                    <div class="collection-cards-grid" id="deck-collection-grid"></div>
                  </div>
                </div>

                <!-- TAB 4: CLAN -->
                <div id="view-clan" class="hub-view">
                  <div class="hub-header">
                    <div class="user-profile-badge">
                      <div class="user-avatar">🛡️</div>
                      <div class="user-info"><span class="user-name">Clan Social</span><span class="user-clan-tag">Comunidad Ember</span></div>
                    </div>
                  </div>
                  <div class="clan-banner">
                    <div class="clan-crest">🔥</div>
                    <div class="clan-details">
                      <h3>Guardianes del Fuego</h3>
                      <div class="clan-stats-text">48 / 50 Miembros · 🏆 38.900 Trofeos</div>
                    </div>
                  </div>
                  <div class="clan-chat-box">
                    <div class="clan-msg"><b>Capitán Valerius:</b> ¡Gran victoria en la arena! Necesito donaciones de Lancero.</div>
                    <div class="clan-msg"><b>Elena_Frost:</b> He probado la nueva Torre de Bombas, ¡detiene al Titán fácilmente!</div>
                    <div class="clan-msg"><b>Adrian (Tú):</b> ¡Listos para la guerra de clanes de esta noche!</div>
                  </div>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px;">
                    <button class="hub-btn" id="btn-clan-donate">🎁 Donar Carta</button>
                    <button class="hub-btn" id="btn-clan-friendly">⚔ Duelo de Clan</button>
                  </div>
                </div>

                <!-- TAB 5: AJUSTES (SETTINGS) -->
                <div id="view-settings" class="hub-view">
                  <div class="hub-header">
                    <div class="user-profile-badge">
                      <div class="user-avatar">⚙️</div>
                      <div class="user-info"><span class="user-name">Ajustes del Juego</span><span class="user-clan-tag">Audio, Gráficos y Ayuda</span></div>
                    </div>
                  </div>
                  <div class="settings-list">
                    <div class="setting-item">
                      <span class="setting-label">Efectos de Sonido (SFX)</span>
                      <div class="toggle-switch on" id="setting-sfx-toggle"></div>
                    </div>
                    <div class="setting-item">
                      <span class="setting-label">Música de Combate</span>
                      <div class="toggle-switch on" id="setting-music-toggle"></div>
                    </div>
                    <div class="setting-item">
                      <span class="setting-label">Respuesta Háptica / Vibración</span>
                      <div class="toggle-switch on" id="setting-haptic-toggle"></div>
                    </div>
                    <div class="setting-item">
                      <span class="setting-label">Calidad Gráfica 3D</span>
                      <button class="hub-btn" id="setting-quality-btn" style="padding:6px 14px;font-size:13px;">Ultra (60 FPS)</button>
                    </div>
                    <div class="setting-item">
                      <span class="setting-label">Guía y Reglas de la Arena</span>
                      <button class="hub-btn" id="setting-howtoplay-btn" style="padding:6px 14px;font-size:13px;">Ver Guía</button>
                    </div>
                    <div class="setting-item" style="flex-direction:column;align-items:flex-start;gap:6px;">
                      <span class="setting-label">Ember Gates · Versión 2.5</span>
                      <small style="color:#8da7cc;">Motor 3D WebGL con 15 Cartas Cuadradas y Audio 1s Pack.</small>
                    </div>
                  </div>
                </div>

              </div>

              <!-- DOCKED BOTTOM NAVIGATION (5 TABS) -->
              <nav id="bottom-nav">
                <button class="nav-tab-btn" data-tab="shop">
                  <svg viewBox="0 0 24 24"><path d="M20 8h-3V6a3 3 0 0 0-6 0v2H8a3 3 0 0 0-3 3v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a3 3 0 0 0-3-3zm-7-2a1 1 0 0 1 2 0v2h-2zm7 13H6v-8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/></svg>
                  <span class="nav-tab-label">Tienda</span>
                </button>
                <button class="nav-tab-btn active" data-tab="battle">
                  <svg viewBox="0 0 24 24"><path d="M19.7 4.3a1 1 0 0 0-1.4 0L14 8.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l1.3 1.3-5 5-2.3-.3a1 1 0 0 0-.8.3l-2 2a1 1 0 0 0 0 1.4l3.6 3.6a1 1 0 0 0 1.4 0l2-2a1 1 0 0 0 .3-.8l-.3-2.3 5-5 1.3 1.3a1 1 0 0 0 1.4-1.4L18.3 10l4.3-4.3a1 1 0 0 0 0-1.4z"/></svg>
                  <span class="nav-tab-label">Batalla</span>
                </button>
                <button class="nav-tab-btn" data-tab="deck">
                  <svg viewBox="0 0 24 24"><path d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v10h16V8H4zm4-5h8a1 1 0 0 1 1 1v1H7V4a1 1 0 0 1 1-1z"/></svg>
                  <span class="nav-tab-label">Mazo</span>
                </button>
                <button class="nav-tab-btn" data-tab="clan">
                  <svg viewBox="0 0 24 24"><path d="M12 2 4 5v6.1c0 5 3.4 9.8 8 10.9 4.6-1.1 8-5.9 8-10.9V5l-8-3zm6 9.1c0 4.1-2.7 8-6 9-3.3-1-6-4.9-6-9V6.4l6-2.2 6 2.2v4.7z"/></svg>
                  <span class="nav-tab-label">Clan</span>
                </button>
                <button class="nav-tab-btn" data-tab="settings">
                  <svg viewBox="0 0 24 24"><path d="m19.4 13 .1-1-.1-1 2.1-1.6a.5.5 0 0 0 .1-.6l-2-3.5a.5.5 0 0 0-.6-.2l-2.5 1a7 7 0 0 0-1.7-1l-.4-2.6a.5.5 0 0 0-.5-.4h-4a.5.5 0 0 0-.5.4L9.4 6a7 7 0 0 0-1.7 1l-2.5-1a.5.5 0 0 0-.6.2l-2 3.5a.5.5 0 0 0 .1.6L4.8 12l-.1 1 .1 1-2.1 1.6a.5.5 0 0 0-.1.6l2 3.5a.5.5 0 0 0 .6.2l2.5-1a7 7 0 0 0 1.7 1l.4 2.6a.5.5 0 0 0 .5.4h4a.5.5 0 0 0 .5-.4l.4-2.6a7 7 0 0 0 1.7-1l2.5 1a.5.5 0 0 0 .6-.2l2-3.5a.5.5 0 0 0-.1-.6L19.4 13zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/></svg>
                  <span class="nav-tab-label">Ajustes</span>
                </button>
              </nav>
            </div>

            <!-- CARD DETAIL & SWAP MODAL -->
            <div id="card-modal-backdrop" class="hidden">
              <div class="card-modal-panel">
                <button class="modal-close-btn" id="modal-card-close">✕</button>
                <img class="modal-card-img-large" id="modal-card-img" src="./assets/cards/knight.png" alt="Carta" />
                <h3 class="modal-card-name" id="modal-card-name">Caballero pesado</h3>
                <span class="modal-card-role" id="modal-card-role">TANQUE · 1 UNIDAD</span>
                <div class="modal-stats-grid">
                  <div class="modal-stat-pill"><div class="modal-stat-val" id="modal-stat-cost">5</div><div class="modal-stat-lbl">Elixir</div></div>
                  <div class="modal-stat-pill"><div class="modal-stat-val" id="modal-stat-hp">1.040</div><div class="modal-stat-lbl">Vida</div></div>
                  <div class="modal-stat-pill"><div class="modal-stat-val" id="modal-stat-dmg">105</div><div class="modal-stat-lbl">Daño</div></div>
                  <div class="modal-stat-pill"><div class="modal-stat-val" id="modal-stat-spd">Media</div><div class="modal-stat-lbl">Velocidad</div></div>
                  <div class="modal-stat-pill"><div class="modal-stat-val" id="modal-stat-rng">Cuerpo a C.</div><div class="modal-stat-lbl">Alcance</div></div>
                  <div class="modal-stat-pill"><div class="modal-stat-val" id="modal-stat-count">1</div><div class="modal-stat-lbl">Cantidad</div></div>
                </div>
                <p class="modal-card-desc" id="modal-card-desc">Descripción de la carta...</p>
                <button class="modal-use-btn" id="modal-card-use-btn">USAR EN EL MAZO</button>
              </div>
            </div>

            <!-- Standard Game Results Modal -->
            <div id="modal" class="modal-backdrop hidden">
              <section id="modal-content" class="modal-panel" role="dialog" aria-modal="true"></section>
            </div>

            <div id="connection-status" role="status"></div>
            <div id="performance" hidden></div>
          </div>
        </div>
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
        this.splashScreen = t.querySelector("#splash-screen");
        this.mainHub = t.querySelector("#main-hub");
        this.cardModal = t.querySelector("#card-modal-backdrop");
        this.battleDeck = t.querySelector("#battle-deck");

        // Build Battle HUD Hand Slots
        const a = t.querySelector("#deck-cards");
        for (let idx = 0; idx < 4; idx++) {
            const c = document.createElement("button");
            c.className = "battle-card";
            c.dataset.slot = String(idx);
            c.setAttribute("aria-pressed", "false");
            c.innerHTML = `
              <div class="card-art"></div>
              <div class="card-gloss"></div>
              <div class="card-name"></div>
              <span class="card-cost"></span>
              <div class="card-cooldown"></div>
              <span class="card-key">${idx + 1}</span>
            `;
            a.append(c);
            this.cardElements.set(idx, c);
        }

        this.bindEvents();
        this.renderHubDeckViews();
    }

    bindEvents() {
        // Splash Screen Play Button
        this.splashScreen.querySelector("#splash-play-btn").addEventListener("click", () => {
            this.actions.soundUnlock();
            this.actions.clickSound();
            this.splashScreen.classList.add("hidden");
            this.mainHub.classList.remove("hidden");
            this.switchTab("battle");
        });

        // Bottom Navigation Tabs
        const navTabs = this.mainHub.querySelectorAll(".nav-tab-btn");
        navTabs.forEach(btn => {
            btn.addEventListener("click", () => {
                this.actions.clickSound();
                const tab = btn.dataset.tab;
                this.switchTab(tab);
            });
        });

        // Battle View Buttons
        this.mainHub.querySelector("#btn-enter-battle").addEventListener("click", () => {
            this.actions.clickSound();
            this.mainHub.classList.add("hidden");
            this.actions.start();
        });

        this.mainHub.querySelector("#btn-online-room").addEventListener("click", () => {
            this.actions.clickSound();
            this.showRoom();
        });

        this.mainHub.querySelector("#btn-toggle-difficulty").addEventListener("click", () => {
            this.actions.clickSound();
            const cur = this.actions.getDifficulty();
            const nxt = cur === "normal" ? "hard" : "normal";
            this.actions.difficulty(nxt);
            this.mainHub.querySelector("#lbl-difficulty").textContent = nxt === "normal" ? "Normal" : "Veterano";
        });

        // Battle HUD Return Home
        this.game.querySelector("#home-btn-battle").addEventListener("click", () => {
            this.actions.clickSound();
            this.actions.home();
        });

        this.game.querySelector("#sound-btn").addEventListener("click", () => {
            this.actions.sound();
        });

        this.game.querySelector("#help-btn").addEventListener("click", () => {
            this.showHelp();
        });

        // Card Modal Close
        this.cardModal.querySelector("#modal-card-close").addEventListener("click", () => {
            this.actions.clickSound();
            this.cardModal.classList.add("hidden");
        });

        // Shop claim
        this.mainHub.querySelector("#claim-free-chest")?.addEventListener("click", () => {
            this.actions.clickSound();
            this.toast("¡Has abierto el Cofre! +150 Oro y 20 Cartas");
        });

        // Settings toggles
        const toggles = this.mainHub.querySelectorAll(".toggle-switch");
        toggles.forEach(tog => {
            tog.addEventListener("click", () => {
                this.actions.clickSound();
                tog.classList.toggle("on");
            });
        });

        this.mainHub.querySelector("#setting-howtoplay-btn")?.addEventListener("click", () => {
            this.actions.clickSound();
            this.showHelp();
        });
    }

    switchTab(tabName) {
        this.currentTab = tabName;
        // Update nav tabs
        this.mainHub.querySelectorAll(".nav-tab-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.tab === tabName);
        });
        // Update views
        this.mainHub.querySelectorAll(".hub-view").forEach(v => {
            v.classList.remove("active");
        });
        const targetView = this.mainHub.querySelector(`#view-${tabName}`);
        if (targetView) targetView.classList.add("active");

        if (tabName === "battle" || tabName === "deck") {
            this.renderHubDeckViews();
        }
    }

    renderHubDeckViews() {
        const activeDeck = DeckState.getActiveDeck();
        const avgElixir = DeckState.getAverageElixir();

        const hubAvg = this.mainHub.querySelector("#hub-avg-elixir");
        if (hubAvg) hubAvg.textContent = `⚡ ${avgElixir} Elixir`;
        const deckAvg = this.mainHub.querySelector("#deck-avg-elixir");
        if (deckAvg) deckAvg.textContent = `⚡ ${avgElixir} Elixir`;

        // Render Mini Deck in Battle Tab
        const miniGrid = this.mainHub.querySelector("#mini-deck-grid");
        if (miniGrid) {
            miniGrid.innerHTML = activeDeck.map(c => `
                <div class="card-tile-mini" style="background-image:url('./assets/cards/${c}.png');">
                    <span class="mini-cost">${w[c]?.cost || 3}</span>
                </div>
            `).join("");
        }

        // Render Active Deck in Deck Tab (8 Cards)
        const activeGrid = this.mainHub.querySelector("#deck-active-grid");
        if (activeGrid) {
            activeGrid.innerHTML = activeDeck.map((c, idx) => `
                <div class="card-tile" data-slot="${idx}" data-card="${c}">
                    <img class="card-tile-img" src="./assets/cards/${c}.png" alt="${w[c]?.name}" />
                    <span class="card-cost-badge">${w[c]?.cost}</span>
                    <span class="card-level-badge">Nvl 9</span>
                    <span class="card-name-tag">${w[c]?.name}</span>
                </div>
            `).join("");

            activeGrid.querySelectorAll(".card-tile").forEach(tile => {
                tile.addEventListener("click", () => {
                    this.actions.clickSound();
                    const cardId = tile.dataset.card;
                    const slotIdx = parseInt(tile.dataset.slot, 10);
                    this.openCardDetails(cardId, slotIdx);
                });
            });
        }

        // Render Collection Grid in Deck Tab (All 15 Cards)
        const colGrid = this.mainHub.querySelector("#deck-collection-grid");
        if (colGrid) {
            colGrid.innerHTML = ALL_CARDS.map(c => `
                <div class="card-tile collection-tile" data-card="${c}">
                    <img class="card-tile-img" src="./assets/cards/${c}.png" alt="${w[c]?.name}" />
                    <span class="card-cost-badge">${w[c]?.cost}</span>
                    <span class="card-level-badge">Nvl 9</span>
                    <span class="card-name-tag">${w[c]?.name}</span>
                </div>
            `).join("");

            colGrid.querySelectorAll(".card-tile").forEach(tile => {
                tile.addEventListener("click", () => {
                    this.actions.clickSound();
                    const cardId = tile.dataset.card;
                    this.openCardDetails(cardId, null);
                });
            });
        }

        // Deck Slot Selector Buttons (Mazo 1, 2, 3)
        const slotBtns = this.mainHub.querySelectorAll(".deck-slot-btn");
        slotBtns.forEach(btn => {
            const slot = parseInt(btn.dataset.deckSlot, 10);
            btn.classList.toggle("active", slot === DeckState.activeSlot);
            btn.onclick = () => {
                this.actions.clickSound();
                DeckState.activeSlot = slot;
                DeckState.save();
                this.renderHubDeckViews();
            };
        });
    }

    openCardDetails(cardId, fromActiveSlot = null) {
        const c = w[cardId];
        if (!c) return;

        this.cardModal.querySelector("#modal-card-img").src = `./assets/cards/${cardId}.png`;
        this.cardModal.querySelector("#modal-card-name").textContent = c.name;
        this.cardModal.querySelector("#modal-card-role").textContent = c.role;
        this.cardModal.querySelector("#modal-stat-cost").textContent = String(c.cost);
        this.cardModal.querySelector("#modal-stat-hp").textContent = c.hp > 0 ? c.hp.toLocaleString("es") : "-";
        this.cardModal.querySelector("#modal-stat-dmg").textContent = c.damage > 0 ? c.damage.toLocaleString("es") : "-";
        this.cardModal.querySelector("#modal-stat-spd").textContent = c.speed === 0 ? "Fija" : c.speed > 1.8 ? "Rápida" : "Media";
        this.cardModal.querySelector("#modal-stat-rng").textContent = c.range > 2.0 ? `${c.range} m` : "Cuerpo a C.";
        this.cardModal.querySelector("#modal-stat-count").textContent = String(c.count || 1);
        this.cardModal.querySelector("#modal-card-desc").textContent = c.description;

        const useBtn = this.cardModal.querySelector("#modal-card-use-btn");
        const isInDeck = DeckState.getActiveDeck().includes(cardId);
        if (isInDeck) {
            useBtn.textContent = "EN USO EN ESTE MAZO";
            useBtn.style.background = "#244166";
            useBtn.onclick = null;
        } else {
            useBtn.textContent = "EQUIPAR EN EL MAZO";
            useBtn.style.background = "linear-gradient(180deg, #2ea44f, #22863a)";
            useBtn.onclick = () => {
                this.actions.clickSound();
                const targetSlot = fromActiveSlot !== null ? fromActiveSlot : 0;
                DeckState.setCard(targetSlot, cardId);
                this.toast(`¡${c.name} equipado en tu mazo!`);
                this.cardModal.classList.add("hidden");
                this.renderHubDeckViews();
            };
        }

        this.cardModal.classList.remove("hidden");
    }

    showHome() {
        this.mainHub.classList.remove("hidden");
        this.switchTab("battle");
    }

    showResult(state, viewTeam) {
        const team0GatesAlive = state.gates.filter(g => g.team === 0 && g.hp > 0).length;
        const team1GatesAlive = state.gates.filter(g => g.team === 1 && g.hp > 0).length;
        const isWin = team1GatesAlive < team0GatesAlive;
        
        this.modal.classList.remove("hidden");
        this.modalContent.innerHTML = `
          <div class="result-sigil ${isWin ? "win" : ""}">👑</div>
          <h2 class="result-title">${isWin ? "¡VICTORIA!" : "DERROTA"}</h2>
          <div class="result-stats">
            <div><strong>${isWin ? "+32 🏆" : "-18 🏆"}</strong><span>COPAS</span></div>
            <div><strong>+120 🪙</strong><span>ORO</span></div>
          </div>
          <button class="primary-button" id="result-back-hub">VOLVER AL MENÚ</button>
        `;

        this.modalContent.querySelector("#result-back-hub").addEventListener("click", () => {
            this.actions.clickSound();
            this.modal.classList.add("hidden");
            this.showHome();
        });
    }

    select(slotIndex, cardId = null) {
        for (const [idx, el] of this.cardElements) {
            el.classList.toggle("selected", idx === slotIndex);
            el.setAttribute("aria-pressed", String(idx === slotIndex));
        }
        const zone = this.game.querySelector("#deploy-zone");
        if (cardId) {
            const isSpell = w[cardId]?.isSpell;
            zone.classList.add("visible");
            zone.classList.toggle("spell-zone", isSpell);
            this.game.querySelector("#selected-caption").textContent = `${w[cardId].name.toUpperCase()} · ${isSpell ? "TOCA CUALQUIER PUNTO" : "TOCA TU MITAD DE LA ARENA"}`;
        } else {
            zone.classList.remove("visible", "spell-zone");
            this.game.querySelector("#selected-caption").textContent = "ELIGE UNA CARTA · DESPLIÉGALA EN LA ARENA";
        }
    }

    toast(msg) {
        window.clearTimeout(this.toastTimer);
        this.toastEl.textContent = msg;
        this.toastEl.classList.add("show");
        this.toastTimer = window.setTimeout(() => this.toastEl.classList.remove("show"), 2500);
    }

    muted(isMuted) {
        const btn = this.game.querySelector("#sound-btn");
        if (btn) btn.classList.toggle("muted", isMuted);
    }

    connection(msg) {
        const el = this.game.querySelector("#connection-status");
        if (el) {
            el.textContent = msg;
            el.classList.toggle("visible", !!msg);
        }
    }

    update(state, viewTeam) {
        const player = state.players[viewTeam];
        const energyFloor = Math.floor(player.energy);
        if (this.lastEnergy !== energyFloor) {
            this.energy.textContent = String(energyFloor);
            this.lastEnergy = energyFloor;
        }
        this.energyFill.style.width = `${player.energy * 10}%`;

        // Match Timer
        const timeSec = Math.max(0, Math.ceil(state.time));
        const timeStr = `${Math.floor(timeSec / 60)}:${String(timeSec % 60).padStart(2, "0")}`;
        if (timeStr !== this.lastTime) {
            this.timer.textContent = timeStr;
            this.lastTime = timeStr;
        }

        // Update Hand Cards (Square Borderless Cards)
        for (let idx = 0; idx < 4; idx++) {
            const cEl = this.cardElements.get(idx);
            const cardId = player.hand[idx];
            if (cEl && cardId && w[cardId]) {
                if (cEl.dataset.card !== cardId) {
                    cEl.dataset.card = cardId;
                    const art = cEl.querySelector(".card-art");
                    art.style.backgroundImage = `url('./assets/cards/${cardId}.png')`;
                    cEl.querySelector(".card-name").textContent = w[cardId].name;
                    cEl.querySelector(".card-cost").textContent = String(w[cardId].cost);
                }
                cEl.classList.toggle("unaffordable", player.energy < w[cardId].cost);
                cEl.style.setProperty("--cooldown", String(player.cooldowns[cardId] / M.cardCooldown));
            }
        }

        // Next card preview
        const nextArt = this.game.querySelector("#next-art");
        if (nextArt && player.next && w[player.next] && nextArt.dataset.card !== player.next) {
            nextArt.dataset.card = player.next;
            nextArt.style.backgroundImage = `url('./assets/cards/${player.next}.png')`;
        }

        // Fortresses HP
        for (let team = 0; team <= 1; team++) {
            const gates = state.gates.filter(g => g.team === team);
            const totalHp = gates.reduce((acc, g) => acc + g.hp, 0);
            const pct = Math.ceil((totalHp / (M.segmentHp * 5)) * 100);
            const id = team === viewTeam ? "own-hp" : "enemy-hp";
            const el = this.game.querySelector(`#${id}`);
            if (el) el.textContent = String(Math.max(0, pct));
        }

        // Countdown
        const cd = this.game.querySelector("#countdown");
        if (state.phase === "countdown") {
            const num = String(Math.ceil(state.countdown));
            if (cd.textContent !== num) {
                cd.textContent = num;
                cd.classList.add("visible");
            }
        } else {
            cd.classList.remove("visible");
            cd.textContent = "";
        }

        if (state.phase === "finished" && this.lastPhase !== "finished") {
            this.resultTimer = window.setTimeout(() => this.showResult(state, viewTeam), 950);
        }
        this.lastPhase = state.phase;
    }

    feedback(state, viewTeam, projectFn) {
        for (const ev of state.events) {
            if (ev.id <= this.eventId) continue;
            this.eventId = ev.id;
            if ((ev.type === "gate-hit" || ev.type === "hit") && ev.amount) {
                const pt = projectFn(ev.x, 2.4, ev.z, viewTeam);
                const tag = document.createElement("span");
                tag.className = "damage-number";
                tag.textContent = `−${ev.amount}`;
                tag.style.left = `${pt.x}px`;
                tag.style.top = `${pt.y}px`;
                this.game.querySelector("#floating-feedback").append(tag);
                window.setTimeout(() => tag.remove(), 850);
            }
        }
    }

    showHelp() {
        this.modal.classList.remove("hidden");
        this.modalContent.innerHTML = `
          <h2 style="font-size:32px;color:#ffaa33;margin:0 0 16px;">¿CÓMO JUGAR?</h2>
          <div style="text-align:left;font-size:15px;line-height:1.6;color:#d1e2f6;display:flex;flex-direction:column;gap:12px;">
            <p>⚔ <b>Objetivo:</b> Destruye la fortaleza rival antes de que acabe el tiempo.</p>
            <p>⚡ <b>Energía:</b> Se recarga con el tiempo (+1 cada 2,3s). ¡Doble velocidad en el último minuto!</p>
            <p>🃏 <b>Despliegue:</b> Toca o arrastra tus cartas cuadradas hacia tu mitad de la arena. Los hechizos alcanzan cualquier lugar.</p>
            <p>🛡 <b>Colección:</b> 15 cartas épicas: Caballero, Titán, Ballesta, Veneno, Hielo, Rayos, Flechas, Duendes, etc.</p>
          </div>
          <button class="primary-button" id="help-close-btn" style="margin-top:20px;">¡ENTENDIDO!</button>
        `;
        this.modalContent.querySelector("#help-close-btn").addEventListener("click", () => {
            this.actions.clickSound();
            this.modal.classList.add("hidden");
        });
    }

    showRoom() {
        this.modal.classList.remove("hidden");
        this.modalContent.innerHTML = `
          <h2 style="font-size:28px;color:#ffaa33;margin:0 0 16px;">SALA PRIVADA 1v1</h2>
          <p style="font-size:14px;color:#8da7cc;">Juega duelos en directo contra amigos mediante código de sala.</p>
          <button class="primary-button" id="room-create-btn" style="margin-bottom:12px;">CREAR NUEVA SALA</button>
          <input type="text" id="room-code-input" placeholder="CÓDIGO DE 5 LETRAS" style="width:100%;padding:12px;background:#0d1826;border:2px solid #294670;border-radius:10px;color:#fff;text-align:center;font-size:18px;margin-bottom:12px;" />
          <button class="secondary-button" id="room-join-btn">UNIRSE A SALA</button>
          <button class="text-button" id="room-close-btn" style="margin-top:14px;">Cancelar</button>
        `;
        this.modalContent.querySelector("#room-close-btn").addEventListener("click", () => {
            this.actions.clickSound();
            this.modal.classList.add("hidden");
        });
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
                    s(new Error("Servidor no responde"));
                }, 6000);
                e.addEventListener("open", () => { clearTimeout(i); t(); });
                e.addEventListener("error", () => { clearTimeout(i); s(new Error("Error de conexión")); });
                e.addEventListener("message", o => {
                    try { this.onMessage(JSON.parse(o.data)); } catch (e) {}
                });
                e.addEventListener("close", () => {
                    clearTimeout(i);
                    this.connecting = null;
                    this.closedIntentionally || this.onDisconnect();
                });
            });
            try { await this.connecting; } finally { this.connecting = null; }
        }
    }
    send(t) {
        this.socket?.readyState === WebSocket.OPEN && this.socket.send(JSON.stringify(t));
    }
    async create() { await this.connect(); this.send({ type: "create" }); }
    async join(t) { await this.connect(); this.send({ type: "join", code: t }); }
    deploy(t, s, a, e) { this.send({ type: "deploy", card: t, x: s, z: a, slot: e }); }
    close() { this.closedIntentionally = !0; this.socket?.close(); this.socket = null; }
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

    constructor() {
        this.sim.start(!1);
        this.sim.state.phase = "menu";
        this.state = this.sim.state;

        this.hud = new Wt(document.querySelector("#app"), {
            start: () => this.start(),
            resume: () => this.resume(),
            pause: () => this.pause(),
            home: () => this.home(),
            sound: () => {
                this.audio.unlock();
                this.hud.muted(this.audio.toggle());
            },
            soundUnlock: () => this.audio.unlock(),
            clickSound: () => this.audio.select(),
            createRoom: () => this.createRoom(),
            joinRoom: s => this.joinRoom(s),
            select: s => { this.suppressClick || this.select(s); },
            difficulty: s => { this.difficulty = s; },
            getDifficulty: () => this.difficulty
        });

        try {
            this.render = new jt(this.hud.canvas, this.hud.stage);
        } catch (s) {
            console.error("WebGL error:", s);
            return;
        }

        this.ready = !0;
        new ResizeObserver(() => this.render.resize()).observe(this.hud.stage);
        this.bindInput();
        this.hud.update(this.state, 0);
        requestAnimationFrame(s => this.frame(s));
        this.render.warmup();
    }

    start() {
        if (!this.ready) return;
        this.online = !1;
        this.viewTeam = 0;
        this.paused = !1;
        this.selected = null;
        this.selectedSlot = null;
        this.sim = new X(1, this.difficulty);
        this.sim.start(!0);
        this.state = this.sim.state;
        this.accumulator = 0;
        this.last = performance.now();
        this.hud.select(null);
        this.render.clearPreview();
        this.audio.reset();
        this.audio.unlock();
    }

    home() {
        this.online = !1;
        this.paused = !0;
        this.sim = new X;
        this.sim.start(!1);
        this.sim.state.phase = "menu";
        this.state = this.sim.state;
        this.selected = null;
        this.selectedSlot = null;
        this.render.clearPreview();
        this.hud.select(null);
        this.hud.showHome();
    }

    pause() {
        if (this.state.phase === "playing") this.paused = !0;
    }

    resume() {
        this.paused = !1;
        this.last = performance.now();
    }

    select(slotIndex) {
        if (this.state.phase !== "playing") return;
        if (slotIndex === null) {
            this.selected = null;
            this.selectedSlot = null;
            this.hud.select(null);
            this.render.clearPreview();
            return;
        }
        this.selectedSlot = slotIndex;
        const cardId = this.state.players[this.viewTeam].hand[slotIndex];
        this.selected = cardId;
        this.hud.select(slotIndex, cardId);
        this.audio.select();
    }

    deploy(clientX, clientY) {
        if (this.state.phase !== "playing" || !this.selected) return;
        const worldPt = this.render.screenToWorld(clientX, clientY, this.viewTeam);
        if (!worldPt) return;

        const card = this.selected;
        const slot = this.selectedSlot;

        const res = this.sim.deploy({
            team: this.viewTeam,
            card,
            x: worldPt.x,
            z: worldPt.z,
            slot
        });

        if (!res.ok) {
            this.hud.toast(res.reason);
            this.audio.error();
            return;
        }

        this.render.effects.events(this.state.events, this.viewTeam);
        this.audio.events(this.state.events);
        this.selected = null;
        this.selectedSlot = null;
        this.hud.select(null);
        this.render.clearPreview();
    }

    preview(clientX, clientY) {
        if (!this.selected || this.state.phase !== "playing") return;
        const pt = this.render.screenToWorld(clientX, clientY, this.viewTeam);
        if (!pt) return;
        const cardData = w[this.selected];
        const isSpell = !!cardData.isSpell;
        const isOwnHalf = this.viewTeam === 0 ? pt.z >= 0.1 : pt.z <= -0.1;
        const isValid = isSpell || isOwnHalf;
        const radius = cardData.radius || 0.8;
        this.render.setPreview(pt.x, pt.z, radius, isValid, this.viewTeam);
    }

    bindInput() {
        let dragInfo = null;

        // Card elements in Battle HUD: support click and drag-and-drop
        for (const [slotIdx, btn] of this.hud.cardElements) {
            btn.addEventListener("pointerdown", e => {
                if (this.state.phase !== "playing") return;
                dragInfo = { id: e.pointerId, x: e.clientX, y: e.clientY, slot: slotIdx, moved: !1 };
                btn.setPointerCapture(e.pointerId);
                this.select(slotIdx);
            });

            btn.addEventListener("pointermove", e => {
                if (!dragInfo || dragInfo.id !== e.pointerId) return;
                if (Math.hypot(e.clientX - dragInfo.x, e.clientY - dragInfo.y) > 8) {
                    dragInfo.moved = !0;
                }
                if (dragInfo.moved) {
                    this.preview(e.clientX, e.clientY);
                }
            });

            btn.addEventListener("pointerup", e => {
                if (!dragInfo || dragInfo.id !== e.pointerId) return;
                const wasMoved = dragInfo.moved;
                dragInfo = null;
                if (wasMoved) {
                    this.suppressClick = !0;
                    this.deploy(e.clientX, e.clientY);
                    setTimeout(() => { this.suppressClick = !1; }, 50);
                }
                try { btn.releasePointerCapture(e.pointerId); } catch (err) {}
            });

            btn.addEventListener("pointercancel", () => {
                dragInfo = null;
                this.render.clearPreview();
            });
        }

        // Battlefield Canvas: pointer click or drag target
        this.hud.canvas.addEventListener("pointerdown", e => {
            this.preview(e.clientX, e.clientY);
        });

        this.hud.canvas.addEventListener("pointermove", e => {
            this.preview(e.clientX, e.clientY);
        });

        this.hud.canvas.addEventListener("pointerup", e => {
            if (this.selected) {
                this.deploy(e.clientX, e.clientY);
            }
        });

        this.hud.canvas.addEventListener("pointerleave", () => {
            if (!dragInfo) this.render.clearPreview();
        });

        // Keyboard shortcuts
        window.addEventListener("keydown", e => {
            if (e.key >= "1" && e.key <= "4") {
                const idx = parseInt(e.key, 10) - 1;
                this.select(idx);
            }
            if (e.key === "Escape") {
                this.home();
            }
        });
    }

    frame(t) {
        const delta = Math.min(0.1, (t - this.last) / 1000);
        this.last = t;

        if (!this.paused && !this.online) {
            for (this.accumulator += delta; this.accumulator >= M.fixedStep;) {
                this.sim.step(M.fixedStep);
                this.accumulator -= M.fixedStep;
                this.audio.events(this.state.events);
                this.render.effects.events(this.state.events, this.viewTeam);
                this.hud.feedback(this.state, this.viewTeam, (x, y, z, team) => this.render.project(x, y, z, team));
            }
        }

        this.render.render(this.state, delta, this.viewTeam);
        this.uiAccumulator += delta;
        if (this.uiAccumulator >= 0.05) {
            this.uiAccumulator = 0;
            this.hud.update(this.state, this.viewTeam);
        }

        requestAnimationFrame(s => this.frame(s));
    }
}

const H = new Kt;
