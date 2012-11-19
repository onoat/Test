function formatDate(dateObj) {
	var dateStr;
	
	if (dateObj instanceof java.util.Date) {
		return dateObj.toDateString();
	} else {
		return dateObj;
	}
}

function formatCurrency(amount) {
	return amount;
} 

function getMessage4Add(date, account, memo, amount) {
	return "Expense for " + memo + " with " + amount + " yen on " + date + " 追加しました。";
}

function getMessage4Update(date, account, memo, amount) {
	return "Expense for " + memo + " with " + amount + " yen on " + date + " 更新しました。";
}

function getMessage4Delete(memo) {
	return "Expense for " + memo + " 削除しました。";
}
