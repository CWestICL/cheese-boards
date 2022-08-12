const { db } = require('../db');
const {User, Board, Cheese} = require('../models/index');
const seed = require('./seed');

describe('Model Associations', () => {

    beforeAll(async () => {
        await seed()
    })

    test('can load board with its cheeses', async () => {
        let b1 = await Board.findByPk(1, {include: Cheese});
        expect(b1.Cheeses[0] instanceof Cheese).toBe(true)
    });

    test('can load user with its boards', async () => {
        let u1 = await User.findByPk(1, {include: Board});
        expect(u1.Boards[0] instanceof Board).toBe(true)
    });

    test('can load user with its boards', async () => {
        let c1 = await Cheese.findByPk(1, {include: Board});
        expect(c1.Boards[0] instanceof Board).toBe(true)
    });

});
