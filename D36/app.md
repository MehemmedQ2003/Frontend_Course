# Bir JavaScript kodunun icrası və onun sistemlə necə əlaqədə olduğunu anlamaq üçün əsasən aşağıdakı mövzulara diqqət yetirmək lazımdır:


# *** CPU (Central Processing Unit) ***

[////] CPU, kompüterin əsas hesablama və idarəetmə mərkəzidir. JavaScript kodu bir CPU tərəfindən icra olunur, bu səbəbdən kodun performansı çox zaman CPU-nun gücü və səmərəliliyi ilə əlaqədardır.



# *** Core (CPU Core) ***

[////] CPU bir neçə nüvədən ibarət ola bilər. Hər bir nüvə müstəqil olaraq işləri icra edə bilər, beləliklə, paralel işləmə mümkün olur. JavaScript əsasən tək nüvədə (single-threaded) işləyir, lakin müasir JavaScript mühərrikləri işləri paralel icra edə bilmək üçün işçi proseslərdən (worker threads) istifadə edə bilər.



# *** Thread ***

[////] Thread, bir proqram daxilində icra edilən ən kiçik müstəqil iş bölməsidir. JavaScript-in ənənəvi olaraq tək thread-li olmasına baxmayaraq, Web Workers kimi texnologiyalar ilə paralel işləmə mümkündür.



# *** Task ***

[////] Task, müəyyən bir iş vahidini təmsil edir. JavaScript-in Event Loop mexanizmi ilə, işlər "tasks" olaraq növbədə saxlanılır və icra olunur. Asinxron əməliyyatlar tamamlandıqda, onlar növbəyə əlavə olunur və növbədəki digər işlər icra edildikdən sonra icra olunur.



# *** Process ***

[////] Process, əməliyyat sistemində icra olunan müstəqil bir proqram vahididir. JavaScript mühərriki (məsələn, V8) bir proses daxilində işləyir. Hər bir brauzer tabı və ya Node.js mühiti öz prosesinə malikdir.



# *** OS (Operating System) ***

[////] Əməliyyat sistemi, prosesləri və resursları idarə edən əsas sistem proqramıdır. JavaScript kodu, OS vasitəsilə CPU və digər resurslarla əlaqə saxlayır.

[////] Bu elementləri nəzərə alaraq, JavaScript kodunun necə icra olunduğunu aşağıdakı kimi izah edə bilərik:
    -- 1. Kod Yazılır və İnterpretasiya Olunur: JavaScript kodu yazılır və JavaScript mühərriki (məsələn, V8) tərəfindən interpretasiya olunur
    -- 2. İşlərin Planlaşdırılması: Event Loop mexanizmi ilə işlər planlaşdırılır və növbəyə qoyulur.
    -- 3. İşlərin İcrası: Növbədəki işlər tək bir thread üzərində icra olunur. Lazım olduqda Web Workers kimi texnologiyalar ilə paralel işlər də icra edilə bilər.
    -- 4. Əməliyyat Sistemindən İstifadə: JavaScript mühərriki əməliyyat sistemindən istifadə edərək CPU və digər resursları idarə edir və lazımi əmrləri icra edir.


# ----------------------------------------------------------------

# console.log('Hello, World!'); // Kod yazılır
# setTimeout(() => {
#   console.log('This runs after 1 second'); // Asinxron iş planlaşdırılır
# }, 1000);
# console.log('This runs immediately'); // Növbədəki işlər icra olunur

# ----------------------------------------------------------------

[////] Yuxarıdakı kod parçasında, console.log('Hello, World!') və console.log('This runs immediately') sinxron olaraq icra olunur, lakin setTimeout funksiyası ilə planlaşdırılan iş növbədə gözləyir və 1 saniyə sonra icra olunur.



# *** Nəticə ***

JavaScript kodunun icrası zamanı CPU, nüvələr, thread-lər, task-lar, proseslər və əməliyyat sistemi mühüm rol oynayır. Bu elementlər birlikdə işləyərək JavaScript kodunun səmərəli və effektiv icrasını təmin edir.