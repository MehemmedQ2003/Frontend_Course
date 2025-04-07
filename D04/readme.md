# [1]

## let a = 5; İfadədə a birbaşa ədəddir. Burada [a] --> birbaşa 5-ə bərabərdir.
## let a = yeni Rəqəm(5); İfadədə a ədədi obyektdir. Burada isə Number(5) --> hər hansı bir dəyişkənə 5 qiyməti verilir. Ondan sonra a dəyişkəninə atılır.


# [2]

## [Private|Member] termini sinif və ya obyekt daxilində üzv (dəyişən və ya funksiya) adətən proqramlaşdırma dilində əlçatanlığını təsvir edir. Üzv özəl olaraq qeyd edildikdə, ona yalnız eyni sinif daxilində daxil olmaq mümkündür və kənardan daxil olmaq mümkün deyil.


## class Counter {
##     #count;

##     constructor() {
##       this.#count = 0;
##     }

##     increment() {
##       this.#count++;
##       console.log('Count:', this.#count);
##     }

##     #reset() {
##       this.#count = 0;
##       console.log('Count reset to 0');
##     }
## }

## const myCounter = new Counter();
## myCounter.increment();




## [3]

## Prototiplər JavaScript obyektlərinin xüsusiyyətləri bir-birindən miras alma mexanizmidir.
## _proto_ isə daxil edilən hər hansı bir obyektə bir prototype əlavə etməkdir 


## [4]

##  HTMLElement.prototype.changeBgColor = function(color){
##     this.setAttribute("style", "background-color: " + color);
##  }

