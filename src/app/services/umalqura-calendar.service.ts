import { Injectable } from '@angular/core';
import { HijriDate } from '../models/HijriDate';

@Injectable({
  providedIn: 'root'
})
export class UmalquraCalendarService {
  umAlQuraDatesInfo:string[] = ["30041900", "29051900", "28061900", "27071900", "26081900", "24091900", "24101900", "23111900", "23121900", "21011901", "20021901", "21031901", "19041901", "19051901", "17061901", "16071901", "15081901", "13091901", "13101901", "12111901", "12121901", "10011902", "09021902", "11031902", "09041902", "08051902", "07061902", "06071902", "04081902", "03091902", "02101902", "01111902", "01121902", "30121902", "29011903", "28021903", "30031903", "28041903", "27051903", "26061903", "25071903", "23081903", "22091903", "21101903", "20111903", "19121903", "18011904", "17021904", "18031904", "16041904", "16051904", "14061904", "14071904", "12081904", "10091904", "10101904", "08111904", "08121904", "06011905", "05021905", "07031905", "05041905", "05051905", "04061905", "03071905", "02081905", "31081905", "29091905", "29101905", "27111905", "27121905", "25011906", "24021906", "25031906", "24041906", "24051906", "22061906", "22071906", "21081906", "19091906", "18101906", "17111906", "16121906", "15011907", "13021907", "15031907", "13041907", "13051907", "11061907", "11071907", "10081907", "08091907", "08101907", "06111907", "06121907", "04011908", "03021908", "03031908", "02041908", "01051908", "31051908", "29061908", "29071908", "27081908", "26091908", "26101908", "24111908", "24121908", "23011909", "21021909", "22031909", "21041909", "20051909", "18061909", "18071909", "16081909", "15091909", "15101909", "14111909", "13121909", "12011910", "11021910", "12031910", "10041910", "10051910", "08061910", "07071910", "06081910", "04091910", "04101910", "03111910", "02121910", "01011911", "31011911", "02031911", "31031911", "29041911", "29051911", "27061911", "26071911", "25081911", "23091911", "23101911", "21111911", "21121911", "20011912", "19021912", "19031912", "18041912", "17051912", "16061912", "15071912", "13081912", "12091912", "11101912", "10111912", "09121912", "08011913", "07021913", "09031913", "07041913", "07051913", "05061913", "05071913", "03081913", "01091913", "01101913", "30101913", "29111913", "28121913", "27011914", "26021914", "27031914", "26041914", "26051914", "24061914", "24071914", "22081914", "20091914", "20101914", "18111914", "18121914", "16011915", "15021915", "16031915", "15041915", "15051915", "13061915", "13071915", "11081915", "10091915", "09101915", "08111915", "07121915", "06011916", "04021916", "05031916", "03041916", "03051916", "01061916", "01071916", "31071916", "29081916", "28091916", "27101916", "26111916", "25121916", "24011917", "22021917", "24031917", "22041917", "22051917", "20061917", "20071917", "18081917", "17091917", "17101917", "15111917", "15121917", "13011918", "12021918", "13031918", "12041918", "11051918", "09061918", "09071918", "07081918", "06091918", "06101918", "04111918", "04121918", "03011919", "01021919", "03031919", "01041919", "01051919", "30051919", "28061919", "28071919", "26081919", "25091919", "24101919", "23111919", "23121919", "22011920", "20021920", "21031920", "19041920", "19051920", "17061920", "16071920", "15081920", "13091920", "13101920", "11111920", "11121920", "10011921", "09021921", "10031921", "09041921", "08051921", "07061921", "06071921", "04081921", "03091921", "02101921", "31101921", "30111921", "30121921", "28011922", "27021922", "29031922", "28041922", "27051922", "26061922", "25071922", "23081922", "22091922", "21101922", "20111922", "19121922", "18011923", "16021923", "18031923", "17041923", "16051923", "15061923", "15071923", "13081923", "11091923", "11101923", "09111923", "09121923", "07011924", "06021924", "06031924", "05041924", "04051924", "03061924", "03071924", "01081924", "31081924", "29091924", "29101924", "27111924", "27121924", "25011925", "24021925", "25031925", "24041925", "23051925", "22061925", "21071925", "20081925", "19091925", "18101925", "17111925", "16121925", "15011926", "13021926", "15031926", "13041926", "12051926", "11061926", "10071926", "09081926", "08091926", "07101926", "06111926", "06121926", "04011927", "03021927", "04031927", "03041927", "02051927", "31051927", "30061927", "29071927", "28081927", "26091927", "26101927", "25111927", "25121927", "23011928", "22021928", "22031928", "21041928", "20051928", "18061928", "18071928", "16081928", "15091928", "14101928", "13111928", "13121928", "12011929", "10021929", "12031929", "10041929", "10051929", "08061929", "07071929", "06081929", "04091929", "03101929", "02111929", "02121929", "31121929", "30011930", "01031930", "31031930", "29041930", "29051930", "27061930", "26071930", "25081930", "23091930", "22101930", "21111930", "21121930", "19011931", "18021931", "20031931", "19041931", "18051931", "17061931", "16071931", "14081931", "13091931", "12101931", "10111931", "10121931", "08011932", "07021932", "08031932", "07041932", "06051932", "05061932", "04071932", "03081932", "01091932", "01101932", "30101932", "29111932", "28121932", "26011933", "25021933", "27031933", "25041933", "25051933", "24061933", "23071933", "22081933", "20091933", "20101933", "18111933", "18121933", "16011934", "15021934", "16031934", "14041934", "14051934", "13061934", "12071934", "11081934", "10091934", "09101934", "08111934", "07121934", "06011935", "04021935", "06031935", "04041935", "03051935", "02061935", "01071935", "31071935", "30081935", "28091935", "28101935", "27111935", "26121935", "25011936", "23021936", "24031936", "22041936", "21051936", "20061936", "19071936", "18081936", "16091936", "16101936", "15111936", "14121936", "13011937", "12021937", "13031937", "12041937", "11051937", "09061937", "09071937", "07081937", "05091937", "05101937", "04111937", "03121937", "02011938", "01021938", "03031938", "01041938", "01051938", "30051938", "28061938", "28071938", "26081938", "24091938", "24101938", "23111938", "22121938", "21011939", "20021939", "22031939", "20041939", "20051939", "18061939", "17071939", "16081939", "14091939", "13101939", "12111939", "11121939", "10011940", "09021940", "10031940", "08041940", "08051940", "07061940", "06071940", "04081940", "03091940", "02101940", "31101940", "30111940", "29121940", "28011941", "27021941", "28031941", "27041941", "27051941", "25061941", "25071941", "23081941", "22091941", "21101941", "20111941", "19121941", "17011942", "16021942", "17031942", "16041942", "16051942", "14061942", "14071942", "13081942", "11091942", "11101942", "09111942", "09121942", "07011943", "05021943", "07031943", "05041943", "05051943", "03061943", "03071943", "02081943", "31081943", "30091943", "30101943", "28111943", "28121943", "26011944", "25021944", "25031944", "23041944", "23051944", "21061944", "21071944", "19081944", "18091944", "18101944", "16111944", "16121944", "15011945", "13021945", "15031945", "13041945", "12051945", "11061945", "10071945", "09081945", "07091945", "07101945", "05111945", "05121945", "04011946", "03021946", "04031946", "03041946", "02051946", "31051946", "30061946", "29071946", "27081946", "26091946", "25101946", "24111946", "24121946", "23011947", "22021947", "23031947", "22041947", "21051947", "19061947", "19071947", "17081947", "15091947", "15101947", "13111947", "13121947", "12011948", "11021948", "11031948", "10041948", "10051948", "08061948", "07071948", "06081948", "04091948", "03101948", "02111948", "01121948", "31121948", "30011949", "28021949", "30031949", "29041949", "28051949", "27061949", "26071949", "25081949", "23091949", "22101949", "21111949", "20121949", "19011950", "17021950", "19031950", "18041950", "18051950", "16061950", "16071950", "14081950", "13091950", "12101950", "10111950", "10121950", "08011951", "07021951", "08031951", "07041951", "07051951", "05061951", "05071951", "03081951", "02091951", "02101951", "31101951", "30111951", "29121951", "27011952", "26021952", "26031952", "25041952", "24051952", "23061952", "22071952", "21081952", "20091952", "19101952", "18111952", "18121952", "16011953", "15021953", "16031953", "14041953", "14051953", "12061953", "12071953", "10081953", "09091953", "09101953", "07111953", "07121953", "06011954", "04021954", "06031954", "04041954", "03051954", "02061954", "01071954", "30071954", "29081954", "28091954", "27101954", "26111954", "26121954", "25011955", "23021955", "25031955", "23041955", "22051955", "21061955", "20071955", "18081955", "17091955", "16101955", "15111955", "15121955", "14011956", "12021956", "13031956", "12041956", "11051956", "09061956", "09071956", "07081956", "05091956", "05101956", "03111956", "03121956", "02011957", "31011957", "02031957", "01041957", "30041957", "30051957", "28061957", "28071957", "26081957", "24091957", "24101957", "22111957", "22121957", "20011958", "19021958", "21031958", "20041958", "19051958", "18061958", "17071958", "16081958", "14091958", "13101958", "12111958", "11121958", "10011959", "08021959", "10031959", "09041959", "08051959", "07061959", "07071959", "05081959", "04091959", "03101959", "01111959", "01121959", "30121959", "29011960", "27021960", "28031960", "26041960", "26051960", "25061960", "24071960", "23081960", "21091960", "21101960", "19111960", "19121960", "17011961", "16021961", "17031961", "16041961", "15051961", "14061961", "13071961", "12081961", "11091961", "10101961", "09111961", "08121961", "07011962", "06021962", "07031962", "05041962", "05051962", "03061962", "02071962", "01081962", "31081962", "29091962", "29101962", "28111962", "27121962", "26011963", "25021963", "26031963", "24041963", "24051963", "22061963", "21071963", "20081963", "18091963", "18101963", "17111963", "17121963", "15011964", "14021964", "15031964", "13041964", "12051964", "11061964", "10071964", "08081964", "07091964", "06101964", "05111964", "05121964", "03011965", "02021965", "04031965", "03041965", "02051965", "31051965", "30061965", "29071965", "27081965", "26091965", "25101965", "24111965", "23121965", "22011966", "21021966", "23031966", "21041966", "21051966", "19061966", "19071966", "17081966", "15091966", "15101966", "13111966", "13121966", "11011967", "10021967", "12031967", "10041967", "10051967", "09061967", "08071967", "07081967", "05091967", "04101967", "03111967", "02121967", "01011968", "30011968", "29021968", "29031968", "28041968", "28051968", "26061968", "26071968", "24081968", "23091968", "22101968", "21111968", "20121968", "19011969", "17021969", "19031969", "17041969", "17051969", "15061969", "15071969", "14081969", "12091969", "12101969", "10111969", "10121969", "08011970", "07021970", "08031970", "07041970", "06051970", "05061970", "04071970", "03081970", "01091970", "01101970", "31101970", "29111970", "29121970", "27011971", "26021971", "27031971", "26041971", "25051971", "23061971", "23071971", "21081971", "20091971", "20101971", "19111971", "18121971", "17011972", "16021972", "16031972", "14041972", "14051972", "12061972", "11071972", "10081972", "08091972", "08101972", "07111972", "06121972", "05011973", "04021973", "06031973", "04041973", "03051973", "02061973", "01071973", "30071973", "29081973", "27091973", "27101973", "25111973", "25121973", "24011974", "23021974", "24031974", "23041974", "22051974", "21061974", "20071974", "18081974", "17091974", "16101974", "15111974", "14121974", "13011975", "12021975", "13031975", "12041975", "12051975", "10061975", "10071975", "08081975", "06091975", "06101975", "04111975", "04121975", "02011976", "01021976", "01031976", "31031976", "30041976", "30051976", "28061976", "28071976", "26081976", "24091976", "24101976", "22111976", "22121976", "20011977", "19021977", "20031977", "19041977", "19051977", "17061977", "17071977", "15081977", "14091977", "13101977", "12111977", "11121977", "10011978", "08021978", "10031978", "08041978", "08051978", "06061978", "06071978", "05081978", "03091978", "03101978", "01111978", "01121978", "30121978", "29011979", "27021979", "29031979", "27041979", "27051979", "25061979", "25071979", "23081979", "22091979", "22101979", "20111979", "20121979", "18011980", "17021980", "17031980", "16041980", "15051980", "13061980", "13071980", "11081980", "10091980", "10101980", "08111980", "08121980", "07011981", "05021981", "07031981", "05041981", "05051981", "03061981", "02071981", "01081981", "30081981", "29091981", "28101981", "27111981", "27121981", "26011982", "24021982", "26031982", "24041982", "24051982", "22061982", "21071982", "20081982", "18091982", "18101982", "16111982", "16121982", "15011983", "14021983", "15031983", "14041983", "13051983", "12061983", "11071983", "09081983", "08091983", "07101983", "05111983", "05121983", "04011984", "02021984", "03031984", "02041984", "02051984", "31051984", "30061984", "29071984", "27081984", "26091984", "25101984", "23111984", "23121984", "22011985", "20021985", "22031985", "21041985", "20051985", "19061985", "18071985", "17081985", "15091985", "15101985", "13111985", "13121985", "11011986", "10021986", "11031986", "10041986", "09051986", "08061986", "08071986", "06081986", "05091986", "04101986", "03111986", "02121986", "01011987", "30011987", "01031987", "30031987", "29041987", "28051987", "27061987", "26071987", "25081987", "24091987", "23101987", "22111987", "21121987", "20011988", "18021988", "19031988", "17041988", "16051988", "15061988", "14071988", "13081988", "12091988", "11101988", "10111988", "10121988", "08011989", "07021989", "08031989", "07041989", "06051989", "04061989", "04071989", "02081989", "01091989", "30091989", "30101989", "29111989", "29121989", "27011990", "26021990", "27031990", "26041990", "25051990", "23061990", "23071990", "21081990", "20091990", "19101990", "18111990", "18121990", "16011991", "15021991", "17031991", "15041991", "15051991", "13061991", "12071991", "11081991", "09091991", "08101991", "07111991", "07121991", "05011992", "04021992", "05031992", "04041992", "03051992", "02061992", "01071992", "30071992", "29081992", "27091992", "26101992", "25111992", "25121992", "23011993", "22021993", "24031993", "22041993", "22051993", "21061993", "20071993", "18081993", "17091993", "16101993", "14111993", "14121993", "12011994", "11021994", "13031994", "12041994", "11051994", "10061994", "09071994", "08081994", "06091994", "06101994", "04111994", "03121994", "02011995", "31011995", "02031995", "01041995", "30041995", "30051995", "29061995", "28071995", "27081995", "25091995", "25101995", "23111995", "23121995", "21011996", "19021996", "20031996", "18041996", "18051996", "17061996", "16071996", "15081996", "13091996", "13101996", "12111996", "11121996", "10011997", "08021997", "10031997", "08041997", "07051997", "06061997", "05071997", "04081997", "02091997", "02101997", "01111997", "01121997", "30121997", "29011998", "27021998", "29031998", "27041998", "26051998", "25061998", "24071998", "23081998", "21091998", "21101998", "20111998", "19121998", "18011999", "17021999", "18031999", "17041999", "16051999", "15061999", "14071999", "12081999", "11091999", "10101999", "09111999", "09121999", "08012000", "07022000", "07032000", "06042000", "05052000", "03062000", "03072000", "01082000", "30082000", "28092000", "28102000", "27112000", "27122000", "26012001", "24022001", "26032001", "25042001", "24052001", "22062001", "22072001", "20082001", "18092001", "17102001", "16112001", "16122001", "15012002", "13022002", "15032002", "14042002", "13052002", "12062002", "11072002", "10082002", "08092002", "07102002", "06112002", "05122002", "04012003", "02022003", "04032003", "03042003", "02052003", "01062003", "01072003", "30072003", "29082003", "27092003", "26102003", "25112003", "24122003", "23012004", "21022004", "22032004", "20042004", "20052004", "19062004", "18072004", "17082004", "15092004", "15102004", "14112004", "13122004", "12012005", "10022005", "11032005", "10042005", "09052005", "08062005", "07072005", "06082005", "05092005", "04102005", "03112005", "03122005", "01012006", "31012006", "01032006", "30032006", "29042006", "28052006", "27062006", "26072006", "25082006", "24092006", "23102006", "22112006", "22122006", "20012007", "19022007", "20032007", "18042007", "18052007", "16062007", "15072007", "14082007", "13092007", "13102007", "11112007", "11122007", "10012008", "08022008", "09032008", "07042008", "06052008", "05062008", "04072008", "02082008", "01092008", "01102008", "30102008", "29112008", "29122008", "27012009", "26022009", "28032009", "26042009", "25052009", "24062009", "23072009", "22082009", "20092009", "20102009", "18112009", "18122009", "16012010", "15022010", "17032010", "15042010", "15052010", "13062010", "13072010", "11082010", "10092010", "09102010", "07112010", "07122010", "05012011", "04022011", "06032011", "05042011", "04052011", "03062011", "02072011", "01082011", "30082011", "29092011", "28102011", "26112011", "26122011", "24012012", "23022012", "24032012", "22042012", "22052012", "21062012", "20072012", "19082012", "17092012", "17102012", "15112012", "14122012", "13012013", "11022013", "13032013", "11042013", "11052013", "10062013", "09072013", "08082013", "07092013", "06102013", "04112013", "04122013", "02012014", "01022014", "02032014", "01042014", "30042014", "30052014", "28062014", "28072014", "27082014", "25092014", "25102014", "23112014", "23122014", "21012015", "20022015", "21032015", "20042015", "19052015", "18062015", "17072015", "16082015", "14092015", "14102015", "13112015", "12122015", "11012016", "10022016", "10032016", "08042016", "08052016", "06062016", "06072016", "04082016", "02092016", "02102016", "01112016", "30112016", "30122016", "29012017", "28022017", "29032017", "27042017", "27052017", "25062017", "24072017", "23082017", "21092017", "21102017", "19112017", "19122017", "18012018", "17022018", "18032018", "17042018", "16052018", "15062018", "14072018", "12082018", "11092018", "10102018", "09112018", "08122018", "07012019", "06022019", "08032019", "06042019", "06052019", "04062019", "04072019", "02082019", "31082019", "30092019", "29102019", "28112019", "27122019", "26012020", "25022020", "25032020", "24042020", "24052020", "22062020", "22072020", "20082020", "18092020", "18102020", "16112020", "16122020", "14012021", "13022021", "14032021", "13042021", "13052021", "11062021", "11072021", "09082021", "08092021", "07102021", "06112021", "05122021", "04012022", "02022022", "04032022", "02042022", "02052022", "31052022", "30062022", "30072022", "28082022", "27092022", "26102022", "25112022", "25122022", "23012023", "21022023", "23032023", "21042023", "21052023", "19062023", "19072023", "17082023", "16092023", "16102023", "15112023", "14122023", "13012024", "11022024", "11032024", "10042024", "09052024", "07062024", "07072024", "05082024", "04092024", "04102024", "03112024", "02122024", "01012025", "31012025", "01032025", "30032025", "29042025", "28052025", "26062025", "26072025", "24082025", "23092025", "23102025", "22112025", "21122025", "20012026", "18022026", "20032026", "18042026", "18052026", "16062026", "15072026", "14082026", "12092026", "12102026", "11112026", "10122026", "09012027", "08022027", "09032027", "08042027", "07052027", "06062027", "05072027", "03082027", "02092027", "01102027", "31102027", "29112027", "29122027", "28012028", "26022028", "27032028", "26042028", "25052028", "24062028", "23072028", "22082028", "20092028", "19102028", "18112028", "17122028", "16012029", "14022029", "16032029", "15042029", "14052029", "13062029", "13072029", "11082029", "10092029", "09102029", "07112029", "07122029", "05012030", "04022030", "05032030", "04042030", "03052030", "02062030", "02072030", "01082030", "30082030", "29092030", "28102030", "26112030", "26122030", "24012031", "23022031", "24032031", "23042031", "22052031", "21062031", "21072031", "20082031", "18092031", "17102031", "16112031", "15122031", "14012032", "12022032", "13032032", "11042032", "10052032", "09062032", "09072032", "08082032", "06092032", "06102032", "04112032", "04122032", "02012033", "01022033", "02032033", "01042033", "30042033", "29052033", "28062033", "28072033", "26082033", "25092033", "24102033", "23112033", "23122033", "21012034", "20022034", "21032034", "20042034", "19052034", "17062034", "17072034", "15082034", "14092034", "13102034", "12112034", "12122034", "11012035", "09022035", "11032035", "09042035", "09052035", "07062035", "06072035", "05082035", "03092035", "02102035", "01112035", "01122035", "30122035", "29012036", "28022036", "29032036", "27042036", "27052036", "25062036", "24072036", "23082036", "21092036", "20102036", "19112036", "19122036", "17012037", "16022037", "18032037", "17042037", "16052037", "15062037", "14072037", "12082037", "11092037", "10102037", "08112037", "08122037", "07012038", "05022038", "07032038", "06042038", "05052038", "04062038", "03072038", "02082038", "31082038", "30092038", "29102038", "27112038", "27122038", "26012039", "24022039", "26032039", "24042039", "24052039", "23062039", "22072039", "21082039", "19092039", "19102039", "17112039", "17122039", "15012040", "14022040", "14032040", "13042040", "12052040", "11062040", "10072040", "09082040", "07092040", "07102040", "06112040", "05122040", "04012041", "02022041", "04032041", "02042041", "01052041", "31052041", "29062041", "29072041", "28082041", "26092041", "26102041", "25112041", "24122041", "23012042", "21022042", "23032042", "21042042", "20052042", "19062042", "18072042", "17082042", "15092042", "15102042", "14112042", "14122042", "12012043", "11022043", "12032043", "11042043", "10052043", "08062043", "08072043", "06082043", "04092043", "04102043", "03112043", "03122043", "02012044", "31012044", "01032044", "30032044", "29042044", "28052044", "26062044", "26072044", "24082044", "23092044", "22102044", "21112044", "21122044", "19012045", "18022045", "20032045", "18042045", "18052045", "16062045", "15072045", "14082045", "12092045", "12102045", "10112045", "10122045", "08012046", "07022046", "09032046", "07042046", "07052046", "05062046", "05072046", "03082046", "02092046", "01102046", "31102046", "29112046", "28122046", "27012047", "26022047", "27032047", "26042047", "26052047", "24062047", "24072047", "23082047", "21092047", "20102047", "19112047", "18122047", "16012048", "15022048", "16032048", "14042048", "14052048", "12062048", "12072048", "11082048", "10092048", "09102048", "07112048", "07122048", "05012049", "03022049", "05032049", "03042049", "03052049", "02062049", "01072049", "31072049", "30082049", "28092049", "28102049", "26112049", "26122049", "24012050", "23022050", "24032050", "22042050", "22052050", "20062050", "20072050", "19082050", "17092050", "17102050", "15112050", "15122050", "14012051", "12022051", "14032051", "12042051", "11052051", "10062051", "09072051", "08082051", "06092051", "06102051", "05112051", "04122051", "03012052", "02022052", "02032052", "01042052", "30042052", "29052052", "28062052", "27072052", "26082052", "24092052", "24102052", "22112052", "22122052", "21012053", "20022053", "21032053", "20042053", "19052053", "17062053", "17072053", "15082053", "13092053", "13102053", "11112053", "11122053", "10012054", "09022054", "10032054", "09042054", "09052054", "07062054", "06072054", "05082054", "03092054", "02102054", "01112054", "30112054", "30122054", "29012055", "27022055", "29032055", "28042055", "28052055", "26062055", "25072055", "24082055", "22092055", "21102055", "20112055", "19122055", "18012056", "17022056", "17032056", "16042056", "16052056", "14062056", "14072056", "12082056", "11092056", "10102056", "08112056", "08122056", "06012057", "05022057", "06032057", "05042057", "05052057", "03062057", "03072057", "01082057", "31082057", "30092057", "29102057", "27112057", "27122057", "25012058", "24022058", "25032058", "24042058", "23052058", "22062058", "21072058", "20082058", "19092058", "18102058", "17112058", "17122058", "15012059", "14022059", "15032059", "13042059", "13052059", "11062059", "11072059", "09082059", "08092059", "08102059", "06112059", "06122059", "05012060", "03022060", "04032060", "02042060", "01052060", "31052060", "29062060", "28072060", "27082060", "26092060", "25102060", "24112060", "24122060", "23012061", "21022061", "23032061", "21042061", "20052061", "19062061", "18072061", "16082061", "15092061", "15102061", "13112061", "13122061", "12012062", "10022062", "12032062", "11042062", "10052062", "08062062", "08072062", "06082062", "04092062", "04102062", "03112062", "02122062", "01012063", "30012063", "01032063", "31032063", "30042063", "29052063", "27062063", "27072063", "25082063", "24092063", "23102063", "22112063", "21122063", "20012064", "18022064", "19032064", "18042064", "17052064", "16062064", "15072064", "14082064", "12092064", "12102064", "10112064", "09122064", "08012065", "06022065", "08032065", "07042065", "06052065", "05062065", "05072065", "03082065", "02092065", "01102065", "31102065", "29112065", "28122065", "27012066", "25022066", "27032066", "25042066", "25052066", "24062066", "24072066", "22082066", "21092066", "20102066", "19112066", "18122066", "16012067", "15022067", "16032067", "15042067", "14052067", "13062067", "13072067", "11082067", "10092067", "10102067", "08112067", "08122067", "06012068", "04022068", "05032068", "03042068", "03052068", "01062068", "01072068", "30072068", "29082068", "28092068", "27102068", "26112068", "25122068", "24012069", "23022069", "24032069", "22042069", "22052069", "20062069", "20072069", "18082069", "17092069", "16102069", "15112069", "15122069", "13012070", "12022070", "14032070", "12042070", "11052070", "10062070", "09072070", "08082070", "06092070", "05102070", "04112070", "04122070", "02012071", "01022071", "03032071", "02042071", "01052071", "30052071", "29062071", "28072071", "26082071", "25092071", "24102071", "23112071", "22122071", "21012072", "20022072", "21032072", "19042072", "19052072", "17062072", "17072072", "15082072", "13092072", "13102072", "11112072", "11122072", "09012073", "08022073", "10032073", "09042073", "08052073", "07062073", "06072073", "05082073", "03092073", "02102073", "01112073", "30112073", "30122073", "28012074", "27022074", "29032074", "27042074", "27052074", "26062074", "25072074", "23082074", "22092074", "21102074", "20112074", "19122074", "18012075", "16022075", "18032075", "16042075", "16052075", "15062075", "14072075", "13082075", "11092075", "11102075", "09112075", "09122075", "07012076", "06022076", "06032076", "05042076", "04052076", "03062076", "02072076", "01082076", "30082076", "29092076", "29102076", "27112076", "27122076", "26012077", "24022077", "25032077", "24042077", "23052077", "21062077", "21072077", "19082077", "18092077"];
  
