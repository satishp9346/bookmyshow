import { createStore } from "redux";


const fulldate=new Date();
const dayArr=["SUN","MON","TUE","WED","THU","FRI","SAT"];
const monthArr=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  

const initialdata={
  popularCities:[
    {
      cityName:"Mumbai",
      cityImage:"https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
      selectedImage:"https://in.bmscdn.com/m6/images/common-modules/regions/mumbai-selected.png"
    },
    {
      cityName:"Delhi-NCR",
      cityImage:"https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png",
      selectedImage:"https://in.bmscdn.com/m6/images/common-modules/regions/ncr-selected.png"
    },
    {
      cityName:"Bengaluru",
      cityImage:"https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
      selectedImage:"https://in.bmscdn.com/m6/images/common-modules/regions/bang-selected.png"
    },
    {
      cityName:"Hyderabad",
      cityImage:"https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
      selectedImage:"https://in.bmscdn.com/m6/images/common-modules/regions/hyd-selected.png"
    },
    {
      cityName:"Ahmedabad",
      cityImage:"https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
      selectedImage:"https://in.bmscdn.com/m6/images/common-modules/regions/ahd-selected.png"
    },
    {
      cityName:"Chandigarh",
      cityImage:"https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
      selectedImage:"https://in.bmscdn.com/m6/images/common-modules/regions/chd-selected.png"
    },
    {
      cityName:"Chennai",
      cityImage:"https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
      selectedImage:"https://in.bmscdn.com/m6/images/common-modules/regions/chen-selected.png"
    },
    {
      cityName:"Pune",
      cityImage:"https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
      selectedImage:"https://in.bmscdn.com/m6/images/common-modules/regions/pune-selected.png"
    },
    {
      cityName:"Kolkata",
      cityImage:"https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
      selectedImage:"https://in.bmscdn.com/m6/images/common-modules/regions/kolk-selected.png"
    },
    {
      cityName:"Kochi",
      cityImage:"https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
      selectedImage:"https://in.bmscdn.com/m6/images/common-modules/regions/koch-selected.png"
    },   
  ],
  SelectedCityName:"Hyderabad",
  FooterData:[
    {
        header:"MOVIES NOW SHOWING IN ",
        movieList:["Hanu-Man ","|"," Fighter ","|"," Captain Miller(Telugu) ","|"," Ayalaan ","|"," Guntur Kaaram ","|"," Naa Saami Ranga ","|"," 105 Minuttess ","|"," Main Atla Hoon ","|"," Malaikottai Vaaliban ","|"," Merry Christmas"]
    },
    {
        header:"UPCOMING MOVIES IN ",
        movieList:["Next Goal Wins Sridevi Prasanna ","|"," Section 108 ","|"," Satyam Shivam ","|"," Supplier Shankara ","|"," LLB ","|"," Geafil ","|"," Yathabhava ","|"," Beautiful Wedding ","|"," Kismat "]
    },
    {
        header:"MOVIES BY GENRE",
        movieList:["Drama Movies ","|"," Action Movies ","|"," Thriller Movies ","|"," Adventure Movies ","|"," Comedy Movies ","|"," Fantasy Movies ","|"," Romantic Movies ","|"," Animation Movies ","|"," Musical Movies ","|"," Period Movies"]
    },
    {
        header:"MOVIES BY LANGUAGE",
        movieList:["Movies in Hindi ","|"," Movies in Telugu ","|"," Movies in English ","|"," Movies in Tamil ","|"," Movies in Chattisgarhi ","|"," Movies in Khasi ","|"," Movies in Tulu ","|"," Movies in Portuguese ","|"," Movies in English 70 ","|"," Movies in Rajasthani"]
    },
    {
        header:"SPORTS EVENTS IN ",
        movieList:["Running ","|"," Archery ","|"," Athletics ","|"," Badminton ","|"," Basketball ","|"," Baseball ","|"," Boat Race ","|"," Bowling ","|"," Boxing ","|"," Card Games"]
    },
    {
        header:"EVENTS IN TOP CITIES",
        movieList:["Events in Mumbai ","|"," Events in Delhi-NCR ","|"," Events in Chennai ","|"," Events in Bengaluru ","|"," Events in Hyderabad ","|"," Events in Pune ","|"," Events in Ahmedabad ","|"," Events in Kolkata ","|"," Events in Kochi"]
    },
    {
        header:"CINEMAS IN TOP CITIES",
        movieList:["Cinemas in Mumbai ","|"," Cinemas in Delhi-NCR ","|"," Cinemas in Chennai ","|"," Cinemas in Bengaluru ","|"," Cinemas in Hyderabad ","|"," Cinemas in Pune ","|"," Cinemas in Ahmedabad ","|"," Cinemas in Kolkata ","|"," Cinemas in Kochu"]
    },
    {
        header:"PLAYS IN TOP CITIES",
        movieList:["Plays in Mumbai ","|"," Plays in Delhi-NCR ","|"," Plays in Chennai ","|"," Plays in Bengaluru ","|"," Plays in Hyderabad ","|"," Plays in Pune ","|"," Plays in Ahmedabad ","|"," Plays in Kolkata ","|"," Plays in Kochi"]
    },
    {
        header:"ACTIVITIES IN TOP CITIES",
        movieList:["Things to do in Mumbai ","|"," Things to do in Delhi-NCR ","|"," Things to do in Chennal ","|"," Things to do in Bengaluru ","|"," Things to do in Hyderabad ","|"," Things to do in Pune ","|"," Things to do in Ahmedabad ","|"," Things to do in Kolkata ","|"," Things to do in Kochi"]
    },
    {
        header:"MOVIES NOW SHOWING",
        movieList:["Fighter ","|"," Hanu-Man ","|"," Singapore Saloon ","|"," Captain Miller (Telugu) ","|"," Bachelor Party ","|"," Blue Star ","|"," Malaikottal Vaaliban ","|"," Ayalaan ","|"," Upadhyaksha ","|"," Guntur Kaaram"]
    },
    {
        header:"COUNTRIES",
        movieList:["Indonesia Singapore ","|"," UAE ","|"," Sri Lanka ","|"," West Indies"]
    },
    {
        header:"HELP",
        movieList:["About Us ","|"," Contact Us ","|"," Current Opening ","|"," Press Release ","|"," Press Coverage ","|"," Sitemap ","|"," FAQs ","|"," Terms and Conditions ","|"," Privacy Policy"]
    },
    {
        header:"BOOKMYSHOW EXCLUSIVES",
        movieList:["Lollapalooza India ","|"," Superstar ","|"," BookASmile ","|"," Corporate Vouchers ","|"," Gift Cards ","|"," List My Show ","|"," Offers ","|"," Stream ","|"," Trailers"]
    },
    
  ],
  MovieData:[
    {
      location:"Hyderabad",
      ListofMovies:[
        {
          image:"../images/Eagle.png",
          mvname:"Eagle",
          mvtype:["Action","Drama","Thriller"],
          backgroundimage:"../images/Eaglebgimage.png",
          rating:"8.9/10",
          type:["2D"],
          languages:["Telugu"],
          review:"14.4K",
          currentStatus:"In cinemas",
          duration:"2h 38m",
          releaseDate:"9 Feb, 2024",
          certificate:"UA",
          about:"Eagle is a Telugu movie starring Ravi Teja and Anupama Parameswaran in the lead.",
          cast:[
            {
              img:"../Images/Eagle_cast_raviteja.png",
              Name:"Ravi Teja",
              proff:"Actor"
            },
            {
              img:"../Images/Eagle_cast_anupuma.png",
              Name:"Anupuma Parameswaran",
              proff:"Actor"
            },
            {
              img:"../Images/Eagle_cast_navdeep.png",
              Name:"Navdeep",
              proff:"Actor"
            },
            {
              img:"../Images/Eagle_cast_srinivas.png",
              Name:"Srinivas Avasarala",
              proff:"Actor"
            },
            {
              img:"../Images/Eagle_cast_kavya.png",
              Name:"Kavya Thapar",
              proff:"Actor"
            }
          ],
          crew:[
            {
              img:"../Images/Eagle_crew_karthik.png",
              Name:"Karthik Gattamneni",
              proff:"Director,Writer,Cinematographer"
            },
            {
              img:"../Images/Eagle_crew_prasad.png",
              Name:"TG Vishwa Prasad",
              proff:"Producer"
            },
            {
              img:"../Images/Eagle_crew_manibabu.png",
              Name:"Manibabu Karanam",
              proff:"Writer"
            },
            {
              img:"../Images/Eagle_crew_davzand.png",
              Name:"Davzand",
              proff:"Musician"
            },
            {
              img:"../Images/Eagle_crew_sujith.png",
              Name:"Sujith Kumar Kolli",
              proff:"Executive Producer"
            },
            {
              img:"../Images/Eagle_crew_karm.png",
              Name:"Karm Chawla",
              proff:"Cinematographer"
            },
            {
              img:"../Images/Eagle_crew_vivek.png",
              Name:"Vivek Kuchibhotla",
              proff:"Co-Producer"
            },
          ]
        },
        {
          image:"../images/hanu-man.png",
          mvname:"Hanu-Man",
          mvtype:["Action","Adventure","Fantasy"],
          backgroundimage:"../images/hanu_manbgimage.png",
          rating:"9.5/10",
          type:["2D", "ICE"],
          languages:["Telugu","Hindi","Malayalam", "Kannada","Tamil"],
          review:"364.4K",
          currentStatus:"In cinemas",
          duration:"2h 38m",
          releaseDate:"12 Jan, 2024",
          certificate:"UA",
          about:"Hanumanthu gets the powers of Hanuman in a distant village and fights for Anjanadri.",
          cast:[
            {
              img:"../Images/Hanuman_cast_teja.png",
              Name:"Teja Sajja",
              proff:"Actor"
            },
            {
              img:"../Images/Hanuman_cast_varalaxmi.png",
              Name:"Varalaxmi",
              proff:"Actor"
            },
            {
              img:"../Images/Hanuman_cast_amritha.png",
              Name:"Amritha Aiyer",
              proff:"Actor"
            },
            {
              img:"../Images/Hanuman_cast_vinay.png",
              Name:"Vinay Rai",
              proff:"Actor"
            },
            {
              img:"../Images/Hanuman_cast_kishore.png",
              Name:"Vennela Kishore",
              proff:"Actor"
            },
            {
              img:"../Images/Hanuman_cast_srinu.png",
              Name:"Getup Srinu",
              proff:"Actor"
            },  
          ],
          crew:[
            {
              img:"../Images/Hanuman_crew_prasanth.png",
              Name:"Prasanth Varma",
              proff:"Director"
            },
            {
              img:"../Images/Hanuman_crew_niranjan.png",
              Name:"K Niranjan Reddy",
              proff:"Producer"
            },
            {
              img:"../Images/Hanuman_crew_hari.png",
              Name:"Hari Gowra",
              proff:"Musician"
            },
            {
              img:"../Images/Hanuman_crew_krishna.png",
              Name:"Krishna Saurabh",
              proff:"Musician"
            },
            {
              img:"../Images/Hanuman_crew_dasaradhi.png",
              Name:"Dhasaradhi Sivendra",
              proff:"Cinematography"
            },
            {
              img:"../Images/Hanuman_crew_sai.png",
              Name:"Sai Babu Talari",
              proff:"Editor"
            }, 
          ]
        },
        {
          image:"../images/Ambajipeta.png",
          mvname:"Ambajipeta Marriage Band",
          mvtype:["Comedy","Drama"],
          backgroundimage:"../images/Ambajipetabgimage.png",
          rating:"8.9/10",
          type:["2D"],
          languages:["Telugu"],
          review:"14.4K",
          currentStatus:"In cinemas",
          duration:"2h 12m",
          releaseDate:"2 Feb, 2024",
          certificate:"UA",
          about:"Set in the early 2000s, in the quaint little village of Ambajipeta, twins Mallikarjuna Rao & Padmavati are leading happy-go-lucky lives. On their 25th birthday, an unexpected series of events turns their lives upside down.",
          cast:[
            {
              img:"../Images/Ambajipeta_cast_suhas.png",
              Name:"Suhas",
              proff:"Actor"
            },
            {
              img:"../Images/Ambajipeta_cast_shivani.png",
              Name:"Shivani Nagaram",
              proff:"Actor"
            },
            {
              img:"../Images/Ambajipeta_cast_goparaju.png",
              Name:"Goparaju Ramana",
              proff:"Actor"
            }
          ],
          crew:[
            {
              img:"../Images/Ambajipeta_crew_dushyanth.png",
              Name:"Dushyanth Katikaneni",
              proff:"Director"
            },
            {
              img:"../Images/Ambajipeta_crew_dheeeraj.png",
              Name:"Dheeraj Mogilneni",
              proff:"Producer"
            },
            {
              img:"../Images/Ambajipeta_crew_bunny.png",
              Name:"Bunny Vas",
              proff:"Producer"
            },
            {
              img:"../Images/Ambajipeta_crew_shekar.png",
              Name:"Shekar Chandra",
              proff:"Musician"
            },
            {
              img:"../Images/Ambajipeta_crew_wajid.png",
              Name:"Wajid Baig",
              proff:"Cinematographer"
            },
            {
              img:"../Images/Ambajipeta_crew_pavan.png",
              Name:"Kondati Pavan Kalyan",
              proff:"Editor"
            },
            {
              img:"../Images/Ambajipeta_crew_venkatesh.png",
              Name:"Venkatesh Maha",
              proff:"Presenter"
            },
          ]
        },
        {
          image:"../images/fighter.png",
          mvname:"Fighter",
          mvtype:["Action","Thriller"],
          backgroundimage:"../images/fighterbgimage.png",
          rating:"8.8/10",
          type:["2D", "IMAX 2D","ICE 3D","4DX 3D","3D","IMAX 3D"],
          languages:["Hindi"],
          review:"44.1K",
          currentStatus:"In cinemas",
          duration:"2h 47m",
          releaseDate:"25 Jan, 2024",
          certificate:"UA",
          about:"Top IAF aviators come together in the face of imminent danger, to form Air Dragons. Fighter unfolds their camaraderie, brotherhood and battles, internal and external.",
          cast:[
            {
              img:"../Images/Fighter_cast_hrithik.png",
              Name:"Hrithik Roshan",
              proff:"Actor"
            },
            {
              img:"../Images/Fighter_cast_deepika.png",
              Name:"Deepika Padukone",
              proff:"Actor"
            },
            {
              img:"../Images/Fighter_cast_anil.png",
              Name:"Anil Kapoor",
              proff:"Actor"
            },
            {
              img:"../Images/Fighter_cast_karan.png",
              Name:"Karan Singh Grover",
              proff:"Actor"
            },
            {
              img:"../Images/Fighter_cast_akshay.png",
              Name:"Akshay Oberoi",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/Fighter_crew_siddharth.png",
              Name:"Siddharth Anand",
              proff:"Director, Producer, Writer"
            },
            {
              img:"../Images/Fighter_crew_mamta.png",
              Name:"Mamta Anand",
              proff:"Producer"
            },
            {
              img:"../Images/Fighter_crew_ajit.png",
              Name:"Ajit Andhare",
              proff:"Producer"
            },
            {
              img:"../Images/Fighter_crew_anku.png",
              Name:"Anku Pande",
              proff:"Producer"
            },
            {
              img:"../Images/Fighter_crew_viacom.png",
              Name:"Viacom18 Motion Pictures",
              proff:"Producer"
            },
            {
              img:"../Images/Fighter_crew_ramon.png",
              Name:"Ramon Chibb",
              proff:"Producer, Writer, Screenplay"
            },
            {
              img:"../Images/Fighter_crew_kevin.png",
              Name:"Kevin Vaz",
              proff:"Producer"
            }, 
          ]
        },
        {
          image:"../images/teri_baaton.png",
          mvname:"Teri Baaton Mein Aisa Uljha Jiya",
          mvtype:["Comedy","Family","Romantic"],
          backgroundimage:"../images/teri_baatonbgimage.png",
          rating:"8.1/10",
          type:["2D"],
          languages:["Hindhi"],
          review:"2.5K",
          currentStatus:"In cinemas",
          duration:"2h 23m",
          releaseDate:"9 Feb, 2024",
          certificate:"UA",
          about:"Aryan meets the perfect girl, Sifra, in the US and falls in love with her only to discover later that `it`s an impossible love story`!",
          cast:[
            {
              img:"../Images/TeriBaaton_cast_shahid.png",
              Name:"Shahid Kapoor",
              proff:"Actor"
            },
            {
              img:"../Images/TeriBaaton_cast_kriti.png",
              Name:"Kriti Sanon",
              proff:"Actor"
            },
            {
              img:"../Images/TeriBaaton_cast_dharmendra.png",
              Name:"Dharmendra",
              proff:"Actor"
            },
            {
              img:"../Images/TeriBaaton_cast_dimple.png",
              Name:"Dimple kapadia",
              proff:"Actor"
            },
            {
              img:"../Images/TeriBaaton_cast_rakesh.png",
              Name:"Rakesh Bedi",
              proff:"Actor"
            },
            {
              img:"../Images/TeriBaaton_cast_rajesh.png",
              Name:"Rajesh Kumar",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/TeriBaaton_crew_amit.png",
              Name:"Amit Joshi",
              proff:"Director, Writer, Screenplay"
            },
            {
              img:"../Images/TeriBaaton_crew_dinesh.png",
              Name:"Dinesh Vijan",
              proff:"Producer"
            },
            {
              img:"../Images/TeriBaaton_crew_jyoti.png",
              Name:"Jyoti Deshpande",
              proff:"Producer"
            },
            {
              img:"../Images/TeriBaaton_crew_laxman.png",
              Name:"Laxman Utekar",
              proff:"Producer, Cinematographer"
            },
            {
              img:"../Images/TeriBaaton_crew_tanishk.png",
              Name:"Thanishk Bagchi",
              proff:"Musician"
            },
            {
              img:"../Images/TeriBaaton_crew_sachin-jigar.png",
              Name:"Sachin - Jigar",
              proff:"Musician, Background Score"
            },
            {
              img:"../Images/TeriBaaton_crew_manish.png",
              Name:"Manish Pradhan",
              proff:"Editor"
            },
          ]
        },
        {
          image:"../images/guntur_karam.png",
          mvname:"Guntur Kaaram",
          mvtype:["Action","Drama"],
          backgroundimage:"../images/guntur_kaarambgimage.png",
          rating:"6.7/10",
          type:["2D", "ICE"],
          languages:["Telugu"],
          review:"208.4K",
          currentStatus:"In cinemas",
          duration:"2h 39m",
          releaseDate:"12 Jan, 2024",
          certificate:"UA",
          about:"Ramana, a simpleton from Guntur, cares for no one and keeps himself always busy in his work. Suddenly, his identity drags him into a political conspiracy against Minister of Law and Justice, Vasundhara. He is left with two options - he either gives up that identity or fights against the conspirators.",
          cast:[
            {
              img:"../Images/GunturKaaram_cast_mahesh.png",
              Name:"Mahesh Babu",
              proff:"Actor"
            },
            {
              img:"../Images/GunturKaaram_cast_sreeleela.png",
              Name:"Sree Leela",
              proff:"Actor"
            },
            {
              img:"../Images/GunturKaaram_cast_meenakshi.png",
              Name:"Meenakshi Chaudhary",
              proff:"Actor"
            },
            {
              img:"../Images/GunturKaaram_cast_jagapathibabu.png",
              Name:"Jagapati Babu",
              proff:"Actor"
            },
            {
              img:"../Images/GunturKaaram_cast_ramya.png",
              Name:"Ramya Krishnan",
              proff:"Actor"
            },
            {
              img:"../Images/GunturKaaram_cast_prakash.png",
              Name:"Prakash Raj",
              proff:"Actor"
            },
            {
              img:"../Images/GunturKaaram_cast_kishore.png",
              Name:"Vennela Kishore",
              proff:"Actor"
            },            
          ],
          crew:[
            {
              img:"../Images/GunturKaaram_crew_trivikram.png",
              Name:"Thrivikram Srinivas",
              proff:"Director, Writer"
            },
            {
              img:"../Images/GunturKaaram_crew_radhakrishna.png",
              Name:"S. Radha Krishna",
              proff:"Producer"
            },
            {
              img:"../Images/GunturKaaram_crew_thaman.png",
              Name:"S. Thaman",
              proff:"Musician"
            },
            {
              img:"../Images/GunturKaaram_crew_manoj.png",
              Name:"Manoj Paramahamsa",
              proff:"Cinematographer"
            },
            {
              img:"../Images/GunturKaaram_crew_navin.png",
              Name:"Navin Nooli",
              proff:"Editor"
            },
          ]
        },
        {
          image:"../images/argylle.png",
          mvname:"Argylle",
          mvtype:["Action","Comedy"],
          backgroundimage:"../images/argyllebgimage.png",
          rating:"7.2/10",
          type:["2D","4DX","2D SCREEN X","IMAX 2D"],
          languages:["English","Hindi"],
          review:"2.4K",
          currentStatus:"In cinemas",
          duration:"1h 40m",
          releaseDate:"2 Feb, 2024",
          certificate:"UA",
          about:"Argylle, a super-spy, is drawn into a treasure hunt that takes him around the world. The secret agent's troubled past could jeopardise the mission.",
          cast:[
            {
              img:"../Images/Argylle_cast_henry.png",
              Name:"Henry Cavill",
              proff:"Actor"
            },
            {
              img:"../Images/Argylle_cast_bryce.png",
              Name:"Bryce Dallas Howard",
              proff:"Actor"
            },
            {
              img:"../Images/Argylle_cast_catherine.png",
              Name:"Catherine O'Hara",
              proff:"Actor"
            },
            {
              img:"../Images/Argylle_cast_dua.png",
              Name:"Dua Lipa",
              proff:"Actor"
            },
            {
              img:"../Images/Argylle_cast_johncena.png",
              Name:"John Cena",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/Argylle_crew_matthew.png",
              Name:"Matthew Vaughn",
              proff:"Director, Producer"
            },
            {
              img:"../Images/Argylle_crew_lorne.png",
              Name:"Lorne Balfe",
              proff:"Musician"
            },
            {
              img:"../Images/Argylle_crew_jason.png",
              Name:"Jason Fuchs",
              proff:"Producer, Screenplay"
            },
          ]
        },
        {
          image:"../images/kismat.png",
          mvname:"Kismat",
          mvtype:["Comedy","Crime"],
          backgroundimage:"../images/kismatbgimage.png",
          rating:"8.3/10",
          type:["2D"],
          languages:["Telugu"],
          review:"43.8K",
          currentStatus:"In cinemas",
          duration:"2h 8m",
          releaseDate:"2 Feb, 2024",
          certificate:"U",
          about:"An easy life of three seemingly ordinary, jobless engineers from a small village goes haywire as they try to hide an unwelcome money heist leaving only honesty on their side.",
          cast:[
            {
              img:"../Images/Kismat_cast_abhinav.png",
              Name:"Abhinav Gomatam",
              proff:"Actor"
            },
            {
              img:"../Images/Kismat_cast_srinivas.png",
              Name:"Srinivas Avasarala",
              proff:"Actor"
            },
            {
              img:"../Images/Kismat_cast_naresh.png",
              Name:"Naresh Agastya",
              proff:"Actor"
            },
            {
              img:"../Images/Kismat_cast_riya.png",
              Name:"Riya Suman",
              proff:"Actor"
            },
            {
              img:"../Images/Kismat_cast_ajay.png",
              Name:"Ajay Ghosh",
              proff:"Actor"
            },
            {
              img:"../Images/Kismat_cast_chandra.png",
              Name:"Chammak Chandra",
              proff:"Actor"
            },
            {
              img:"../Images/Kismat_cast_milkuri.png",
              Name:"Milkuri Gangavva",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/Kismat_crew_srinath.png",
              Name:"Srinath Badineni",
              proff:"Director, Writer"
            },
            {
              img:"../Images/Kismat_crew_comrade.png",
              Name:"Comrade Film Factory",
              proff:"Producer"
            },
            {
              img:"../Images/Kismat_crew_mark.png",
              Name:"Mark K. Robin",
              proff:"Musician"
            },
            {
              img:"../Images/Kismat_crew_vedharaman.png",
              Name:"Vedharaman Sankaran",
              proff:"Cinematographer"
            },
            {
              img:"../Images/Kismat_crew_viplav.png",
              Name:"Viplav Nyshadam",
              proff:"Editor"
            },          
          ]
        },
        {
          image:"../images/happy_ending.png",
          mvname:"Happy Ending",
          mvtype:["Comedy","Fantasy","Romantic"],
          backgroundimage:"../images/happy_endingbgimage.png",
          rating:"7.4/10",
          type:["2D"],
          languages:["Telugu"],
          review:"6.8K",
          currentStatus:"In cinemas",
          duration:"2h 26m",
          releaseDate:"2 Feb, 2024",
          certificate:"UA",
          about:"A 14-year-old boy gets cursed by a man of God because of a misunderstanding. After he grows up, his life takes a turn when he meets a girl.",
          cast:[
            {
              img:"../Images/HappyEnding_cast_yash.png",
              Name:"Yash Puri",
              proff:"Actor"
            },
            {
              img:"../Images/HappyEnding_cast_apoorva.png",
              Name:"Apoorva Rao",
              proff:"Actor"
            },
            {
              img:"../Images/HappyEnding_cast_ajay.png",
              Name:"Ajay Ghosh",
              proff:"Actor"
            },
            {
              img:"../Images/HappyEnding_cast_jhansi.png",
              Name:"Jhansi",
              proff:"Actor"
            },
            {
              img:"../Images/HappyEnding_cast_vishnu.png",
              Name:"Vishnu Oi",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/HappyEnding_crew_kowshik.png",
              Name:"Kowshik Bheemidi",
              proff:"Director"
            },
            {
              img:"../Images/HappyEnding_crew_sanjay.png",
              Name:"Sanjay Reddy",
              proff:"Producer"
            },
            {
              img:"../Images/HappyEnding_crew_anil.png",
              Name:"Anil Pallala",
              proff:"Producer"
            },
            {
              img:"../Images/HappyEnding_crew_yogesh.png",
              Name:"Yogesh Kumar Puri",
              proff:"Producer"
            },
            {
              img:"../Images/HappyEnding_crew_ravi.png",
              Name:"Ravi Nidamarthy",
              proff:"Musician"
            },
          ]
        },
        {
          image:"../images/game_on.png",
          mvname:"Game On",
          mvtype:["Drama","Thriller"],
          backgroundimage:"../images/game_onbgimage.png",
          rating:"8.8/10",
          type:["2D"],
          languages:["Telugu"],
          review:"4.8K",
          currentStatus:"In cinemas",
          duration:"2h 20m",
          releaseDate:"2 Feb, 2024",
          certificate:"UA",
          about:"A loser enters into a real time game to win which leads him to explore challenges and brings out the hidden secrets from his past.",
          cast:[
            {
              img:"../Images/GameOn_cast_geetanand.png",
              Name:"Geetanand",
              proff:"Actor"
            },
            {
              img:"../Images/GameOn_cast_neha.png",
              Name:"Neha Solanki",
              proff:"Actor"
            },
            {
              img:"../Images/GameOn_cast_madhoo.png",
              Name:"Madhoo Shah",
              proff:"Actor"
            },
            {
              img:"../Images/GameOn_cast_adithya.png",
              Name:"Adithya Menon",
              proff:"Actor"
            },
            {
              img:"../Images/GameOn_cast_subhalekha.png",
              Name:"Shubhalekha Sudhakar",
              proff:"Actor"
            },
            {
              img:"../Images/GameOn_cast_kireeti.png",
              Name:"Kireeti Damaraju",
              proff:"Actor"
            },
            {
              img:"../Images/GameOn_cast_yogi.png",
              Name:"Yogi Khathri",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/GameOn_crew_dayanand.png",
              Name:"Dayanand Gaddam",
              proff:"Director"
            },
            {
              img:"../Images/GameOn_crew_ravi.png",
              Name:"Ravi Kasturi",
              proff:"Producer"
            }
          ]
        }
      ],
      ListofTheaters:[
        {
          TheaterName:"AAA Cinemas: Ameerpet",
          timings:["01:10 PM","04:15 PM","07:25 PM","10:30 PM"],
          type:"LASER DOLBY ATMOS",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]],
          Gold:[[1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15],
                ["","","","","","","","","","","","","","","","","","","","","",""],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,""],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,""],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,""],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,""],
                ["","","","","","","","","","","","","","","","","","","","","",""],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],    
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],    
            ],
          BestSeller:[[[0]],
                      [[0],[4,5,6,7,8,9,10,11,12,13,15],[4,5,6,7,8,9,10,11,12],[1,2,4,5,11,12,13],[2,4,5,6,13],[0],[4,5,11,12,16],[11],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]
                    ],
          Alphabets:[['A'],['B','C','D','E','F',' ','G','H','I','J','K','L','M','N','O',' ','P','Q','R']]
        },
        {
          TheaterName:"Platinum Movie Cinemas: Ameerpet",
          timings:["03:15 PM","06:30 PM","10:00 PM"],
          type:"DOLBY 7.1",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]],
          Gold:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
                [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
                [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
                [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
                ["","","","","","","","","","","","","","","","","","","","","",""],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
                [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19]    
            ],
          BestSeller:[[[0]],
                      [[6,7,15],[2,11,17],[8,14,15,16],[2,3,8,16],[13],[6,13,15],[13,15],[3,4,13,15],[0],[3,17,20],[2,4,5,6,7,8,17,18,19,20],[1,2,5,6,7,8,12,13,14,15,16,17,18,20],[5,6,9,10,11,12,13,14,19],[10,11],[0],[0],[1,8,17,19],[1,2,3,4,5,6,7,9,10,14,17,18,20]]
                    ],
          Alphabets:[['A'],['B','C','D','E','F','G','H','I',' ','J','K','L','M','N','O','P','Q','R']]
        },
        {
          TheaterName:"PVR: Central Mall, Panjagutta",
          timings:["04:10 PM","07:30 PM","10:50 PM"],
          type:"DOLBY 7.1",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]],
          Gold:[[1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
                [1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
                [1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
                [1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
                [1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                ["","","","","","","","","","","","","","","","","","","",""],
                ["","","","","","","","","","","","","","","","","","","",""],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],    
            ],
          BestSeller:[[[0]],
                      [[1,2,3,4,5,6,7,8,9,10,11,12,13,18,19],[4,5,7,8,9,10,11,12],[1,2,4,5,11,12,13],[2,4,5,6,13],[9,10,11],[1,2,3,4,5,6,7,8,11,12,16],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]
                    ],
          Alphabets:[['R'],['Q','P','N','M','L','K',' ',' ','J','H','G','F','E','D','C','B','A']]
        },
        {
          TheaterName:"Asian Lakshmikala Cinepride: Moosapet",
          timings:["06:20 PM","09:35 PM"],
          type:"LALITHA",
          Recliner:[[1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]],
          Gold:[["","","","","","","","","","","","","","",1,2,3,4,5,6],
                ["","","","","","","","","","","","","","",1,2,3,4,5,6],
                ["","","","","","","","","","","","","","",1,2,3,4,5,6],
                ["","","","","","","","","","","","","","",1,2,3,4,5,6],
                ["",1,2,3,4,5,6,7,8,9,10,11,"","",12,13,14,15,16,17],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                ["","","","","","","","","","","","","","","","","","","",""],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                ["","","","","","","","","","","","","","","","","","","",""],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15,16,17,18],
              ],
          BestSeller:[[[1,2,5]],
                      [[0],[0],[3,4],[8,9,10,11],[5,6,7,8,9,10],[0],[7,8,9,10,11,12],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]
                    ],
          Alphabets:[['A'],['A','B','C','D','E','F',' ','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',' ','U','V','W']]
        },
        {
          TheaterName:"BR Hitech 70mm: Madhapur",
          timings:["09:15 PM"],
          type:"Atmos",
          Recliner:[[24,23,22,21,20,19,18,17,16,15,14,13,"","","","",12,11,10,9,8,7,6,5,4,3,2,1],
                    [24,23,22,21,20,19,18,17,16,15,14,13,"","","","",12,11,10,9,8,7,6,5,4,3,2,1],
                    [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","",10,9,8,7,6,5,4,3,2,1],
                    [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","",10,9,8,7,6,5,4,3,2,1],
                    [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","",10,9,8,7,6,5,4,3,2,1],
                    [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","",10,9,8,7,6,5,4,3,2,1],
                  ],
          Gold:[["","","","","",27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
                [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,"","","","","","","",10,9,8,7,6,5,4,3,2,1],
              ],
          BestSeller:[[[0],[0],[0],[0],[0],[0]],
                      [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]
                    ],
          Alphabets:[['A','B','C','D','E','F'],['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O']]
        },
        {
          TheaterName:"PVR: RK Cineplex, Hyderabad",
          timings:["01:35 PM","07:50 PM","11:10 PM"],
          type:"Dolby 7.1",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
                  ],
          Gold:[[1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                ["","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
                [1,2,3,4,5,6,7,"",8,9,10,11,12,13,14,15,16,17,18,19,20,21,"",22,23,24,25,26],
              ],
          BestSeller:[[[0],[0]],
                      [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]
                    ],
          Alphabets:[['Q','P'],['N','M','L','K','J',' ','H','G','F','E','D','C','B','A']]
        },
        {
          TheaterName:"Gokul 70MM 4K DTS: Erragadda",
          timings:["02:30 PM","06:15 PM","09:30 PM"],
          type:"ATMOS",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                    [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                    [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                    [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                    [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                    [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                    [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                    [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                    [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                  ],
          Gold:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
                [1,2,3,4,5,6,7,"","",8,9,10,11,12,13,14,15,16,17,18,19,"","",20,21,22,23,24,25,26],
              ],
          BestSeller:[[[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],[0],[0],[12,13,14],[12,13,14,15],[20,21],[8,9,10,13],[0],[0]],
                      [[2,3,4,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,27],[8,9,10,11,12,13,14,15,16,17,18],[0],[0],[0],[0],[11,12,13,14,15,16,17],[14,15,17],[0],[0],[0],[0],[0],[0],[0]]
                    ],
          Alphabets:[['A','B','C','D','E','F','G','H','I'],['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O']]
        }            
      ]
    },
    {
      location:"Mumbai",
      ListofMovies:[
        {
          image:"../images/teri_baaton.png",
          mvname:"Teri Baaton Mein Aisa Uljha Jiya",
          mvtype:["Comedy","Family","Romantic"],
          backgroundimage:"../images/teri_baatonbgimage.png",
          rating:"8.1/10",
          type:["2D"],
          languages:["Hindhi"],
          review:"2.5K",
          currentStatus:"In cinemas",
          duration:"2h 23m",
          releaseDate:"9 Feb, 2024",
          certificate:"UA",
          about:"Aryan meets the perfect girl, Sifra, in the US and falls in love with her only to discover later that `it`s an impossible love story`!",
          cast:[
            {
              img:"../Images/TeriBaaton_cast_shahid.png",
              Name:"Shahid Kapoor",
              proff:"Actor"
            },
            {
              img:"../Images/TeriBaaton_cast_kriti.png",
              Name:"Kriti Sanon",
              proff:"Actor"
            },
            {
              img:"../Images/TeriBaaton_cast_dharmendra.png",
              Name:"Dharmendra",
              proff:"Actor"
            },
            {
              img:"../Images/TeriBaaton_cast_dimple.png",
              Name:"Dimple kapadia",
              proff:"Actor"
            },
            {
              img:"../Images/TeriBaaton_cast_rakesh.png",
              Name:"Rakesh Bedi",
              proff:"Actor"
            },
            {
              img:"../Images/TeriBaaton_cast_rajesh.png",
              Name:"Rajesh Kumar",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/TeriBaaton_crew_amit.png",
              Name:"Amit Joshi",
              proff:"Director, Writer, Screenplay"
            },
            {
              img:"../Images/TeriBaaton_crew_dinesh.png",
              Name:"Dinesh Vijan",
              proff:"Producer"
            },
            {
              img:"../Images/TeriBaaton_crew_jyoti.png",
              Name:"Jyoti Deshpande",
              proff:"Producer"
            },
            {
              img:"../Images/TeriBaaton_crew_laxman.png",
              Name:"Laxman Utekar",
              proff:"Producer, Cinematographer"
            },
            {
              img:"../Images/TeriBaaton_crew_tanishk.png",
              Name:"Thanishk Bagchi",
              proff:"Musician"
            },
            {
              img:"../Images/TeriBaaton_crew_sachin-jigar.png",
              Name:"Sachin - Jigar",
              proff:"Musician, Background Score"
            },
            {
              img:"../Images/TeriBaaton_crew_manish.png",
              Name:"Manish Pradhan",
              proff:"Editor"
            },
          ]
        },
        {
          image:"../images/fighter.png",
          mvname:"Fighter",
          mvtype:["Action","Thriller"],
          backgroundimage:"../images/fighterbgimage.png",
          rating:"8.8/10",
          type:["2D", "IMAX 2D","ICE 3D","4DX 3D","3D","IMAX 3D"],
          languages:["Hindi"],
          review:"44.1K",
          currentStatus:"In cinemas",
          duration:"2h 47m",
          releaseDate:"25 Jan, 2024",
          certificate:"UA",
          about:"Top IAF aviators come together in the face of imminent danger, to form Air Dragons. Fighter unfolds their camaraderie, brotherhood and battles, internal and external.",
          cast:[
            {
              img:"../Images/Fighter_cast_hrithik.png",
              Name:"Hrithik Roshan",
              proff:"Actor"
            },
            {
              img:"../Images/Fighter_cast_deepika.png",
              Name:"Deepika Padukone",
              proff:"Actor"
            },
            {
              img:"../Images/Fighter_cast_anil.png",
              Name:"Anil Kapoor",
              proff:"Actor"
            },
            {
              img:"../Images/Fighter_cast_karan.png",
              Name:"Karan Singh Grover",
              proff:"Actor"
            },
            {
              img:"../Images/Fighter_cast_akshay.png",
              Name:"Akshay Oberoi",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/Fighter_crew_siddharth.png",
              Name:"Siddharth Anand",
              proff:"Director, Producer, Writer"
            },
            {
              img:"../Images/Fighter_crew_mamta.png",
              Name:"Mamta Anand",
              proff:"Producer"
            },
            {
              img:"../Images/Fighter_crew_ajit.png",
              Name:"Ajit Andhare",
              proff:"Producer"
            },
            {
              img:"../Images/Fighter_crew_anku.png",
              Name:"Anku Pande",
              proff:"Producer"
            },
            {
              img:"../Images/Fighter_crew_viacom.png",
              Name:"Viacom18 Motion Pictures",
              proff:"Producer"
            },
            {
              img:"../Images/Fighter_crew_ramon.png",
              Name:"Ramon Chibb",
              proff:"Producer, Writer, Screenplay"
            },
            {
              img:"../Images/Fighter_crew_kevin.png",
              Name:"Kevin Vaz",
              proff:"Producer"
            }, 
          ]
        },
        {
          image:"../images/hanu-man.png",
          mvname:"Hanu-Man",
          mvtype:["Action","Adventure","Fantasy"],
          backgroundimage:"../images/hanu_manbgimage.png",
          rating:"9.5/10",
          type:["2D","ICE"],
          languages:["Telugu","Hindi","Malayalam", "Kannada","Tamil"],
          review:"364.4K",
          currentStatus:"In cinemas",
          duration:"2h 38m",
          releaseDate:"12 Jan, 2024",
          certificate:"UA",
          about:"Hanumanthu gets the powers of Hanuman in a distant village and fights for Anjanadri.",
          cast:[
            {
              img:"../Images/Hanuman_cast_teja.png",
              Name:"Teja Sajja",
              proff:"Actor"
            },
            {
              img:"../Images/Hanuman_cast_varalaxmi.png",
              Name:"Varalaxmi",
              proff:"Actor"
            },
            {
              img:"../Images/Hanuman_cast_amritha.png",
              Name:"Amritha Aiyer",
              proff:"Actor"
            },
            {
              img:"../Images/Hanuman_cast_vinay.png",
              Name:"Vinay Rai",
              proff:"Actor"
            },
            {
              img:"../Images/Hanuman_cast_kishore.png",
              Name:"Vennela Kishore",
              proff:"Actor"
            },
            {
              img:"../Images/Hanuman_cast_srinu.png",
              Name:"Getup Srinu",
              proff:"Actor"
            },  
          ],
          crew:[
            {
              img:"../Images/Hanuman_crew_prasanth.png",
              Name:"Prasanth Varma",
              proff:"Director"
            },
            {
              img:"../Images/Hanuman_crew_niranjan.png",
              Name:"K Niranjan Reddy",
              proff:"Producer"
            },
            {
              img:"../Images/Hanuman_crew_hari.png",
              Name:"Hari Gowra",
              proff:"Musician"
            },
            {
              img:"../Images/Hanuman_crew_krishna.png",
              Name:"Krishna Saurabh",
              proff:"Musician"
            },
            {
              img:"../Images/Hanuman_crew_dasaradhi.png",
              Name:"Dhasaradhi Sivendra",
              proff:"Cinematography"
            },
            {
              img:"../Images/Hanuman_crew_sai.png",
              Name:"Sai Babu Talari",
              proff:"Editor"
            }, 
          ]
        },
        {
          image:"../images/argylle.png",
          mvname:"Argylle",
          mvtype:["Action","Comedy"],
          backgroundimage:"../images/argyllebgimage.png",
          rating:"7.2/10",
          type:["2D","ICE","MX4D","2D SCREEN X","4DX","IMAX 2D"],
          languages:["English","Hindi"],
          review:"1.2K",
          currentStatus:"In cinemas",
          duration:"2h 19m",
          releaseDate:"2 Feb, 2024",
          certificate:"UA",
          about:"Argylle, a super-spy, is drawn into a treasure hunt that takes him around the world. The secret agent's troubled past could jeopardise the mission.",
          cast:[
            {
              img:"../Images/Argylle_cast_henry.png",
              Name:"Henry Cavill",
              proff:"Actor"
            },
            {
              img:"../Images/Argylle_cast_bryce.png",
              Name:"Bryce Dallas Howard",
              proff:"Actor"
            },
            {
              img:"../Images/Argylle_cast_catherine.png",
              Name:"Catherine O'Hara",
              proff:"Actor"
            },
            {
              img:"../Images/Argylle_cast_dua.png",
              Name:"Dua Lipa",
              proff:"Actor"
            },
            {
              img:"../Images/Argylle_cast_johncena.png",
              Name:"John Cena",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/Argylle_crew_matthew.png",
              Name:"Matthew Vaughn",
              proff:"Director, Producer"
            },
            {
              img:"../Images/Argylle_crew_lorne.png",
              Name:"Lorne Balfe",
              proff:"Musician"
            },
            {
              img:"../Images/Argylle_crew_jason.png",
              Name:"Jason Fuchs",
              proff:"Producer, Screenplay"
            },
          ]
        },
        {
          image:"../images/sridevi_prasanna.png",
          mvname:"Sridevi Prasanna",
          mvtype:["Comedy","Drama","Romantic"],
          backgroundimage:"../images/srideviprasannabgimage.png",
          rating:"8.3/10",
          type:["2D"],
          languages:["Marathi"],
          review:"1.2K",
          currentStatus:"In cinemas",
          duration:"2h 7m",
          releaseDate:"2 Feb, 2024",
          certificate:"UA",
          about:"Challenging the usual ideas about love and romance, Sridevi and Prasanna find a unique connection despite family pressure.",
          cast:[
            {
              img:"../Images/SrideviPrasanna_cast_sai.png",
              Name:"Sai Tamhankar",
              proff:"Actor"
            },
            {
              img:"../Images/SrideviPrasanna_cast_siddharth.png",
              Name:"Siddharth Chandekar",
              proff:"Actor"
            },
            {
              img:"../Images/SrideviPrasanna_cast_sulabha.png",
              Name:"Sulabha Arya",
              proff:"Actor"
            },
            {
              img:"../Images/SrideviPrasanna_cast_siddharthB.png",
              Name:"Siddharth Bodke",
              proff:"Actor"
            },
            {
              img:"../Images/SrideviPrasanna_cast_rasika.png",
              Name:"Rasika Sunil",
              proff:"Actor"
            },
            {
              img:"../Images/SrideviPrasanna_cast_sanjay.png",
              Name:"Sanjay Mone",
              proff:"Actor"
            },        
          ],
          crew:[
            {
              img:"../Images/SrideviPrasanna_crew_vishal.png",
              Name:"Vishal Vimal Modhave",
              proff:"Director"
            },
            {
              img:"../Images/SrideviPrasanna_crew_aditi.png",
              Name:"Aditi Moghe",
              proff:"Writer"
            },
            {
              img:"../Images/SrideviPrasanna_crew_amit.png",
              Name:"Amit Raj",
              proff:"Musician"
            },
            {
              img:"../Images/SrideviPrasanna_crew_kshitij.png",
              Name:"Kshitij Patwaedhan",
              proff:"Lyricist"
            },
            {
              img:"../Images/SrideviPrasanna_crew_arjun.png",
              Name:"Arjun Sorte",
              proff:"Cinematographer"
            },
            {
              img:"../Images/SrideviPrasanna_crew_faisal.png",
              Name:"Faisal Mahadik",
              proff:"Editor"
            }, 
          ]
        },
        {
          image:"../images/chhatrapati.png",
          mvname:"Chhatrapati Sambhaji",
          mvtype:["Action","Drama","Historical"],
          backgroundimage:"../images/chhatrapathibgimage.png",
          rating:"8.9/10",
          type:["2D"],
          languages:["Marathii"],
          review:"2.2K",
          currentStatus:"In cinemas",
          duration:"2h 16m",
          releaseDate:"2 Feb, 2024",
          certificate:"UA",
          about:"This is the true journey of a fearless king Sambhaji Maharaj, the eldest son of Chhatrapati Shivaji Maharaj, revealing the untold chapters of his life and the relentless tension with Aurangzeb.",
          cast:[
            {
              img:"../Images/Chhatrapati_cast_pramod.png",
              Name:"Pramod Pawar",
              proff:"Actor"
            }, 
            {
              img:"../Images/Chhatrapati_cast_rajit.png",
              Name:"Rajit Kapur",
              proff:"Actor"
            }, 
            {
              img:"../Images/Chhatrapati_cast_dalip.png",
              Name:"Dalip Tahil",
              proff:"Actor"
            }, 
            {
              img:"../Images/Chhatrapati_cast_mohan.png",
              Name:"Mohan Joshi",
              proff:"Actor"
            }, 
            {
              img:"../Images/Chhatrapati_cast_mrinal.png",
              Name:"Mrinal Kulkarni",
              proff:"Actor"
            }, 
            {
              img:"../Images/Chhatrapati_cast_lokesh.png",
              Name:"Lokesh Gupte",
              proff:"Actor"
            }, 
            {
              img:"../Images/Chhatrapati_cast_bharat.png",
              Name:"Bharat Dabholkar",
              proff:"Actor"
            },     
          ],
          crew:[
            {
              img:"../Images/Chhatrapati_crew_rakesh.png",
              Name:"Rakesh S Dulgaj",
              proff:"Director, Producer"
            },
            {
              img:"../Images/Chhatrapati_crew_avinash.png",
              Name:"Avinash-Vishwajeet",
              proff:"Musician"
            }
          ]
        },
        {
          image:"../images/delivery_boy.png",
          mvname:"Delivery Boy(2024)",
          mvtype:["Comedy"],
          backgroundimage:"../images/delivery_boy.png",
          rating:"7.9/10",
          type:["2D"],
          languages:["Marathi"],
          review:"14.4K",
          currentStatus:"In cinemas",
          duration:"2h 10m",
          releaseDate:"9 Feb, 2024",
          certificate:"UA",
          about:"Bhau and Chochya are small-time real estate agents who meet Dr. Amruta Deshmukh who wants to open a surrogacy hospital. Can they make this happen?",
          cast:[
            {
              img:"../Images/DeliveryBoy_cast_prathamesh.png",
              Name:"Prathamesh Parab",
              proff:"Actor"
            },
            {
              img:"../Images/DeliveryBoy_cast_prithvik.png",
              Name:"Prithvik Pratap",
              proff:"Actor"
            },
            {
              img:"../Images/DeliveryBoy_cast_ankita.png",
              Name:"Ankita Landepatil",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/DeliveryBoy_crew_mohsin.png",
              Name:"Mohsin Mushtaq Khan",
              proff:"Director"
            },
            {
              img:"../Images/DeliveryBoy_crew_david.png",
              Name:"David Nadar",
              proff:"Producer"
            },
            {
              img:"../Images/DeliveryBoy_crew_ram.png",
              Name:"Ram Khatmode",
              proff:"Writer"
            },
            {
              img:"../Images/DeliveryBoy_crew_vinod.png",
              Name:"Vinod Vanve",
              proff:"Writer"
            },
          ]
        },
        {
          image:"../images/12thfail.png",
          mvname:"12th Fail",
          mvtype:["Drama"],
          backgroundimage:"../images/12th_failbgimage.png",
          rating:"9.6/10",
          type:["2D","ICE"],
          languages:["Hindi","Tamil","Kannada"],
          review:"364.4K",
          currentStatus:"In cinemas",
          duration:"2h 27m",
          releaseDate:"27 Oct, 2023",
          certificate:"U",
          about:"Based on Anurag Pathak`s bestselling novel of the same name, 12th Fail depicts the true story of an IPS officer Manoj Kumar Sharma hailing from a small town in Chambal, who fearlessly embraced the idea of restarting his academic journey and reclaiming his destiny at a place where millions of students attempt for the world`s toughest competitive exam, UPSC. The film is not just a chronicle of one man`s journey but a celebration of everyone who dared to look at failures as an opportunity to #Restart.",
          cast:[
            {
              img:"../Images/12thFail_cast_vikrant.png",
              Name:"Vikrant Massey",
              proff:"Actor"
            },
            {
              img:"../Images/12thFail_cast_medha.png",
              Name:"Medha Shankr",
              proff:"Actor"
            },
            {
              img:"../Images/12thFail_cast_harish.png",
              Name:"Harish Khanna",
              proff:"Actor"
            },
            {
              img:"../Images/12thFail_cast_priyanshu.png",
              Name:"Priyanshu Chatterjee",
              proff:"Actor"
            },
            {
              img:"../Images/12thFail_cast_sanjay.png",
              Name:"Sanjay Bishnoi",
              proff:"Actor"
            },
            {
              img:"../Images/12thFail_cast_sukumar.png",
              Name:"Sukumar Tudu",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/12thFail_crew_vidhu.png",
              Name:"Vidhu Vinod Chopra",
              proff:"Director, Producer, Writer, Editor"
            },
            {
              img:"../Images/12thFail_crew_zee.png",
              Name:"Zee Studios",
              proff:"Producer"
            },
            {
              img:"../Images/12thFail_crew_shantanu.png",
              Name:"Shantanu Moitra",
              proff:"Musician"
            },
            {
              img:"../Images/12thFail_crew_swanand.png",
              Name:"Swanand Kirkire",
              proff:"Lyricist"
            },
          ]
        },
        {
          image:"../images/anatomy.png",
          mvname:"Anotomy Of A Fall",
          mvtype:["Drama","Thriller"],
          backgroundimage:"../images/anatomybgimage.png",
          rating:"8.5/10",
          type:["2D"],
          languages:["English"],
          review:"1K",
          currentStatus:"In cinemas",
          duration:"2h 33m",
          releaseDate:"2 Feb, 2024",
          certificate:"UA",
          about:"A woman is suspected of her husband's murder, and their blind son faces a moral dilemma as the main witness.",
          cast:[
            {
              img:"../Images/Anatomy_cast_sandra.png",
              Name:"Sandra Huller",
              proff:"Actor"
            },
            {
              img:"../Images/Anatomy_cast_swann.png",
              Name:"Swann Arlaud",
              proff:"Actor"
            },
            {
              img:"../Images/Anatomy_cast_jehnny.png",
              Name:"Jehnny Beth",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/Anatomy_crew_justine.png",
              Name:"Justine Triet",
              proff:"Director,Screenplay"
            },
            {
              img:"../Images/Anatomy_crew_arthur.png",
              Name:"Arthur Harari",
              proff:"Screenplay"
            },
          ]
        },
        {
          image:"../images/ittaa_kittaa.png",
          mvname:"Ittaa Kittaa",
          mvtype:["Comedy","Drama"],
          backgroundimage:"../images/itta_kittabgimage.png",
          rating:"9/10",
          type:["2D"],
          languages:["Gujarati"],
          review:"2.8K",
          currentStatus:"In cinemas",
          duration:"2h 3m",
          releaseDate:"19 Jan, 2024",
          certificate:"U",
          about:"On an auspicious night of Janmashtami Kavya suddenly feels an urge to have a baby. However, the news of Kavya's inability to conceive leaves the Jariwala family devastated. Kavya and Nirav decide to adopt and by mistake they end up adopting two girls of age 7 and 13.",
          cast:[
            {
              img:"../Images/Itta_cast_manasi.png",
              Name:"Manasi Parekh",
              proff:"Actor"
            },
            {
              img:"../Images/Itta_cast_raunaq.png",
              Name:"Raunaq Kamdar",
              proff:"Actor"
            },
            {
              img:"../Images/Itta_cast_alpana.png",
              Name:"Alpana Buch",
              proff:"Actor"
            },
            {
              img:"../Images/Itta_cast_jia.png",
              Name:"Jia Vaidya",
              proff:"Actor"
            },
            {
              img:"../Images/Itta_cast_princy.png",
              Name:"Princy Prajapati",
              proff:"Actor"
            },
            {
              img:"../Images/Itta_cast_prashant.png",
              Name:"Prashant Barot",
              proff:"Actor"
            },
          ],
          crew:[
            {
              img:"../Images/Itta_crew_manthan.png",
              Name:"Manthan Purohit",
              proff:"Director"
            },
            {
              img:"../Images/Itta_crew_abhinn.png",
              Name:"Abhinn Sharma",
              proff:"Director"
            },
            {
              img:"../Images/Itta_crew_vikas.png",
              Name:"Vikas Agarwal",
              proff:"Producer"
            },
            {
              img:"../Images/Itta_crew_pankaj.png",
              Name:"Pankaj Keshruwala",
              proff:"Producer"
            },
            {
              img:"../Images/Itta_crew_chandni.png",
              Name:"Chandni Soni",
              proff:"Producer"
            },
            {
              img:"../Images/Itta_crew_antima.png",
              Name:"Antima Pawar",
              proff:"Writer"
            },
            {
              img:"../Images/Itta_crew_azhar.png",
              Name:"Azhar Saiyed",
              proff:"Writer"
            },
          ]
        },
      ],
      ListofTheaters:[
        {
          TheaterName:"INOX: Shipra Mall, Ghaziabad",
          timings:["06:35 PM"],
          type:"LASER DOLBY ATMOS",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,"","",16,17,18,19,20,21],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,"","",16,17,18,19,20,21],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,"","",16,17,18,19,20,21],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,"","","","","","",12,13,14,15,16,17],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,"","","","","","",12,13,14,15,16,17],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,"","","","","","",12,13,14,15,16,17],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,"","","","","","",12,13,14,15,16,17],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,"","","","","","",12,13,14,15,16,17],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,"","","","","","",12,13,14,15,16,17],
                  ],
          Gold:[[1,2,3,4,"","",5,6,7,8,9,10,11,12,13,14,15,16,"","","",17,18,19,20],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,14,15,16,"","","",17,18,19,20],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,14,15,16,"","","",17,18,19,20],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,14,15,16,"","","",17,18,19,20],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,14,15,16,"","","",17,18,19,20],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,14,15,16,"","","",17,18,19,20],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,14,15,16,"","","",17,18,19,20],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,14,15,16,"","","",17,18,19,20],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,14,15,16,"","","",17,18,19,20],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,14,15,16,"","","",17,18,19,20],
              ],
          BestSeller:[[[12,13,14,15,16,17],[8,9,10,11,12],[10,11,12,13],[0],[0],[0],[8,9,10],[3,4,5,7,8,9,14,15],[0],[0]],
                      [[0],[4,5,6,7,8,9,10,11,12,13,15],[4,5,6,7,8,9,10,11,12],[0],[2,4,5,6,13],[0],[0],[0],[0],[0]]
                    ],
          Alphabets:[['T','S','R','Q','P','O','N','M','L','K'],['J','I','H','G','F','E','D','C','B','A']]
        },
        {
          TheaterName:"Miraj Cinemas: Ansal Plaza, Ghaziabad",
          timings:["04:30 PM","07:35 PM"],
          type:"ATMOS",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],
          Gold:[[1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18,19],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18,19],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16],
                ["","","","","","","","","","","","","","","","","","",""],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18,19],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18,19],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18,19],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18,19],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18,19],
              ],
          BestSeller:[[[9,10,11,12]],
                      [[3,4,5,6,7,8,9,10,11,12,13,14,15],[6,7,8,9,10,11,12],[133,14,15],[3,10],[0],[0],[5,6,9,10],[0],[0],[0],[0]]
                    ],
          Alphabets:[['A'],['B','C','D','E','F','G',' ','H','I','J','K','L']]
        },
        {
          TheaterName:"Cinepolis: Cross River Mall, Shahdara",
          timings:["03:15 PM","10:25 PM"],
          type:"DOLBY ATMOS",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]],
          Gold:[[1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                ["","","","","","","","","","","","","","","","","","","",""],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,"","",10,11,12,13,14,15,16,17,18],
              ],
          BestSeller:[[[9,10,11,12]],
                      [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],[1,2,7,8,9,10,11,12,13,14,15],[6,7,8,9,10,11,12],[0],[0],[9],[0],[0],[4,5,6,7,8,9,10,11,12,13,14,15],[3,4],[2,3,4,5,6,7],[8,9],[0],[0],[0],[0]],
                    ],
          Alphabets:[['A'],['B','C','D','E','F','G','H',' ','I','J','K','L','M','N','O','P']]
        },
        {
          TheaterName:"Cinepolis: DLF Avenue, Saket ",
          timings:["05:10 PM","10:50 PM"],
          type:"LASER DOLBY 7.1",
          Recliner:[[14,13,"",12,11,"",10,9,"",8,7,"",6,5,"",4,3,"",2,1]],
          Gold:[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,"",3,2,1],
                [19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,"",3,2,1],
                [19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,"",3,2,1],
                [19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,"",3,2,1],
                ["","","","","","","","","","","","","","","","","","","",""],
                [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,"","","",""],
                [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,"","","",""],
                [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,"","","",""],
                [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,"","","",""],
                ["","","","","","","","","","","","","","","","","","","",""],
                [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
                [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
                [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
              ],
          BestSeller:[[[10,9,8,7]],
                      [[15,14,13,12,11,10,9,8,7,6,5,4],[14,13,12,11,10,9,8],[0],[14,13,12,10],[0],[10,9,8,7,6],[9,8,5,4,2,1],[0],[6,5,4,3,2,1],[0],[0],[0],[0]]
                    ],
          Alphabets:[['L'],['K','J','I','H',' ','G','F','E','D',' ','C','B','A']]
        },
        {
          TheaterName:"Cinepolis: Pacific NSP2, Delhi",
          timings:["11:00 PM"],
          type:"2K LASER DOLBY 7.1",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]],
          Gold:[[1,2,3,4,"","",5,6,7,8,9,10,11,12,13,"","",14,15,16,17],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,"","",14,15,16,17],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,"","",14,15,16,17],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,"","",14,15,16,17],
                [1,2,3,4,"","",5,6,7,8,9,10,11,12,13,"","",14,15,16,17],
                ["","","","","","",1,2,3,4,5,6,7,8,9,"","",10,11,12,13],
                ["","","","","","","","","","","","","","","","","","","","",""],
                ["","","","","","",1,2,3,4,5,6,7,8,9,"","",10,11,12,13],
                ["","","","","","",1,2,3,4,5,6,7,8,9,"","",10,11,12,13],
                ["","","","","","",1,2,3,4,5,6,7,8,9,"","",10,11,12,13],
                ["","","","","","",1,2,3,4,5,6,7,8,9,"","",10,11,12,13],
                ["","","","","","",1,2,3,4,5,6,7,8,9,"","",10,11,12,13],
                ["","","","","","",1,2,3,4,5,6,7,8,9,"","",10,11,12,13],
              ],
          BestSeller:[[[8,9,10,11,12,13,14,15,16,17]],
                      [[7,8,9,10,11,12,13,14,15,16],[3,4,5,6,7,8,9,10,11,12,13],[3,4,6,7,8,9,10],[0],[8,9,10,11,12],[1,2,3,4,5,6],[0],[0],[0],[0],[0],[0],[0]]
                    ],
          Alphabets:[['M'],['L','K','J','I','H','G',' ','F','E','D','C','B','A']]
        },
        {
          TheaterName:"MovieMax: Pacific Mall Ghaziabad",
          timings:["10:55 PM"],
          type:"",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,"","","",16,17,18,19,20,21],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,"","","",16,17,18,19,20,21],
                    [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,20,21,22],
                  ],
          Gold:[[1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,20,21,22],
                [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,"","",""],
                [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,"","",""],
                [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,"","",""],
                [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,"","",""],
                [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,"","",""],
                ["","","","","","","","","","","","","","","","","","","","","","","","","",""],
                [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,20,21,22],
                [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,20,21,22],
                ["","","","","","","","","","","","","","","","","","","","","","","","","",""],
                [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,20,21,22],
                [1,2,3,4,5,"","",6,7,8,9,10,11,12,13,14,15,16,"","",17,18,19,20,21,22],
              ],
          BestSeller:[[[1,2,7,8,9,10,11,12,13,14,15,16,17,25,26],[8,9,16,17],[9,16,17],[8,9]],
                      [[2,3,4,5,8,9,10,11,12,13,14,15,16,17,18],[1,2,8,9,10,11,12,13,14],[10,11,12,13,14],[8,12,13,14],[11],[0],[0],[0],[0],[0],[0],[0]]
                    ],
          Alphabets:[['A','B','C','D'],['E','F','G','H','I','J',' ','K','L',' ','M','N']]
        },
        {
          TheaterName:"US CINEMAS: Galaxy Blue Sapphire, Noida Ext",
          timings:["10:30 AM","2:45 PM","06:30 PM"],
          type:"EUROPA LUX",
          Recliner:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
                    [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,18,19,20,"",""],
                    [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,18,19,20,"",""],
                    [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,18,19,20,"",""],
                    [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,18,19,20,"",""],
                    [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,18,19,20,"",""],
                    [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,18,19,20,"",""],
                  ],
          Gold:[[1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,"","",18,19,20],
                [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,"","",18,19,20],
                [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,"","","","",""],
                [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,"","","","",""],
                [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,"","","","",""],
                [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,"","","","",""],
                [1,2,3,4,5,6,7,8,9,10,"","","",11,12,13,14,15,16,17,"","","","",""],
                ["","","","","","","","","","","","","","","","","","","","","","","","",""],
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
              ],
          BestSeller:[[[4,5,6,7,8,9,10,12,13,14,15,16,17,18,24,25],[2,3,4,5,6,7,8,9,10,12,13,14,15,16,18,19,20],[4,5,6,7,8,9,10,12,13,14,15,16,18,19,20],[4,5,6,7,12,13,15,16,18,19,20],[0],[11,12,15,18,19,20],[0]],
                      [[1,2,6,7,8,9,10,11,12,13,14,15,16],[9,10,11,12,13,14,15],[3,4,5,6,13,14,15],[0],[11,12,13],[0],[0],[0],[0],[0],[0]]
                    ],
          Alphabets:[['A','B','C','D','E','F','G'],['H','I','J','K','L','M','N',' ','O','P','Q']]
        },
      ]
    },

  ],
 moviedata:[
    {
      image:"../images/animal.png",
      mvname:"Animal",
      mvtype:"Action/Crime/Drama",
      backgroundimage:"../images/animalbgimage.png",
      rating:"8.5/10",
      type:"2D, IMAX 2D",
      languages:"Hindi, Malayalam, Kannada, Telugu, Tamil",
      review:"306.3K",
      date:"In cinemas",
      duration:"3h 21m • Action, Crime, Drama • A • 1 Dec, 2023"
    },
    {
      image:"../images/hinana.png",
      mvname:"Hi Nanna",
      mvtype:"Drama/Family/Romantic",
      backgroundimage:"../images/hinanabgimage.png",
      review:"75.1K",
      rating:"9.4/10",
      type:"2D",
      languages:"Telugu, Malayalam, Tamil, Kannada",
      date:"In cinemas",
      duration:"2h 35m • Drama, Family, Romantic • U • 7 Dec, 2023"
    },
    {
        image:"../images/extra.png",
        mvname:"Extra Ordinary Man",
        mvtype:"Action/Comedy/Drama",
        backgroundimage:"../images/extrabgimage.png",
        review:"24.8K",
        type:"2D",
        languages:"Telugu",
        date:"Realising on 8 Dec, 2023",
        duration:"2h 37m • Action, Comedy, Drama • UA • 8 Dec, 2023"
    },
    {
        image:"../images/sambahadhur.png",
        mvname:"Sam Bahadur",
        mvtype:"Biography/Drama",
        backgroundimage:"../images/sambahadhurbgimage.png",
        review:"41.4K",
        rating:"9/10",
        type:"2D, ICE",
        languages:"Hindi",
        date:"In cinemas",
        duration:"2h 30m • Biography, Drama • UA • 1 Dec, 2023"
    },
    {
        image:"../images/wonka.png",
        mvname:"Wonka",
        mvtype:"Comedy/Fantasy/Musical",
        backgroundimage:"../images/wonkabgimage.png",
        review:"22.2K",
        type:"2D, MX4D, 4DX, IMAX 2D, 2D SCREEN X",
        languages:"English",
        date:"Releasing on 8 Dec, 2023",
        duration:"3h 21m • Comedy, Fantasy, Musical • U • 8 Dec, 2023"
    },
    {
        image:"../images/joram.png",
        mvname:"Joram",
        mvtype:"Adventure/Drama/Thriller",
        backgroundimage:"../images/jorambgimage.png",
        review:"2.3K",
        type:"2D",
        languages:"Hindi",
        date:"In cinemas",
        duration:"2h 1m • Adventure, Drama, Thriller • UA • 8 Dec, 2023"
    },
    {
        image:"../images/mangalavaram.png",
        mvname:"Mangalavaram",
        mvtype:"Action/Horror/Thriller",
        backgroundimage:"../images/mangalavaram.png",
        review:"23.3K",
        rating:"8.8/10",
        type:"2D",
        languages:"Telugu, Kannada",
        date:"In cinemas",
        duration:"2h 25m • Action, Horror, Thriller • A • 17 Nov, 2023"
    },
    {
        image:"../images/tiger3.png",
        mvname:"Tiger 3",
        mvtype:"Action/Thriller",
        backgroundimage:"../images/tiger3bgimage.png",
        review:"207.9K",
        rating:"7.3/10",
        type:"2D, ICE, IMAX 2D, 4DX",
        languages:"Hindi, Telugu, Tamil",
        date:"In cinemas",
        duration:"2h 35m • Action, Thriller • UA • 12 Nov, 2023"
    },
    {
      image:"../images/keedaa.png",
      mvname:"Keedaa Cola",
      mvtype:"Comedy/Crime",
      backgroundimage:"../images/keedaabackgroundimage.png",
      review:"28.5K",
      rating:"8.2/10",
      type:"2D",
      languages:"Telugu",
      date:"In cinemas",
      duration:"2h • Comedy, Crime • UA • 3 Nov, 2023"
    },
    {
      image:"../images/vidhi.png",
      mvname:"Vidhi",
      mvtype:"Crime/Thriler",
      backgroundimage:"../images/vidhibackgroundimage.png",
      review:"16.1K",
      rating:"7.5/10",
      type:"2D",
      languages:"Telugu",
      date:"No watch options",
      duration:"1h 47m 1h 47m • Crime, Thriller • UA 3 Nov, 2023"
    },
    {
      image:"../images/bagavanth_kesari.png",
      mvname:"Bhagavanth Kesari",
      mvtype:"Action/Drama",
      backgroundimage:"../images/bagavanthkesaribackgroungimage.png",
      review:"136.6K",
      rating:"8.7/10",
      type:"2D",
      languages:"Telugu",
      date:"No watch options",
      duration:"2h 44m • Action, Drama • UA • 19 Oct, 2023"
    },
    {
      image:"../images/polimera2.png",
      mvname:"Maa Oori Polimera 2",
      mvtype:"Crime/Thriller",
      backgroundimage:"../images/polimera2backgroundimage.png",
      review:"30.9K",
      rating:"8.7/10",
      type:"2D",
      languages:"Telugu",
      date:"No watch options",
      duration:"2h 7m • Crime, Thriller • A • 3 Nov, 2023"
    },
    {
      image:"../images/leo.png",
      mvname:"Leo",
      mvtype:"Action/Thriller",
      backgroundimage:"../images/leobackgroundimage.png",
      review:"465.4K",
      rating:"8.3/10",
      type:"2D, IMAX 2D",
      languages:"Tamil, Kannada, Hindi, Telugu",
      date:"No watch options",
      duration:"2h 44m • Action, Thriller • UA • 19 Oct, 2023"
    }
  ],

  moviename:"",

  sliderdata:[
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1698646009192_hitexdesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1696847878393_comiconhyddesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1696330786937_mamadesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1697187201758_islhyddesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1698603955302_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1698931897748_mindfoolvirdasdesktop.jpg"
    ],
  
  theaterdata:[
    {
        mvnames:"Animal",
        theatername:"Platinum Movie Cinemas: Ameerpet",
        times:["10:00 PM"],
        type:"DOLBY 7.1",
        timeover:false
    },
    {
        mvnames:"Hi Nanna",
        theatername:"AAA Cinemas: Ameerpet",
        times:["06:00 PM","09:45 PM"],
        type:"LEASER DOLBY DIGIT...",
        timeover:false
    },
    {
        mvnames:"Animal",
        theatername:"PVR: Central Mall, Panjagutta",
        times:["07:00 PM","11:00 PM"],
        type:"DOLBY 7.1",
        timeover:false
    }
  ],

  displayheader:true,
  
  calender:[
    {
      day:dayArr[(fulldate.getDay())%7],
      date:fulldate.getDate(),
      month:monthArr[fulldate.getMonth()]
    },
    {
      day:dayArr[(fulldate.getDay()+1)%7],
      date:fulldate.getDate()+1,
      month:monthArr[fulldate.getMonth()]
    },
    {
      day:dayArr[(fulldate.getDay()+2)%7],
      date:fulldate.getDate()+2,
      month:monthArr[fulldate.getMonth()]
    },
    {
      day:dayArr[(fulldate.getDay()+3)%7],
      date:fulldate.getDate()+3,
      month:monthArr[fulldate.getMonth()]
    },
    {
      day:dayArr[(fulldate.getDay()+4)%7],
      date:fulldate.getDate()+4,
      month:monthArr[fulldate.getMonth()]
    },  
    {
      day:dayArr[(fulldate.getDay()+5)%7],
      date:fulldate.getDate()+5,
      month:monthArr[fulldate.getMonth()]
    },
    {
      day:dayArr[(fulldate.getDay()+6)%7],
      date:fulldate.getDate()+6,
      month:monthArr[fulldate.getMonth()]
    },
  ],

  calenderStyle:[true,false,false,false,false,false,false],


  theaterSeatsData:[
  {
    theatername:"Platinum Movie Cinemas: Ameerpet",
    top:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]],
    gold:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
        [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
        [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
        [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
        ["","","","","","","","","","","","","","","","","","","","","",""],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19]    
    ],
    bestseller:[[6,7,15],[2,11,17],[8,14,15,16],[2,3,8,16],[13],[6,13,15],[13,15],[3,4,13,15],[0],[3,17,20],[2,4,5,6,7,8,17,18,19,20],[1,2,5,6,7,8,12,13,14,15,16,17,18,20],[5,6,9,10,11,12,13,14,19],[10,11],[0],[0],[1,8,17,19],[1,2,3,4,5,6,7,9,10,14,17,18,20]],
    alphabets:['A','B','C','D','E','F','G','H','I',' ','J','K','L','M','N','O','P','Q','R']
  },
  {
    theatername:"AAA Cinemas: Ameerpet",
    top:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]],
    gold:[[1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15],
        ["","","","","","","","","","","","","","","","","","","","","",""],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,""],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,""],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,""],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,""],
        ["","","","","","","","","","","","","","","","","","","","","",""],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],    
        [1,2,"",3,4,5,6,7,8,9,10,11,12,13,14,15,"",16,17,18,19],    
    ],
    bestseller:[[0],[4,5,6,7,8,9,10,11,12,13,15],[4,5,6,7,8,9,10,11,12],[1,2,4,5,11,12,13],[2,4,5,6,13],[0],[4,5,11,12,16],[11],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    alphabets:['A','B','C','D','E','F',' ','G','H','I','J','K','L','M','N','O',' ','P','Q','R']
  },
  {
    theatername:"PVR: Central Mall, Panjagutta",
    top:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]],
    gold:[[1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
        [1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
        [1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
        [1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
        [1,2,3,"",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        ["","","","","","","","","","","","","","","","","","","",""],
        ["","","","","","","","","","","","","","","","","","","",""],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],    
    ],
    bestseller:[[0],[1,2,3,4,5,6,7,8,9,10,11,12,13,18,19],[4,5,7,8,9,10,11,12],[1,2,4,5,11,12,13],[2,4,5,6,13],[9,10,11],[1,2,3,4,5,6,7,8,11,12,16],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    alphabets:['R','Q','P','N','M','L','K',' ',' ','J','H','G','F','E','D','C','B','A']
  }
  ],
  fixTheatername:"",
  get fixDate(){return this.calender[this.calenderStyle.indexOf(true)].date},
  get fixDay(){return this.calender[this.calenderStyle.indexOf(true)].day},
  get fixMonth(){return this.calender[this.calenderStyle.indexOf(true)].month},
  fixTime:"",
  SelectedListofMovies:[],
  SelectedListofTheaters:[],
  SelectedMovieData:{},
  SelectedLanguage:"",
  SelectedViewType:"",
  SelectedTheaterData:{},
  SelectedTiming:"",
  SeateCount:"",
  SelectedTickets:[[],[]],
  TotalAmount:""
}


function reducer(state=initialdata,action){
    switch(action.type){
        case 'setMvname':
            return {...state,moviename:action.payload}
        case 'timehover':
            return {...state,theaterdata:state.theaterdata.map((item,index)=>{if(index==action.payload){return {...item,timeover:true}} else{return {...item,timeover:false}}})}
        case 'displayheader':
            return {...state,displayheader:action.payload}
        case 'calenderStyle':
            return {...state,calenderStyle:state.calenderStyle.map((item,index)=>{
                if(index==action.payload){
                    return true
                }
                else{
                    return false
                }
            })}
        case 'fixTheatername':
            return {...state,fixTheatername:action.payload} 
        case 'fixTime':
            return {...state,fixTime:state.theaterdata[action.payload[0]].times[action.payload[1]]}   
        case 'SelectedCityName':
          return {...state,SelectedCityName:action.payload}
        case 'SelectedListofMovies':
          return {...state,SelectedListofMovies:action.payload}
        case 'SelectedListofTheaters':
          return {...state,SelectedListofTheaters:action.payload}
        case 'SelectedMovieData':
          return {...state,SelectedMovieData:action.payload}
        case 'SelectedLanguage':
          return {...state,SelectedLanguage:action.payload}
        case 'SelectedViewType':
          return {...state,SelectedViewType:action.payload}
        case 'SelectedTheaterData':
          return {...state,SelectedTheaterData:action.payload}
        case 'SelectedTiming':
          return {...state,SelectedTiming:action.payload}
        case 'SeateCount':
          return {...state,SeateCount:action.payload}
        case 'SelectedTickets':
          return {...state,SelectedTickets:action.payload}
        case 'TotalAmount':
          return {...state,TotalAmount:action.payload}
        default:
            return state;
    }
}

export const store=createStore(reducer);
