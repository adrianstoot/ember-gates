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
            range: 2,
            cooldown: 1.05,
            count: 1,
            radius: .4,
            artX: 47,
            color: "#76c9ff",
            description: "Su lanza mantiene a raya al enemigo. Despliégalo detrás del caballero."
        },
        arrows: {
            id: "arrows",
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
            artX: 341,
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
            artX: 636,
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
            artX: 931,
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
            artX: 1225,
            color: "#ffac5c",
            description: "Lanza orbes ardientes que estallan al impactar. Protégelo tras tus tropas."
        }
    },
    A = ["lancer", "arrows", "knight", "imps", "mage"],
    M = {
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
        maxUnits: 120,
        maxPerTeam: 60,
        cardCooldown: .8,
        deploymentZ: .25,
        projectileSpeed: 10,
        arrowDelay: .95,
        arrowGateScale: .32,
        seed: 7421
    },
    Ut = g => g === 0 ? 1 : 0,
    et = g => g === 0 ? -1 : 1,
    S = (g, t, s) => Math.max(t, Math.min(s, g)),
    st = () => ({
        energy: M.startingEnergy,
        cooldowns: {
            lancer: 0,
            arrows: 0,
            knight: 0,
            imps: 0,
            mage: 0
        },
        hand: [...A],
        next: "lancer",
        played: 0,
        kills: 0,
        damage: 0
    });

