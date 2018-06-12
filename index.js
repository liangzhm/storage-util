/**
 * storage 操作工具类，包含获取、增加、删除storage
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = factory();
  } else {
    // 浏览器全局变量(root 即 window)
    root.storageUtil = factory();
  }
}(this, function() {
    /**本地存储 */
    var storageUtil = {
        session: window.localStorage,
        local: window.localStorage,
        set(type, key, value) {
            if (this.isString(value)) {
                return this[type].setItem(key, value);
            }
            if (this.isObject(value)) {
                try {
                    value = JSON.stringify(value);
                } catch (error) {
                }
                return this[type].setItem(key, value);
            }
            return this[type].setItem(key, value);
        },
        get(type, key) {
            let value = this[type].getItem(key);
            if (this.isParse(value)) {
                try {
                    value = JSON.parse(value);
                } catch (error) {
                    value = this[type].getItem(key);
                }
            }
            return value;
        },
        setSession(key, value) {
            this.set('session', key, value);
        },
        getSession(key) {
            return this.get('session', key);
        },
        setLocal(key, value) {
            this.set('local', key, value);
        },
        getLocal(key) {
            return this.get('local', key);
        },
        isString(value) {
            return typeof value === 'string';
        },
        isObject(value) {
            return typeof value === 'object';
        },
        remove(key) {
            this.session.removeItem(key);
            this.local.removeItem(key);
        },
        clear() {
            this.session.clear();
            this.local.clear();
        },
        isParse(value) {
            if (!value) {
                return false;
            }
            return value.indexOf('{') !== -1 || value.indexOf('[') !== -1 || value.indexOf('(') ? true : false;
        }
    }
    return storageUtil
}));
