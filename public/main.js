const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, '../posts');
let postlist = [];

const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

const formatDate = date => {
  const datetimeArray = date.split('T');
  const dateArray = datetimeArray[0].split('-');
  const timeArray = datetimeArray[1].split(':');
  const month = dateArray[1];
  const monthName = months[dateArray[1]];
  const day = dateArray[2];
  const year = dateArray[0];
  const time = `${timeArray[0]}:${timeArray[1]}`;

  return {
    month: month,
    monthName: monthName,
    day: day,
    year: year,
    time: time,
  };
};

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log('Failed to list contents of directory: ' + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, 'utf8', (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach(line => {
              obj[line.split(': ')[0]] = line.split(': ')[1];
            });
            return obj;
          }
        };

        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join('\n');
        };
        const lines = contents.split('\n');
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });

        const content = parseContent({ lines, metadataIndices });
        const parsedDate = metadata.date
          ? formatDate(metadata.date)
          : new Date();
        const publishedDate = `${parsedDate['monthName']} ${parsedDate['day']}, ${parsedDate['year']}`;
        const datestring = `${parsedDate['year']}-${parsedDate['month']}-${parsedDate['day']}T${parsedDate['time']}:00`;
        const date = new Date(datestring);
        const timestamp = date.getTime() / 1000;
        post = {
          id: timestamp,
          title: metadata.title ? metadata.title : 'No title given',
          author: metadata.author ? metadata.author : 'No author given',
          date: publishedDate ? publishedDate : 'No date given',
          time: parsedDate['time'],
          thumbnail: metadata.thumbnail,
          content: content ? content : 'No content given',
          slug: metadata.slug ? metadata.slug : '404',
          tags: metadata.tags ? metadata.tags.split(',') : null,
        };
        postlist.push(post);
        ilist.push(i);
        if (ilist.length === files.length) {
          const sortedList = postlist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync('src/data/posts.json', data);
        }
      });
    });
  });
  return;
};

getPosts();
