import './styles.css';
import {ItemView} from 'backbone.marionette';
import capitalize from 'underscore.string/capitalize';
import {on} from '../../decorators';
import settings from '../../util/settings';
import template from './StatusToggleView.hbs';

class StatusToggleView extends ItemView {
    template = template;

    serializeData() {
        const statuses = settings.get('visibleStatuses');
        return {
            statuses: [{en: 'FAILED', pl: 'Negatywny'}, {en: 'BROKEN', pl: 'WSTRZYMANY'}, {en: 'CANCELED', pl: 'ANULOWANY'}, {en: 'PENDING', pl: 'WYKONYWANY'}, {en: 'PASSED', pl: 'POZYTYWNY'}].map(status => ({
                status: status.en,
                active: !!statuses[status.en],
                title: capitalize(status.pl.toLowerCase())
            }))
        };
    }

    @on('click .button')
    onCheckChange(e) {
        const el = this.$(e.currentTarget);
        el.toggleClass('button_active');
        const name = el.data('status');
        const checked = el.hasClass('button_active');
        const statuses = settings.get('visibleStatuses');
        settings.save('visibleStatuses', Object.assign({}, statuses, {[name]: checked}));
    }
}

export default StatusToggleView;
