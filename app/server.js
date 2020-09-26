const express = require('express')
const app = express()
const port = 3000

app.get('/sofas/:id', (req, res) => {
  res.send(getInfo(req.params.id))
})

app.get('/sofas', (req, res) => {
  res.send(sofas)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function getInfo(id) {
  let information = info.find(item => {
    if (item.id === id) return item;
  });

  return information ? information : info[0];
}

const info = [{
  id: 1,
  name: 'Диван Сидней',
  images: [
    {src: '/assets/images/info1.jpg'},
    {src: '/assets/images/info2.jpg'},
    {src: '/assets/images/info3.jpg'},
    {src: '/assets/images/info4.jpg'},
    {src: '/assets/images/info5.jpg'},
    {src: '/assets/images/info6.jpg'},
  ],
  description: [
    {
      text: 'Диван «Сидней» от украинской фабрики Триумф послужит вам отличным местом отдыха и днем, и ночью.' +
        ' Простота и лаконичность этой стильной и современной модели не оставит вас равнодушным.' +
        ' Диван отлично впишется в современный интерьер, а также станет украшением любой комнаты.'
    },
    {
      text: 'Модель имеет удобный механизм трансформации, превращающий диван в удобное спальное место.'
    },
    {
      text: 'Максимальный комфорт достигается, благодаря большим подушкам. ' +
        'Они наполнены современными экологически чистыми материалами.' +
        'Кроме того, внутри дивана расположился удобный и вместительный короб для белья.'
    },
    {
      text: 'Данная модель может быть изготовлена в различных тканях и цветах.' +
        ' Для просчета стоимости дивана в определённой ткани — пожалуйста обращайтесь к менеджерам.'
    },
    {
      text: 'Для максимально комфортного сна рекомендуем использовать топпер.'
    },
  ],
  specs: [
    {name: 'Габаритный размер, см.', value: '95х210'},
    {name: 'Размер спального места, см.', value: '145х195'},
    {name: 'Наполнение', value: 'пружинный блок Bonnel'},
    {name: 'Механизм трансформации', value: 'еврокнижка'},
    {name: 'Короб для белья', value: 'да'},
    {name: 'Гарантия', value: '12 месяцев'},
    {name: 'Производитель', value: 'Триумф'},
  ]
}];


const sofas = [
  {
    id: 1,
    name: 'Диван Сидней',
    imgPath: 'assets/images/step2/1.jpg'
  },
  {
    id: 2,
    name: 'Диван Айриш',
    imgPath: 'assets/images/step2/2.jpg'
  },
  {
    id: 3,
    name: 'Диван Фаворит',
    imgPath: 'assets/images/step2/3.jpg'
  },
  {
    id: 4,
    name: 'Диван Глория',
    imgPath: 'assets/images/step2/4.jpg'
  },
  {
    id: 5,
    name: 'Диван Фуджи',
    imgPath: 'assets/images/step2/5.jpg'
  },
  {
    id: 6,
    name: 'Диван Манхеттен',
    imgPath: 'assets/images/step2/6.jpg'
  },
  {
    id: 7,
    name: 'Диван Капучино',
    imgPath: 'assets/images/step2/7.jpg'
  },
  {
    id: 8,
    name: 'Диван Мокко',
    imgPath: 'assets/images/step2/8.jpg'
  },
  {
    id: 9,
    name: 'Диван Латте',
    imgPath: 'assets/images/step2/9.jpg'
  },
  {
    id: 10,
    name: 'Диван Оксфорд-3',
    imgPath: 'assets/images/step2/10.jpg'
  },
  {
    id: 11,
    name: 'Диван Лорд',
    imgPath: 'assets/images/step2/11.jpg'
  },
  {
    id: 12,
    name: 'Диван Прайм',
    imgPath: 'assets/images/step2/12.jpg'
  },
];
