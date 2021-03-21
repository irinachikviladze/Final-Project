$(document).ready(function(){
    
    //loadCategories();
    runAnimation();
    checkBook();
    runAnimationForSVG();
  });


  function checkBook() {
    var index = window.location.search;
    index = index.replace('?id=', '');
      
    var data = {
        0: {
            item_title: 'Book 1',
            item_author: 'Author',
            item_description: 'In this sequel to the phenomenally popular Harry Potter and the Sorcerer’s Stone, Harry returns to Hogwarts School of Witchcraft and Wizardry for his second year after a miserable summer with his Muggle (nonmagical) relatives. Once again, Harry’s school experiences are colored by encounters with genial ghosts and antagonistic teachers, by the rivalry between good-guy Gryffindor House and slimy Slytherin House, and by an ominous mystery to be solved involving Harry’s archenemy, the dark sorcerer Lord Voldemort. Once again, the attraction of Rowling’s traditional British school story is magnified tenfold by the fantasy elements superimposed upon it. The atmosphere Rowling creates is unique; the story whizzes along; Harry is an unassuming and completely sympathetic hero. But, truth to tell, you may feel as if you’ve read it all before. Rowling clearly hit on a winning formula with the first Harry Potter book; the second book — though still great fun — feels a tad, well, formulaic. MARTHA V. PARRAVANO',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '30',
            title: ''
        },
        1: {
            item_title: 'Book 2',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	2: {
            item_title: 'Book 3',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	3: {
            item_title: 'Book 4',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	4: {
            item_title: 'Book 5',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	5: {
            item_title: 'Book 6',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	6: {
            item_title: 'Book 7',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	7: {
            item_title: 'Book 8',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	8: {
            item_title: 'Book 9',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	9: {
            item_title: 'Book 10',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	10: {
            item_title: 'Book 11',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	11: {
            item_title: 'Book 12',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	12: {
            item_title: 'Book 13',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	13: {
            item_title: 'Book 14',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	14: {
            item_title: 'Book 15',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	15: {
            item_title: 'Book 16',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	16: {
            item_title: 'Book 17',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	17: {
            item_title: 'Book 18',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	18: {
            item_title: 'Book 19',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	19: {
            item_title: 'Book 20',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	20: {
            item_title: 'Book 21',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	21: {
            item_title: 'Book 22',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	22: {
            item_title: 'Book 23',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	23: {
            item_title: 'Book 24',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	24: {
            item_title: 'Book 25',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	25: {
            item_title: 'Book 26',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	26: {
            item_title: 'Book 27',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	27: {
            item_title: 'Book 28',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	28: {
            item_title: 'Book 29',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	29: {
            item_title: 'Book 30',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	30: {
            item_title: 'Book 31',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	31: {
            item_title: 'Book 32',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	32: {
            item_title: 'Book 33',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	33: {
            item_title: 'Book 34',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	34: {
            item_title: 'Book 35',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	35: {
            item_title: 'Book 36',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	36: {
            item_title: 'Book 37',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	37: {
            item_title: 'Book 38',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	38: {
            item_title: 'Book 39',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	39: {
            item_title: 'Book 40',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	40: {
            item_title: 'Book 41',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	41: {
            item_title: 'Book 42',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	42: {
            item_title: 'Book 43',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	43: {
            item_title: 'Book 44',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	44: {
            item_title: 'Book 45',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	45: {
            item_title: 'Book 46',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	46: {
            item_title: 'Book 47',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	47: {
            item_title: 'Book 48',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	48: {
            item_title: 'Book 49',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	49: {
            item_title: 'Book 50',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        },
	50: {
            item_title: 'Book 51',
            item_author: 'Author',
            item_description: 'Some description',
            image: 'image/books/9781509879502.jpg', 
            alt: '', 
            price: '50',
            title: ''
        }
        
    };

    // var resa = '';
    // for(var i=1;i<=50; i++) {
    //     var res = `\t${i}: {
    //         item_title: 'Book ${i+1}',
    //         item_author: 'Author',
    //         item_description: 'Some description',
    //         image: 'image/books/9781509879502.jpg', 
    //         alt: '', 
    //         price: '50',
    //         title: ''
    //     },\n`;
    //     resa += res;
    // }
    // console.log(resa);
    
    console.log(data[index-1]);

    var data = data[index-1];

    if (!data) return;

    $('.booktitle').find('h1').html(data.item_title);
    $('.author-name').html(data.item_author);
    $('.description').find('p').html(data.item_description);
    $('.price').find('h3').html(data.price + ' USD');
    $('.bookcover').attr('src', data.image);

    document.title = data.item_title;

  }

  function runAnimation() {
    if ($('.box-wraper').length == 0)
    {
        return;
    }

    $('.box-wraper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
            }
        ]
    });
  }

  function loadCategories() {
    var result = '';
    var data = {
        'Bestsellers' : [
            {
                image: 'image/books/9781509879502.jpg', alt: '', title: '',
            },
            {
                image: 'image/books/9781509813025.jpg', alt: '', title: '',
            },
            {
                image: 'image/books/9781509879502.jpg', alt: '', title: '',
            },
            {
                image: 'image/books/9781509879502.jpg', alt: '', title: '',
            },
        ],
        'New Arrivals' : [
            {
                image: 'image/books/9781509879502.jpg', alt: '', title: '',
            },
            {
                image: 'image/books/9781509879502.jpg', alt: '', title: '',
            },
            {
                image: 'image/books/9781509879502.jpg', alt: '', title: '',
            },
            {
                image: 'image/books/9781509879502.jpg', alt: '', title: '',
            },
        ]
    };

    for(var category in data) {
        var local_result = [
            '<section>',
                '<div class="section2">',
                    '<h2 class="item-category">',
                        category,
                    '</h2>',
                    '<div class="box-wraper">',
        ];

        data[category].forEach(function(el){
            local_result.push([
                '<div class="box-container">',
                    '<img src="' + el.image + '" alt="' + el.alt + '" title="' + el.title + '">',
                '</div>'
            ].join(''));
        });

        local_result.push([
                '</div>',
            '</div>',
        '</section>'
        ].join(''));

        result += local_result.join('');


    }
    console.log(result);
    $('.main-data').html(result);
    runAnimation();
  }
  function runAnimationForSVG()
  {
    var animation = bodymovin.loadAnimation({
      container:document.getElementById('col-2'),
      renderer:'svg',
      loop:true,
      autoplay:true,
      path:'https://assets1.lottiefiles.com/packages/lf20_ivMD4s.json',
      
  })
  }
 