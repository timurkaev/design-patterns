class UserRepository {
  getUser(id) {
    console.log(`Запрашиваю БД для пользователя ${id}...`);
  }
}

// Proxy with cache
class UserRepositoryProxy {
  constructor(realRepository) {
    this.realRepository = realRepository;
    this.cache = {};
  }

  getUser(id) {
    if (this.cache[id]) {
      console.log(`Беру из кеша пользователя ${id}`);
      return this.cache[id];
    }

    console.log(`Запрашиваю БД для пользователя ${id}...`);
    const user = this.realRepository.getUser(id);
    this.cache[id] = user;
    return user;
  }
}

const repo = new UserRepositoryProxy(new UserRepository());

repo.getUser(1);
repo.getUser(1);

// --------------

// Access control
class BankAccount {
  withdraw(amount) {
    console.log(`Снял ${amount}`);
  }
}

class BankAccountProxy {
  constructor(realAccount, user) {
    this.realAccount = realAccount;
    this.user = user;
  }

  withdraw(amount) {
    if (!this.user.isAdmin) {
      if (amount > 1000) {
        console.log("Ошибка: лимит 1000 для обычных пользователей");
        return;
      }
    }
    this.realAccount.withdraw(amount); // Разрешаем доступ
  }
}

const account = new BankAccountProxy(new BankAccount(), { isAdmin: false });

account.withdraw(500);
account.withdraw(2000);

// -----------------------------------

// Logging
class FileSystem {
  read(path) {
    return `Содержимое ${path}`;
  }

  write(path, data) {
    console.log(`Записал в ${path}: ${data}`);
  }
}

class FileSystemProxy {
  constructor(realFS) {
    this.realFS = realFS;
  }

  read(path) {
    console.log(`[LOG] Чтение файла: ${path}`);
    return this.realFS.read(path);
  }

  write(path, data) {
    console.log(`[LOG] Запись в файл: ${path}`);
    this.realFS.write(path, data);
  }
}

const fs = new FileSystemProxy(new FileSystem());
fs.read("/data.txt");
