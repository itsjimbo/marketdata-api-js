module.exports = (() => {
	'use strict';

	/**
	 * Current market conditions for an instrument.
	 *
	 * @public
	 */
	class Quote {
		constructor(symbol) {
			/**
			 * @property {string} symbol - The instrument's symbol.
			 */
			this.symbol = symbol || null;

			/**
			 * @property {string} message - last DDF message that caused a mutation to this instance
			 */
			this.message = null;

			/**
			 * @property {string} flag - market status, will have one of three values: p, s, or undefined
			 */
			this.flag = null;

			this.mode = null;

			/**
			 * @property {string} day - one character code that indicates day of the month of the current trading session
			 */
			this.day = null;

			/**
			 * @property {number} dayNum - day of the month of the current trading session
			 */
			this.dayNum = 0;

			this.session = null;
			this.lastUpdate = null;

			/**
			 * @property {number} bidPrice - top-of-book price on the buy side
			 */
			this.bidPrice = null;

			/**
			 * @property {number} bidSize - top-of-book quantity on the buy side
			 */
			this.bidSize = null;

			/**
			 * @property {number} askPrice - top-of-book price on the sell side
			 */
			this.askPrice = null;

			/**
			 * @property {number} askSize - top-of-book quantity on the sell side
			 */
			this.askSize = null;

			/**
			 * @property {number} lastPrice - most recent price (not necessarily a trade)
			 */
			this.lastPrice = null;

			/**
			 * @property {number} tradePrice - most recent trade price
			 */
			this.tradePrice = null;

			/**
			 * @property {number} tradeSize - most recent trade quantity
			 */
			this.tradeSize = null;


			this.numberOfTrades = null;
			this.vwap1 = null; // Exchange Provided
			this.vwap2 = null; // Calculated

			/**
			 * @property {number} settlementPrice
			 */
			this.settlementPrice = null;
			this.openPrice = null;
			this.highPrice = null;
			this.lowPrice = null;
			this.volume = null;
			this.openInterest = null;

			/**
			 * @property {number} previousPrice - price from the previous session
			 */
			this.previousPrice = null;

			this.time = null;
			this.ticks = [];
		}

		static clone(symbol, source) {
			const clone = Object.assign({ }, source);
			clone.symbol = symbol;

			return clone;
		}
	}

	return Quote;
})();