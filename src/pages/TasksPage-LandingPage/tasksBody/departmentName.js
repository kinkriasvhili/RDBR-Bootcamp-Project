export default function departmentName(task) {
  if (!task || !task.department || !task.department.name) return "";

  let departmentName = "";
  switch (task.department.name) {
    case "მედიის დეპარტამენტი":
      departmentName = "მედია";
      break;
    case "ადმინისტრაციის დეპარტამენტი":
      departmentName = "ადმინისტრაცია";
      break;
    case "ადამიანური რესურსების დეპარტამენტი":
      departmentName = "რესურსები";
      break;
    case "ფინანსების დეპარტამენტი":
      departmentName = "ფინანსები";
      break;
    case "გაყიდვები და მარკეტინგის დეპარტამენტი":
      departmentName = "გაყიდ & მარკეტ";
      break;
    case "ლოჯოსტიკის დეპარტამენტი":
      departmentName = "ლოჯოსტიკა";
      break;
    case "ტექნოლოგიების დეპარტამენტი":
      departmentName = "ტექნოლოგია";
      break;
    default:
      departmentName = "დეპარტამენტი"; 
  }

  return departmentName;
}
