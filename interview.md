JavaScript nədir və necə işləyir?
JavaScript veb üçün skript dilidir. Tərcümə olunan bir dildir, yəni kodunu C və ya C ++ kimi tərcümə etmək üçün bir tərtibçiyə ehtiyac yoxdur. JavaScript kodu birbaşa veb brauzerdə işləyir.



JavaScript veb tətbiqetmələr və ya veb səhifələr yaratmaq üçün HTML və CSS ilə işləyir. JavaScript, Google Chrome, Firefox, Safari, Microsoft Edge, Opera və s. Kimi ən müasir veb brauzerlər tərəfindən dəstəklənir. Android və iPhone üçün əksər mobil brauzerlər indi JavaScript-i də dəstəkləyir.


JavaScript veb səhifələrin dinamik elementlərini idarə edir. Veb brauzerlərdə və son zamanlarda veb serverlərdə də işləyir. Tətbiq Proqramlaşdırma Arayüzləri (API) JavaScript tərəfindən də dəstəklənir və daha çox funksionallıq təmin edir.

DOM Traversing nədir? Nümunələr ilə izah edin.
Tutaq ki, qonşunun evinə getmək istəyirsən. Oraya çatmağın ən sürətli və ən səmərəli yolu nədir?

Evinizdən onların evinə köçün (onların ünvanını artıq bildiyiniz üçün)
Onların ünvanını Google xəritələrində axtarın, sonra Google-un sizə verdiyi istiqamətlərə uyğun olaraq gedin.
Əgər siz birbaşa evinizdən onların evinə köçürsünüzsə, siz DOM-u keçməyə bərabər, qonşu elementdən bir element seçmiş olursunuz.

Əgər onların ünvanını Google-da axtarsanız, document.querySelectorelementləri tapmaq üçün bunun ekvivalentini etmiş olursunuz.
Aşağıya doğru hərəkət
element.querySelector
element.querySelectorAll
element.children
Yuxarıya doğru hərəkət
element.parentElement
element.closest
Yan tərəfə keçmək
element.nextElementSibling
element.previousElementSibling
Birləşdirin parentElement, children, vəindex


DOM Element və DOM Node arasındakı fərq nədir?
*DOM Element-bildiyimiz HTML teqləridir. a, body, li və s. DOM Node isə bura şərhlər iki teqin qovşağı və s. aiddir. *



HTML daxilində var olan hər hansı elementi silmək üçün nə etmək lazımdır?
Məsələn: list.remove() dedikdə list klasına və id-ə sahib olan element silinəcək