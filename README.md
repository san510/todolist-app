# ToDo リストアプリケーション

![todolistApp](https://github.com/san510/todolist-app/blob/master/public/images/todolistApp.png)


## メイン機能の使い方

<table>
  <tr>
      <th style="text-align: center">Todo操作</th>
      <th style="text-align: center">並び替え</th>
      <th style="text-align: center">フィルター切り替え</th>
  </tr>
  <tr>
    <td><img src="https://github.com/san510/todolist-app/blob/master/public/images/demo/TodoActions.gif" alt="Todo操作" /></td>
    <td><img src="https://github.com/san510/todolist-app/blob/master/public/images/demo/Sort.gif" alt="並び替え" /></td>
    <td><img src="https://github.com/san510/todolist-app/blob/master/public/images/demo/Filter.gif" alt="フィルター切り替え"/></td>
  </tr>  
<table>
</table>

## 実行方法

```bash
## どちらも同Projectで実行可能です。

# Mock Server
$ npm run json-server

# TodoList App
$ npm start
```

## 開発環境

- Visual Studio Code
- CreateReact App

## 使用技術一覧

**フロントエンド**

- React 18.2.0
- TypeScript 4.9.5
- Formatter: Prettier
- 主要パッケージ: Axios / FontAwesome / uuid / dnd-kit

**バックエンド**

- json-server 0.17.4

## 考慮したポイント

**画面設計**

- 一覧表示
  - 直観的に Todo を並び替えれるように Drag & Drop 操作可能にしました。
- 追加
  - Todo 追加用フォームなどは設けず、追加用 Input を画面内に設けることで入力の手間を軽減しました。
- 編集
  - 追加と同様、Todo リストを直接編集可能にしました。
- フィルター
  - Select タグは利用せず、ToggleButton による切り替えにする事で選択の手間を軽減しました。

**実装**

- CustomHook
  - useFetchHelper.ts: モックサーバーへの HTTP アクセスをまとめました。
  - useTodoActions.ts: Todo リストへの操作をまとめました。
- useContext
  - TodoContext.tsx: コンポーネント間で利用される Todo データをグローバルで管理し、Props バケツリレーを極力減らしました。
