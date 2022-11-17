/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */

export const getImages = async () => {
  const all_months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var i = 0;
  var images = [];
  var data = [];
  for (i; i < all_months.length; i++) {
    // for(let i of all_months){

    const response = await fetch(`/get/${all_months[i]}`);
    const json = await response.json();
    // console.log("json: ",json)
    const title = json.calendar_banner_text;
    const url = json.calendar_banner_url;
    // console.log(images[i])
    // var p = 0;
    // if (p % 2 == 0 || i == 0)
    images = images.concat(images.push({ title, url }));
  }
  // console.log("images2 ", images);
  for (i = 0; i < images.length; i++)
    if (i % 2 == 0 || i == 0) data.push(images[i]);

  console.log(" data  ", data);
  return data; // remove the extra cats
};
