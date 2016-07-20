import { User } from './user'

export const mockUser: User = {
  username: "pandypaw",
  password: "passwordy",
  firstname: "Kenneth",
  lastname: "Xu",
  email: "kenxu@gmail.com",
  notificationFrequency: 1,
  description: "I love eating and such.",
  assets: ["vehicle", "lifting"],
  locations: ["San Diego", "Houston", "Chicago"],
  image: "IMAGE",
  myTasks: [1, 5],
  participatingTasks: [2, 4],
  specificallyRequest: [3] // ON TIMEOUT: THROW AWAY, ELSE MOVE TO PARTICIPATING TASKS
}