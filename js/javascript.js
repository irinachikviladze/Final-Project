$(document).ready(function(){
    
    //loadCategories();
    runAnimation();
    checkBook();
    runAnimationForSVG();
    changeForms();
    cartClicks();
    showMenu();
    if ($('.cart-page').length)
    {
        calculatePrice();
    }
  });
  /* BURGER ICON ANIMATION------------------------------*/

  function checkBook() {
    var index = window.location.search;
    index = index.replace('?id=', '');
      
    var data = {
        0: {
            item_title: 'The Hunger Games: The Special Edition (Hunger Games, Book One), Volume 1',
            item_author: 'Suzanne Collins',
            item_description: 'This Special Edition of The Hunger Games includes the most extensive interview Suzanne Collins has given since the publication of The Hunger Games; an absorbing behind-the-scenes look at the creation of the series; an engaging archival conversation between Suzanne Collins and YA legend Walter Dean Myers on writing about war; and a timeline of highlights from the first ten years of The Hunger Games. The Special Edition answers many questions fans have had over the years, and gives great insight into the creation of this era-defining work. In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.',
            image: 'image/books/bstseller1.jpg', 
            alt: '', 
            price: '15',
            title: ''
        },
        1: {
            item_title: 'The Handmaid s Tale',
            item_author: 'Margaret Atwood',
            item_description: 'Utterly compelling and terrifyingly real, The Handmaid s Tale is a classic work of feminist fiction and a vivid dystopia that speaks afresh to every new generation of readers. A chair, a table, a lamp. Above, on the white ceiling, a relief ornament in the shape of a wreath, and in the centre of it a blank space, plastered over, like the place in a face where the eye has been taken out. There must have been a chandelier, once. They’ve removed anything you could tie a rope to. Offred lives in The Republic of Gilead. To some, it is a utopian vision of the future, a place of safety, a place where everyone has a purpose, a function. But The Republic of Gilead offers Offred only one function: to breed. If she deviates, she will, like dissenters, be hanged at the wall or sent out to die slowly of radiation sickness. But even a repressive state cannot obliterate desire - neither Offred s nor that of the two men on which her future hangs. Brilliantly conceived and executed, The Handmaid s Tale is a bold evocation of twenty-first century America that gives full rein to Margaret Atwood s devastating irony, wit and astute perception. Are you ready to return to Gilead? Don t miss the year s most anticipated book. ',
            image: 'image/books/bstseller2.jpg', 
            alt: '', 
            price: '12.00',
            title: ''
        },
	2: {
            item_title: 'The Prince',
            item_author: 'Niccolo Machiavelli ',
            item_description: 'Niccolo Machiavelli provides a remarkably uncompromising picture of the true nature of power, no matter what era or by whom it is exercised. Part of the Macmillan Collector s Library, a series of stunning, clothbound, pocket-sized classics with gold-foiled edges and ribbon markers. These beautiful books make perfect gifts or a treat for any book lover. This edition features an afterword by Oliver Francis. Drawing on examples from the ancient Greeks and Romans and from Machiavelli\'s contemporaries, The Prince offers - some believed with satirical intent - advice on how a ruler should preserve his power, conduct and warfare, and maintain his reputation. Machiavelli not only influenced many of the great statesmen of his age, but was also one of the founding fathers of modern political thought. The Prince, written in 1513 and published in 1532, is one of the most famous pieces of writing of all time.',
            image: 'image/books/bstseller3.jpg', 
            alt: '', 
            price: '13',
            title: ''
        },
	3: {
            item_title: 'The Pearl Sister',
            item_author: 'Lucinda Riley ',
            item_description: "The Pearl Sister is the fourth book in the number one international bestselling Seven Sisters series by Lucinda Riley. CeCe D'Apliese has never felt she fitted in anywhere. Following the death of her father, the elusive billionaire Pa Salt - so-called by the six daughters he adopted from around the globe and named after the Seven Sisters star cluster - she finds herself at breaking point. Dropping out of art college, CeCe watches as Star, her beloved sister, distances herself to follow her new love, leaving her completely alone. In desperation, she decides to flee England and discover her past; the only clues she has are a black-and-white photograph and the name of a woman pioneer who lived in Australia over one hundred years ago. En-route to Sydney, CeCe heads to the one place she has ever felt close to being herself: the stunning beaches of Krabi, Thailand. There amongst the backpackers, she meets the mysterious Ace, a man as lonely as she is and whom she subsequently realizes has a secret to hide . . . A hundred years earlier, Kitty McBride, daughter of an Edinburgh clergyman, is given the opportunity to travel to Australia as the companion of the wealthy Mrs McCrombie. In Adelaide, her fate becomes entwined with Mrs McCrombie's family, including the identical, yet very different, twin brothers: impetuous Drummond, and ambitious Andrew, the heir to a pearling fortune. When CeCe finally reaches the searing heat and dusty plains of the Red Centre of Australia, she begins the search for her past. As something deep within her responds to the energy of the area and the ancient culture of the Aboriginal people, her creativity reawakens once more. With help from those she meets on her journey, CeCe begins to believe that this wild, vast continent could offer her something she never thought possible: a sense of belonging, and a home . . .",
            image: 'image/books/bstseller4.jpg', 
            alt: '', 
            price: '10',
            title: ''
        },
	10: {
            item_title: 'Lead Successful Projects',
            item_author: 'Antonio Nieto-Rodriguez',
            item_description: 'Are you struggling to juggle multiple projects? Do you often lose control of your budget? Does communicating your progress to the rest of your team cause you undue stress? Project management is an essential skill for anyone who needs to get things done in any organisation, and is absolutely critical for anyone leading strategic change. In Lead Successful Projects, the Penguin Business Expert guide, Antonio Nieto-Rodriguez introduces a simplified but strategic approach to project management developed over the last 20 years coaching executives, managers and MBAs. Learn how to break down your project into manageable elements, define smart goals and meet them in this concise and practical guide to project success.',
            image: 'image/books/newarrival1.jpg', 
            alt: '', 
            price: '20',
            title: ''
        },
	11: {
            item_title: '21 Lessons for the 21st Century',
            item_author: 'Yuval Noah Harari ',
            item_description: "The future is here. Learn to live in it. In twenty-one bite-sized lessons, Yuval Noah Harari explores what it means to be human in an age of bewilderment. How can we protect ourselves from nuclear war, ecological cataclysms and technological disruptions? What can we do about the epidemic of fake news or the threat of terrorism? What should we teach our children? Yuval Noah Harari takes us on a thrilling journey through today's most urgent issues. The golden thread running through his exhilarating new book is the challenge of maintaining our collective and individual focus in the face of constant and disorienting change. Are we still capable of understanding the world we have created? `Fascinating... compelling... [Harari] has teed up a crucial global conversation about how to take on the problems of the 21st century' Bill Gates, New York Times `Truly mind-expanding... Ultra-topical' Guardian `21 Lessons is, simply put, a crucial book' Adam Kay",
            image: 'image/books/newarrival2.jpg', 
            alt: '', 
            price: '22.00',
            title: ''
        },
	12: {
            item_title: 'The Duke in His Domain',
            item_author: 'Truman Capote',
            item_description: "Now Brando looked at people with assurance, and with what can only be called a pitying expression, as though he dwelt in spheres of enlightenment where they, to his regret, did not. This mesmerizing profile of an insecure, vulnerable young Marlon Brando, brooding in a Kyoto hotel during a break from filming, is a peerless piece of journalism. Penguin Modern: fifty new books celebrating the pioneering spirit of the iconic Penguin Modern Classics series, with each one offering a concentrated hit of its contemporary, international flavour. Here are authors ranging from Kathy Acker to James Baldwin, Truman Capote to Stanislaw Lem and George Orwell to Shirley Jackson; essays radical and inspiring; poems moving and disturbing; stories surreal and fabulous; taking us from the deep South to modern Japan, New York's underground scene to the farthest reaches of outer space.",
            image: 'image/books/newarrival3.jpg', 
            alt: '', 
            price: '32',
            title: ''
        },
	13: {
            item_title: 'Macmillan Alice Pack of Cards',
            item_author: 'Lewis Carroll ',
            item_description: "This fabulous pack of fifty-two large size Alice in Wonderland-themed playing cards, are perfect for all kinds of games. The iconic images, drawn by Sir John Tenniel, are taken from the original books, and include characters such as Alice, the Queen of Hearts, the Mad Hatter, Humpty Dumpty and the White Rabbit from Lewis Carroll's classic tales. Macmillan Alice Pack of Cards includes suggestions for card games suitable for younger children, and for the whole family to enjoy.",
            image: 'image/books/newarrival4.jpg', 
            alt: '', 
            price: '14',
            title: ''
        },
	14: {
            item_title: 'The Game Of Kings : The Lymond Chronicles Book One',
            item_author: 'Dorothy Dunnett ',
            item_description: "VOTED ONE OF BRITAIN'S FAVOURITE HISTORICAL NOVELS Before George R. R. Martin there was Dorothy Dunnett . . . PERFECT for fans of A Game of Thrones. 'She is a brilliant story teller, The Lymond Chronicles will keep you reading late into the night, desperate to know the fate of the characters you have come to care deeply about.' The Times Literary Supplement _____________ 'I despised men who accepted their fate. I shaped mine twenty times and had it broken twenty times in my hands' It is 1547 and, after five years imprisonment and exile far from his homeland, Francis Crawford of Lymond - scholar, soldier, rebel, nobleman, outlaw - has at last come back to Edinburgh. But for many in an already divided Scotland, where conspiracies swarm around the infant Queen Mary like clouds of midges, he is not welcome. Lymond is wanted for treason and murder, and he is accompanied by a band of killers and ruffians who will only bring further violence and strife. Is he back to foment rebellion? Does he seek revenge on those who banished him? Or has he returned to clear his name? No one but the enigmatic Lymond himself knows the truth - and no one will discover it until he is ready . . . 'A storyteller who could teach Scheherazade a thing or two about pace, suspense and imaginative invention'New York Times 'Melodrama of the most magnificent kind' The Guardian",
            image: 'image/books/newarrival5.jpg', 
            alt: '', 
            price: '14',
            title: ''
        },
	20: {
            item_title: 'The Grisha: Shadow and Bone : Book 1',
            item_author: 'Leigh Bardugo ',
            item_description: "*The Grishaverse will be coming to Netflix soon with Shadow and Bone, an original series!* Enter the Grishaverse with book one of the Shadow and Bone Trilogy by number one New York Times-bestselling author, Leigh Bardugo. Perfect for fans of Laini Taylor and Sarah J. Maas. Now with a stunning new cover and exclusive bonus material: The Demon in the Wood (a Darkling prequel story) and a Q&A with Leigh Bardugo. Soldier. Summoner. Saint. Orphaned and expendable, Alina Starkov is a soldier who knows she may not survive her first trek across the Shadow Fold - a swath of unnatural darkness crawling with monsters. But when her regiment is attacked, Alina unleashes dormant magic not even she knew she possessed. Now Alina will enter a lavish world of royalty and intrigue as she trains with the Grisha, her country's magical military elite - and falls under the spell of their notorious leader, the Darkling. He believes Alina can summon a force capable of destroying the Shadow Fold and reuniting their war-ravaged country, but only if she can master her untamed gift. As the threat to the kingdom mounts and Alina unlocks the secrets of her past, she will make a dangerous discovery that could threaten all she loves and the very future of a nation. Welcome to Ravka . . . a world of science and superstition where nothing is what it seems. Read all the books in the Grishaverse! The Shadow and Bone Trilogy (previously published as The Grisha Trilogy) Shadow and Bone Siege and Storm Ruin and Rising The Six of Crows Duology Six of Crows Crooked Kingdom The Language of Thorns: Midnight Tales and Dangerous Magic",
            image: 'image/books/fiction1.jpg', 
            alt: '', 
            price: '20',
            title: ''
        },
	21: {
            item_title: 'The Grisha:Siege and Storm Book 2',
            item_author: 'Leigh Bardugo',
            item_description: "*The Grishaverse will be coming to Netflix soon with Shadow and Bone, an original series!* Enter the Grishaverse with book one of the Shadow and Bone Trilogy by number one New York Times-bestselling author, Leigh Bardugo. Perfect for fans of Laini Taylor and Sarah J. Maas. Now with a stunning new cover and exclusive bonus material: The Demon in the Wood (a Darkling prequel story) and a Q&A with Leigh Bardugo. Soldier. Summoner. Saint. Orphaned and expendable, Alina Starkov is a soldier who knows she may not survive her first trek across the Shadow Fold - a swath of unnatural darkness crawling with monsters. But when her regiment is attacked, Alina unleashes dormant magic not even she knew she possessed. Now Alina will enter a lavish world of royalty and intrigue as she trains with the Grisha, her country's magical military elite - and falls under the spell of their notorious leader, the Darkling. He believes Alina can summon a force capable of destroying the Shadow Fold and reuniting their war-ravaged country, but only if she can master her untamed gift. As the threat to the kingdom mounts and Alina unlocks the secrets of her past, she will make a dangerous discovery that could threaten all she loves and the very future of a nation. Welcome to Ravka . . . a world of science and superstition where nothing is what it seems. Read all the books in the Grishaverse! The Shadow and Bone Trilogy (previously published as The Grisha Trilogy) Shadow and Bone Siege and Storm Ruin and Rising The Six of Crows Duology Six of Crows Crooked Kingdom The Language of Thorns: Midnight Tales and Dangerous Magic",
            image: 'image/books/fiction2.jpg', 
            alt: '', 
            price: '19',
            title: ''
        },
	22: {
            item_title: 'Shadow and Bone: : Ruin and Rising : Book 3',
            item_author: 'Leigh Bardugo',
            item_description: "The Grishaverse will be coming to Netflix soon with Shadow and Bone, an original series!* Enter the Grishaverse with book three of the Shadow and Bone Trilogy by number one New York Times-bestselling author Leigh Bardugo. Perfect for fans of Laini Taylor and Sarah J. Maas. Now with a stunning new cover and exclusive bonus material: The Demon in the Wood (a Darkling prequel story) and a Q&A with Leigh Bardugo. Soldier. Summoner. Saint.The nation's fate rests with a broken Sun Summoner, a disgraced tracker, and the shattered remnants of a once-great magical army. The Darkling rules from his shadow throne while a weakened Alina Starkov recovers from their battle under the dubious protection of the zealots who worship her as a Saint. Now her hopes lie with the magic of a long-vanished ancient creature and the chance that an outlaw prince still survives. As her allies and enemies race toward war, only Alina stands between her country and a rising tide of darkness that could destroy the world. To win this fight, she must seize a legend's power - but claiming the firebird may be her ruin.",
            image: 'image/books/fiction3.jpg', 
            alt: '', 
            price: '17',
            title: ''
        },
	23: {
            item_title: 'The Confession',
            item_author: 'Jessie Burton ',
            item_description: "Dazzlingly good, utterly engrossing . . . Without doubt one of the best novels of recent years' Elizabeth Day, author of How To Fail The sensational Sunday Times bestseller from Jessie Burton, the million-copy bestselling author of The Miniaturist and The Muse. One winter's afternoon on Hampstead Heath in 1980, Elise Morceau meets Constance Holden and quickly falls under her spell. Connie is bold and alluring, a successful writer whose novel is being turned into a major Hollywood film. Elise follows Connie to LA, a city of strange dreams and swimming pools and late-night gatherings of glamorous people. But whilst Connie thrives on the heat and electricity of this new world where everyone is reaching for the stars and no one is telling the truth, Elise finds herself floundering. When she overhears a conversation at a party that turns everything on its head, Elise makes an impulsive decision that will change her life forever. Three decades later, Rose Simmons is seeking answers about her mother, who disappeared when she was a baby. Having learned that the last person to see her was Constance Holden, a reclusive novelist who withdrew from public life at the peak of her fame, Rose is drawn to the door of Connie's imposing house in search of a confession . . . From the million-copy bestselling author of The Miniaturist and The Muse, The Confession is a luminous, powerful and deeply moving novel about secrets and storytelling, motherhood and friendship, and how we lose and find ourselves.",
            image: 'image/books/fiction4.jpg', 
            alt: '', 
            price: '10',
            title: ''
        },
	24: {
            item_title: 'After the Quake',
            item_author: 'Haruki Murakami',
            item_description: "For the characters in after the quake, the Kobe earthquake is an echo from a past they buried long ago. Satsuki has spent thirty years hating one man: did her desire for revenge cause the earthquake? Miyake left his family in Kobe to make midnight bonfires on a beach hundreds of miles away. Fourteen-year-old Sala has nightmares that the Earthquake Man is trying to stuff her inside a little box. Katagiri returns home to find a giant frog in his apartment on a mission to save Tokyo from a massive burrowing worm. 'When he gets angry, he causes earthquakes,' says Frog. 'And right now he is very, very angry.",
            image: 'image/books/fiction5.jpg', 
            alt: '', 
            price: '15',
            title: ''
        },
	40: {
            item_title: 'Macmillan English: 1 Language Book',
            item_author: 'Louis Fidge , Mary Bowen , Liz Hocking , Wendy Wren , Printha Ellis',
            item_description: "The Macmillan English Language Book gives pupils the opportunity to work through basic skills such as reading, comprehension, sentence and language building, grammar, listening, phonics, spelling and class writing. Revision pages reinforce material already learnt.",
            image: 'image/books/edu1.jpg', 
            alt: '', 
            price: '30',
            title: ''
        },
	41: {
            item_title: 'Macmillan English: 3 Language Book',
            item_author: 'Louis Fidge , Mary Bowen , Liz Hocking , Wendy Wren , Printha Ellis',
            item_description: 'The Macmillan English Language Book gives pupils the opportunity to work through basic skills such as reading, comprehension, sentence and language building, grammar, listening, phonics, spelling and class writing. Revision pages reinforce material already learnt.',
            image: 'image/books/edu2.jpg', 
            alt: '', 
            price: '30',
            title: ''
        },
	42: {
            item_title: 'Macmillan English: 2 Language Book',
            item_author: 'Louis Fidge , Mary Bowen , Liz Hocking , Wendy Wren , Printha Ellis ',
            item_description: 'The Macmillan English Language Book gives pupils the opportunity to work through basic skills such as reading, comprehension, sentence and language building, grammar, listening, phonics, spelling and class writing. Revision pages reinforce material already learnt.',
            image: 'image/books/edu3.jpg', 
            alt: '', 
            price: '30',
            title: ''
        },
	43: {
            item_title: 'Macmillan English: 4 Language Book',
            item_author: 'Louis Fidge , Mary Bowen , Liz Hocking , Wendy Wren , Printha Ellis',
            item_description: 'The Macmillan English Language Book gives pupils the opportunity to work through basic skills such as reading, comprehension, sentence and language building, grammar, listening, phonics, spelling and class writing. Revision pages reinforce material already learnt.',
            image: 'image/books/edu4.jpg', 
            alt: '', 
            price: '30',
            title: ''
        },
	44: {
            item_title: 'Macmillan English: 5 Language Book',
            item_author: 'Louis Fidge , Mary Bowen , Liz Hocking , Wendy Wren , Printha Ellis',
            item_description: 'The Macmillan English Language Book gives pupils the opportunity to work through basic skills such as reading, comprehension, sentence and language building, grammar, listening, phonics, spelling and class writing. Revision pages reinforce material already learnt.',
            image: 'image/books/edu5.jpg', 
            alt: '', 
            price: '30',
            title: ''
        },
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

    var data = data[index-1];

    

    if (!data) return;

    $('.booktitle').find('h1').html(data.item_title);
    $('.author-name').html(data.item_author);
    $('.description').find('p').html(data.item_description);
    $('.price').find('h3').html(data.price + ' USD');
    $('.bookcover').attr('src', data.image);

    console.log(data.item_title);

    document.title = data.item_title + ' | BookStorm.com - Book';

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
    if (typeof bodymovin === 'undefined')
    {
        return false;
    }

    bodymovin.loadAnimation({
      container:document.getElementById('col-2'),
      renderer:'svg',
      loop:true,
      autoplay:true,
      path:'https://assets1.lottiefiles.com/packages/lf20_ivMD4s.json',
      
    });
  }

function changeForms()
{
    $('.form-btn').find('span').off('click').on('click', function()
    {
        $('span').removeClass('active');
        $(this).addClass('active');
        var form = $(this).attr('form');
        if (form === 'login-form')
        {
            $('#login-form').css('display', 'block');
            $('#signup-form').css('display', 'none');
        }
        else
        {
            $('#login-form').css('display', 'none');
            $('#signup-form').css('display', 'block');
        }
    });
}

function calculatePrice()
{
    var dollars = 0;
    var percentage = 3;
    $('.cart-price').each(function(index, price){
        dollars += parseInt($(price).html());
    });
    $('.subtotal').html('$' + dollars);
    $('.total').html('$' + (parseInt(dollars) + parseFloat(((dollars * percentage ) / 100).toFixed(3))));
    $('.tax').html('$' + parseFloat(((dollars * percentage ) / 100).toFixed(3)));
}

function cartClicks()
{
    $('.cart-info').find('a').off('click').on('click', function()
    {
        $(this).parent().parent().parent().parent().remove();
        return false;
    });

    $('.cart-page').find('input[type=number]').off('change').on('change', function()
    {
        var bookNumber = $(this).val();
        $(this).parent().parent().find('.cart-price').html(bookNumber * 10);
        calculatePrice();
    });
}

function showMenu()
{
    $('.show-main-menu').off('click').on('click', function()
    {
        var hasClass = $('.navigation2').hasClass('active');

        if (hasClass)
        {
            $('.navigation2').removeClass('active');
            $('.overflow-menu').removeClass('active');
        }
        else
        {
            $('.navigation2').addClass('active');
            $('.overflow-menu').addClass('active');
        }
    });

    $('.overflow-menu').off('click').on('click', function()
    {
        $('.navigation2').removeClass('active');
        $('.overflow-menu').removeClass('active');
    });
}
 