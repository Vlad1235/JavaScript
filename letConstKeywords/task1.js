// вместо var использование let чтобы четко указывать где область видимости.
// В данном случае, чтобы была четко лишь область видимости локальной переменной
for (let i = 0; i < 10; i++) {
    log(i)
}

log(i) // not defined

