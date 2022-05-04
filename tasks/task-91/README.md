# Custom hooks

Öncəki taskımızda `AuthContext` yaratdıq, user login olduqda vəya olubsa, bu context user'in ID'sini saxlayır.
User səhifədə vaxt keçirdikcə, hansı ki o ilk dəfə səhifəyə daxil olduğu zaman valid authentikasiyası var idi,
bir müddət sonra tokeni invoke ola bilər. Məsələn başqa bir browserdən daxil olub `logout from other devices` etsə.

Bu səbəbdən biz bütün ajax sorğularında response status code-a baxmalı, əgər `401 Unauthorized` gəlibsə, `AuthContext`-in stateni resetləməliyik,
beləliklə user login səhifəsinə redirect olmuş olacaq.

Ancaq hər dəfə bütün fetch sorğularının status kodunu manual yoxlamaq sıxıcı olduğu üçün, fetch() methoduna wrapper yazacayıq.
Məsələn `myFetch()`, bu funksiya özünə gələn bütün arqumentləri modify etmədən, birbaşa `fetch()` methoduna ötürəcək,
sadəcə gələn responsenin status koduna baxacaq. Əgər `401` gəlibsə, `useContext()` ilə `AuthContext`-ni götürərək, onun `userId`-sini null edəcək.

Daha sonra bu methodu istifadə etməyə çalışın, buglar çıxacaq və işləməyəcək. Bunun səbəbini və həllini araşdırıb tapın.

## Note
`userId = null;` yazaraq yox, `setUserId(null);` şəklində etməyi unutmayın.