  hijriMonths:string[]=['مُحرّم','صفر','ربيع الأول','ربيع الثاني','جُمادى الأولى','جُمادى الآخرة','رجب','شعبان','رمضان','شوال','ذو القعدة','ذو الحجة'];
    daysDesc:string[]=['الاحد','الاثنين','الثلاثاء','الاربعاء','الخميس','الجمعة','السبت',];
  
  constructor() { }

  UmAlQuraMonthDays(umAlQuraDate:string) {
    const dateParts = umAlQuraDate.split('/');
    var monthIndex = ((parseInt(dateParts[2]) - 1318) * 12) + ((parseInt(dateParts[1])) - 1);
    let startDateStr = this.umAlQuraDatesInfo[monthIndex];
    let nextStartDateStr = this.umAlQuraDatesInfo[monthIndex + 1];
    let monthDays = ((new Date(parseInt(nextStartDateStr.substring(4)), parseInt(nextStartDateStr.substring(2, 4)) - 1, parseInt(nextStartDateStr.substring(0, 2)))).valueOf() - (new Date(parseInt(startDateStr.substring(4)), parseInt(startDateStr.substring(2, 4)) - 1, parseInt(startDateStr.substring(0, 2)))).valueOf()) / 86400000;
    return monthDays;
};

/**
* isValidUmAlQuraDate
* @param {string} umAlQuraDate
*/
 isValidUmAlQuraDate(umAlQuraDate:string) {
    // dd/MM/yyyy
    const dateParts = umAlQuraDate.split('/');
    if (dateParts[0] == '30' && this.UmAlQuraMonthDays(umAlQuraDate) < 30) {
        return false;
    }
    return true;
};

GetUmAlQuraByIndex (index:number) {
    let umAlQuraYear = Math.trunc(index / 12) + 1318;
    let umAlQuraMonth = (index % 12) + 1;
    return '01/' + (umAlQuraMonth.toString().length == 1 ? '0' + umAlQuraMonth.toString() : umAlQuraMonth.toString()) + '/' + umAlQuraYear.toString();
};

