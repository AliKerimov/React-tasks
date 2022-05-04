# useEffect() and useContext()

```jsx
<Loading/>
```

### Part 1

Öncəki taskımızda postları ajax ilə çəkib render edən `<Posts/>` componenti hazırladıq,
hansı ki bu component datalar gələnə qədər `Loading...` texti render edir.

`<Posts/>` componentimizi səhifəmizə 2 vəya daha çox sayda yerləşdirək. Bu zaman hər birinin `Loading...` texti ayrı görünəcək.

Bu taskımızda `Loading...` yazısını səhifəmizin üstündə yerləşəcək progress bar ilə əvəz etməliyik.
Səhifəmizdə olan `<Posts/>` componentinin sayından asılı olmayaraq, səhifənin üstündə sadəcə 1 ədəd loading bar olmalıdır.

Bu loading barın state-ni tutmaq üçün `LoadingContext` adlı context yaradın. Bu context value olaraq boolean (isLoading: true/false)
əvəzinə integer (səhifədə ajax sorğusu gözləyən componentlərin sayı) tutmalıdır.

`<Posts/>` componentimizdə isə ajax atmazdan öncə bu counteri 1 vahid artırıb, sorğu bitdikdə isə 1 vahid azaltmalıyıq.
Səhifənin üstündə əgər bu counter 0-dan böyükdürsə loading bar render edin.

### Part 2
Hər dəfə manual bu counteri 1 vahid artırıb azaltmaq yorucudur. İşimizi asanlaşdırmaq üçün `<Loading/>` componenti yaradın.
Bu component heç bir şey render etməyəcək, `return null;` etməlidir. Tək gördüyü iş, özü virtual dom-a mount olduqda
loading contextindəki counteri 1 vahid artırıb, unmount olduqda 1 vahid azaltmaq olacaq.

Beləliklə səhifəmizdə yerindən asılı olmayaraq istənilən yerdə yazılmış `<Loading/>` səhifənin üstündəki 1 ədəd loading barın görünməyinə səbəb olacaq.

### Restrictions
`React.useState()` və `React.useEffect()` hooklarından istifadə edin.
