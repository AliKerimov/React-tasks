# React Router in Action

React Router ilə basic app yazılacaq. Ana səhifədə Albums səhifəsinə `/albums` keçid üçün link yerləşdirin.

`/albums` səhifəsinin contentini `https://jsonplaceholder.typicode.com/albums` endpointinə fetch ataraq çəkin. Hər bir albuma click etdikdə `/albums/:id` səhifəsinə keçid baş versin.

`/albums/:id` səhifəsinin contenti isə `https://jsonplaceholder.typicode.com/albums/:id/photos` endpointindən gəlməlidir.
Bu səhifədəki photolara click etdikdə isə `/photos/:id` səhifəsinə navigate edin.

Əlavə olaraq 404 Page hazırlayın, qeyd edilməmiş pathlərə daxil olduqda xüsusi 404 səhifəsi göstərilsin.

## Links
- https://reactrouter.com