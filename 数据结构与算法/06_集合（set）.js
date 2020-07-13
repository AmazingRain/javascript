class MySet {
  constructor() {
    this.items = {}
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  add(value) {
    if (this.has(value)) {
      return false;
    }
    this.items[value] = value;
    return true;
  }

  delete(value) {
    if (!this.has(value)) {
      return false;
    }
    delete this.items[value];
    return true;
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.keys(this.items);
  }

  union(otherSet) {
    let unionSet = new MySet();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    let otherValues = otherSet.values();
    for (let i = 0; i < otherValues.length; i++) {
      unionSet.add(otherValues[i]);
    }
    return unionSet;
  }

  intersection(otherSet) {
    let intersectionSet = new MySet();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  difference(otherSet) {
    let differenceSet = new MySet();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }

  subset(otherSet) {
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        return false;
      }
    }
    return true;
  }
}