 getUmAlQuraIndex(umAlQuraDate:string) {
    let dateParts = umAlQuraDate.split('/');
    let monthIndex = ((parseInt(dateParts[2]) - 1318) * 12) + ((parseInt(dateParts[1])) - 1);
    return monthIndex;
};

 umAlQuraAddDays(umAlQuraDate:string, days:number) {
    //dd/MM/yyyy string
    let dateParts = umAlQuraDate.split('/');
    let monthIndex = this.getUmAlQuraIndex(umAlQuraDate);
    let year = parseInt(dateParts[2]);
    let month = parseInt(dateParts[1]);
    let day = parseInt(dateParts[0]);

    if (days >= 0) {
        day = day + days;
        let monthDays = this.UmAlQuraMonthDays(umAlQuraDate);
        if (day > monthDays) {
            day = day - monthDays
            month = month + 1;
            if (month > 12) {
                month = 1;
                year = year + 1
            }
        }
    }
    else if (days < 0) {
        day = day + days;
        if (day < 1) {
            day = this.UmAlQuraMonthDays(this.GetUmAlQuraByIndex(monthIndex - 1)) + day;
            month = month - 1;
            if (month < 1) {
                month = 12;
                year = year - 1;
            }
        }
    }
    return (day.toString().length == 1 ? '0' + day.toString() : day.toString()) + '/' + (month.toString().length == 1 ? '0' + month.toString() : month.toString()) + '/' + year.toString();
    //return  dd/MM/yyyy string
};

