export default function departmentName(task) {
  let departmentName = ""
  switch (task.department.name) {
    case "მედიის დეპარტამენტი":
      departmentName = "მედია"
    case "ადმინსტაციის დეპარტამენტი":
      departmentName = "ადმინისტრაცია"
    case "ადამიანური რესურსების დეპარტამენტი":
      departmentName = "რესურსები"
    case "ფინანსების დეპარტამენტი":
      departmentName = "ფინანსები"
    case "გაყიდვები და მარკეტინგის დეპარტამენტი":
      departmentName = "გაყიდ & მარკეტ"
    case "ლოჯოსტიკის დეპარტამენტი":
      departmentName = "ლოჯოსტიკა"
    case "ტექნოლოგიების დეპარტამენტი":
      departmentName = "ტექნოლოგია"
  }
  return departmentName;
}