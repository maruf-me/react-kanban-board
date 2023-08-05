import { uuid } from "../utility/randomID";
import { ITaskTypes } from "../interface/intex";

let data: ITaskTypes[] = [
  {
    id: uuid(),
    status: "open",
    dueDate: '2021-10-10',
    title: "Finish reading Intro to UI/UX",
    description: 'Finish reading Intro to UI/UX',
  },
];

const statuses = [
  {
    status: "open",
    icon: "⭕️"
  },
  {
    status: "in progress",
    icon: "🔆️"
  },
  {
    status: "done",
    icon: "✅"
  },
];

export { data, statuses };
