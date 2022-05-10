# Click away!

![ClickAway](img-1.png)

Özündən kənara edilən clickləri tuta bilən component hazırlayın.
Misal olaraq dropdown, select kimi inputlar özündən kənara click edildikdə close olurlar.

Event listenerları leak etməməyə diqqət edin. Hansısa dom elementə event listener əlavə etdiyiniz kimi
zamanı gəldiyində remove etməyi də unutmayın.

### Bonus
Yazdığınız həlli custom hook'a çevirin. Məsələn `useClickAway(callback)`. Beləliklə başqaları da sizin kodunuzu rahat istifadə edə biləcək. Unutmayın, componentlər **reusable UI**, hooklar isə **reusable logic'dir**.


### Hints
- [useRef()](https://reactjs.org/docs/hooks-reference.html#useref)
- [useEffect()](https://reactjs.org/docs/hooks-reference.html#useeffect)