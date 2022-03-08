import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const users = [
  {
    username: 'hellbent',
    name: 'Jorge',
    createdAt: '2019-01-05T14:48:00.000Z',
    updatedAt: '2022-01-05T14:48:00.000Z',
    posts: {
      create: [
        {
          sub: 'tifu',
          createdAt: '2022-01-05T14:48:00.000Z',
          updatedAt: '2022-01-05T14:48:00.000Z',
          title: 'TIFU, by playing a game of “gay chicken” with my coworker.',
          body: 'Obligatory “this didn’t happen today” statement. It’s actually been an ongoing situation for the past few months, and yesterday I lost. \n For context, I work as a server for a café and many of my coworkers speak Spanish. I do not. They have this running joke that I’m a part of, or the butt of. One of them will tell me “Hey, go say some Spanish sentence to X”. I go and say it. That coworker looks at me like I kicked a puppy, and the whole kitchen erupts in laughter. Rinse and repeat. Seemed like they got a kick out of it, so why ruin their fun? \n Well, a few months ago, this joke sparked a game of what I can only describe as “gay chicken”. I was told to say something to a coworker we’ll call B. In the ensuing laughter, I was informed that I had said, “You are very handsome. I want to touch your butt”.',
          likes: 3400,
          imgUrl: null,
        },
      ],
    },
  },
  {
    username: 'boojis',
    name: 'Bruno',
    createdAt: '2018-01-05T14:48:00.000Z',
    updatedAt: '2022-01-05T14:48:00.000Z',
    posts: {
      create: [
        {
          sub: 'tifu',
          createdAt: '2021-01-05T14:48:00.000Z',
          updatedAt: '2022-01-05T14:48:00.000Z',
          title:
            "TIFU by not taking my toddler seriously when he said he is 'really itchy down there'",
          body: "My toddler just started potty training and has been a generally good about it. Like any kid he has phases where he cooperates, is proud of himself, and doing a good job learning while staying positive during accidents. My TIFU happened during pretty much the opposite - refusing to go when it was clear he needed to and we had to carry him to the potty kicking, having a total meltdown when he got pee on the seat or his clothes, crying at bedtime when we tell him he has to try, etc... \r We are doing our regular bedtime routine and we just got through the potty portion and he is telling me that he is really itchy down there. Because of his negative attitude lately, I dont take his discomfort seriously. I think he just needs to have a little rinse down there, so I get him into the bath, but as he straddles the side of the tub to climb in, he screams and is in clear agony. I immediately pick him up to comfort him and then take a closer look at the problem area only to find some diaper fuzz. So I pull on the fuzzy to try to get it out, but in so doing I tug on his penis and starts wailing again. My kid is very pain tolerant for a toddler, so I know this is serious. I talk him down for 5-10mins and explain that he is hurting and the only way to make it better is for me to look at it so I can help him. He says 'Ok, daddy' with a whimper and I pull back the skin and can see there is a long hair under the skin which was previously masked by the diaper fuzzy.",
          likes: 5423,
          imgUrl: '',
        },
      ],
    },
  },
  {
    username: 'pure',
    name: 'Juan',
    createdAt: '2017-01-05T14:48:00.000Z',
    updatedAt: '2022-01-05T14:48:00.000Z',
    posts: {
      create: [
        {
          sub: 'MadeMeSmile',
          createdAt: '2020-01-05T14:48:00.000Z',
          updatedAt: '2022-01-05T14:48:00.000Z',
          title: 'This is adorable!',
          body: '',
          likes: 13450,
          imgUrl: 'https://i.redd.it/dmm4s7unobl81.jpg',
        },
      ],
    },
  },
  {
    username: 'storman',
    name: 'Felipe',
    createdAt: '2016-01-05T14:48:00.000Z',
    updatedAt: '2022-01-05T14:48:00.000Z',
    posts: {
      create: [
        {
          sub: 'MadeMeSmile',
          createdAt: '2021-10-05T14:48:00.000Z',
          updatedAt: '2022-01-05T14:48:00.000Z',
          title: 'This is adorable!',
          body: '',
          likes: 1543,
          imgUrl: 'https://i.redd.it/9grbpquxzdl81.jpg',
        },
      ],
    },
  },
]

const comments = [
  {
    userId: 1,
    postId: 1,
    createdAt: '2022-03-03T14:48:00.000Z',
    updatedAt: '2022-01-05T14:48:00.000Z',
    body: 'George is playing it cool!',
    likes: 157,
  },
  {
    userId: 2,
    postId: 1,
    createdAt: '2022-03-03T14:48:00.000Z',
    updatedAt: '2022-01-05T14:48:00.000Z',
    body: "Dogs share one of our strongest scientific indicators of falling in love: oxytocin, a.k.a. “the love hormone.” Many studies, including a 2014 study from the University of Tokyo, have found that dogs' brains release oxytocin during positive interactions with human and dog partners.",
    likes: 13,
  },
  {
    userId: 2,
    postId: 2,
    createdAt: '2022-03-03T14:48:00.000Z',
    updatedAt: '2022-01-05T14:48:00.000Z',
    body: 'OMG! CUTE!!!',
    likes: 30,
  },
  {
    userId: 4,
    postId: 2,
    createdAt: '2022-03-03T14:48:00.000Z',
    updatedAt: '2022-01-05T14:48:00.000Z',
    body: 'She is one smitten kitten.',
    likes: 22,
  },
  {
    userId: 3,
    postId: 3,
    createdAt: '2022-03-03T14:48:00.000Z',
    updatedAt: '2022-01-05T14:48:00.000Z',
    body: 'This is the doggo version of that pec meme',
    likes: 194,
  },
  {
    userId: 2,
    postId: 4,
    createdAt: '2022-03-03T14:48:00.000Z',
    updatedAt: '2022-01-05T14:48:00.000Z',
    body: 'Swooning',
    likes: 50,
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of users) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  for (const c of comments) {
    const comment = await prisma.comment.create({
      data: {
        ...c,
      },
    })
    console.log(`Created comment with id: ${comment.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