  umAlQuraToGregorian(umAlQuraDate:string) {
    // dd/MM/yyyy
    // check end month date
    if (!this.isValidUmAlQuraDate(umAlQuraDate)) {
        throw 'invalid umAlQura Date ';
    }
    const dateParts = umAlQuraDate.split('/');
    var monthIndex = ((parseInt(dateParts[2]) - 1318) * 12) + ((parseInt(dateParts[1])) - 1);
    let startDateStr = this.umAlQuraDatesInfo[monthIndex];
    let days = parseInt(startDateStr.substring(0, 2)) + parseInt(dateParts[0]) - 1;
    let date = new Date(parseInt(startDateStr.substring(4)), parseInt(startDateStr.substring(2, 4)) - 1, 1)
    date.setDate(days);
    return date;

    //return Date object
};

 gregorianToUmAlQura(gregorianDate:Date):HijriDate {
    // Date object
    gregorianDate = new Date(gregorianDate.getFullYear(), gregorianDate.getMonth(), gregorianDate.getDate());
    let gregStr = ((gregorianDate.getMonth() + 1).toString().length == 1 ? '0' + (gregorianDate.getMonth() + 1).toString() : (gregorianDate.getMonth() + 1).toString()) + gregorianDate.getFullYear().toString();
    let umAlQuraInfoIndex = this.umAlQuraDatesInfo.findIndex((m) => m.match(gregStr));
    let umAlQuraInfo:string = this.umAlQuraDatesInfo[umAlQuraInfoIndex];
    
    let umAlQuraYear = Math.trunc(umAlQuraInfoIndex / 12) + 1318;
    let umAlQuraMonth = (umAlQuraInfoIndex % 12) + 1;
    let umAlQuraFirstDay = '01/' + (umAlQuraMonth.toString().length == 1 ? '0' + umAlQuraMonth.toString() : umAlQuraMonth.toString()) + '/' + umAlQuraYear.toString();
    let daysDiff:number = (gregorianDate.valueOf() - (new Date(parseInt(umAlQuraInfo.substring(4)), parseInt(umAlQuraInfo.substring(2, 4)) - 1, parseInt(umAlQuraInfo.substring(0, 2))).valueOf())) / 86400000;
    let umAlQuraDateStr=this.umAlQuraAddDays(umAlQuraFirstDay, daysDiff);
    let umAlQuraParts=umAlQuraDateStr.split('/');
    let umAlQuraDate:HijriDate= new HijriDate();
    umAlQuraDate.date=umAlQuraDateStr; // dd/MM/yyyy string
    umAlQuraDate.year=parseInt(umAlQuraParts[2]);
    umAlQuraDate.month=parseInt(umAlQuraParts[1]);
    umAlQuraDate.day=parseInt(umAlQuraParts[0]);
    umAlQuraDate.monthName=this.hijriMonths[umAlQuraDate.month];
    umAlQuraDate.dayName=this.daysDesc[gregorianDate.getDay()];
    umAlQuraDate.fullDate= this.daysDesc[gregorianDate.getDay()] + ', ' + umAlQuraDate.day + ' '  + this.hijriMonths[umAlQuraDate.month] + umAlQuraDate.year ;
    return umAlQuraDate;
};
getCurrentDate():HijriDate{
    let crDate=new Date();
    let crDateHijri =this.gregorianToUmAlQura(crDate);
    return crDateHijri;
  }
}
