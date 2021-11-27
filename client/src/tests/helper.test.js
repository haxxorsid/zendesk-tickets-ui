import { paginateTickets, formattedDate } from "../common/helper";
import tickets from './mockData/tickets'


test('Should format date to string', () => {
    const d = '2021-11-25T13:00:00Z'
    const output = formattedDate(d)
    expect(output).toEqual('Thu Nov 25 2021')
})

test('Should put tickets together in a groups of 3', () => {
    const pagesize = 3
    const action = paginateTickets(tickets, pagesize)
    console.log(action);

    expect(action).toEqual(
        [
            [{
                id: 1,
                description: "T1"
            },
            {
                id: 2,
                description: "T2"
            },
            {
                id: 3,
                description: "T3"
            }

            ],
            [{
                id: 4,
                description: "T4"
            }
            ]
        ]
    )
})