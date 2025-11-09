import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="user-card">
      <h3>{{ name }}</h3>
      <p>{{ email }}</p>
    </div>
  `,
  styles: [`
    .user-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 1rem;
      max-width: 300px;
      background: #fafafa;
    }
    .user-card h3 {
      margin: 0 0 0.5rem 0;
    }
    .user-card p {
      margin: 0;
      color: #555;
    }
  `]
})
export class UserCardComponent {
  name = input<string>('');
  email = input<string>('');
}
