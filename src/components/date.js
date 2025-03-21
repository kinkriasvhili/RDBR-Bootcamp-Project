
export const formatDate = (isoString) => {
  const date = new Date(isoString);
  const weekdayEn = date.toLocaleDateString("en-US", { weekday: "long" });
  const weekdayGe = weekInGe(weekdayEn);
  return `${weekdayGe} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};




export function formatDateMont(date) {
  const months = [
    'იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 
    'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'
  ];

  const parsedDate = new Date(date);
  const day = parsedDate.getDate();
  const month = months[parsedDate.getMonth()];
  const year = parsedDate.getFullYear();

  return `${month} ${day}, ${year}`;
}

// Example usage:


function weekInGe(weekday) {
  switch (weekday.toLowerCase()) {
    case "sunday":
      return "კვირა";
    case "monday":
      return "ორშაბათი";
    case "tuesday":
      return "სამშაბათი";
    case "wednesday":
      return "ოთხშაბათი";
    case "thursday":
      return "ხუთშაბათი";
    case "friday":
      return "პარასკევი";
    case "saturday":
      return "შაბათი";
    default:
      return "";
  }
}
