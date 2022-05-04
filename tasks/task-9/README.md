# useContext() for Auth

```jsx
<div>
  <div>This is public content</div>
  <RequireAuth>You need to login to see this</RequireAuth>
  <RequireAuth permission="media">You need to both logged in and and have media permission to see this</RequireAuth>
</div>
```

Userin auth olub olmamasından, olubsa belə onun permissionlarından asılı olaraq UI render edilməlidir.
Bu state səhifə üçün unikaldır və virtual-DOM hierarcy'sində ən üstdə tutulmalıdır.

`AuthContext` adlı context yaradın. Value olaraq `{ userId: 0, permissions: {} }` tipli obyekt saxlayacaq.
Əgər `userId` null'dursa, bu userin login olmadığını bildirir, user sadəcə login səhifəsini görə biləcək.

`<RequireAuth/>` componenti yaradın, `AuthContext`-də `userId` null olduğu halda vəya,
permission propsuna ötürülən permission contextin permissionlarında yoxdursa öz childlarını render etməsin.
