LUME.defineElements(); //запуск LUME
// описываем вращение Земли с вращением по y, в зависимости от времени
earth.rotation = (x, y, z, t) => [x, t*0.01, z];
// описываем вращение облаков - в 3 раза медленеее Земли и в другую сторону
clouds.rotation = (x, y, z, t) => [x, -t*0.003, z];

// описываем вращение Луны.
// она всегда одной стороной к Земле => не будем вращать по y, а вращем по z
let lastTime = performance.now(); // получаем текущее время
let dt = 0; // сдвиг во времени, на старте равен нулю
moonRotation.rotation = (x, y, z, time) => {
  dt = time - lastTime;
  lastTime = time;
  return [x, y, z + dt * 0.01]; //новые координаты луны
};
