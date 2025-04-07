# Layered Architecture patterni, tətbiqlərin dizaynında geniş istifadə edilən bir modeldir. Bu pattern, tətbiqin müxtəlif funksional komponentlərini müstəqil və təkrar istifadə edilə bilən qatlara ayırmağa yönəlib. Hər bir qat, müəyyən bir məsuliyyət daşıyır və digər qatlarla minimum əlaqədə olmağa çalışır. Bu, kodun saxlanmasını, test edilməsini və genişlənməsini asanlaşdırır.

[////] Layered Architecture Pattern-in Qatları

- Presentation Layer (Təqdimat Qatı):
    [1] -- İstifadəçilə qarşılıqlı əlaqəni idarə edir.
    [2] -- UI (İstifadəçi İnterfeysi) və UX (İstifadəçi Təcrübəsi) komponentlərini əhatə edir.
    [3] -- Məlumatları təqdim edir və istifadəçilərin əmrlərini alır.

- Application Layer (Tətbiq Qatı):
    [1] -- Tətbiqin iş məntiqini idarə edir.
    [2] -- İstifadəçilərin tələblərini və əmrlərini işlədir.
    [3] -- Digər qatlarla qarşılıqlı əlaqəni təmin edir.

- Business Logic Layer (Biznes Məntiqi Qatı):
    [1] Tətbiqin əsas məntiqi və qaydalarını saxlayır.
    [2] Məlumatların doğruluğunu və ardıcıllığını təmin edir.
    [3] Tətbiqin iş qaydalarına uyğun fəaliyyət göstərir.


- Data Access Layer (Məlumat Əlçatanlıq Qatı):
    [1] Məlumatların saxlanmasını və əldə edilməsini idarə edir.
    [2] Məlumat bazası ilə qarşılıqlı əlaqəni təmin edir.
    [3] SQL sorğularını, ORM-ləri (Obyekt-Relasional Mapping) və s. əhatə edir.


[////] Layered Architecture Pattern-in Üstünlükləri

- Modularlıq:
    [1] -- Hər bir qat müstəqil şəkildə inkişaf etdirilə və yenilənə bilər.
    [2] -- Bir qatın dəyişdirilməsi digər qatları təsir etməz.

- Təkrar istifadə oluna bilən kod:
    [1] -- Qatlar arasında dəqiq interfeyslər yaratmaq, kodun təkrar istifadə olunmasını asanlaşdırır.

- Test edilməsi asan:
    [1] -- Hər bir qatın müstəqil şəkildə test edilməsi mümkündür.
    [2] -- Unit testləri və inteqrasiya testləri daha səmərəli şəkildə həyata keçirilə bilər.

- Təmir və Dəstək:
    [1] -- Kodun saxlanması və dəstəklənməsi daha asandır.
    [2] -- Problemlərin mənbəyini tapmaq və həll etmək daha asandır.


###### Nəticə

# Layered Architecture patterni, tətbiqlərin dizaynında səmərəli və təkrar istifadə oluna bilən strukturlar yaratmaq üçün ideal bir modeldir. Bu patternin üstünlükləri və dezavantajları diqqətlə qiymətləndirilməli və konkret layihənin tələblərinə uyğun şəkildə tətbiq edilməlidir. Beləliklə, tətbiqinizin saxlanmasını, test edilməsini və genişlənməsini asanlaşdıra bilərsiniz.