function it() {
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
        players: [st(), st()],
        events: [],
        seed: M.seed
    }
}
class X {
    constructor(t = 1, s = "normal") {
        this.botTeam = t, this.difficulty = s
    }
    botTeam;
    difficulty;
    state = it();
    id = 1;
    eventId = 1;
    botTimer = 2.1;
    grid = new Map;
    unitPool = [];
    start(t = !0) {
        this.state = it(), this.id = 1, this.eventId = 1, this.botTimer = 2.1, this.unitPool.length = 0, this.state.phase = t ? "countdown" : "playing";
        for (const s of [0, 1])
            for (let a = 0; a < M.gateSegments; a++) this.state.gates.push({
                id: -1 - s * 5 - a,
                team: s,
                segment: a,
                x: -7.2 + a * 3.6,
                z: s === 0 ? M.gateZ : -13.55,
                hp: M.segmentHp,
                maxHp: M.segmentHp,
                hurtTime: 0
            })
    }
    random() {
        let t = this.state.seed;
        return t ^= t << 13, t ^= t >>> 17, t ^= t << 5, this.state.seed = t, (t >>> 0) / 4294967296
    }
    emit(t) {
        this.state.events.push({
            ...t,
            id: this.eventId++
        })
    }
    deploy({
        team: t,
        card: s,
        x: a,
        z: e,
        slot: i
    }) {
        const o = this.state,
            c = w[s];
        if (o.phase !== "playing") return {
            ok: !1,
            reason: "Espera al comienzo del duelo"
        };
        if (!c || t !== 0 && t !== 1 || !Number.isFinite(a) || !Number.isFinite(e)) return {
            ok: !1,
            reason: "Despliegue no válido"
        };
        if (Math.abs(a) > 8.9 || Math.abs(e) > 14.1) return {
            ok: !1,
            reason: "Elige un punto dentro de la arena"
        };
        if (c.id !== "arrows" && (t === 0 ? e < M.deploymentZ : e > -.25)) return {
            ok: !1,
            reason: "Despliega tus tropas en tu mitad de la arena"
        };
        const l = o.players[t],
            r = i ?? l.hand.indexOf(s);
        if (!Number.isInteger(r) || r < 0 || r >= 5 || l.hand[r] !== s) return {
            ok: !1,
            reason: "Esta carta está esperando su turno"
        };
        if (l.energy + 1e-6 < c.cost) return {
            ok: !1,
            reason: `Necesitas ${c.cost} de energía`
        };
        if (l.cooldowns[s] > 0) return {
            ok: !1,
            reason: "La carta se está preparando"
        };
        if (o.units.filter(n => n.team === t && n.hp > 0).length + c.count > M.maxPerTeam) return {
            ok: !1,
            reason: "Tu ejército está completo"
        };
        if (o.units.length + c.count > M.maxUnits) return {
            ok: !1,
            reason: "La arena está llena. Espera un instante"
        };
        if (l.energy -= c.cost, l.cooldowns[s] = M.cardCooldown, l.played++, l.hand[r] = l.next, l.next = s, a = S(a, -8.4, 8.4), e = S(e, -12.2, 12.2), s === "arrows") o.spells.push({
            id: this.id++,
            team: t,
            x: a,
            z: e,
            delay: M.arrowDelay,
            impacted: !1
        }), this.emit({
            type: "arrows",
            team: t,
            x: a,
            z: e,
            kind: s
        });
        else {
            for (let n = 0; n < c.count; n++) {
                const h = n / c.count * Math.PI * 2,
                    p = c.count > 1 ? .65 : 0,
                    u = this.unitPool.pop() ?? {};
                Object.assign(u, {
                    id: this.id++,
                    team: t,
                    kind: s,
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
                    facing: t === 0 ? Math.PI : 0,
                    deathTime: 0,
                    vx: 0,
                    vz: 0,
                    attackPending: !1,
                    attackTarget: 0,
                    attackX: 0,
                    attackZ: 0,
                    footstep: 0
                }), o.units.push(u)
            }
            this.emit({
                type: "deploy",
                team: t,
                x: a,
                z: e,
                kind: s
            })
        }
        return {
            ok: !0
        }
    }
    step(t) {
        const s = this.state;
        if (s.events = [], s.phase === "menu" || s.phase === "finished") return;
        if (s.phase === "countdown") {
            const e = Math.ceil(s.countdown);
            s.countdown -= t, Math.ceil(s.countdown) !== e && this.emit({
                type: "countdown",
                team: 0,
                x: 0,
                z: 0,
                amount: Math.ceil(s.countdown)
            }), s.countdown <= 0 && (s.phase = "playing");
            return
        }
        s.elapsed += t, s.time -= t;
        const a = s.time <= M.doubleEnergyAt || s.overtime ? 2 : 1;
        for (const e of s.players) {
            e.energy = Math.min(M.maxEnergy, e.energy + t * M.energyPerSecond * a);
            for (const i of A) e.cooldowns[i] = Math.max(0, e.cooldowns[i] - t)
        }
        for (const e of s.gates) e.hurtTime = Math.max(0, e.hurtTime - t);
        this.rebuildGrid(), this.botTeam !== null && this.updateBot(t, this.botTeam);
        for (const e of s.units) {
            if (e.age += t, e.attackTime = Math.max(0, e.attackTime - t), e.hurtTime = Math.max(0, e.hurtTime - t), e.cooldown = Math.max(0, e.cooldown - t), e.hp <= 0) {
                e.state = "dead", e.deathTime += t;
                continue
            }
            if (e.age < .3) continue;
            const i = w[e.kind];
            if (e.attackPending && e.attackTime <= i.attackDuration - i.impactAt && (e.attackPending = !1, this.resolveAttack(e)), e.attackTime > 0) {
                e.state = "attack", e.vx = e.vz = 0;
                continue
            }
            let o, c = 1 / 0;
            const l = this.nearby(e.x, e.z, 6.5);
            for (const m of l) {
                if (m.team === e.team || m.hp <= 0) continue;
                const v = Math.hypot(e.x - m.x, e.z - m.z),
                    y = v * (m.id === e.targetId ? .78 : 1);
                y < c && v < 6.5 && (c = y, o = m)
            }
            if (!o)
                for (const m of s.gates) {
                    if (m.team === e.team || m.hp <= 0) continue;
                    const v = Math.max(0, Math.abs(m.x - e.x) - 1.55),
                        y = Math.hypot(v, m.z - e.z);
                    y < c && (c = y, o = m)
                }
            if (!o) {
                e.state = "idle";
                continue
            }
            e.targetId = o.id;
            const r = o.id < 0 ? S(e.x, o.x - 1.5, o.x + 1.5) : o.x,
                n = r - e.x,
                h = o.z - e.z,
                p = Math.hypot(n, h);
            e.facing = Math.atan2(n, h);
            const u = o.id > 0 ? w[o.kind].radius : .12,
                b = e.kind === "mage" && o.id > 0 && p < 2.35;
            if (p <= i.range + u && !b) {
                if (e.state = "idle", e.vx *= Math.exp(-t * 18), e.vz *= Math.exp(-t * 18), e.cooldown <= 0) e.cooldown = i.cooldown, e.attackTime = i.attackDuration, e.state = "attack", e.attackPending = !0, e.attackTarget = o.id, e.attackX = r, e.attackZ = o.z, this.emit({
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
                else if (e.kind === "imps" && o.id > 0) {
                    const m = Math.atan2(e.x - o.x, e.z - o.z) + (e.id % 2 ? 1 : -1) * t * 1.8,
                        v = Math.max(u + .42, Math.min(p, i.range + u - .1));
                    e.x += (o.x + Math.sin(m) * v - e.x) * t * 5, e.z += (o.z + Math.cos(m) * v - e.z) * t * 5
                }
            } else {
                e.state = "walk";
                let m = n,
                    v = h;
                if (b && (m = -n, v = -h), e.kind === "imps" && o.id > 0 && p < 4.6) {
                    const L = e.id * 2.39996 + Math.sin(e.age * 1.7 + e.id) * .27,
                        N = u + .46;
                    m = o.x + Math.sin(L) * N - e.x, v = o.z + Math.cos(L) * N - e.z
                }
                const y = Math.hypot(m, v) || 1,
                    f = i.speed * (e.kind === "imps" && p < 5 ? 1.28 : 1) * (b ? .85 : 1) * Math.min(1, Math.max(.12, p - i.range + .4)),
                    x = 1 - Math.exp(-i.acceleration * t);
                e.vx += (m / y * f - e.vx) * x, e.vz += (v / y * f - e.vz) * x, e.kind === "imps" && (e.vx += Math.sin(e.age * 9 + e.id) * t * .8, e.vz += Math.cos(e.age * 7 + e.id) * t * .5), e.x += e.vx * t, e.z += e.vz * t, e.footstep += Math.hypot(e.vx, e.vz) * t, e.footstep > (e.kind === "knight" ? .58 : e.kind === "imps" ? .45 : .68) && (e.footstep = 0, this.emit({
                    type: "footstep",
                    team: e.team,
                    kind: e.kind,
                    sourceId: e.id,
                    x: e.x,
                    z: e.z
                }))
            }
            for (const m of this.nearby(e.x, e.z, 1.3)) {
                if (m.id === e.id || m.hp <= 0) continue;
                const v = e.x - m.x,
                    y = e.z - m.z,
                    f = Math.hypot(v, y),
                    x = i.radius + w[m.kind].radius;
                if (f > 0 && f < x) {
                    const L = (x - f) * Math.min(1, t * 5);
                    e.x += v / f * L, e.z += y / f * L
                }
            }
            e.x = S(e.x, -8.45, 8.45), e.z = S(e.z, -13.2, 13.2)
        }
        for (let e = s.units.length - 1; e >= 0; e--) s.units[e].deathTime > 1.1 && this.unitPool.push(s.units.splice(e, 1)[0]);
        for (let e = s.projectiles.length - 1; e >= 0; e--) {
            const i = s.projectiles[e];
            i.progress += t / i.duration;
            const o = i.targetId < 0 ? s.gates.find(c => c.id === i.targetId) : s.units.find(c => c.id === i.targetId);
            if (o && o.hp > 0 && (i.targetX = o.id < 0 ? i.targetX : o.x, i.targetZ = o.z), i.x = i.startX + (i.targetX - i.startX) * Math.min(1, i.progress), i.z = i.startZ + (i.targetZ - i.startZ) * Math.min(1, i.progress), i.progress >= 1) {
                o && o.hp > 0 && this.damage(o, i.damage, i.team, "mage");
                for (const c of s.units) c.team !== i.team && c.hp > 0 && c.id !== i.targetId && Math.hypot(c.x - i.x, c.z - i.z) < 1.35 && this.damage(c, i.damage * .65, i.team, "mage");
                this.emit({
                    type: "explosion",
                    team: i.team,
                    x: i.x,
                    z: i.z,
                    kind: "mage",
                    targetId: i.targetId
                }), s.projectiles.splice(e, 1)
            }
        }
        for (let e = s.spells.length - 1; e >= 0; e--) {
            const i = s.spells[e];
            if (i.delay -= t, i.delay <= 0 && !i.impacted) {
                i.impacted = !0;
                for (const o of s.units) o.team !== i.team && o.hp > 0 && Math.hypot(o.x - i.x, o.z - i.z) <= w.arrows.radius && this.damage(o, w.arrows.damage, i.team, "arrows");
                for (const o of s.gates) o.team !== i.team && o.hp > 0 && Math.hypot(Math.max(0, Math.abs(o.x - i.x) - 1.8), o.z - i.z) <= w.arrows.radius && this.damage(o, w.arrows.damage * M.arrowGateScale, i.team, "arrows");
                this.emit({
                    type: "arrow-impact",
                    team: i.team,
                    x: i.x,
                    z: i.z
                })
            }
            i.delay < -.45 && s.spells.splice(e, 1)
        }
        this.checkEnd()
    }
    rebuildGrid() {
        this.grid.clear();
        for (const t of this.state.units)
            if (t.hp > 0) {
                const s = `${Math.floor(t.x/2)},${Math.floor(t.z/2)}`;
                let a = this.grid.get(s);
                a || this.grid.set(s, a = []), a.push(t)
            }
    }
    nearby(t, s, a) {
        const e = [];
        for (let i = Math.floor((t - a) / 2); i <= Math.floor((t + a) / 2); i++)
            for (let o = Math.floor((s - a) / 2); o <= Math.floor((s + a) / 2); o++) {
                const c = this.grid.get(`${i},${o}`);
                c && e.push(...c)
            }
        return e
    }
    resolveAttack(t) {
        const s = w[t.kind],
            a = this.state,
            e = t.attackTarget < 0 ? a.gates.find(c => c.id === t.attackTarget) : a.units.find(c => c.id === t.attackTarget);
        if (!e || e.hp <= 0) return;
        const i = e.id < 0 ? S(t.x, e.x - 1.5, e.x + 1.5) : e.x,
            o = Math.hypot(i - t.x, e.z - t.z);
        t.kind === "mage" ? (a.projectiles.push({
            id: this.id++,
            team: t.team,
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
        }), this.emit({
            type: "fireball",
            team: t.team,
            x: t.x,
            z: t.z,
            kind: "mage",
            sourceId: t.id,
            targetId: e.id,
            targetX: i,
            targetZ: e.z,
            facing: t.facing
        })) : o <= s.range + (e.id > 0 ? w[e.kind].radius : .12) + .6 && (this.damage(e, s.damage, t.team, t.kind, t.id), this.emit({
            type: "melee-impact",
            team: t.team,
            x: t.x,
            z: t.z,
            kind: t.kind,
            sourceId: t.id,
            targetId: e.id,
            targetX: i,
            targetZ: e.z,
            facing: t.facing
        }))
    }
    damage(t, s, a, e, i) {
        if (t.hp <= 0) return;
        const o = Math.min(t.hp, s);
        t.hp = Math.max(0, t.hp - s), t.hurtTime = .22, this.state.players[a].damage += o, this.emit({
            type: t.id < 0 ? "gate-hit" : "hit",
            team: a,
            x: t.x,
            z: t.z,
            amount: Math.round(o),
            targetId: t.id,
            kind: e,
            sourceId: i
        }), t.hp <= 0 && (t.id > 0 && this.state.players[a].kills++, this.emit({
            type: t.id < 0 ? "gate-destroyed" : "death",
            team: a,
            x: t.x,
            z: t.z,
            targetId: t.id,
            kind: t.id > 0 ? t.kind : void 0
        }))
    }
    gateHealth(t) {
        return this.state.gates.filter(s => s.team === t).reduce((s, a) => s + a.hp, 0)
    }
    checkEnd() {
        const t = this.state,
            s = this.gateHealth(0),
            a = this.gateHealth(1);
        if (s <= 0 || a <= 0) {
            this.finish(s === a ? "draw" : s > a ? 0 : 1);
            return
        }
        t.time <= 0 && (s === a && !t.overtime ? (t.overtime = !0, t.time = M.overtime) : this.finish(Math.abs(s - a) < .001 ? "draw" : s > a ? 0 : 1)), t.overtime && Math.abs(s - a) > .001 && this.finish(s > a ? 0 : 1)
    }
    finish(t) {
        this.state.phase = "finished", this.state.winner = t, this.emit({
            type: "victory",
            team: t === "draw" ? 0 : t,
            x: 0,
            z: 0
        })
    }
    updateBot(t, s) {
        if (this.botTimer -= t, this.botTimer > 0) return;
        this.botTimer = this.difficulty === "hard" ? .65 + this.random() * .75 : 1.3 + this.random() * 1.2;
        const a = this.state,
            e = a.players[s],
            i = Ut(s),
            o = a.units.filter(n => n.team === i && n.hp > 0 && n.z * et(s) < 1);
        let c, l = -5 + this.random() * 10,
            r = s === 0 ? 8 : -8;
        if (o.length >= 3 && e.energy >= 3 && e.hand.includes("arrows") && this.random() > .3) {
            c = "arrows";
            const n = o[Math.floor(this.random() * o.length)];
            l = n.x, r = n.z
        } else {
            const n = e.hand.filter(h => h !== "arrows" && w[h].cost <= e.energy && e.cooldowns[h] <= 0);
            if (!n.length || e.energy < 4 && !o.length && this.random() > .25) return;
            if (c = n[Math.floor(this.random() * n.length)], o.length) l = o[0].x, r = s === 0 ? 6.5 : -6.5;
            else {
                const h = a.units.find(p => p.team === s && p.kind === "knight" && p.hp > 0);
                h && c === "mage" && (l = h.x, r = S(h.z - et(s) * 2, s === 0 ? 1 : -11, s === 0 ? 11 : -1))
            }
        }
        this.deploy({
            team: s,
            card: c,
            x: l,
            z: r
        })
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
    steel: 8559791,
    edge: 13358813,
    dark: 2570311,
    black: 1319473,
    blue: 2254785,
    blueLight: 3771626,
    skin: 15249020,
    shadowSkin: 13008978,
    leather: 6308153,
    gold: 15710545,
    wood: 8935735,
    purple: 8734159,
    purpleLight: 11364075,
    eye: 16733151,
    red: 9314357,
    orange: 15361309
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
        u.setAttribute("color", new J(m, 3)), this.parts.push(u)
    }
    ell(t, s, a, e, i, o, c) {
        this.add(new rt(1, 14, 10), t, s, a, e, i, o, c)
    }
    box(t, s, a, e, i, o, c, l = 0) {
        this.add(new K(1, 1, 1, 2, .08), t, s, a, e, i, o, c, 0, 0, l)
    }
    cyl(t, s, a, e, i, o, c, l = 0, r = 0, n = 12) {
        this.add(new lt(i, o, c, n), t, s, a, e, 1, 1, 1, l, 0, r)
    }
    cone(t, s, a, e, i, o, c = 0, l = 0) {
        this.add(new ct(i, o, 8), t, s, a, e, 1, 1, 1, c, 0, l)
    }
    ring(t, s, a, e, i, o, c = 0, l = 1, r = 1) {
        this.add(new Mt(i, o, 6, 18), t, s, a, e, l, r, 1, c)
    }
    finish() {
        const t = ut(this.parts);
        for (const s of this.parts) s.dispose();
        return t.computeBoundingSphere(), t
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
    e ? (g.box(d.steel, t, s + .1, a + .17, .36, .035, .027), g.box(d.steel, t, s, a + .17, .035, .5, .027)) : g.add(new W(.13), d.edge, t, s, a + .17, .65, 1.8, .3)
}

function ot(g, t = !1) {
    const s = [],
        a = (l, r, n) => {
            const h = new Gt;
            n(h), s.push({
                name: l,
                pivot: new E(...r),
                geometry: h.finish()
            })
        },
        e = g === "imps",
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
        this.cameraQuaternion = s.quaternion.clone(), this.material.onBeforeCompile = c => {
            c.fragmentShader = c.fragmentShader.replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
        #ifdef USE_COLOR
          float eyes = step(0.94, vColor.r) * (1.0 - step(0.22, vColor.g)) * step(0.4, vColor.b);
          float fire = step(0.95, vColor.r) * step(0.35, vColor.g) * (1.0 - step(0.06, vColor.b));
          totalEmissiveRadiance += vColor.rgb * (eyes * 1.5 + fire * 0.8);
        #endif`)
        };
        for (const c of ["lancer", "knight", "imps", "mage"]) {
            const l = ot(c),
                r = ot(c, !0),
                n = h => h.bones.map(p => {
                    const u = new I(p.geometry, this.material, 120);
                    return u.instanceMatrix.setUsage(Tt), u.count = 0, u.castShadow = !0, u.receiveShadow = !0, u.frustumCulled = !1, t.add(u), u
                });
            this.batches.set(c, {
                template: l,
                lowTemplate: r,
                meshes: n(l),
                low: n(r)
            })
        }
        const a = document.createElement("canvas");
        a.width = 64, a.height = 64;
        const e = a.getContext("2d"),
            i = e.createRadialGradient(32, 32, 4, 32, 32, 32);
        i.addColorStop(0, "rgba(13,27,17,.55)"), i.addColorStop(.5, "rgba(13,27,17,.3)"), i.addColorStop(1, "rgba(13,27,17,0)"), e.fillStyle = i, e.fillRect(0, 0, 64, 64);
        const o = new Et(a);
        this.shadow = new I(new B(1, 1), new C({
            map: o,
            transparent: !0,
            depthWrite: !1
        }), 120), this.shadow.frustumCulled = !1, t.add(this.shadow), this.teamRing = new I(new Y(.36, .405, 28), new C({
            transparent: !0,
            opacity: .8,
            depthWrite: !1,
            side: j
        }), 120), this.teamRing.frustumCulled = !1, t.add(this.teamRing), this.healthBack = new I(new B(1, .105), new C({
            color: 1319465,
            depthTest: !1,
            transparent: !0,
            opacity: .9
        }), 120), this.healthFront = new I(new B(1, .065), new C({
            depthTest: !1,
            transparent: !0
        }), 120), this.healthBack.renderOrder = 20, this.healthFront.renderOrder = 21, this.healthBack.frustumCulled = this.healthFront.frustumCulled = !1, t.add(this.healthBack, this.healthFront)
    }
    update(t, s, a, e, i) {
        const o = new Map,
            c = new Set;
        for (const h of t.units) o.has(h.kind) || o.set(h.kind, []), o.get(h.kind).push(h), c.add(h.id);
        for (const h of this.smooth.keys()) c.has(h) || this.smooth.delete(h);
        const l = e === 0 ? 1 : -1;
        let r = 0,
            n = 0;
        for (const [h, p] of this.batches) {
            const u = o.get(h) ?? [],
                b = i || u.length > 35,
                m = b ? p.low : p.meshes,
                v = b ? p.lowTemplate : p.template;
            for (const y of p.meshes) y.count = b ? 0 : u.length;
            for (const y of p.low) y.count = b ? u.length : 0;
            for (let y = 0; y < u.length; y++) {
                const f = u[y];
                let x = this.smooth.get(f.id);
                x || (x = {
                    x: f.x,
                    z: f.z,
                    angle: f.facing
                }, this.smooth.set(f.id, x));
                const L = 1 - Math.exp(-s * 22);
                x.x += (f.x - x.x) * L, x.z += (f.z - x.z) * L;
                const N = Math.atan2(Math.sin(f.facing - x.angle), Math.cos(f.facing - x.angle));
                x.angle += N * Math.min(1, s * 18);
                const R = f.state === "walk",
                    mt = f.attackTime > 0,
                    q = f.hp <= 0,
                    U = h === "imps",
                    P = Math.sin(f.age * (U ? 16 : 9)),
                    pt = R ? Math.abs(P) * .055 : Math.sin(a * 2.5 + f.id) * .012,
                    ft = Math.min(1, f.age / .25),
                    gt = q ? Math.max(0, 1 - f.deathTime / .8) : 1,
                    yt = v.scale * (.2 + .8 * Math.sin(ft * Math.PI / 2)) * gt;
                this.transform.position.set(x.x * l, pt + (q ? -f.deathTime * .4 : 0), x.z * l), this.transform.rotation.set(q ? f.deathTime * 1.6 : 0, x.angle + (l === -1 ? Math.PI : 0), q ? f.deathTime * 1.2 : 0), this.transform.scale.setScalar(yt), this.transform.updateMatrix(), this.root.copy(this.transform.matrix);
                const G = mt ? Math.sin((1 - f.attackTime / .42) * Math.PI) : 0,
                    bt = f.team === e ? 16777215 : 16757933;
                this.color.setHex(bt), f.hurtTime > 0 && this.color.multiplyScalar(1 + f.hurtTime * 4);
                for (let T = 0; T < v.bones.length; T++) {
                    const z = v.bones[T];
                    this.transform.position.copy(z.pivot), this.transform.rotation.set(0, 0, 0), this.transform.scale.setScalar(1), z.name === "leftLeg" && (this.transform.rotation.x = R ? P * .52 : 0), z.name === "rightLeg" && (this.transform.rotation.x = R ? -P * .52 : 0), z.name === "leftArm" && (this.transform.rotation.x = (R ? -P * .3 : 0) - G * .3, this.transform.rotation.z = U ? .2 : .06), z.name === "rightArm" && (this.transform.rotation.x = (R ? P * .3 : 0) - G * (h === "mage" ? 1.35 : 1.7), this.transform.rotation.z = U ? -.2 : -.06, this.transform.position.z += G * .25), z.name === "head" && (this.transform.rotation.y = Math.sin(a * 1.3 + f.id) * .055, this.transform.rotation.x = -G * .09), z.name === "body" && (this.transform.rotation.z = R ? P * .035 : 0), z.name === "cape" && (this.transform.rotation.x = .12 + (R ? Math.sin(f.age * 7) * .17 : .04 * Math.sin(a * 2 + f.id))), this.transform.updateMatrix(), this.local.multiplyMatrices(this.root, this.transform.matrix), m[T].setMatrixAt(y, this.local), m[T].setColorAt(y, this.color)
                }
                if (!q) {
                    const T = h === "knight" ? 1.35 : U ? .72 : 1.02;
                    this.transform.position.set(x.x * l, .018, x.z * l), this.transform.rotation.set(-Math.PI / 2, 0, 0), this.transform.scale.set(T * 1.4, T, 1), this.transform.updateMatrix(), this.shadow.setMatrixAt(n, this.transform.matrix), this.transform.scale.setScalar(T), this.transform.position.y = .025, this.transform.updateMatrix(), this.teamRing.setMatrixAt(n, this.transform.matrix), this.teamRing.setColorAt(n, this.color.setHex(f.team === e ? 7723007 : 16740963)), n++, this.transform.position.set(x.x * l, v.height * v.scale + .12, x.z * l), this.transform.quaternion.copy(this.cameraQuaternion), this.transform.scale.set(.82, 1, 1), this.transform.updateMatrix(), this.healthBack.setMatrixAt(r, this.transform.matrix), this.transform.position.x -= (1 - f.hp / f.maxHp) * .39, this.transform.position.y += .006, this.transform.scale.set(.78 * f.hp / f.maxHp, 1, 1), this.transform.updateMatrix(), this.healthFront.setMatrixAt(r, this.transform.matrix), this.healthFront.setColorAt(r, this.color.setHex(f.team === e ? 7198207 : 16739171)), r++
                }
            }
            for (const y of m) y.instanceMatrix.needsUpdate = !0, y.instanceColor && (y.instanceColor.needsUpdate = !0)
        }
        this.shadow.count = this.teamRing.count = n, this.healthBack.count = this.healthFront.count = r;
        for (const h of [this.shadow, this.teamRing, this.healthBack, this.healthFront]) h.instanceMatrix.needsUpdate = !0, h.instanceColor && (h.instanceColor.needsUpdate = !0)
    }
    dispose() {
        this.material.dispose();
        for (const t of this.batches.values())
            for (const s of [...t.meshes, ...t.low]) s.geometry.dispose(), s.dispose();
        for (const t of [this.shadow, this.teamRing, this.healthBack, this.healthFront]) t.geometry.dispose(), t.material.dispose(), t.dispose()
    }
}

function Bt() {
    const g = [],
        t = (a, e, i, o = 0) => {
            let c = a.index ? a.toNonIndexed() : a;
            c !== a && a.dispose(), c.rotateY(o), c.translate(0, i, 0), c.deleteAttribute("uv");
            const l = new V(e),
                r = new Float32Array(c.getAttribute("position").count * 3);
            for (let n = 0; n < r.length; n += 3) r[n] = l.r, r[n + 1] = l.g, r[n + 2] = l.b;
            c.setAttribute("color", new J(r, 3)), g.push(c)
        };
    t(new lt(.024, .024, .95, 6), 9854774, 0), t(new ct(.077, .25, 4), 12571618, .59);
    for (let a = 0; a < 2; a++) t(new nt(.18, .27, .018), 14175032, -.32, a * Math.PI / 2);
    const s = ut(g);
    return g.forEach(a => a.dispose()), s
}
class Ft {
    constructor(t) {
        this.scene = t, this.mesh = new I(new Q(1, 0), new C({
            transparent: !0,
            opacity: .92,
            depthWrite: !1
        }), 800), this.mesh.frustumCulled = !1, this.mesh.count = 0, t.add(this.mesh), this.arrows = new I(Bt(), new ht({
            vertexColors: !0,
            metalness: .35,
            roughness: .5
        }), 200), this.arrows.count = 0, this.arrows.frustumCulled = !1, t.add(this.arrows), this.fireballs = new I(new Q(.17, 1), new C({
            color: 16768118
        }), 120), this.fireballs.count = 0, this.fireballs.frustumCulled = !1, t.add(this.fireballs);
        for (let s = 0; s < 24; s++) {
            const a = new F(new Y(.88, 1, 48), new C({
                transparent: !0,
                opacity: 0,
                depthWrite: !1,
                side: j
            }));
            a.rotation.x = -Math.PI / 2, a.visible = !1, t.add(a), this.rings.push({
                mesh: a,
                life: 0,
                duration: 1,
                radius: 1
            })
        }
    }
    scene;
    particles = Array.from({
        length: 800
    }, () => ({
        active: !1,
        x: 0,
        y: 0,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        life: 0,
        maxLife: 1,
        size: 0,
        color: 16777215,
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
        this.lastEvent = 0, this.shake = 0;
        for (const t of this.particles) t.active = !1;
        for (const t of this.rings) t.life = 0, t.mesh.visible = !1
    }
    particle(t, s, a, e, i, o, c, l, r, n = 0) {
        const h = this.particles[this.cursor++ % this.particles.length];
        Object.assign(h, {
            active: !0,
            x: t,
            y: s,
            z: a,
            color: e,
            size: i,
            life: o,
            maxLife: o,
            vx: c,
            vy: l,
            vz: r,
            gravity: n
        })
    }
    burst(t, s, a, e, i, o = .5) {
        for (let c = 0; c < a; c++) {
            const l = Math.random() * Math.PI * 2,
                r = Math.random() * i;
            this.particle(t, o, s, e, .035 + Math.random() * .065, .3 + Math.random() * .6, Math.cos(l) * r, .6 + Math.random() * i, Math.sin(l) * r, -5)
        }
    }
    ring(t, s, a, e, i = .55) {
        const o = this.rings.find(c => c.life <= 0) ?? this.rings[0];
        o.life = o.duration = i, o.radius = e, o.mesh.position.set(t, .04, s), o.mesh.visible = !0, o.mesh.material.color.setHex(a)
    }
    events(t, s) {
        const a = s === 0 ? 1 : -1;
        for (const e of t) {
            if (e.id <= this.lastEvent) continue;
            this.lastEvent = e.id;
            const i = e.x * a,
                o = e.z * a;
            e.type === "deploy" && (this.ring(i, o, e.team === s ? 8642047 : 16749696, 1.2), this.burst(i, o, 20, e.team === s ? 11069439 : 16753533, 1.2, .1)), e.type === "hit" && this.burst(i, o, 6, 16769952, 1.5), e.type === "death" && this.burst(i, o, 18, e.kind === "imps" ? 12089334 : 13415578, 2), e.type === "explosion" && (this.burst(i, o, 46, 16750641, 3.5), this.burst(i, o, 20, 16770968, 2.1), this.ring(i, o, 16758348, 1.65, .36), this.shake = Math.max(this.shake, .1)), e.type === "arrows" && this.ring(i, o, 16766106, 2.5, .68), e.type === "arrow-impact" && (this.burst(i, o, 40, 15125649, 3, .1), this.shake = Math.max(this.shake, .075)), e.type === "gate-hit" && this.burst(i, o, 12, 14066537, 2, .5), e.type === "gate-destroyed" && (this.burst(i, o, 80, 9595715, 5), this.burst(i, o, 35, 10204613, 4), this.ring(i, o, 16767134, 3, .6), this.shake = .25), e.type === "victory" && this.burst(0, 0, 110, 16766325, 6, 4)
        }
    }
    update(t, s, a, e, i) {
        const o = e === 0 ? 1 : -1;
        if (this.shake = Math.max(0, this.shake - t * .8), Math.random() < t * 18 * i) {
            const n = [
                    [-9.25, -9.8],
                    [9.25, -9.8],
                    [-9.5, -.1],
                    [9.5, -.1],
                    [-8.55, 14],
                    [8.55, 14]
                ],
                [h, p] = n[Math.floor(Math.random() * n.length)];
            this.particle(h, .25, p, 16758841, .025 + Math.random() * .035, .5 + Math.random(), (Math.random() - .5) * .15, .55, (Math.random() - .5) * .15)
        }
        Math.random() < t * 3 * i && this.particle((Math.random() - .5) * 17, .4 + Math.random() * 2, (Math.random() - .5) * 26, 16576681, .025, 3, .1, .025, .07);
        let c = 0;
        for (const n of a.projectiles) {
            const h = .9 + Math.sin(n.progress * Math.PI) * .6;
            this.dummy.position.set(n.x * o, h, n.z * o), this.dummy.rotation.set(s * 4, s * 3, 0), this.dummy.scale.setScalar(1 + .15 * Math.sin(s * 25)), this.dummy.updateMatrix(), this.fireballs.setMatrixAt(c++, this.dummy.matrix), this.particle(n.x * o, h, n.z * o, Math.random() > .5 ? 16746031 : 16763464, .09, .23, (Math.random() - .5) * .8, .5, (Math.random() - .5) * .8)
        }
        this.fireballs.count = c, this.fireballs.instanceMatrix.needsUpdate = !0;
        let l = 0;
        for (const n of a.spells)
            for (let h = 0; h < 24; h++) {
                const p = h * 2.39996,
                    u = Math.sqrt(h / 24) * 2.35,
                    b = Math.max(0, n.delay * 14 - h % 5 * .25);
                this.dummy.position.set(n.x * o + Math.cos(p) * u + b * .18, b, n.z * o + Math.sin(p) * u), this.dummy.rotation.set(0, 0, Math.PI - .2), this.dummy.scale.setScalar(1), this.dummy.updateMatrix(), this.arrows.setMatrixAt(l++, this.dummy.matrix)
            }
        this.arrows.count = l, this.arrows.instanceMatrix.needsUpdate = !0;
        let r = 0;
        for (const n of this.particles)
            if (n.active) {
                if (n.life -= t, n.life <= 0) {
                    n.active = !1;
                    continue
                }
                n.vy += n.gravity * t, n.x += n.vx * t, n.y += n.vy * t, n.z += n.vz * t, n.y < .03 && (n.y = .03, n.vy = Math.abs(n.vy) * .2, n.vx *= .9, n.vz *= .9), this.dummy.position.set(n.x, n.y, n.z), this.dummy.rotation.set(n.life * 4, n.life * 6, 0), this.dummy.scale.setScalar(n.size * Math.min(1, n.life * 4)), this.dummy.updateMatrix(), this.mesh.setMatrixAt(r, this.dummy.matrix), this.mesh.setColorAt(r, this.color.setHex(n.color).multiplyScalar(.4 + .6 * n.life / n.maxLife)), r++
            } this.mesh.count = r, this.mesh.instanceMatrix.needsUpdate = !0, this.mesh.instanceColor && (this.mesh.instanceColor.needsUpdate = !0);
        for (const n of this.rings) {
            if (n.life <= 0) continue;
            n.life -= t;
            const h = 1 - n.life / n.duration;
            n.mesh.scale.setScalar(n.radius * (.45 + .55 * h)), n.mesh.material.opacity = Math.max(0, (1 - h) * .65), n.mesh.visible = n.life > 0
        }
    }
    dispose() {
        for (const t of [this.mesh, this.arrows, this.fireballs, ...this.rings.map(s => s.mesh)]) t.geometry.dispose(), t.material.dispose()
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
        this.actions = s, t.innerHTML = `
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
        <div id="connection-status" role="status"></div>
        <div id="performance" hidden></div>
      </div></div>
      <p class="desktop-hint">CINCO CARTAS. UNA FORTALEZA. TU DECISIÓN.<span>Ratón o pantalla táctil · 1–5 para elegir · Esc para pausar</span></p>
    `, this.stage = t.querySelector("#stage"), this.game = t.querySelector("#game"), this.canvas = t.querySelector("canvas"), this.timer = t.querySelector("#timer"), this.energy = t.querySelector("#energy-count"), this.energyFill = t.querySelector("#energy-fill"), this.modal = t.querySelector("#modal"), this.modalContent = t.querySelector("#modal-content"), this.toastEl = t.querySelector("#toast");
        const a = t.querySelector("#deck-cards");
        for (const i of A) {
            const o = w[i],
                c = document.createElement("button");
            c.className = "battle-card", c.dataset.card = i, c.dataset.slot = String(A.indexOf(i)), c.setAttribute("aria-label", `${o.name}, ${o.cost} de energía`), c.setAttribute("aria-pressed", "false"), c.style.setProperty("--accent", o.color), c.innerHTML = `<div class="card-art" style="${this.artStyle(i)}"></div><div class="card-gloss"></div><div class="card-name">${o.name}</div><span class="card-cost">${o.cost}</span><div class="card-cooldown"></div><span class="card-key">${A.indexOf(i)+1}</span>`, c.addEventListener("click", () => this.actions.select(i)), a.append(c), this.cardElements.set(i, c)
        }
        const e = t.querySelector("#walls");
        for (let i = 0; i < 2; i++) {
            const o = i === 0 ? 1263 : 29,
                c = i === 0 ? 115 : 125,
                l = document.createElement("div");
            l.className = "gate-underlay", l.style.cssText = `left:109px;top:${o}px;width:726px;height:${c}px;background-position:-109px -590px;`, e.append(l);
            for (let r = 0; r < 5; r++) {
                const n = 109 + r * 145.2,
                    h = document.createElement("div");
                h.className = "gate-piece", h.dataset.side = String(i), h.dataset.segment = String(r), h.style.cssText = `left:${n}px;top:${o}px;width:146px;height:${c}px;background-position:-${n}px -${o}px;--fall-rotation:${r%2?12:-14}deg;`, h.innerHTML = '<svg class="gate-cracks" viewBox="0 0 145 125"><path d="m38 0 12 24-9 13 20 13-8 26 15 12-6 37M50 24l29 4 13 23 24 4M53 76l-25 7-7 22M92 51l-7 18 17 17 5 39"/></svg><div class="gate-damage"></div>', e.append(h), this.gatePieces.push(h)
            }
        }
        t.querySelector("#sound-btn").addEventListener("click", () => this.actions.sound()), t.querySelector("#pause-btn").addEventListener("click", () => this.actions.pause()), t.querySelector("#help-btn").addEventListener("click", () => {
            this.wasHelpPaused = this.modalKind === "pause", this.actions.pause(), this.showHelp()
        }), this.showHome(), this.resize(), new ResizeObserver(() => this.resize()).observe(this.stage)
    }
    actions;
    stage;
    game;
    canvas;
    cardElements = new Map;
    timer;
    energy;
    energyFill;
    modal;
    modalContent;
    toastEl;
    toastTimer = 0;
    gatePieces = [];
    selected = null;
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
    artStyle(t, s = 136 / 266) {
        return `background-size:${1536*s}px ${1024*s}px;background-position:${-w[t].artX*s}px ${-290*s}px;`
    }
    resize() {
        this.game.style.transform = `scale(${this.stage.getBoundingClientRect().width/940})`
    }
    get currentModal() {
        return this.modalKind
    }
    show(t, s = "") {
        this.modalKind = t, this.modal.classList.toggle("hidden", t === null), s && (this.modalContent.innerHTML = s), this.game.classList.toggle("in-menu", t === "home"), t !== null && window.setTimeout(() => this.modalContent.querySelector("button,input")?.focus({
            preventScroll: !0
        }), 50)
    }
    hide() {
        this.show(null)
    }
    showHome() {
        this.isOnline = !1, this.show("home", `<div class="brand-sigil">${$}</div><p class="eyebrow">ESTRATEGIA EN TIEMPO REAL</p><h1>EMBER<span>GATES</span></h1><div class="title-rule"><i></i><span>◇</span><i></i></div><p class="home-description">Cinco cartas. Una fortaleza.<br>El siguiente movimiento es tuyo.</p><button class="primary-button" id="start-battle"><span class="crossed">⚔</span> ENTRAR EN BATALLA <small>DUELO 1v1 CONTRA IA</small></button><div class="difficulty-picker"><span>DIFICULTAD</span><button data-difficulty="normal" class="active">Normal</button><button data-difficulty="hard">Veterano</button></div><button class="secondary-button" id="online-battle">DUELO CON UN AMIGO <span>↗</span></button><button class="text-button" id="home-help">Cómo jugar <span>→</span></button><p class="menu-footnote">Una arena abierta. Ningún lugar donde esconderse.</p>`), this.modalContent.querySelector("#start-battle").addEventListener("click", () => this.actions.start()), this.modalContent.querySelector("#online-battle").addEventListener("click", () => this.showRoom()), this.modalContent.querySelector("#home-help").addEventListener("click", () => this.showHelp());
        for (const t of this.modalContent.querySelectorAll("[data-difficulty]")) t.addEventListener("click", () => {
            this.modalContent.querySelector(".difficulty-picker .active")?.classList.remove("active"), t.classList.add("active"), this.actions.difficulty(t.dataset.difficulty)
        })
    }
    showPause(t = !1) {
        this.show("pause", `<p class="eyebrow">EMBER GATES</p><h2>${t?"Duelo en curso":"Toma un respiro"}</h2><p>${t?"La partida continúa para ambos jugadores.":"Tu ejército espera tus órdenes."}</p><button class="primary-button" id="resume">VOLVER A LA ARENA</button><button class="secondary-button" id="pause-help">CÓMO JUGAR</button><button class="text-button" id="leave">${t?"Abandonar duelo":"Volver al inicio"}</button>`), this.modalContent.querySelector("#resume").addEventListener("click", () => this.actions.resume()), this.modalContent.querySelector("#leave").addEventListener("click", () => this.actions.home()), this.modalContent.querySelector("#pause-help").addEventListener("click", () => {
            this.wasHelpPaused = !0, this.showHelp()
        })
    }
    showHelp() {
        const t = this.modalKind === "home";
        this.show("help", `<p class="eyebrow">EL ARTE DEL DUELO</p><h2>Tu primera batalla</h2><div class="help-steps"><p><b>01</b><span><strong>Elige tu carta</strong>Toca una de las cinco cartas. Cada una consume la energía indicada.</span></p><p><b>02</b><span><strong>Despliega con intención</strong>Toca tu mitad de la arena o arrastra la carta. Las flechas alcanzan cualquier lugar.</span></p><p><b>03</b><span><strong>Abre una brecha</strong>Protege a tus tropas y destruye la fortaleza rival. Al agotarse el tiempo gana la que conserve más vida.</span></p></div><div class="help-cards">${A.map(s=>`<div><div class="help-card-art" style="${this.artStyle(s,68/266)}"></div><b>${w[s].cost}</b><span>${w[s].name}</span></div>`).join("")}</div><p class="help-note">La energía se regenera. En el último minuto, ¡el doble!<br>Cada carta usada vuelve a la cola. Mira la carta siguiente.<br>Si hay empate: 45 segundos de muerte súbita.</p><button class="primary-button" id="help-back">ENTENDIDO</button>`), this.modalContent.querySelector("#help-back").addEventListener("click", () => {
            t ? this.showHome() : this.wasHelpPaused ? (this.wasHelpPaused = !1, this.showPause(this.isOnline)) : this.actions.resume()
        })
    }
    showRoom() {
        this.show("room", '<p class="eyebrow">JUEGA CON UN AMIGO</p><h2>Un duelo. Dos estrategas.</h2><p>Crea una sala o introduce el código de tu rival.<br>Ambos debéis abrir la misma dirección del juego.</p><button class="primary-button" id="create-room">CREAR SALA PRIVADA</button><div class="room-divider"><span>O ÚNETE A UNA SALA</span></div><form id="join-form"><label class="sr-only" for="room-code">Código de sala</label><input id="room-code" placeholder="CÓDIGO" autocomplete="off" maxlength="5" minlength="5" pattern="[A-Za-z0-9]{5}" required /><button class="secondary-button" type="submit">UNIRME AL DUELO</button></form><p class="room-feedback" id="room-feedback" role="status"></p><button class="text-button" id="room-back">Volver al inicio</button>'), this.modalContent.querySelector("#create-room").addEventListener("click", () => {
            this.roomFeedback("Conectando con la arena…"), this.actions.createRoom()
        }), this.modalContent.querySelector("#join-form").addEventListener("submit", t => {
            t.preventDefault();
            const s = this.modalContent.querySelector("#room-code");
            this.roomFeedback("Buscando a tu rival…"), this.actions.joinRoom(s.value.trim().toUpperCase())
        }), this.modalContent.querySelector("#room-back").addEventListener("click", () => this.actions.home())
    }
    roomFeedback(t) {
        const s = this.modalContent.querySelector("#room-feedback");
        s && (s.textContent = t)
    }
    waiting(t) {
        this.show("room", `<div class="brand-sigil small">${$}</div><p class="eyebrow">TU ARENA ESTÁ PREPARADA</p><h2>Invita a tu rival</h2><p>Comparte este código con tu amigo.</p><div class="room-code-display">${t}</div><button class="secondary-button" id="copy-code">COPIAR INVITACIÓN</button><p class="waiting-dots"><i></i><i></i><i></i> Esperando al segundo jugador</p><p class="help-note">El duelo empezará cuando entre tu rival.<br>En móvil: abre la dirección del servidor en tu red Wi-Fi.</p><button class="text-button" id="cancel-room">Cancelar</button>`), this.modalContent.querySelector("#copy-code").addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(`${location.origin}/?room=${t}`), this.toast("Invitación copiada")
            } catch {
                this.toast(`Código de sala: ${t}`)
            }
        }), this.modalContent.querySelector("#cancel-room").addEventListener("click", () => this.actions.home())
    }
    connected() {
        this.isOnline = !0, this.game.querySelector("#rival-mode").textContent = "SALA PRIVADA · 1v1", this.game.querySelector("#rival-name").textContent = "Estratega rival", this.hide()
    }
    showResult(t, s) {
        this.lastResult = t, this.lastView = s;
        const a = t.winner === s,
            e = t.winner === "draw",
            i = t.players[s];
        this.show("result", `<div class="brand-sigil result-sigil ${a?"win":""}">${$}</div><p class="eyebrow">${e?"UN DUELO A LA ALTURA":a?"LA ARENA ES TUYA":"CADA DUELO TE HACE MEJOR"}</p><h2 class="result-title">${e?"EMPATE":a?"VICTORIA":"DERROTA"}</h2><p>${e?"Ambas fortalezas han resistido.":a?"Tu estrategia ha abierto las puertas.":"La próxima decisión puede cambiarlo todo."}</p><div class="result-stats"><div><strong>${i.played}</strong><span>CARTAS</span></div><div><strong>${i.kills}</strong><span>BAJAS</span></div><div><strong>${Math.round(i.damage).toLocaleString("es")}</strong><span>DAÑO</span></div></div><button class="primary-button" id="again">${this.isOnline?"VOLVER AL INICIO":"OTRA BATALLA"}</button><button class="text-button" id="result-home">Volver al inicio</button>`), this.modalContent.querySelector("#again").addEventListener("click", () => this.isOnline ? this.actions.home() : this.actions.start()), this.modalContent.querySelector("#result-home").addEventListener("click", () => this.actions.home())
    }
    reset() {
        window.clearTimeout(this.resultTimer), this.lastEnergy = -1, this.lastTime = "", this.lastPhase = "", this.lastGateHealth = [-1, -1], this.eventId = 0, this.select(null), this.game.querySelector("#battle-announcement").textContent = "";
        for (const t of this.gatePieces) t.classList.remove("destroyed"), t.style.setProperty("--damage", "0");
        this.game.querySelector("#rival-mode").textContent = this.isOnline ? "SALA PRIVADA · 1v1" : "DUELO DE ENTRENAMIENTO", this.game.querySelector("#rival-name").textContent = this.isOnline ? "Estratega rival" : "Guardia Carmesí"
    }
    select(t, s = null) {
        this.selected = t;
        for (const [e, i] of this.cardElements) i.classList.toggle("selected", A.indexOf(e) === t), i.setAttribute("aria-pressed", String(A.indexOf(e) === t));
        const a = this.game.querySelector("#deploy-zone");
        a.classList.toggle("visible", s !== null), a.classList.toggle("spell-zone", s === "arrows"), this.game.querySelector("#selected-caption").textContent = s ? `${w[s].name.toUpperCase()} · ${s==="arrows"?"TOCA CUALQUIER PUNTO":"TOCA TU MITAD DE LA ARENA"}` : "ELIGE UNA CARTA · DESPLIÉGALA EN LA ARENA"
    }
    toast(t) {
        window.clearTimeout(this.toastTimer), this.toastEl.textContent = t, this.toastEl.classList.add("show"), this.toastTimer = window.setTimeout(() => this.toastEl.classList.remove("show"), 2500)
    }
    muted(t) {
        const s = this.game.querySelector("#sound-btn");
        s.classList.toggle("muted", t), s.setAttribute("aria-label", t ? "Activar sonido" : "Silenciar sonido")
    }
    connection(t) {
        const s = this.game.querySelector("#connection-status");
        s.textContent = t, s.classList.toggle("visible", !!t)
    }
    update(t, s) {
        const a = t.players[s],
            e = Math.floor(a.energy);
        this.lastEnergy !== e && (this.energy.textContent = String(e), this.energy.classList.remove("bump"), this.energy.offsetWidth, this.energy.classList.add("bump"), this.lastEnergy = e), this.energyFill.style.width = `${a.energy*10}%`, this.energyFill.classList.toggle("full", a.energy >= 9.99);
        const i = Math.max(0, Math.ceil(t.time)),
            o = `${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`;
        o !== this.lastTime && (this.timer.textContent = o, this.lastTime = o), this.timer.parentElement.classList.toggle("urgent", i <= 30 && t.phase === "playing"), this.game.querySelector("#overtime").textContent = t.overtime ? "MUERTE SÚBITA" : "", this.game.querySelector("#energy-rate").textContent = t.time <= 60 || t.overtime ? "×2 ENERGÍA" : "+1 / 2,3 s";
        for (const [n, h] of this.cardElements) {
            const p = a.hand[A.indexOf(n)];
            h.dataset.card !== p && (h.dataset.card = p, h.setAttribute("aria-label", `${w[p].name}, ${w[p].cost} de energía`), h.querySelector(".card-art").style.cssText = this.artStyle(p), h.querySelector(".card-name").textContent = w[p].name, h.querySelector(".card-cost").textContent = String(w[p].cost), h.style.setProperty("--accent", w[p].color), h.classList.remove("card-return"), h.offsetWidth, h.classList.add("card-return")), h.classList.toggle("unaffordable", a.energy < w[p].cost), h.classList.toggle("recharging", a.cooldowns[p] > 0), h.style.setProperty("--cooldown", String(a.cooldowns[p] / M.cardCooldown))
        }
        const c = a.next,
            l = this.game.querySelector("#next-art");
        l.dataset.card !== c && (l.style.cssText = this.artStyle(c, 76 / 266), l.dataset.card = c);
        for (const n of [0, 1]) {
            const h = n === 0 ? s : 1 - s,
                p = t.gates.filter(b => b.team === h),
                u = p.reduce((b, m) => b + m.hp, 0);
            if (u !== this.lastGateHealth[n]) {
                const b = n === 0 ? "own" : "enemy",
                    m = u / (M.segmentHp * 5);
                this.game.querySelector(`#${b}-hp`).textContent = String(Math.ceil(m * 100)), this.game.querySelector(`#${b}-health-fill`).style.strokeDashoffset = String(163.363 * (1 - m));
                const v = this.game.querySelector(`#${b}-fort-status`),
                    y = `${n===0?"Tu fortaleza":"Fortaleza rival"}: ${Math.ceil(u).toLocaleString("es")} de vida`;
                v.title = y, v.setAttribute("aria-label", y), v.classList.toggle("critical", m < .25), this.lastGateHealth[n] = u
            }
            for (const b of p) {
                const m = n * 5 + (s === 0 ? b.segment : 4 - b.segment),
                    v = this.gatePieces[m];
                v.classList.toggle("destroyed", b.hp <= 0), v.classList.toggle("struck", b.hurtTime > 0), v.style.setProperty("--damage", String(1 - b.hp / b.maxHp))
            }
        }
        const r = this.game.querySelector("#countdown");
        if (t.phase === "countdown") {
            const n = String(Math.ceil(t.countdown));
            r.textContent !== n && (r.textContent = n, r.classList.remove("tick"), r.offsetWidth, r.classList.add("tick")), r.classList.add("visible")
        } else r.classList.remove("visible", "tick"), r.textContent = "";
        if (t.phase === "playing" && this.lastPhase === "countdown" && this.toast("¡A la batalla!"), t.phase === "finished" && this.lastPhase !== "finished" && (this.resultTimer = window.setTimeout(() => this.showResult(t, s), 950)), t.phase === "playing" && t.time <= 60 && t.time > 59.8) {
            const n = this.game.querySelector("#battle-announcement");
            n.textContent || (n.textContent = "×2 ENERGÍA", n.classList.add("show"), setTimeout(() => n.classList.remove("show"), 2200))
        }
        this.lastPhase = t.phase
    }
    feedback(t, s, a) {
        for (const e of t.events)
            if (!(e.id <= this.eventId) && (this.eventId = e.id, (e.type === "gate-hit" || e.type === "hit") && e.amount && performance.now() - this.lastHitAt > 80)) {
                this.lastHitAt = performance.now();
                const i = a(e.x, 2.6, e.z, s),
                    o = this.damagePool.pop() ?? document.createElement("span");
                o.className = `damage-number ${e.type==="gate-hit"?"gate-number":""}`, o.textContent = `−${e.amount}`, o.style.left = `${i.x}px`, o.style.top = `${i.y}px`, this.game.querySelector("#floating-feedback").append(o), window.setTimeout(() => {
                    o.remove(), this.damagePool.push(o)
                }, 850)
            }
    }
    stats(t, s, a) {
        const e = this.game.querySelector("#performance");
        e.hidden || (e.textContent = `${t} FPS · ${s} DRAW · ${Math.round(a*100)}%`)
    }
    toggleStats() {
        const t = this.game.querySelector("#performance");
        t.hidden = !t.hidden
    }
}
class Jt {
    context = null;
    master = null;
    lastId = 0;
    lastHit = 0;
    muted = !1;
    async unlock() {
        this.context || (this.context = new AudioContext, this.master = this.context.createGain(), this.master.gain.value = this.muted ? 0 : .26, this.master.connect(this.context.destination)), this.context.state === "suspended" && await this.context.resume()
    }
    toggle() {
        return this.muted = !this.muted, this.master && this.master.gain.setTargetAtTime(this.muted ? 0 : .26, this.context.currentTime, .04), this.muted
    }
    reset() {
        this.lastId = 0
    }
    tone(t, s, a = "sine", e = .25, i, o = 0) {
        if (!this.context || !this.master || this.muted) return;
        const c = this.context.currentTime + o,
            l = this.context.createOscillator(),
            r = this.context.createGain();
        l.type = a, l.frequency.setValueAtTime(t, c), i && l.frequency.exponentialRampToValueAtTime(i, c + s), r.gain.setValueAtTime(.001, c), r.gain.exponentialRampToValueAtTime(e, c + .012), r.gain.exponentialRampToValueAtTime(.001, c + s), l.connect(r), r.connect(this.master), l.start(c), l.stop(c + s + .02), l.onended = () => {
            l.disconnect(), r.disconnect()
        }
    }
    noise(t, s, a) {
        if (!this.context || !this.master || this.muted) return;
        const e = this.context,
            i = e.currentTime,
            o = e.createBuffer(1, Math.ceil(e.sampleRate * t), e.sampleRate),
            c = o.getChannelData(0);
        for (let h = 0; h < c.length; h++) c[h] = (Math.random() * 2 - 1) * (1 - h / c.length);
        const l = e.createBufferSource(),
            r = e.createBiquadFilter(),
            n = e.createGain();
        l.buffer = o, r.type = "lowpass", r.frequency.value = a, n.gain.setValueAtTime(s, i), n.gain.exponentialRampToValueAtTime(.001, i + t), l.connect(r), r.connect(n), n.connect(this.master), l.start(), l.onended = () => {
            l.disconnect(), r.disconnect(), n.disconnect()
        }
    }
    select() {
        this.tone(680, .09, "sine", .18, 1e3)
    }
    error() {
        this.tone(130, .13, "triangle", .2, 90)
    }
    events(t) {
        for (const s of t)
            if (!(s.id <= this.lastId) && (this.lastId = s.id, s.type === "deploy" && (this.tone(240, .22, "sine", .3, 680), this.noise(.14, .12, 1300)), s.type === "attack" && s.kind !== "mage" && performance.now() - this.lastHit > 70 && (this.tone(s.kind === "knight" ? 170 : 460, .09, "triangle", .12, 100), this.lastHit = performance.now()), s.type === "hit" && performance.now() - this.lastHit > 60 && (this.noise(.07, .12, 3e3), this.lastHit = performance.now()), s.type === "fireball" && this.tone(120, .3, "sawtooth", .055, 500), s.type === "explosion" && (this.noise(.4, .35, 700), this.tone(80, .3, "sine", .4, 35)), s.type === "arrows" && this.noise(.4, .17, 4700), s.type === "arrow-impact" && this.noise(.2, .23, 1700), s.type === "gate-destroyed" && (this.noise(.8, .5, 750), this.tone(55, .5, "triangle", .45, 25)), s.type === "countdown" && this.tone(s.amount === 0 ? 880 : 440, .18, "sine", .24), s.type === "victory"))
                for (const [a, e] of [392, 494, 587, 784].entries()) this.tone(e, .7, "triangle", .22, void 0, a * .16)
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
            this.closedIntentionally = !1, this.connecting = new Promise((t, s) => {
                const a = new URL("/duel", location.href);
                a.protocol = location.protocol === "https:" ? "wss:" : "ws:";
                const e = new WebSocket(a);
                this.socket = e;
                const i = window.setTimeout(() => {
                    e.close(), s(new Error("El servidor de duelos no responde. Comprueba tu conexión e inténtalo de nuevo."))
                }, 6e3);
                e.addEventListener("open", () => {
                    clearTimeout(i), t()
                }), e.addEventListener("error", () => {
                    clearTimeout(i), s(new Error("No se pudo conectar con la arena. Inténtalo de nuevo en un momento."))
                }), e.addEventListener("message", o => {
                    try {
                        this.onMessage(JSON.parse(o.data))
                    } catch {
                        console.warn("Mensaje de sala no válido")
                    }
                }), e.addEventListener("close", () => {
                    clearTimeout(i), this.connecting = null, this.closedIntentionally || this.onDisconnect()
                })
            });
            try {
                await this.connecting
            } finally {
                this.connecting = null
            }
        }
    }
    send(t) {
        this.socket?.readyState === WebSocket.OPEN && this.socket.send(JSON.stringify(t))
    }
    async create() {
        await this.connect(), this.send({
            type: "create"
        })
    }
    async join(t) {
        await this.connect(), this.send({
            type: "join",
            code: t
        })
    }
    deploy(t, s, a, e) {
        this.send({
            type: "deploy",
            card: t,
            x: s,
            z: a,
            slot: e
        })
    }
    close() {
        this.closedIntentionally = !0, this.socket?.close(), this.socket = null, this.connecting = null
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
        this.sim.start(!1), this.sim.state.phase = "menu", this.state = this.sim.state, this.hud = new Wt(document.querySelector("#app"), {
            start: () => this.start(),
            resume: () => this.resume(),
            pause: () => this.pause(),
            home: () => this.home(),
            sound: () => {
                this.audio.unlock(), this.hud.muted(this.audio.toggle()), this.savePreferences()
            },
            createRoom: () => {
                this.createRoom()
            },
            joinRoom: s => {
                this.joinRoom(s)
            },
            select: s => {
                this.suppressClick || this.select(s)
            },
            difficulty: s => {
                this.difficulty = s
            }
        }), this.loadPreferences();
        try {
            this.render = new jt(this.hud.canvas, this.hud.stage)
        } catch (s) {
            this.hud.connection("No se ha podido iniciar WebGL 2. Activa la aceleración gráfica del navegador y vuelve a cargar."), console.error(s);
            return
        }
        this.ready = !0, this.hud.canvas.addEventListener("webglcontextlost", s => {
            s.preventDefault(), this.paused = !0, this.hud.connection("Recuperando el contexto gráfico…")
        }), this.hud.canvas.addEventListener("webglcontextrestored", () => {
            this.hud.connection(""), this.online ? this.paused = !1 : this.pause()
        }), new ResizeObserver(() => this.render.resize()).observe(this.hud.stage), this.bindInput(), this.bindNetwork(), this.hud.update(this.state, 0), document.addEventListener("visibilitychange", () => {
            this.last = performance.now(), this.accumulator = 0, document.hidden && !this.online && this.state.phase === "playing" && this.pause()
        }), window.addEventListener("pagehide", () => this.network.close()), requestAnimationFrame(s => this.frame(s)), this.render.warmup();
        const t = new URLSearchParams(location.search).get("room");
        if (t && /^[A-Z2-9]{5}$/.test(t)) {
            this.hud.showRoom();
            const s = document.querySelector("#room-code");
            s && (s.value = t)
        }
        Object.defineProperty(window, "__EMBER__", {
            value: {
                get state() {
                    return H.state
                },
                get metrics() {
                    return {
                        fps: H.render.fps,
                        drawCalls: H.render.drawCalls,
                        quality: H.render.quality
                    }
                }
            },
            configurable: !0
        })
    }
    loadPreferences() {
        try {
            const t = JSON.parse(localStorage.getItem("ember-settings") ?? "{}");
            t.muted && (this.audio.muted = !0, this.hud.muted(!0)), t.haptics === !1 && (this.haptics = !1)
        } catch {}
    }
    savePreferences() {
        try {
            localStorage.setItem("ember-settings", JSON.stringify({
                muted: this.audio.muted,
                haptics: this.haptics
            }))
        } catch {}
    }
    vibrate(t) {
        this.haptics && navigator.vibrate && navigator.vibrate(t)
    }
    start() {
        this.ready && (this.network.close(), this.online = !1, this.viewTeam = 0, this.paused = !1, this.selected = null, this.sim = new X(1, this.difficulty), this.sim.start(), this.state = this.sim.state, this.accumulator = 0, this.last = performance.now(), this.hud.reset(), this.hud.hide(), this.hud.connection(""), this.render.effects.reset(), this.render.clearPreview(), this.audio.reset(), this.audio.unlock())
    }
    home() {
        this.network.close(), this.online = !1, this.viewTeam = 0, this.paused = !0, this.sim = new X, this.sim.start(!1), this.sim.state.phase = "menu", this.state = this.sim.state, this.selected = null, this.render.clearPreview(), this.render.effects.reset(), this.hud.reset(), this.hud.connection(""), this.hud.showHome(), this.hud.update(this.state, 0)
    }
    pause() {
        this.state.phase === "menu" || this.state.phase === "finished" || (this.online || (this.paused = !0), this.render.clearPreview(), this.hud.showPause(this.online))
    }
    resume() {
        this.paused = !1, this.accumulator = 0, this.last = performance.now(), this.hud.hide(), this.audio.unlock()
    }
    select(t) {
        if (this.hud.currentModal !== null || this.state.phase !== "playing") return;
        this.selectedSlot = A.indexOf(t);
        const s = this.state.players[this.viewTeam].hand[this.selectedSlot];
        this.selected = s, this.hud.select(this.selectedSlot, s), this.audio.select(), this.vibrate(8), this.state.players[this.viewTeam].energy < w[s].cost && this.hud.toast(`Necesitas ${w[s].cost} de energía para ${w[s].name.toLowerCase()}`)
    }
    deploy(t, s) {
        if (this.hud.currentModal !== null || this.state.phase !== "playing") return;
        if (!this.selected) {
            this.hud.toast("Elige una carta y toca tu mitad de la arena");
            return
        }
        const a = this.render.screenToWorld(t, s, this.viewTeam);
        if (!a) return;
        const e = this.selected;
        if (this.online) {
            if (Math.abs(a.x) > 8.9 || Math.abs(a.z) > 14.1) {
                this.hud.toast("Elige un punto dentro de la arena");
                return
            }
            if (e !== "arrows" && (this.viewTeam === 0 ? a.z < .25 : a.z > -.25)) {
                this.hud.toast("Despliega tus tropas en tu mitad de la arena"), this.audio.error();
                return
            }
            if (this.state.players[this.viewTeam].energy < w[e].cost) {
                this.hud.toast(`Necesitas ${w[e].cost} de energía`), this.audio.error();
                return
            }
            this.network.deploy(e, a.x, a.z, this.selectedSlot), this.vibrate(18)
        } else {
            const i = this.sim.deploy({
                team: this.viewTeam,
                card: e,
                x: a.x,
                z: a.z,
                slot: this.selectedSlot
            });
            if (!i.ok) {
                this.hud.toast(i.reason), this.audio.error(), this.vibrate([10, 35, 10]);
                return
            }
            this.render.effects.events(this.state.events, this.viewTeam), this.audio.events(this.state.events), this.vibrate(18)
        }
        this.selected = null, this.selectedSlot = null, this.hud.select(null), this.render.clearPreview()
    }
    preview(t, s) {
        if (!this.selected || this.state.phase !== "playing" || this.hud.currentModal !== null) return;
        const a = this.render.screenToWorld(t, s, this.viewTeam);
        if (!a) return;
        const e = w[this.selected],
            i = Math.abs(a.x) < 8.9 && Math.abs(a.z) < 14.1 && (this.selected === "arrows" || (this.viewTeam === 0 ? a.z >= .25 : a.z <= -.25)) && this.state.players[this.viewTeam].energy >= e.cost;
        this.render.setPreview(a.x, a.z, this.selected === "arrows" ? 2.5 : e.count > 1 ? 1.1 : .75, i, this.viewTeam)
    }
    bindInput() {
        let t = null;
        for (const [s, a] of this.hud.cardElements) a.addEventListener("pointerdown", e => {
            this.hud.currentModal !== null || this.state.phase !== "playing" || (t = {
                x: e.clientX,
                y: e.clientY,
                id: e.pointerId,
                card: s,
                moved: !1
            }, a.setPointerCapture(e.pointerId), this.select(s))
        }), a.addEventListener("pointermove", e => {
            !t || t.id !== e.pointerId || (Math.hypot(e.clientX - t.x, e.clientY - t.y) > 8 && (t.moved = !0), t.moved && this.preview(e.clientX, e.clientY))
        }), a.addEventListener("pointerup", e => {
            if (!t) return;
            const i = t.moved;
            t = null, i && (this.suppressClick = !0, this.deploy(e.clientX, e.clientY), setTimeout(() => this.suppressClick = !1, 50)), a.hasPointerCapture(e.pointerId) && a.releasePointerCapture(e.pointerId)
        }), a.addEventListener("pointercancel", () => {
            t = null, this.render.clearPreview()
        });
        this.hud.canvas.addEventListener("pointerdown", s => {
            this.preview(s.clientX, s.clientY)
        }), this.hud.canvas.addEventListener("pointerup", s => this.deploy(s.clientX, s.clientY)), this.hud.canvas.addEventListener("pointermove", s => this.preview(s.clientX, s.clientY)), this.hud.canvas.addEventListener("pointerleave", () => {
            t || this.render.clearPreview()
        }), window.addEventListener("keydown", s => {
            if (s.target instanceof HTMLInputElement) return;
            const a = Number(s.key) - 1;
            if (a >= 0 && a < 5 && (s.preventDefault(), this.select(A[a])), s.key === "Escape" && (s.preventDefault(), this.hud.currentModal === "pause" ? this.resume() : this.hud.currentModal === null && this.pause()), s.key.toLowerCase() === "f" && this.hud.toggleStats(), s.key === "Tab" && this.hud.currentModal !== null) {
                const e = Array.from(document.querySelectorAll("#modal-content button,#modal-content input")),
                    i = e[0],
                    o = e.at(-1);
                s.shiftKey && document.activeElement === i ? (s.preventDefault(), o?.focus()) : !s.shiftKey && document.activeElement === o && (s.preventDefault(), i?.focus())
            }
        })
    }
    async createRoom() {
        this.audio.unlock();
        try {
            await this.network.create()
        } catch (t) {
            this.hud.roomFeedback(t.message)
        }
    }
    async joinRoom(t) {
        this.audio.unlock();
        try {
            await this.network.join(t)
        } catch (s) {
            this.hud.roomFeedback(s.message)
        }
    }
    bindNetwork() {
        this.network.onMessage = t => {
            if (t.type === "room" && (this.viewTeam = t.team, this.hud.waiting(t.code)), t.type === "start" && (this.online = !0, this.paused = !1, this.viewTeam = t.team, this.networkTick = -1, this.selected = null, this.hud.connected(), this.hud.reset(), this.render.effects.reset(), this.audio.reset(), this.hud.connection("")), t.type === "state") {
                if (t.tick < this.networkTick) return;
                this.networkTick = t.tick, this.state = t.state, this.audio.events(this.state.events), this.render.effects.events(this.state.events, this.viewTeam)
            }
            t.type === "error" && (this.hud.roomFeedback(t.message), this.hud.toast(t.message)), t.type === "opponent-left" && (this.state.phase !== "finished" ? this.hud.connection("Tu rival ha abandonado la sala.") : this.hud.toast("Tu rival ha abandonado el duelo."))
        }, this.network.onDisconnect = () => {
            this.online && this.state.phase !== "finished" ? (this.paused = !0, this.hud.connection("Se ha perdido la conexión. Vuelve al inicio para crear otro duelo."), this.hud.showPause(!0)) : this.hud.currentModal === "room" && (this.hud.showRoom(), this.hud.roomFeedback("Conexión cerrada. Puedes crear o unirte a otra sala."))
        }
    }
    frame(t) {
        const s = Math.min(.1, (t - this.last) / 1e3);
        if (this.last = t, !this.paused && !this.online)
            for (this.accumulator += s; this.accumulator >= M.fixedStep;) this.sim.step(M.fixedStep), this.accumulator -= M.fixedStep, this.audio.events(this.state.events), this.render.effects.events(this.state.events, this.viewTeam), this.hud.feedback(this.state, this.viewTeam, (a, e, i, o) => this.render.project(a, e, i, o));
        this.render.render(this.state, s, this.viewTeam), this.uiAccumulator += s, this.uiAccumulator >= .065 && (this.uiAccumulator = 0, this.hud.update(this.state, this.viewTeam), this.online && this.hud.feedback(this.state, this.viewTeam, (a, e, i, o) => this.render.project(a, e, i, o)), this.hud.stats(this.render.fps, this.render.drawCalls, this.render.quality)), requestAnimationFrame(a => this.frame(a))
    }
}
const H = new Kt;